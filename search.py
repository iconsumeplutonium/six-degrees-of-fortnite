import sqlite3, argparse, json
from collections import deque, defaultdict
from typing import DefaultDict, List, Set, Deque, Dict

paths = []
FORTNITE = 1311

def dfs(start : int, adj : DefaultDict[int, list[int]], currentPath : list[int], visited = None):
    if visited is None:
        visited = set()

    currentPath.append(start)
    visited.add(start)

    if start == 1237:
        print(f"found one path of length {len(currentPath)}")
        paths.append(list(currentPath))
        return

    for crossover in adj[start]:
        if crossover in visited: continue

        dfs(crossover, adj, currentPath, visited)
        if 1237 in visited:
            return
    
    currentPath.pop()
    visited.remove(start)

def bfs(adj):
    queue : Deque[int] = deque()
    visited : Set[int] = set()

    queue.append([start])
    shortestLength = float('inf')
    allPaths = []

    while (len(queue) > 0):
        path : list = queue.popleft()
        franchise : int = path[-1]
        print(len(queue))

        # if len(path) > 50:
        #     continue

        if franchise == 1237:
            shortestLength = min(shortestLength, len(path))
            allPaths.append(path)
            continue

        for crossover in adj[franchise]:
            if crossover in visited: continue
            queue.append(path + [crossover])
            visited.add(crossover)
    
    for p in allPaths:
        print(p)

if __name__ == "__main__":
    parser : argparse.ArgumentParser = argparse.ArgumentParser(description="connects franchise")
    parser.add_argument("-s", "--start", type=int, help="The franchise to start from")
    parser.add_argument("-l", "--min-link", type=int, help="The minimum link type to consider as a valid path")
    args : argparse.Namespace = parser.parse_args()


    if not args.start:
        print("Error: start is required")

    start: int = args.start
    minLinkType: int = args.min_link if args.min_link else float('inf')

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

    # create an adjacency list representation of all crossovers
    # adj : DefaultDict[int, List[int]] = defaultdict(list)
    # cursor.execute("SELECT gameID, COgameID FROM links;")
    # rows = cursor.fetchall()
    # for row in rows:
    #     adj[row[0]].append(row[1])
    with open('text/crossovers.json', 'r') as crossoverJSON:
        adj: dict = json.load(crossoverJSON)


    queue: Deque[int] = deque()
    visited: Set[int] = set()
    predecessor: Dict[int, int] = {
        start: -1
    }
    #queue.append(idLookup[start])

    queue.append(start)
    predecessor[start] = -1
    visited.add(start)

    #bfs(adj)

    print(predecessor)

    useMultiplePaths : bool = False
    if useMultiplePaths:
        allPaths = []
        path = []
        dfs(start, adj, path)
        print(path)
        allPaths.append(path)
        path.pop()

        disallowed = []
        for i in range(len(path) - 1, -1, -1):
            queue : Deque[int] = deque()
            visited : Set[int] = set()
            predecessor : Dict[int, int] = dict()

            start = path[i]
            queue.append(start)
            predecessor[start] = -1
            visited.add(start)
            if i != len(path) - 1:
                visited.add(path[i + 1])

            # for d in disallowed:
            #     visited.add(d)

            while (len(queue) > 0):
                qSize : int = len(queue)
                for i in range(qSize):
                    franchiseID : int = queue.popleft()
                    if franchiseID == 1237:
                        p = []
                        f : int = franchiseID
                        while f != -1:
                            p.append(f)
                            f = predecessor[f]
                        p.reverse()
                        print(f"Path to Fortnite found: {p}\n")
                        allPaths.append(p)
                        disallowed.append(start)

                        # cursor.execute(f"SELECT name FROM game WHERE id = {path[0]};")
                        # g1 = cursor.fetchall()[0][0]
                        # print(g1)

                        # for i in range(1, len(path)):
                        #     cursor.execute(f"SELECT crossoverDate, description FROM links WHERE gameID = {path[i - 1]} AND COgameID = {path[i]};")
                        #     coInfo : list[tuple] = cursor.fetchall()[0]
                            
                            
                        #     cursor.execute(f"SELECT name FROM game WHERE id = {path[i]};")
                        #     g2 = cursor.fetchall()[0][0]


                        #     print(f"\n{g2} ({coInfo[0]})\n {coInfo[1]}")

                        # exit(1)

                    for crossover in adj[franchiseID]:
                        if crossover in visited: continue

                        queue.append(crossover)
                        visited.add(crossover)
                        predecessor[crossover] = franchiseID


        print(allPaths)
    else:
        while (len(queue) > 0):
            qSize : int = len(queue)
            for i in range(qSize):
                franchiseID: int = queue.popleft()
                if franchiseID == FORTNITE:
                    path: list[int] = []
                    f: int = franchiseID
                    while f != -1:
                        path.append(f)
                        print(f"appending {f}")
                        f = predecessor[f]
                    path.reverse()
                    print(f"Path to Fortnite found: {path}\n")

                    cursor.execute(f"SELECT name FROM game WHERE id = {path[0]};")
                    g1 = cursor.fetchall()[0][0]
                    print(g1)

                    for i in range(1, len(path)):
                        cursor.execute(f"SELECT crossoverDate, description FROM links WHERE gameID = {path[i - 1]} AND COgameID = {path[i]};")
                        coInfo : list[tuple] = cursor.fetchall()[0]
                        
                        
                        cursor.execute(f"SELECT name FROM game WHERE id = {path[i]};")
                        g2 = cursor.fetchall()[0][0]


                        print(f"\n{g2} ({coInfo[0]})\n {coInfo[1]}")

                    exit(1)

                franchiseName: str = nameFromID[franchiseID]
                print(start in visited)
                for crossover in adj[franchiseName]:
                    crossoverName: str = crossover["game"]
                    crossoverID: int = idFromName[crossoverName]

                    if crossoverID in visited: continue
                    if crossover["linkType"] > minLinkType: continue


                    queue.append(crossoverID)
                    visited.add(crossoverID)
                    predecessor[crossoverID] = franchiseID

        cursor.execute(f"SELECT name FROM game WHERE id = {start};")
        name : str = cursor.fetchall()[0][0]
        print(f"no path could be found from {name} to Fortnite")