import sqlite3, argparse, json
from collections import deque

FORTNITE = 1311

conn: sqlite3.Connection
cursor: sqlite3.Cursor

idFromName: dict
nameFromID: dict
adj: dict

def loadCrossoverData() -> None:
    global conn, cursor, idFromName, nameFromID, adj

    conn = sqlite3.connect('crossovers.db')
    cursor = conn.cursor()

    idFromName = {}
    nameFromID = {}

    # create easy mappings to get franchise ID from name and vice versa
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


def bfs(startingFranchise: str, minLinkType: int) -> None:
    queue: deque[int] = deque()
    visited: set[int] = set()
    predecessor: dict[int, int] = {startingFranchise: -1}

    queue.append(startingFranchise)
    predecessor[startingFranchise] = -1
    visited.add(startingFranchise)

    print(f"\nSearching for path from {nameFromID[startingFranchise]} to Fortnite...")
    
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

                print(f"Path to Fortnite found: {path}\n")
                print(nameFromID[startingFranchise])

                # print path in readable format
                for i in range(1, len(path)):
                    cursor.execute(f"SELECT crossoverDate, description FROM links WHERE gameID = {path[i - 1]} AND COgameID = {path[i]};")
                    crossoverInfo: list[tuple] = cursor.fetchall()[0]

                    print(f"\n{nameFromID[path[i]]} ({crossoverInfo[0]})\n {crossoverInfo[1]}")

                exit(0)

            franchiseName: str = nameFromID[franchiseID]
            for crossover in adj[franchiseName]:
                crossoverID: int = idFromName[crossover["game"]]

                if crossoverID in visited: continue
                if crossover["linkType"] > minLinkType: continue


                queue.append(crossoverID)
                visited.add(crossoverID)
                predecessor[crossoverID] = franchiseID

    print(f"No path could be found from {nameFromID[startingFranchise]} to Fortnite")


if __name__ == "__main__":
    parser : argparse.ArgumentParser = argparse.ArgumentParser(description="connects franchise")
    parser.add_argument("-s", "--start", type=str, help="The franchise to start from")
    parser.add_argument("-l", "--min-link", type=int, help="The minimum link type to consider as a valid path")
    args : argparse.Namespace = parser.parse_args()

    if not args.start:
        print("Error: start is required")
        exit(1)

    loadCrossoverData()

    if args.start not in idFromName:
        print(f"Error: franchise {args.start} does not exist.")
        exit(2)

    start: str = idFromName[args.start]
    minLinkType: int = args.min_link if args.min_link else float('inf')

    bfs(start, minLinkType)