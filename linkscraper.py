import requests, bs4, utilities, sqlite3

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
        # 0: image (arrow)
        # 1: game name
        # 2: date
        # 3: description
        # 4: crossover type
        coType      : str = TDs[4].get_text().replace('a', '')
        if '3' in coType:
            continue
        #print(coType, end=' ')

        arrowType   : str = TDs[0].find('a').find('img').get('alt')
        if arrowType == "Arrow R":
            continue

        date        : str = TDs[2].get_text()
        description : str = TDs[3].get_text()

        # for element in TDs[1].descendants:
        #     if element.name:  # Ensure it's a tag
        #         if element.string:  # Check if the tag has text
        #             gameName : str = element.string

        gameName = ""
        URL_START : str = "https://fictionalcrossover.fandom.com"
        hyperlinkedNameWasFound : bool = False
        # if a crossover has no hyperlink (eg https://fictionalcrossover.fandom.com/wiki/1001_Spikes), then it will not be in the database. break and continue
        # if a crossover has a hyperlink, check if its <a> tag has "class=mw-redirect"
        #       if it is not a redirect,  

        for element in TDs[1].descendants:
            # print(element, TDs[1].string)
            # continue
            if element.name == 'a':  # Check if the element is an <a> tag
                if 'mw-redirect' in element.get('class', []):  # Check if it has the class "mw-redirect"
                    url = element.get('href')  # Extract URL from the href attribute
                    originalURL : str = getURLAfterRedirects(URL_START + url)
                    gameName : str = utilities.convertURLtoFranchise(originalURL)

                    print(f"Updated game Name: {gameName}")
                    hyperlinkedNameWasFound = True
                    break
                else:
                    url : str = URL_START + element.get('href')
                    gameName : str = utilities.convertURLtoFranchise(url)
                    hyperlinkedNameWasFound = True
                    break
                    
        if not hyperlinkedNameWasFound:
            continue
        print("\n\n")
        gameName.replace('')
        description = description.replace("(see details)", "")

        #print(f"Arrow type: {arrowType},    game: {gameName},    date: {date},    description: {description},      type: {coType}")
        crossovers.append({
            #"arrow": arrowType.replace(".png", "").replace("_", " "),
            "game": gameName,
            "date": ' '.join(date.split(' ')[1:]),
            "description": description,
            #"type": coType.strip()
        })
    
    return crossovers



if __name__ == "__main__":
    #s = scrape("https://fictionalcrossover.fandom.com/wiki/100_Things_to_Do_Before_High_School")
    # s = scrape("https://fictionalcrossover.fandom.com/wiki/Disney_Sorcerer%27s_Arena")

    idLookup = {}
    urlLookup = {}
    franchises = []
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
    
    INSERT_QUERY : str = "INSERT INTO links (gameID, COgameID, description, crossoverDate) VALUES (?, ?, ?, ?)"
    i : int = 1
    for franchise in franchises:
        print("On", franchise)
        crossovers : list[dict] = scrape("https://fictionalcrossover.fandom.com/wiki/Disney_Sorcerer%27s_Arena")#scrape(urlLookup[franchise])
        id : int = idLookup[franchise]


        for crossover in crossovers:
            print(crossover, end='\n')
            if crossover["game"] not in idLookup:
                print(f"{crossover['game']} not in known ids")
                print(crossover)
                continue

            thisID = idLookup[crossover["game"]]
            cursor.execute(INSERT_QUERY, (id, thisID, crossover["description"], crossover["date"]))
        
        i += 1
        if (i == 2): break
    
    # conn.commit()






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
  crossoverDate integer
}

Ref: game.id < links.gameID
Ref: links.linkedID < game.id

'''