import requests, bs4, lxml

def scrape(url : str) -> list[str]:
    webpage : requests.Response = requests.get(url)
    if webpage.status_code != 200:
        return []
    
    soup : bs4.BeautifulSoup = bs4.BeautifulSoup(webpage.content, 'lxml')
    table : bs4.ResultSet = soup.find('table').find('tbody').find_all('tr')

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
        coType      : int = TDs[4].get_text()

        for element in TDs[1].descendants:
            if element.name:  # Ensure it's a tag
                if element.string:  # Check if the tag has text
                    gameName : str = element.string
        
        description = description.replace("(see details)", "")

        #print(f"Arrow type: {arrowType},    game: {gameName},    date: {date},    description: {description},      type: {coType}")
        print(arrowType)
    
    return []



if __name__ == "__main__":
    scrape("https://fictionalcrossover.fandom.com/wiki/Minecraft#Links_to_Other_Series")