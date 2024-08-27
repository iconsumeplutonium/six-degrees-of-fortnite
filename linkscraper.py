import requests, bs4, lxml, csv, sqlite3

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

        for element in TDs[1].descendants:
            if element.name:  # Ensure it's a tag
                if element.string:  # Check if the tag has text
                    gameName : str = element.string
        
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
    # outputFile = open('games.csv', 'w', newline='', encoding='utf-8')
    # with open('franchises.txt', 'r', encoding='utf-8') as file:
    #     for franchise in file.readlines():

    #scrape("https://fictionalcrossover.fandom.com/wiki/Minecraft#Links_to_Other_Series")

    r = scrape("https://fictionalcrossover.fandom.com/wiki/Minecraft#Links_to_Other_Series")
    for a in r:
        print(a)

    # conn : sqlite3.Connection = sqlite3.connect('crossovers.db')
    # cursor : sqlite3.Cursor = conn.cursor()

    # cursor.execute("SELECT * FROM game WHERE id = 1;")
    # rows = cursor.fetchall()
    # print(rows[0])


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
  linkedID integer
  description varchar
  crossoverDate integer
}

Ref: game.id < links.gameID
Ref: links.linkedID < game.id

'''