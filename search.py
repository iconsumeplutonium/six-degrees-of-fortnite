import sqlite3, argparse
from collections import deque, defaultdict
from typing import DefaultDict, List, Set, Deque, Dict

if __name__ == "__main__":
    parser : argparse.ArgumentParser = argparse.ArgumentParser(description="connects franchise")
    parser.add_argument("-s", "--start", type=int, help="The franchise to start from")
    args : argparse.Namespace = parser.parse_args() 

    if not args.start:
        print("Error: start is required")

    start : int = args.start 

    conn : sqlite3.Connection = sqlite3.connect('crossovers.db')
    cursor : sqlite3.Cursor = conn.cursor()

    # create a dictionary for easy franchise ID lookup
    idLookup : dict = {}
    cursor.execute("SELECT id, name, url FROM game;")
    rows = cursor.fetchall()
    for row in rows:
        id   : int = row[0]
        name : str = row[1]

        idLookup[name] = id

    # create an adjacency list representation of all crossovers
    adj : DefaultDict[int, List[int]] = defaultdict(list)
    cursor.execute("SELECT gameID, COgameID FROM links;")
    rows = cursor.fetchall()
    for row in rows:
        adj[row[0]].append(row[1])


    queue : Deque[int] = deque()
    visited : Set[int] = set()
    predecessor : Dict[int, int] = dict()
    #queue.append(idLookup[start])

    queue.append(start)
    predecessor[start] = -1
    visited.add(start)

    while (len(queue) > 0):
        qSize : int = len(queue)
        for i in range(qSize):
            franchise : int = queue.popleft()
            if franchise == 1237:
                print("Path to fortnite found.")

                path = []
                i = franchise
                while i != -1:
                    print(i)
                    path.append(i)
                    i = predecessor.get(i)

                path.reverse()
                print(path)
                exit(1)

            for crossover in adj[franchise]:
                if crossover in visited: continue

                queue.append(crossover)
                visited.add(crossover)
                predecessor[crossover] = franchise

    print("no path could be found")

# star wars 3174






