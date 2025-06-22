import sqlite3, json
import gzip
from collections import defaultdict, deque
import networkx
import sys, random

visited: set = set()
parent: dict[int, int] = {}

def visit(node: int, adjacencyList: defaultdict) -> None:
    visited.add(node)
    for neighbor in adjacencyList[node]:
        if neighbor in visited: continue

        parent[neighbor] = node
        visit(neighbor, adjacencyList)


def dfs(adjacencyList: defaultdict, fortniteID: int) -> None:
    # ensure fortnite is always the first source
    visit(fortniteID, adjacencyList)

    # visit everything else 
    for node in adjacencyList:
        if node in visited: continue
        visit(node, adjacencyList)


def bfs(adjacencyList: defaultdict, source: int) -> None:
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

def bfsstarter(adjacencyList: defaultdict, fortniteID: int) -> None:
    bfs(adjacencyList, fortniteID)

    for node in adjacencyList:
        if node in visited: continue
        bfs(adjacencyList, node)

# rather than visualizing *every* connection, what if i only visualized the paths to fortnite?
# need to do a depth first search to find all strongly connected components

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
        adjacencyList[gameID].append(COgameID)

    # some franchises might have no neighbors, manually add them to the adjacency list
    for id, _ in franchises:
        if id in adjacencyList: continue
        adjacencyList[id] = []

    # get Fortnite's ID to make sure that is the first source for dfs
    cursor.execute("SELECT id FROM game WHERE name = 'Fortnite';")
    fortniteID: int = cursor.fetchall()[0][0]

    sys.setrecursionlimit(5000) 
    bfsstarter(adjacencyList, fortniteID)



    # construct the dfs tree (todo: make this bfs because the dfs tree probably sucks)
    dfsTree: defaultdict = defaultdict(list)
    for node in parent:
        if parent[node] == node: continue
        dfsTree[parent[node]].append(node)

    # print(dfsTree)
    # with open('temp.json', 'w') as f:
    #     json.dump(dict(dfsTree), f, indent=4)

    # sys.exit(0)
    print(f"bfs completed, generating graph")

    # build graph and get final positions of all nodes (because calculating this live takes too long. on my machine, this takes anywhere from 10 to 40 seconds depending on the algorithm)
    # todo: make this return positions in 3D and make a three.js representation?
    G: networkx.Graph = networkx.Graph(dfsTree)
    positions: dict[int, list] = networkx.kamada_kawai_layout(G, dim=3)

    #     # Debug: Check coordinate ranges
    # x_coords = [pos[0] for pos in positions.values()]
    # y_coords = [pos[1] for pos in positions.values()]
    # z_coords = [pos[2] for pos in positions.values()]

    # print(f"X range: {min(x_coords):.6f} to {max(x_coords):.6f}")
    # print(f"Y range: {min(y_coords):.6f} to {max(y_coords):.6f}")
    # print(f"Z range: {min(z_coords):.6f} to {max(z_coords):.6f}")

    # sys.exit(0)
    
    #networkx.spring_layout(G, k=0.3, dim=3, interations=100)

    print("finished calculating positions, proceeding to create gzip file")
    
    # for 3d networkx.kamada_kawai_layout(G, dim=3) # 

    # give isolated nodes random 3D positions
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
            "value": len(dfsTree[id]),
            "position": [float(c) for c in positions[id]]
        })

        if len(positions[id]) != 3:
            raise ValueError("len is", len(positions[id]))

        for neighbor in dfsTree[id]:
            edges.append({"source": id, "target": neighbor})


    graphData: dict[str, list] = {"nodes": nodes, "links": edges}
    jsonString: str = json.dumps(graphData, separators=(',', ':')) # disallow spaces between the key and values and commas and stuff to further reduce space
    compressedGraph: bytes = gzip.compress(jsonString.encode(('utf-8')))

    with open('backend/bfsgraph_kk.gz', 'wb') as file:
        file.write(compressedGraph)