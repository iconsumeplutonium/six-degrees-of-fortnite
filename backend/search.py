import sqlite3, argparse, json
from collections import deque

# globals
FORTNITE: int
conn: sqlite3.Connection
cursor: sqlite3.Cursor
idFromName: dict
nameFromID: dict
adj: dict

def pathToNames(path: list[int]) -> list[str]:
    return [nameFromID[franchise] for franchise in path]

def neighbors(franchise: str) -> list[tuple[int, int]]:
    return [(idFromName[crossover["game"]], crossover["linkType"]) for crossover in adj[nameFromID[franchise]]]

def setup() -> None:
    global conn, cursor, idFromName, nameFromID, adj, FORTNITE

    conn = sqlite3.connect('crossovers.db')
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
def bfs(startingFranchise: int, minLinkType: int, log: bool = False) -> None:
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
                    crossoverInfo: list[tuple] = cursor.fetchall()[0]

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
                    exit(0)
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



# experimental: finds multiple short paths, the same way Six Degrees of Wikipedia does
# works sometimes, doesnt work with others (eg can only find paths from Under Night In-Birth if theres no min link type, and it wont find the same path bfs does)
def dfs(startingFranchise: int, minLinkType: int) -> None:
    # trivial path:
    if startingFranchise == FORTNITE:
        return [startingFranchise]

    visited: set[int] = set()
    allPaths: list[list] = []

    recurse(startingFranchise, minLinkType, visited, [], allPaths)

    for path in allPaths:
        print(pathToNames(path))


def recurse(franchise: int, minLinktype: int, visited: set[int], currentPath: list, allPaths: list):
    if franchise == 4177:
        print("in here, investigating")

    currentPath.append(franchise)
    if len(currentPath) > 6:
        currentPath.pop()
        if franchise == 4177:
            print("this is too long, returning")
            print(pathToNames(currentPath))
        return
    
    visited.add(franchise)

    if franchise == FORTNITE:
        allPaths.append(currentPath[:])
        currentPath.pop()
        visited.remove(franchise)
        return


    adjacent: list = neighbors(franchise)
    for crossover in adjacent:
        crossoverID:   int = crossover[0]
        crossovertype: int = crossover[1]

        if crossoverID in visited or crossovertype > minLinkType: continue

        recurse(crossoverID, minLinkType, visited, currentPath, allPaths)
    
    currentPath.pop()


if __name__ == "__main__":
    parser: argparse.ArgumentParser = argparse.ArgumentParser(description="connects franchise")
    parser.add_argument("-s", "--start", type=str, help="The franchise to start from")
    parser.add_argument("-l", "--min-link", type=int, help="The minimum link type to consider as a valid path")
    parser.add_argument("-d", "--dfs", action="store_true", help="Use depth-first search instead of breadth-first search")
    args: argparse.Namespace = parser.parse_args()

    if not args.start:
        print("Error: start is required")
        exit(1)

    setup()

    if args.start not in idFromName:
        print(f"Error: franchise {args.start} does not exist.")
        exit(2)

    start: str = idFromName[args.start]
    minLinkType: int = args.min_link if args.min_link else float('inf')

    if args.dfs:
        dfs(start, minLinkType)
    else:
        bfs(start, minLinkType, True)