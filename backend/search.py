import sqlite3, argparse, json, sys
from collections import deque
from tqdm import tqdm

# SETUP --------------------------------------------------------------------------------------
conn: sqlite3.Connection = sqlite3.connect('text/crossovers.db')
cursor: sqlite3.Cursor = conn.cursor()

# create mappings to get franchise ID from name and vice versa
nameToID: dict[str, int] = {}
idToName: dict[int, str] = {}
cursor.execute("SELECT id, name, url FROM game;")
rows = cursor.fetchall()
for row in rows:
	id   : int = row[0]
	name : str = row[1]

	nameToID[name] = id
	idToName[id] = name

# load adjacency list representation of all crossovers
with open('text/crossovers.json', 'r') as crossoverJSON:
	adj: dict[str, list] = json.load(crossoverJSON)

# get Fortnite ID
cursor.execute("SELECT id FROM game WHERE name = 'Fortnite';")
FORTNITE: int = cursor.fetchall()[0][0]
# -----------------------------------------------------------------------------------------


def pathToNames(path: list[int]) -> list[str]:
	return [idToName[franchise] for franchise in path]

def neighbors(franchise: int) -> list[tuple[int, int]]:
	cursor.execute("select COgameID,linkType from links where gameID = ?", (franchise,))
	return cursor.fetchall()
	# print(result)
	# return [(nameToID[crossover["game"]], crossover["linkType"]) for crossover in adj[idToName[franchise]]]

def getLink(start: int, end: int): #4594, 1781
	cursor.execute('''
		SELECT g.name, crossoverDate, description, linkType 
		FROM links 
		JOIN game g ON g.id = gameID 
		WHERE 
			gameID = ? and COgameID = ?;
	''', (start, end))
	try:
		data: tuple = cursor.fetchall()[0]
	except:
		print(start)
		print(end)
		print(cursor.fetchall())
	else:
		return {
			"name": data[0],
			"date": data[1],
			"description": data[2],
			"linkType": data[3],
		}

# finds the shortest path from start to Fortnite
def bfs(startingFranchise: int, minLinkType: int, log: bool = False) -> dict | None:
	queue: deque[int] = deque()
	visited: set[int] = set()
	predecessor: dict[int, int] = {startingFranchise: -1}

	queue.append(startingFranchise)
	predecessor[startingFranchise] = -1
	visited.add(startingFranchise)

	if log: print(f"\nSearching for path from {idToName[startingFranchise]} to Fortnite...")
	
	while (len(queue) > 0):
		qSize: int = len(queue)
		for i in range(qSize):
			franchiseID: int = queue.popleft()
			if franchiseID == FORTNITE:
				# follow predecessor subgraph to extract path from Fortnite back to start
				path: list[int] = []
				f: int = franchiseID
				while f != -1:
					path.append(f)
					f = predecessor[f]
				path.reverse()

				apiResponse: dict = {
					"found": True,
					"path": []
				}

				if log:
					print(f"Path to Fortnite found: {path}\n")
					print(idToName[startingFranchise])
				
				minLinkType = min(minLinkType, 3)  # for when minlinktype is infinity

				# print path in readable format
				for i in range(1, len(path)):
					cursor.execute(f"SELECT crossoverDate, description, linkType FROM links WHERE gameID = {path[i - 1]} AND COgameID = {path[i]} AND linkType <= {minLinkType};")
					crossoverInfo: tuple[str, str, int] = cursor.fetchall()[0]

					name: str = idToName[path[i]]
					date: str = crossoverInfo[0]
					description: str = crossoverInfo[1]
					linkType: int = crossoverInfo[2]
					
					if log:
						print(f"\n{name} ({date})\n {description}")
					else:
						apiResponse["path"].append({
							"name": name,
							"date": date,
							"description": description,
							"linkType": linkType
						})
				
				if log: 
					sys.exit(0)
				else:
					return apiResponse

			adjacent: list[tuple[int, int]] = neighbors(franchiseID)
			for crossover in adjacent:
				crossoverID:   int = crossover[0]
				crossovertype: int = crossover[1]

				if crossoverID in visited: continue
				if crossovertype > minLinkType: continue

				queue.append(crossoverID)
				visited.add(crossoverID)
				predecessor[crossoverID] = franchiseID

	if log: 
		print(f"No path could be found from {idToName[startingFranchise]} to Fortnite")
	else:
		return {"found": False}


if __name__ == "__main__":
	parser: argparse.ArgumentParser = argparse.ArgumentParser(description="connects franchise")
	parser.add_argument("-s", "--start", type=str, help="The franchise to start from")
	parser.add_argument("-l", "--min-link", type=int, help="The minimum link type to consider as a valid path")
	parser.add_argument("-a", "--all", action="store_true", help="Create JSON with all paths from every franchise to Fortnite (cannot be used with -s or -l)")
	args: argparse.Namespace = parser.parse_args()

	if args.all and (args.start or args.min_link):
		raise AssertionError("Cannot use -a with -s or -l")

	if not args.start and not args.all:
		raise AssertionError("Start is required when -a is not specified")

	# setup()
	minLinkType: int = args.min_link if args.min_link else 999999999999999999

	if args.start not in nameToID and not args.all:
		raise AssertionError(f"Error: franchise {args.start} does not exist.")

	if not args.all:
		start: int = nameToID[args.start]
		bfs(start, minLinkType, True)
	else:
		allPaths: dict[str, dict] = {}
		highestID: int = cursor.execute("select max(id) from game;").fetchall()[0][0]

		queue: deque[int] = deque()
		visited: set[int] = set()
		predecessor: dict[int, int] = {FORTNITE: -1}
		queue.append(FORTNITE)
		visited.add(FORTNITE)

		with tqdm(total=highestID, desc="Pathfinding outwards") as bar:
			while len(queue) > 0:
				franchiseID: int = queue.popleft()
				bar.update(1)
				adjacent: list[tuple[int, int]] = neighbors(franchiseID)
				for crossover in adjacent:
					crossoverID:   int = crossover[0]
					crossovertype: int = crossover[1]

					if crossoverID in visited: continue
					if crossovertype > minLinkType: continue

					predecessor[crossoverID] = franchiseID
					queue.append(crossoverID)
					visited.add(crossoverID)
			bar.n = highestID
			bar.update()


		for i in tqdm(range(1, highestID + 1), desc="Creating paths from predecessors"):
			name: str = idToName[i]
			if i not in predecessor:
				allPaths[name] = {"found": False, "path": []}
				continue

			idPath: list[int] = [i]
			parent = predecessor[i]
			found: bool = True
			for x in range(10):
				if parent == -1: 
					found = True
					break
				idPath.append(parent)
				parent = predecessor[parent]

			allPaths[name] = {"found": True, "path": []}
			for hop in range(1, len(idPath)):
				start: int = idPath[hop-1]
				end: int = idPath[hop]
				allPaths[name]["path"].append(getLink(end, start))

			if not found:
				print(f"couldnt find path from {i}")
				exit(1)



		
		with open('text/AllPaths2.json', 'w') as f:
			json.dump(allPaths, f, indent=4)