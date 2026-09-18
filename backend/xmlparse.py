import bs4, lxml, time, re, Utilities, json, tqdm

disallowedCaptures: list[re.Pattern] = [
	re.compile(r".* X .*"),
	re.compile(r".*[c|C]ommercial"),
	re.compile(r".*[p|P]romo.*"),
	re.compile(r".*[a|A]ppearances"),
	re.compile(r".*[b|B]umper"),
	re.compile(r".*[c|C]rossover [w|W]iki.*"),
	re.compile(r".*[c|C]ameo.*"),
	re.compile(r".*[r|R]eference.*"),
	re.compile(r".*[t|T]railer.*"),
	re.compile(r".*[m|M]ascot.*"),
	re.compile(r".* [r|R]ule.*"),
]

def isDisallowed(title: str) -> bool:
	for regex in disallowedCaptures:
		if regex.match(title) is not None:
			return True

	return False

def writeToFile(name: str, content: list[str]):
	with open(name, "w", encoding="utf-8") as file:
		file.writelines([c + '\n' for c in content])

def writeToJSON(name: str, content: dict):
	with open(name, "w", encoding="utf-8") as file:
		json.dump(content, file, indent=4, sort_keys=True)

if __name__ == "__main__":
	with open("text/fictionalcrossover_pages_current.xml", "r", encoding="UTF-8") as file:
		content = ''.join(file.readlines())

	print("Setting up BS4...")
	soup: bs4.BeautifulSoup = bs4.BeautifulSoup(content, "lxml")
	pages: list = sorted([p for p in soup.find_all("page") if p.ns and p.ns.text.strip() == '0'], key=lambda p: p.title.contents[0]) # type: ignore # all articles are in namespace 0

	# for each page
	# if redirect
	# 	save original and destination
	# 	continue
	# if title is misc removal or should be filtered, ignore it
	# insert to txt file

	# note: redirects can furtuerh redirect
	# eg     "Archie": "Archie (Comic Series)" and "Archie (Comic Series)": "Archie (Archie Comics)",
	# or Minna to Series -> Minna to (Series) -> Minna to
	# need to fix


	print("Begining parse")
	knownRedirects : dict[str, str] = Utilities.getRedirects()
	miscRemovals   : set[str] = Utilities.getRemovals()
	redirects: dict[str, str] = {}
	removalsWasUpdated : bool = False
	franchises: list[str] = []
	for p in tqdm.tqdm(pages):
		title: str = Utilities.sanitize(p.title.contents[0])
		if p.redirect:
			destination: str = Utilities.sanitize(p.redirect.get("title")).strip()
			redirects[title] = destination
			continue

		if title in miscRemovals: continue
		if isDisallowed(title):
			miscRemovals.add(title)
			removalsWasUpdated = True
			continue

		franchises.append(title)

	writeToFile("text/filtered_franchises.txt", franchises)
	if removalsWasUpdated:
		with open('text/misc_removals.txt', 'w', encoding='utf-8') as removals:
			for removal in miscRemovals:
				removals.write(removal + '\n')
	writeToJSON("text/redirects.json", redirects)

		
