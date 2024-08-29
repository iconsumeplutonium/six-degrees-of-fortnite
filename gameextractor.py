import requests, bs4, sqlite3, argparse, re, utilities

LINKS = [
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=%22Michael%22",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Arm+Wrestling+%28Nintendo%29+X+Punch-Out%21%21",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Billy+Madison+X+Donkey+Kong",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Captain+Toad",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Crossroads+%28ITV%29",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Dollars+Triology",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Elvira",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Friday+the+13th+X+MultiVersus",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Gunbird+X+Mobile+Light+Force",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Indiana+Jones+X+Taiko+no+Tatsujin",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Kingdom+Hearts+X+Winnie+the+Pooh",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Magic+Touch%3A+Wizard+for+Hire",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Mario+X+Tiny+Toon+Adventures",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Motoko-chan+no+Wonder+Kitchen",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Octopus+X+Super+Smash+Bros.",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Power+Stone+X+Legendary+Wings",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Roger+Rabbit",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Snow+White+and+the+Seven+Dwarfs+%28Disney%29",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Sunset+Paradise",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Tekken+X+Fast+and+Furious",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=The+Mask+X+Mario",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Two+and+a+Half+Men+X+Donkey+Kong",
    "https://fictionalcrossover.fandom.com/wiki/Special:AllPages?from=Wreck-It+Ralph+X+Rally-X",
]  
WIKI_URL : str = "https://fictionalcrossover.fandom.com/wiki/"

def sanitize(name : str) -> str:
    return name.replace("“", '"').replace("”", '"')

def getRedirects() -> set[str]:
    knownRedirects : set[str] = set()
    with open('text/known_redirects.txt', 'r', encoding='utf-8') as redirects:
        for redirect in redirects.readlines():
            knownRedirects.add(redirect.strip())
    
    return knownRedirects

def getRemovals() -> set[str]:
    miscRemovals : set[str] = set()
    with open('text/misc_removals.txt', 'r', encoding='utf-8') as removals:
        for removal in removals.readlines():
            miscRemovals.add(removal.strip())
    
    return miscRemovals



def extractLinks(url : str) -> None:
    print(f"Extracting: {url}")
    webpage : requests.Response = requests.get(url)
    if webpage.status_code != 200:
        print(f"ERROR: Could not reach {url}")
        
    
    soup : bs4.BeautifulSoup = bs4.BeautifulSoup(webpage.content, 'lxml')
    div : bs4.NavigableString = soup.find("ul", class_="mw-allpages-chunk").find_all("li")

    franchises = []
    for li in div:
        franchiseName : str = li.find('a').get_text()
        franchises.append(franchiseName)

    
    with open('text/franchises_unfiltered.txt', 'a', encoding='utf-8') as file:
        for franchise in franchises:
            file.write(sanitize(franchise) + "\n")


# for every franchise in franchise.txt, it sends a GET request and checks if the response is a redirect (code 301 or 302)
def updateKnownRedirects():
    disallowedCaptures : list[re.Pattern] = [
        re.compile(r".* X .*"),
        re.compile(r".*[c|C]ommercial"),
        re.compile(r".*[p|P]romo.*"),
        re.compile(r".*[a|A]ppearances"),
        re.compile(r".*[b|B]umper"),
        re.compile(r".*[c|C]rossover [w|W]iki.*"),
        re.compile(r".*[c|C]ameo.*"),
        re.compile(r".*[r|R]reference.*"),
        re.compile(r".*[t|T]railer.*"),
        re.compile(r".*[m|M]ascot.*")
    ]

    with open('text/franchises_unfiltered.txt', 'r', encoding='utf-8') as file:
        with open('text/known_redirects.txt', 'w', encoding='utf-8') as redirectsFile:
            i : int = 1
            for franchise in file.readlines():
                franchise : str = franchise.strip()

                # check if it matches the regex pattern
                matchesRegex : bool = False
                for regex in disallowedCaptures:
                    if regex.match(franchise) is not None:
                        matchesRegex = True
                        break
                
                if matchesRegex:
                    print(i)
                    i += 1
                    continue
                    
                #doesnt match regex. check if redirect
                response : requests.Response = requests.get(WIKI_URL + utilities.convertFranchiseToURL(franchise), allow_redirects=False)
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

    knownRedirects : set[str] = getRedirects()
    miscRemovals   : set[str] = getRemovals()

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



if __name__ == "__main__":
    parser : argparse.ArgumentParser = argparse.ArgumentParser(description="stuff")
    parser.add_argument('-e', "--extract",          action='store_true', help="Extract all webpages on fictional crossover wiki")
    parser.add_argument('-u', "--update-redirects", action='store_true', help="Updates the list of known redirect links")
    parser.add_argument('-f', "--filter",           action='store_true', help="Filters franchise list by removing commercials, cameos, trailers, redirects, etc.")
    parser.add_argument('-i', "--insert",           action='store_true', help="Inserts filtered franchise list into database")
    args : argparse.ArgumentParser = parser.parse_args()


    # (1) Extract all pages from the All Pages section of the wiki --------------------------------------------------------------------------------------------------------------------------------
    if args.extract:
        for link in LINKS:
            extractLinks(link)

        # not included in all pages for some reason
        missing : list[str] = [
            "Sanford and Son",
            "Magic Sword",
            "Kingdom Hearts",
            "Magic: The Gathering",
            "Magic Knight Rayearth",
            "Billy Madison",
            "Magi",
        ]
        
        with open('text/franchises_unfiltered.txt', 'a', encoding='utf-8') as file:
            for m in missing:
                print(m)
                file.write(sanitize(m) + '\n')

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
                url : str = WIKI_URL + utilities.convertFranchiseToURL(line)
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