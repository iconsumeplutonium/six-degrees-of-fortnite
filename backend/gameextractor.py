import requests, bs4, sqlite3, argparse, re, Utilities, json

ALL_PAGES_API = "https://fictionalcrossover.fandom.com/api.php?action=query&list=allpages&aplimit=max&format=json"

# call API to get all articles
def extractLinks() -> None:
    allArticles: list[str] = []
    url: str = str(ALL_PAGES_API)
    
    # api paginates the Special:AllPages article (500 max per page), so we loop until there is no continue parameter
    while url:
        response: requests.Response = requests.get(url)
        data: dict = response.json()

        if 'query' in data:
            for page in data['query']['allpages']:
                allArticles.append(page['title'])
        
        if 'continue' in data:
            url = ALL_PAGES_API + f"&apcontinue={data['continue']['apcontinue']}"
        else:
            break

    
    with open('text/franchises_unfiltered.txt', 'a', encoding='utf-8') as file:
        for franchise in allArticles:
            file.write(Utilities.sanitize(franchise) + "\n")


# for every franchise in franchise.txt, it sends a GET request and checks if the response is a redirect (code 301 or 302)
def updateKnownRedirects():
    with open('text/franchises_unfiltered.txt', 'r', encoding='utf-8') as unfilteredFranchisesFile:
        with open('text/known_redirects.txt', 'w', encoding='utf-8') as redirectsFile:
            i : int = 1
            for franchise in unfilteredFranchisesFile.readlines():
                franchise : str = franchise.strip()
                response : requests.Response = requests.get(Utilities.URL_BASE + Utilities.convertFranchiseToURL(franchise), allow_redirects=False)
                
                if response.is_redirect or response.is_permanent_redirect:
                    redirectsFile.write(franchise + '\n')

                print(i, "request was made")
                i += 1




def filterAll():
    disallowedCaptures : list[re.Pattern] = [
        re.compile(r".* X .*"),
        re.compile(r".*[c|C]ommercial"),
        re.compile(r".*[p|P]romo.*"),
        re.compile(r".*[a|A]ppearances"),
        re.compile(r".*[b|B]umper"),
        re.compile(r".*[c|C]rossover [w|W]iki.*"),
        re.compile(r".*[c|C]ameo.*"),
        re.compile(r".*[r|R]eference.*"),
        re.compile(r".*[t|T]railer.*"),
        re.compile(r".*[m|M]ascot.*"),
        re.compile(r".* [r|R]ule.*"),
    ]

    knownRedirects : set[str] = Utilities.getRedirects()
    miscRemovals   : set[str] = Utilities.getRemovals()
    removalsWasUpdated : bool = False

    with open('text/franchises_unfiltered.txt', 'r', encoding='utf-8') as unfiltered:
        with open('text/filtered_franchises.txt', 'w', encoding='utf-8') as filtered:
            for franchise in unfiltered:
                franchise : str = franchise.strip()
                
                if franchise in knownRedirects or franchise in miscRemovals:
                    continue

                matchesRegex : bool = False
                for regex in disallowedCaptures:
                    if regex.match(franchise) is not None:
                        matchesRegex = True
                        break
                
                if matchesRegex:
                    miscRemovals.add(franchise)
                    removalsWasUpdated = True
                    continue

                filtered.write(franchise + '\n')
            
            # several franchises with " X " in the name get filtered out by the regex
            # manually insert them back in
            insertion : list[str] = [
                "Daemon X Machina",
                "Project X Zone"
            ]

            for i in insertion:
                filtered.write(i + "\n")
    
    if removalsWasUpdated:
        with open('text/misc_removals.txt', 'w', encoding='utf-8') as removals:
            for removal in miscRemovals:
                removals.write(removal + '\n')


# franchises_unfiltered.txt ->   list of all franchises from the wiki. includes ads, redirects, etc.
# franchises_filtered.txt   ->   filtered list of franchises from the wiki, filtering out ads, redirects, etc.
# misc_removals.txt         ->   list of articles that are known to be ads, redirects, etc.
# redirects.json            ->   json representation of all known redirects. key is the name of the redirect, value is the original url
# crossovers.json           ->   json representation of all crossovers. key is the name of the franchise, value is a list of crossovers


if __name__ == "__main__":
    parser : argparse.ArgumentParser = argparse.ArgumentParser(description="stuff")
    parser.add_argument('-e', "--extract",          action='store_true', help="Extract all webpages on fictional crossover wiki")
    parser.add_argument('-u', "--update-redirects", action='store_true', help="Updates the list of known redirect links")
    parser.add_argument('-f', "--filter",           action='store_true', help="Filters franchise list by removing commercials, cameos, trailers, redirects, etc.")
    parser.add_argument('-i', "--insert",           action='store_true', help="Inserts filtered franchise list into filtered_franchises.txt")
    args : argparse.ArgumentParser = parser.parse_args()


    # (1) Extract all pages from the All Pages section of the wiki --------------------------------------------------------------------------------------------------------------------------------
    if args.extract:
        extractLinks()

    # (Optional) Go through all 7000 pages of the wiki and send a request to each one to determine if it is a redirect or not, then updates known_redirects.txt -----------------------------------
    if args.update_redirects:
        updateKnownRedirects()

    # (2) Go through franchises_unfiltered.txt and remove ads, redirects, etc ---------------------------------------------------------------------------------------------------------------------
    if args.filter:
        filterAll()

    # (3) Insert filtered franchise list into database --------------------------------------------------------------------------------------------------------------------------------------------
    if args.insert:
        conn : sqlite3.Connection = sqlite3.connect('crossovers.db')
        cursor : sqlite3.Cursor = conn.cursor()
        query : str = "INSERT INTO game (name, url) VALUES (?, ?)"

        with open('text/filtered_franchises.txt', 'r', encoding='utf-8') as file:
            for line in file.readlines():
                url : str = Utilities.URL_BASE + Utilities.convertFranchiseToURL(line)
                cursor.execute(query, (line.strip(), url))
        
        conn.commit()
        conn.close()
                
            



    # .* X .*
    # .* Commercial
    # .* promo.*
    # .*appearances
    # .*bumper.*
    # .*crossover wiki.*
    # .*[c|C]ameo.*
    # .*reference.*
    # .*trailer.*
    # .*\(mascot\).*
    # ^(.*)(\r?\n\1) \(.*\)  --> $1 to replace ShowName\nShowName (Disney)

    # ^\n to remove empty lines
    # ^(.*)(\r?\n\1)+$ to find duplicate lines
    # need to replace ? with %3f, & with %26