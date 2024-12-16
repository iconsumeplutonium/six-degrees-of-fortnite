import requests, bs4, Utilities, sqlite3, argparse, json, urllib.parse

redirectMap = None
crossoverJSON = None
removedLinks = None

def getURLAfterRedirects(url : str) -> str:
    response : requests.Response = requests.get(url, allow_redirects=True)
    return response.url

def scrape(url : str) -> list[dict]:
    webpage : requests.Response = requests.get(url)
    if webpage.status_code != 200:
        return []
    
    soup : bs4.BeautifulSoup = bs4.BeautifulSoup(webpage.content, 'lxml')
    table : bs4.ResultSet = soup.find('table').find('tbody').find_all('tr')

    crossovers : list[dict] = []

    for i in range(len(table)):
        if i == 0:
            continue
            
        TDs : bs4.ResultSet = table[i].find_all('td')
        if len(TDs) != 5:
            continue
        # 0: image (arrow)
        # 1: game name
        # 2: date
        # 3: description
        # 4: crossover type
        coType      : str = TDs[4].get_text().replace('a', '')
        if '3' in coType:
            continue

        arrowType   : str = TDs[0].find('a').find('img').get('alt')
        if arrowType == "Arrow R":
            continue

        date        : str = TDs[2].get_text()
        description : str = TDs[3].get_text()

        gameName = ""
        URL_START : str = "https://fictionalcrossover.fandom.com"
        hyperlinkedNameWasFound : bool = False
        # for each descendent tag, find an <a> tag. 
        #      if the <a> tag is of class "mw-redirect", extract the URL and send a request to follow the redirect to the original page. Use this to determine this franchise's
        #      actual name.
        #      otherwise, just extract the string
        # If there is no hyperlink in this tag, that means there is no associated wiki page for the given franchise, which means it will not be in the database. Skip and continue.

        # https://fictionalcrossover.fandom.com/wiki/Jujutsu_Kaisen
        # one piece link has square brackets around it ("[[One Piece]]") for some reason, which breaks the script
        # if square brackes are found just skip the entry entirely
        if TDs[1].string == "[[":
            continue

        for element in TDs[1].descendants:
            if element.name == 'a': 
                if 'mw-redirect' in element.get('class', []): 
                    url = element.get('href')
                    if url in redirectMap:
                        gameName = redirectMap[url]
                    else:
                        originalURL : str = getURLAfterRedirects(URL_START + url)
                        gameName : str = Utilities.convertURLtoFranchise(originalURL)
                        redirectMap[url] = gameName

                    hyperlinkedNameWasFound = True
                    break
                else:
                    gameName = TDs[1].string
                    hyperlinkedNameWasFound = True
                    break
                    
        if not hyperlinkedNameWasFound:
            continue
        
        # random edge case related to the double square bracket entries
        if gameName is None:
            continue

        gameName = urllib.parse.unquote(gameName)

        if gameName == "Wii games":
            print("\n\n\n\n")
        if gameName in removedLinks:
            continue

        description = description.replace("(see details)", "")

        crossovers.append({
            #"arrow": arrowType.replace(".png", "").replace("_", " "),
            "game": gameName,
            "date": ' '.join(date.split(' ')[1:]),
            "description": description,
            #"type": coType.strip()
        })
    
    return crossovers



if __name__ == "__main__":
    parser : argparse.ArgumentParser = argparse.ArgumentParser(description="stuff")
    parser.add_argument('-s', "--start-index", type=int, default=-1, help="The index from which to continue scraping (used if script crashes in the middle)")
    args : argparse.Namespace = parser.parse_args()

    startIndex : int = args.start_index

    idLookup = {}
    urlLookup = {}
    franchises = [None]
    conn : sqlite3.Connection = sqlite3.connect('crossovers.db')
    cursor : sqlite3.Cursor = conn.cursor()

    cursor.execute("SELECT id, name, url FROM game;")
    rows = cursor.fetchall()
    for row in rows:
        id   : int = row[0]
        name : str = row[1]
        url  : str = row[2]

        franchises.append(name)
        idLookup[name] = id
        urlLookup[name] = url
    
    with open('text/redirects.json', 'r', encoding='utf-8') as file:
        redirectMap = json.load(file)
    
    # json representation
    # if script crashes, it can reload data from json file instead of making requests
    with open('text/crossovers.json', 'r', encoding='utf-8') as file:
        crossoverJSON = json.load(file)

    # sometimes pages have links to articles that were filtered out
    # remove them from consideration when scraping
    with open('text/misc_removals.txt', 'r', encoding='utf-8') as file:
        removedLinks = set([r.strip() for r in file.readlines()])


    INSERT_QUERY : str = "INSERT INTO links (gameID, COgameID, description, crossoverDate) VALUES (?, ?, ?, ?)"
    i : int = 1

    try: 
        for franchise in franchises:
            if franchise is None: continue # skip the first one (make list indices align with SQL ids [which are 1 indexed])
            if i < startIndex:
                i += 1
                continue

            #print(f"On {i} ({franchise})")
            if franchise in crossoverJSON:
                #print("pulled from cache")
                crossovers = crossoverJSON[franchise]
            else:
                crossovers : list[dict] = scrape(urlLookup[franchise])

            id : int = idLookup[franchise]

            for crossover in crossovers:
                if crossover["game"] not in idLookup:
                    print(f"{crossover['game']} not in known ids")
                    print(crossover)
                    continue

                thisID = idLookup[crossover["game"]]
                cursor.execute(INSERT_QUERY, (id, thisID, crossover["description"], crossover["date"]))
                
                #bandaid because i forgot to do this earlier
                if franchise == "Fortnite":
                    print(thisID, id, crossover["description"], crossover["date"])
                    cursor.execute(INSERT_QUERY, (thisID, id, crossover["description"], crossover["date"]))
                    crossoverJSON[crossover["game"]].append({
                        "game": "Fortnite", 
                        "date": crossover["date"], 
                        "description": crossover["description"]
                    })

            
            crossoverJSON[franchise] = crossovers
            
            i += 1
    except Exception as e:
        print("ERROR: Something went wrong")
        print(e)
    finally:
        conn.commit()

        with open('text/redirects.json', 'w', encoding='utf-8') as file:
            json.dump(redirectMap, file, indent=4)
        
        with open('text/crossovers.json', 'w', encoding='utf-8') as file:
            json.dump(crossoverJSON, file, indent=4)






# arrow types
# <--- means that this franchises references another
# ---> means that another franchise references this one
# ignore all right arrows, we need to extract only arrows pointing left or lines

# <---       Arrow_L.png
# <--- --->  Arrow_L_&_R.png
# <===       Double_Arrow_L.png
# ===>       Double_Arrow_R.png
# ---        Dash.png
# --->       Arrow_R.png (ignore this)

# ignore any connectionst that arent 2.5 or above
# type 3 is out-of-universe references, e.g "A character looking like Mario appears in a mini game in McPixel"


# some good test URLs
#"https://fictionalcrossover.fandom.com/wiki/Disney_Sorcerer%27s_Arena ---> has many redirects on page
# https://fictionalcrossover.fandom.com/wiki/1001_Spikes               ---> has several franchises with no wiki pages



'''
Table game {
  id integer [primary key]
  name varchar
  url varchar
}

Table links {
  gameID integer
  COgameID integer
  description varchar
  crossoverDate varchar
}

Ref: game.id < links.gameID
Ref: links.linkedID < game.id

'''