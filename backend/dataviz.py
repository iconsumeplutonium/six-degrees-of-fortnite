import sqlite3, json, gzip, sys, random, networkx, argparse, igraph
from collections import defaultdict, deque
from tqdm import tqdm

visited: set = set()
parent: dict[int, int] = {}

conn: sqlite3.Connection = sqlite3.connect('backend/crossovers.db')
cursor: sqlite3.Cursor = conn.cursor()

def recurse(adjacencyList: dict, source: int) -> None:
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

def bfs(adjacencyList: dict, fortniteID: int) -> None:
    recurse(adjacencyList, fortniteID)

    for node in adjacencyList:
        if node in visited: continue
        recurse(adjacencyList, node)

def GetAdjList_ShortestPathsOnly() -> dict[str, list]:
    with open('backend/AllPaths.json', 'r') as file:
        AllPaths: dict = json.load(file)

    # get all franchise IDs
    cursor.execute("SELECT id, name FROM game;")
    franchises = cursor.fetchall()

    # setup
    idToName: dict[int, str] = {}
    nameToID: dict[str, int] = {}
    for id, name in franchises:
        idToName[id] = name
        nameToID[name] = id

    # construct adjacency list
    adjacencyList = defaultdict(set)
    for sourceName in tqdm(AllPaths):
        sourceID: int = nameToID[sourceName]
        path: list[dict[str, str]] = AllPaths[sourceName]

        source: int = int(sourceID)
        for p in path:
            targetID: int = nameToID[p["name"]]
            adjacencyList[source].add(targetID)

            source = int(targetID)

    # convert sets to lists in adjacency list
    for key in adjacencyList:
        adjacencyList[key] = list(adjacencyList[key])

    return adjacencyList

def GetAdjList_AllType1Links() -> dict[str, list]:
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
    
    return adjacencyList

def WriteCompressedGraph(graphData: dict[str, list], filename: str) -> None:
    # compresses the entire graph with gzip encoding
    jsonString: str = json.dumps(graphData, separators=(',', ':')) # disallow spaces between the key and values and commas and stuff to further reduce space
    compressedGraph: bytes = gzip.compress(jsonString.encode(('utf-8')))
    with open(filename, 'wb') as file:
        file.write(compressedGraph)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Precompute graph layout for visualization")
    parser.add_argument("-s", "--shortest-paths-only", action="store_true", help="Precompute graph that only uses shortest paths as edges")
    parser.add_argument("-a", "--all-type-one-links",  action="store_true", help="Precompute graph that uses all type 1 links as edges")
    args: argparse.Namespace = parser.parse_args()

    if not args.shortest_paths_only and not args.all_type_one_links:
        raise ValueError("Must specify -s and/or -a")

    
    if args.all_type_one_links:
        adjacencyList: dict[str, list] = GetAdjList_AllType1Links()

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

        # this takes up to an hour to run. todo: replace this with igraph
        G: networkx.Graph = networkx.Graph(adjacencyList)
        positions: dict[int, list] = networkx.kamada_kawai_layout(G, dim=3)

        # faster, but the layout fucking sucks: networkx.spring_layout(G, k=0.3, dim=3, interations=100)

        print("finished calculating positions, proceeding to create gzip file")
        
        # give isolated nodes random 3D positions (should probably just remove entirely)
        # for id, name in franchises:
        #     if id not in positions:
        #         positions[id] = [random.uniform(-1, 1), random.uniform(-1, 1), random.uniform(-1, 1)]

        cursor.execute("SELECT id, name FROM game;")
        franchises = cursor.fetchall()

        # construct the json representation of the graph
        nodes: list[dict] = []
        edges: list[dict] = []
        for id, name in franchises:
            nodes.append({
                "id": id, 
                "name": name, 
                "value": len(adjacencyList[id]), # number of connections this node has (used in visualizer to make node larger with more connections)
                "position": [float(c) for c in positions[id]] # forgot why i did this, i think its because this is a numpy array by default? 
            })

            if len(positions[id]) != 3:
                raise ValueError("len is", len(positions[id]))

            for neighbor in adjacencyList[id]:
                edges.append({"source": id, "target": neighbor})


        graphData: dict[str, list] = {"nodes": nodes, "links": edges}
        WriteCompressedGraph(graphData, "backend/bfsgraph_alltype1.gz")


    if args.shortest_paths_only:
        adjacencyList: dict[str, list] = GetAdjList_ShortestPathsOnly()
        pass
