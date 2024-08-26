import requests, bs4, lxml, csv

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
        arrowType   : str = TDs[0].find('a').find('img').get('alt')
        date        : str = TDs[2].get_text()
        description : str = TDs[3].get_text()
        coType      : str = TDs[4].get_text()

        for element in TDs[1].descendants:
            if element.name:  # Ensure it's a tag
                if element.string:  # Check if the tag has text
                    gameName : str = element.string
        
        description = description.replace("(see details)", "")

        #print(f"Arrow type: {arrowType},    game: {gameName},    date: {date},    description: {description},      type: {coType}")
        crossovers.append({
            "arrow": arrowType.replace("Arrow ", ""),
            "game": gameName,
            "date": ' '.join(date.split(' ')[1:]),
            "description": description,
            "type": coType.strip()
        })
    
    return crossovers



if __name__ == "__main__":
    # outputFile = open('games.csv', 'w', newline='', encoding='utf-8')
    # with open('franchises.txt', 'r', encoding='utf-8') as file:
    #     for franchise in file.readlines():


    print(scrape("https://fictionalcrossover.fandom.com/wiki/Minecraft#Links_to_Other_Series"))


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