import sqlite3, argparse, json, sys
from collections import deque
from tqdm import tqdm

# globals
FORTNITE: int
conn: sqlite3.Connection
cursor: sqlite3.Cursor
idFromName: dict[str, int]
nameFromID: dict[int, str]
adj: dict

def pathToNames(path: list[int]) -> list[str]:
    return [nameFromID[franchise] for franchise in path]

def neighbors(franchise: str) -> list[tuple[int, int]]:
    return [(idFromName[crossover["game"]], crossover["linkType"]) for crossover in adj[nameFromID[franchise]]]

def setup() -> None:
    global conn, cursor, idFromName, nameFromID, adj, FORTNITE

    conn = sqlite3.connect('backend/crossovers.db')
    cursor = conn.cursor()

    # create mappings to get franchise ID from name and vice versa
    idFromName = {}
    nameFromID = {}
    cursor.execute("SELECT id, name, url FROM game;")
    rows = cursor.fetchall()
    for row in rows:
        id   : int = row[0]
        name : str = row[1]

        idFromName[name] = id
        nameFromID[id] = name

    # load adjacency list representation of all crossovers
    with open('text/crossovers.json', 'r') as crossoverJSON:
        adj = json.load(crossoverJSON)
    
    # get Fortnite ID
    cursor.execute("SELECT id FROM game WHERE name = 'Fortnite';")
    FORTNITE = cursor.fetchall()[0][0]


# finds the shortest path from start to Fortnite
def bfs(startingFranchise: int, minLinkType: int, log: bool = False) -> dict | None:
    queue: deque[int] = deque()
    visited: set[int] = set()
    predecessor: dict[int, int] = {startingFranchise: -1}

    queue.append(startingFranchise)
    predecessor[startingFranchise] = -1
    visited.add(startingFranchise)

    if log: print(f"\nSearching for path from {nameFromID[startingFranchise]} to Fortnite...")
    
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
                    print(nameFromID[startingFranchise])
                
                minLinkType = min(minLinkType, 3)  # for when minlinktype is infinity

                # print path in readable format
                for i in range(1, len(path)):
                    cursor.execute(f"SELECT crossoverDate, description, linkType FROM links WHERE gameID = {path[i - 1]} AND COgameID = {path[i]} AND linkType <= {minLinkType};")
                    crossoverInfo: tuple[str, str, int] = cursor.fetchall()[0]

                    name: str = nameFromID[path[i]]
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

            adjacent: list[int] = neighbors(franchiseID)
            for crossover in adjacent:
                crossoverID:   int = crossover[0]
                crossovertype: int = crossover[1]

                if crossoverID in visited: continue
                if crossovertype > minLinkType: continue

                queue.append(crossoverID)
                visited.add(crossoverID)
                predecessor[crossoverID] = franchiseID

    if log: 
        print(f"No path could be found from {nameFromID[startingFranchise]} to Fortnite")
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

    setup()
    minLinkType: int = args.min_link if args.min_link else 999999999999999999

    if args.start not in idFromName and not args.all:
        raise AssertionError(f"Error: franchise {args.start} does not exist.")

    if not args.all:
        start: str = idFromName[args.start]
        bfs(start, minLinkType, True)
    else:
        allPaths: dict[str, dict] = {}
        for id in tqdm(nameFromID):
            allPaths[nameFromID[id]] = bfs(id, 1, False)
        
        with open('text/AllPaths.json', 'w') as f:
            json.dump(allPaths, f, indent=4)