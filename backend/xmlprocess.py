import sqlite3, json, Utilities, re
from tqdm import tqdm
import mwparserfromhell

tableEntryRegex: re.Pattern = re.compile(r"\{\{([^|]+)\|([^|]+)\|([^|]+)\|([^|]+)\|[^|]*\|([^|]+)\|([^|]+)\|([^|]+)\|(.*?)\}\}")

def parseTable(article: str) -> list[dict]:
	parsed: list[dict[str, str]] = []
	templates: list = mwparserfromhell.parse(articles[f]).filter_templates()
	for t in templates:
		if not t.name.lower()[0] == "l": continue
		# https://fictionalcrossover.fandom.com/wiki/Template:L#Usage
		try:
			parsed.append({
				"name": str(t.get(1).value).strip(),
				"direction": str(t.get(2).value).strip(),
				"linktype": str(t.get(3).value).strip(),
				# "specialsubtype": str(t.get(4).value).strip(),
				"day": str(t.get(5).value).strip(),
				"month": str(t.get(6).value).strip(),
				"year": str(t.get(7).value).strip(),
				"description": str(t.get(8).value).strip(),
			})
		except:
			print(t)
			exit(1)

	return parsed

	
if __name__ == "__main__":
	# idLookup maps franchise name to its id in the database
	# urlLookup maps franchise name to its wiki url
	idLookup: dict = {}
	urlLookup: dict = {}
	franchises: list[str] = [""]
	conn: sqlite3.Connection = sqlite3.connect('text/crossovers.db')
	cursor: sqlite3.Cursor = conn.cursor()

	cursor.execute("SELECT id, name, url FROM game;")
	rows = cursor.fetchall()
	for row in rows:
		id   : int = row[0]
		name : str = row[1]
		url  : str = row[2]

		franchises.append(name)
		idLookup[name] = id
		urlLookup[name] = url
	
	
	redirectMap: dict[str, str] = Utilities.getRedirects()
	removedLinks: set[str] = Utilities.getRemovals()
	with open("text/pages.json", "r", encoding="utf-8") as file:
		articles: dict[str, str] = json.load(file)
	INSERT_QUERY: str = "INSERT INTO links (gameID, COgameID, description, crossoverDate, linkType) VALUES (?, ?, ?, ?, ?)"


	for f in tqdm(franchises):
		if not f: continue
		tqdm.write(f)

		# print(articles[f])
		

		links: list[dict[str, str]] = parseTable(articles[f])
		for link in links:
			# _, name, direction, link, day, month, year, description = m
			description: str = link["description"].replace("''", "'").strip()

			name: str = str(link["name"])
			while name in redirectMap:
				name = redirectMap[name]

			if name not in idLookup: 
				tqdm.write(f"skipping because {name} is unknown")
				# exit(1)
				continue

			# Rare Replay article has two links with a link type of "no"
			try:
				linkInt: int = int(link["linktype"][0])
			except:
				tqdm.write(f"skipping because {link} has unknown link type")
				# exit(1)
				continue

			try:
				cursor.execute(INSERT_QUERY, (idLookup[f], idLookup[name], description, f'{link["month"]}-{link["day"]}-{link["year"]}', linkInt))
			except Exception as e:
				tqdm.write(link)
				tqdm.write(e)
				exit(1)

	conn.commit()
	conn.close()