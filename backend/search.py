import sqlite3, argparse, json
from collections import deque

paths = []
FORTNITE = 1311

if __name__ == "__main__":
    parser : argparse.ArgumentParser = argparse.ArgumentParser(description="connects franchise")
    parser.add_argument("-s", "--start", type=str, help="The franchise to start from")
    parser.add_argument("-l", "--min-link", type=int, help="The minimum link type to consider as a valid path")
    args : argparse.Namespace = parser.parse_args()

    if not args.start:
        print("Error: start is required")
        exit(1)

    conn : sqlite3.Connection = sqlite3.connect('crossovers.db')
    cursor : sqlite3.Cursor = conn.cursor()
    
    # create a dictionary for easy franchise ID lookup
    idFromName: dict = {}
    nameFromID: dict = {}
    cursor.execute("SELECT id, name, url FROM game;")
    rows = cursor.fetchall()
    for row in rows:
        id   : int = row[0]
        name : str = row[1]

        idFromName[name] = id
        nameFromID[id] = name

    if args.start not in idFromName:
        print(f"Error: franchise {args.start} does not exist.")
        exit(2)

    start: str = idFromName[args.start]
    minLinkType: int = args.min_link if args.min_link else float('inf')

    # adjacency list representation of all crossovers
    with open('text/crossovers.json', 'r') as crossoverJSON:
        adj: dict = json.load(crossoverJSON)


    queue: deque[int] = deque()
    visited: set[int] = set()
    predecessor: dict[int, int] = {start: -1}

    queue.append(start)
    predecessor[start] = -1
    visited.add(start)

    print(f"\nSearching for path from {args.start} to Fortnite...")
    
    while (len(queue) > 0):
        qSize : int = len(queue)
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
                print(args.start)

                # print path in readable format
                for i in range(1, len(path)):
                    cursor.execute(f"SELECT crossoverDate, description FROM links WHERE gameID = {path[i - 1]} AND COgameID = {path[i]};")
                    crossoverInfo : list[tuple] = cursor.fetchall()[0]

                    print(f"\n{nameFromID[path[i]]} ({crossoverInfo[0]})\n {crossoverInfo[1]}")

                exit(1)

            franchiseName: str = nameFromID[franchiseID]
            for crossover in adj[franchiseName]:
                crossoverName: str = crossover["game"]
                crossoverID: int = idFromName[crossoverName]

                if crossoverID in visited: continue
                if crossover["linkType"] > minLinkType: continue


                queue.append(crossoverID)
                visited.add(crossoverID)
                predecessor[crossoverID] = franchiseID

    print(f"No path could be found from {args.start} to Fortnite")