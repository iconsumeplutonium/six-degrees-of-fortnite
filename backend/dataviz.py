import sqlite3, json
import gzip
from collections import defaultdict, deque
import networkx
import sys, random

visited: set = set()
parent: dict[int, int] = {}

def recurse(adjacencyList: defaultdict, source: int) -> None:
    queue: deque[int] = deque()
    queue.append(source)
    visited.add(source)

    while len(queue) != 0:        
        franchise: int = queue.popleft()

        for neighbor in adjacencyList[franchise]:
            if neighbor in visited: continue
            queue.append(neighbor)
            visited.add(franchise)
            parent[neighbor] = franchise
    
    # print(parent)

def bfs(adjacencyList: defaultdict, fortniteID: int) -> None:
    recurse(adjacencyList, fortniteID)

    for node in adjacencyList:
        if node in visited: continue
        recurse(adjacencyList, node)

if __name__ == "__main__":
    conn: sqlite3.Connection = sqlite3.connect('crossovers.db')
    cursor: sqlite3.Cursor = conn.cursor()

    # get all franchise IDs
    cursor.execute("SELECT id, name FROM game;")
    franchises = cursor.fetchall()

    # get all links
    cursor.execute("SELECT gameID, COgameID, linkType FROM links;")
    all_links = cursor.fetchall()

    # construct adjacency list 
    adjacencyList = defaultdict(list)
    for gameID, COgameID, linkType in all_links:
        if linkType != 1: continue
        adjacencyList[COgameID].append(gameID)   # reverse it, because in the normal serach we go from eslewhere -> fortnite, but here were doing fortnite -> elsewhere

    # some franchises might have no neighbors, manually add them to the adjacency list
    for id, _ in franchises:
        if id in adjacencyList: continue
        adjacencyList[id] = []

    # get Fortnite's ID to make sure that is the first source for bfs
    cursor.execute("SELECT id FROM game WHERE name = 'Fortnite';")
    fortniteID: int = cursor.fetchall()[0][0]

    bfs(adjacencyList, fortniteID)

    # construct the bfs tree
    bfsTree: defaultdict = defaultdict(list)
    for node in parent:
        if parent[node] == node: continue
        bfsTree[parent[node]].append(node)

    print(f"bfs completed, generating graph")

    # this takes like 20 minutes to run
    G: networkx.Graph = networkx.Graph(bfsTree)
    positions: dict[int, list] = networkx.kamada_kawai_layout(G, dim=3)

    # faster, but the layout fucking sucks: networkx.spring_layout(G, k=0.3, dim=3, interations=100)

    print("finished calculating positions, proceeding to create gzip file")
    
    # give isolated nodes random 3D positions (should probably just remove entirely)
    for id, name in franchises:
        if id not in positions:
            positions[id] = [random.uniform(-1, 1), random.uniform(-1, 1), random.uniform(-1, 1)]

    # construct the json representation of the graph
    nodes: list[dict] = []
    edges: list[dict] = []
    for id, name in franchises:
        nodes.append({
            "id": id, 
            "name": name, 
            "value": len(bfsTree[id]),
            "position": [float(c) for c in positions[id]]
        })

        if len(positions[id]) != 3:
            raise ValueError("len is", len(positions[id]))

        for neighbor in bfsTree[id]:
            edges.append({"source": id, "target": neighbor})


    graphData: dict[str, list] = {"nodes": nodes, "links": edges}

    # compress the entire graph with gzip encoding
    jsonString: str = json.dumps(graphData, separators=(',', ':')) # disallow spaces between the key and values and commas and stuff to further reduce space
    compressedGraph: bytes = gzip.compress(jsonString.encode(('utf-8')))
    with open('backend/bfsgraph_kk_reversed.gz', 'wb') as file:
        file.write(compressedGraph)