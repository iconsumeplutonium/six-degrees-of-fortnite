import sqlite3, json, Utilities, re, tqdm

tableEntryRegex: re.Pattern = re.compile(r"\{\{(.+)\|(.+)\|(.+)\|(.+)\|\|(.+)\|(.+)\|(.+)\|(.+)}}")

def parseTable(article: str):
	matches: list = re.findall(tableEntryRegex, article)
	results: list = []
	for m in matches:
		_, name, direction, link, month, day, year, description = m
		results.append({
			"game": name,
			"date": f"{month}-{day}-{year}",
			"description": description,
			"linkType": link
		})
	return results
	
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


	for f in tqdm.tqdm(franchises):
		if not f: continue
		tqdm.tqdm.write(f)

		matches: list = re.findall(tableEntryRegex, articles[f])
		for m in matches:
			_, name, direction, link, day, month, year, description = m

			while name in redirectMap:
				name = redirectMap[name]

			if name not in idLookup: continue

			# Rare Replay article has two links with a link type of "no"
			try:
				linkInt: int = int(link[0])
			except:
				continue

			cursor.execute(INSERT_QUERY, (idLookup[f], idLookup[name], description, f"{month}-{day}-{year}", int(link[0])))

	conn.commit()