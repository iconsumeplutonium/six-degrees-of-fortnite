URL_BASE = "https://fictionalcrossover.fandom.com/wiki/"

def convertFranchiseToURL(name : str) -> str:
    return name.strip().replace(" ", "_").replace('&', "%26").replace('?', "%3f")

def convertURLtoFranchise(url : str) -> str:
    return url.replace(URL_BASE, "").replace("_", " ").replace("%26", '&').replace('%3f', '?').replace('%27', "'").replace("%C3%97", '×')