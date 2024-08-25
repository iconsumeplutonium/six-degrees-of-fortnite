import requests, bs4, lxml, time

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


# given a text file of links to all fictionallcrossover wiki pages, it gets the names of all the pages and puts it into a text file
# text file will need to be manually reviewed to remove the pages of stuff that isnt games (theres pages dedicated to explaining the crossover between 2 franchises)
def sanitize(name : str) -> str:
    return name.replace("“", '"').replace("”", '"')


def extractLinks(url : str) -> None:
    print(f"testing {url}")
    webpage : requests.Response = requests.get(url)
    if webpage.status_code != 200:
        print(f"ERROR: Could not reach {url}")
        
    
    soup : bs4.BeautifulSoup = bs4.BeautifulSoup(webpage.content, 'lxml')
    div : bs4.NavigableString = soup.find("ul", class_="mw-allpages-chunk").find_all("li")

    franchises = []
    for li in div:
        franchiseName : str = li.find('a').get_text()
        franchises.append(franchiseName)

    
    with open('franchises.txt', 'a', encoding='utf-8') as file:
        for franchise in franchises:
            file.write(sanitize(franchise) + "\n")



if __name__ == "__main__":
    for link in LINKS:
        extractLinks(link)
        time.sleep(2)

    # to clean franchises.txt
    # find and replace ".* X .*" with nothing
    # then replace \n\n with nothing

            