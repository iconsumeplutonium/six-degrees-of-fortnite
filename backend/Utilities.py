import urllib.parse, json
URL_BASE = "https://fictionalcrossover.fandom.com/wiki/"

def convertFranchiseToURL(name : str) -> str:
    return name.strip().replace(" ", "_").replace('&', "%26").replace('?', "%3f")


def convertURLtoFranchise(url : str) -> str:
    return urllib.parse.unquote(url).replace(URL_BASE, "").replace("_", " ")#.replace("%26", '&').replace('%3f', '?').replace('%27', "'").replace("%C3%97", '×')


def sanitize(name : str) -> str:
    return name.replace("“", '"').replace("”", '"')


def getRedirects() -> dict[str, str]:
    knownRedirects : dict[str, str] = {}
    with open('text/redirects.json', 'r', encoding='utf-8') as redirects:
        knownRedirects = json.loads(redirects.read())
    
    return knownRedirects


def getRemovals() -> set[str]:
    miscRemovals : set[str] = set()
    with open('text/misc_removals.txt', 'r', encoding='utf-8') as removals:
        for removal in removals.readlines():
            miscRemovals.add(removal.strip())
    
    return miscRemovals

def writeToFile(name: str, content: list[str]):
	with open(name, "w", encoding="utf-8") as file:
		file.writelines([c + '\n' for c in content])

def writeToJSON(name: str, content: dict):
	with open(name, "w", encoding="utf-8") as file:
		json.dump(content, file, indent=4, sort_keys=True)
