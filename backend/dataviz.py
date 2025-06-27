import sqlite3, json, gzip, sys, random, networkx, argparse, time
from collections import defaultdict, deque
from tqdm import tqdm

conn: sqlite3.Connection = sqlite3.connect('backend/crossovers.db')
cursor: sqlite3.Cursor = conn.cursor()

def GetAdjList_ShortestPathsOnly() -> dict[int, list]:
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

        if len(path) == 0:
            adjacencyList[source] = set()
            continue

        for p in path:
            targetID: int = nameToID[p["name"]]
            adjacencyList[source].add(targetID)

            source = int(targetID)

    # convert sets to lists in adjacency list
    for key in adjacencyList:
        adjacencyList[key] = list(adjacencyList[key])

    return adjacencyList

def WriteCompressedGraph(graphData: dict[str, list], filename: str) -> None:
    # compresses the entire graph with gzip encoding
    # disallow spaces between the key and values and commas and stuff to further reduce space
    jsonString: str = json.dumps(graphData, separators=(',', ':'))
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

    # creates an adjacency list comprised of all type 1 links
    # then runs bfs on it and visualizes all strongly connected components
    if args.all_type_one_links:
        # adjacencyList: dict[int, list] = GetAdjList_AllType1Links()
        adjacencyList: dict[int, list] = GetAdjList_ShortestPathsOnly()

        print(f"bfs completed, generating graph at {time.strftime('%H:%M:%S')}")
        G: networkx.Graph = networkx.Graph(adjacencyList)
        positions: dict[int, list] = networkx.spring_layout(G, dim=3, seed=40, iterations=50) # type: ignore
        print(f"finished calculating positions at {time.strftime('%H:%M:%S')}, proceeding to create gzip file")

        cursor.execute("SELECT id, name FROM game;")
        franchises = cursor.fetchall()
        # construct the json representation of the graph
        nodes: list[dict] = []
        edges: list[dict] = []
        for id, name in franchises:
            nodes.append({
                "id": id, 
                "name": name, 
                "value": max(G.degree[id], 0), # number of connections this node has (used in visualizer to make node larger with more connections) # type: ignore
                "position": [float(c) for c in positions[id]] # forgot why i did this, i think its because this is a numpy array by default? 
            })

            for neighbor in adjacencyList[id]:
                edges.append({"source": id, "target": neighbor})


        graphData: dict[str, list] = {"nodes": nodes, "links": edges}
        WriteCompressedGraph(graphData, "backend/shortestonlytest_spring_s40_i50.gz")


    if args.shortest_paths_only:
        adjacencyList: dict[int, list] = GetAdjList_ShortestPathsOnly()
        pass
