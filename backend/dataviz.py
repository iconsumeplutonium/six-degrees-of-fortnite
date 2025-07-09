import sqlite3, json, gzip, networkx, time, numpy
from collections import defaultdict
from tqdm import tqdm

conn: sqlite3.Connection = sqlite3.connect('text/crossovers.db')
cursor: sqlite3.Cursor = conn.cursor()

def GetAdjListShortestPaths() -> dict[int, list]:
    with open('text/AllPaths.json', 'r') as file:
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
        source: int = int(nameToID[sourceName])

        if not AllPaths[sourceName]["found"]:
            adjacencyList[source] = set()
            continue

        path: list[dict[str, str]] = AllPaths[sourceName]["path"]
        for p in path:
            targetID: int = nameToID[p["name"]]
            adjacencyList[source].add(targetID)

            source = int(targetID)

    # convert sets to lists in adjacency list
    for key in adjacencyList:
        adjacencyList[key] = list(adjacencyList[key])  # type: ignore

    return adjacencyList


def WriteCompressedGraph(graphData: dict[str, list|dict], filename: str) -> None:
    # compresses the entire graph with gzip encoding
    # disallow spaces between the key and values and commas and stuff to further reduce space
    jsonString: str = json.dumps(graphData, separators=(',', ':'))
    compressedGraph: bytes = gzip.compress(jsonString.encode(('utf-8')))
    with open(filename, 'wb') as file:
        file.write(compressedGraph)


def GetShortestPathsAsIDs() -> dict[int, list[int]]:
    with open('text/AllPaths.json', 'r') as file:
        AllPaths: dict[str, dict] = json.load(file)
    
    # get all franchise IDs
    cursor.execute("SELECT id, name FROM game;")
    franchises = cursor.fetchall()

    # setup
    idToName: dict[int, str] = {}
    nameToID: dict[str, int] = {}
    for id, name in franchises:
        idToName[id] = name
        nameToID[name] = id

    ShortestPathsAsIDs: dict[int, list] = {}
    for id, name in franchises:
        idPath: list[int] = []

        if AllPaths[name]["found"]:
            path: list[dict] = AllPaths[name]["path"] # type: ignore
            for p in path:
                idPath.append(nameToID[p["name"]])
        
        ShortestPathsAsIDs[id] = idPath

    return ShortestPathsAsIDs

if __name__ == "__main__":
    # create adjacency list using AllPaths.json    
    adjacencyList: dict[int, list] = GetAdjListShortestPaths()

    print(f"Starting graph generation at {time.strftime('%H:%M:%S')}")
    G: networkx.Graph = networkx.Graph(adjacencyList)
    positions: dict[int, numpy.ndarray] = networkx.spring_layout(G, dim=3, seed=40, iterations=100) # type: ignore
    print(f"Finished calculating positions at {time.strftime('%H:%M:%S')}, proceeding to create gzip file")

    # get the position of the fortnite node so the graph can be centered around it
    cursor.execute("SELECT id FROM game WHERE name = 'Fortnite';")
    fID: int = cursor.fetchall()[0][0]
    offset: list[float] = list(positions[fID])

    # construct the json representation of the graph
    cursor.execute("SELECT id, name FROM game;")
    franchises = cursor.fetchall()
    nodes: list[dict] = []
    edges: list[dict] = []
    paths: dict[int, list[int]] = GetShortestPathsAsIDs()
    for id, name in franchises:
        nodes.append({
            "id": id, 
            "name": name, 
            "value": G.degree[id], # number of connections this node has (used in visualizer to make node larger with more connections) # type: ignore
            "position": [float(positions[id][i]) - offset[i] for i in range(3)]
        })

        for neighbor in adjacencyList[id]:
            edges.append({"source": id, "target": neighbor})


    graphData: dict[str, list|dict] = {"nodes": nodes, "links": edges, "paths": paths}
    WriteCompressedGraph(graphData, "text/graph.gz")