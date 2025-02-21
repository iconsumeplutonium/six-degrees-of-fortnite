import requests, bs4, sqlite3, argparse, re, Utilities, json
from tqdm import tqdm

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

    
    with open('text/franchises_unfiltered.txt', 'w', encoding='utf-8') as file:
        for franchise in allArticles:
            file.write(Utilities.sanitize(franchise) + "\n")


def filterAll():
    disallowedCaptures: list[re.Pattern] = [
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
    deduplication: set[str] = set()

    with open('text/franchises_unfiltered.txt', 'r', encoding='utf-8') as unfiltered:
        with open('text/filtered_franchises.txt', 'w', encoding='utf-8') as filtered:
            for franchise in unfiltered:
                franchise : str = franchise.strip()
                
                # if known non-franchise, skip
                if franchise in miscRemovals:
                    continue

                # check if it matches regex
                matchesRegex : bool = False
                for regex in disallowedCaptures:
                    if regex.match(franchise) is not None:
                        matchesRegex = True
                        break
                
                # if it matches regex, skip
                if matchesRegex:
                    miscRemovals.add(franchise)
                    removalsWasUpdated = True
                    continue
                
                # if redirect, skip
                if franchise in knownRedirects:
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


def cacheRedirects():
    with open('text/franchises_unfiltered.txt', 'r', encoding='utf-8') as file:
        franchises: list[str] = [f.strip() for f in file.readlines()]

    redirects: dict[str, str] = {}

    for franchise in tqdm(franchises):
        response: requests.Response = requests.get(Utilities.URL_BASE + Utilities.convertFranchiseToURL(franchise), allow_redirects=False)
        if response.status_code != 301 and response.status_code != 302:
            continue

        originalArticle: str = response.headers["location"]
        redirects[franchise] = Utilities.convertURLtoFranchise(originalArticle)

    with open("text/redirects.json", "w", encoding='utf-8') as file:
        json.dump(redirects, file, indent=4)

    


# franchises_unfiltered.txt ->   list of all franchises from the wiki. includes ads, redirects, etc.
# franchises_filtered.txt   ->   filtered list of franchises from the wiki, filtering out ads, redirects, etc.
# misc_removals.txt         ->   list of articles that are ads/promos/etc. that were filtered out, or can't be caught by regex (found manually)
# redirects.json            ->   json representation of all known redirects. key is the name of the redirect, value is the original url
# crossovers.json           ->   json representation of all crossovers. key is the name of the franchise, value is a list of crossovers


if __name__ == "__main__":
    parser : argparse.ArgumentParser = argparse.ArgumentParser(description="stuff")
    parser.add_argument('-e', "--extract",          action='store_true', help="Extract all webpages on fictional crossover wiki")
    parser.add_argument('-r', "--cache-redirects",  action='store_true', help="Goes through franchises_unfiltered.txt and stores all redirects in redirects.json") 
    parser.add_argument('-f', "--filter",           action='store_true', help="Filters franchise list by removing commercials, cameos, trailers, redirects, etc.")
    parser.add_argument('-i', "--insert",           action='store_true', help="Inserts filtered franchise list into filtered_franchises.txt")
    args : argparse.ArgumentParser = parser.parse_args()


    # (1) Extract all pages from the All Pages section of the wiki --------------------------------------------------------------------------------------------------------------------------------
    if args.extract:
        extractLinks()
    
    # (2) (Optional) Go through all articles in unfiltered_franchises.txt and determine which are redirects. Cache them in redirects.json --------------------------------------------------------
    if args.cache_redirects:
        cacheRedirects()

    # (3) Go through franchises_unfiltered.txt and remove ads, cameos, etc -----------------------------------------------------------------------------------------------------------------------
    if args.filter:
        filterAll()

    # (3) Insert filtered franchise list into database --------------------------------------------------------------------------------------------------------------------------------------------
    if args.insert:
        conn: sqlite3.Connection = sqlite3.connect('crossovers.db')
        cursor: sqlite3.Cursor = conn.cursor()
        query: str = "INSERT INTO game (name, url) VALUES (?, ?)"

        with open('text/filtered_franchises.txt', 'r', encoding='utf-8') as file:
            for line in file.readlines():
                url: str = Utilities.URL_BASE + Utilities.convertFranchiseToURL(line)
                cursor.execute(query, (line.strip(), url))
        
        conn.commit()
        conn.close()