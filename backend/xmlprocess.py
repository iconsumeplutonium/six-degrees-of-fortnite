import sqlite3, json, Utilities, re
from tqdm import tqdm
import mwparserfromhell
from mwparserfromhell.nodes import Template

tableEntryRegex: re.Pattern = re.compile(r"\{\{([^|]+)\|([^|]+)\|([^|]+)\|([^|]+)\|[^|]*\|([^|]+)\|([^|]+)\|([^|]+)\|(.*?)\}\}")

def parseTable(article: str) -> list[dict]:
	def get(t: Template, num: int) -> str:
		return str(t.get(num).value.strip_code()).strip()

	parsed: list[dict[str, str]] = []
	templates: list[Template] = mwparserfromhell.parse(article).filter_templates()
	for t in templates:
		if not t.name.lower()[0] == "l": continue
		# https://fictionalcrossover.fandom.com/wiki/Template:L#Usage
		try:
			parsed.append({
				"name": get(t, 1),
				"direction": get(t, 2),
				"linktype": get(t, 3),
				# "specialsubtype": get(t, 4),
				"day": get(t, 5),
				"month": get(t, 6),
				"year": get(t, 7),
				"description": get(t, 8),
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

			date: str = f'{link["month"]}-{link["day"]}-{link["year"]}'.replace('--', '-') # in case theres no day

			cursor.execute(INSERT_QUERY, (idLookup[f], idLookup[name], description, date, linkInt))


	conn.commit()
	conn.close()