import sqlite3, json
import gzip
from collections import defaultdict
import networkx

def GetCrossoversInGraphFormat():
    conn: sqlite3.Connection = sqlite3.connect('crossovers.db')
    cursor: sqlite3.Cursor = conn.cursor()

    # get all franchise IDs
    cursor.execute("SELECT id, name FROM game;")
    franchises = cursor.fetchall()

    # get all links
    cursor.execute("SELECT gameID, COgameID FROM links;")
    all_links = cursor.fetchall()

    # construct adjacency list 
    adjacencyList = defaultdict(list)
    for gameID, COgameID in all_links:
        adjacencyList[gameID].append(COgameID)

    # some franchises might have no neighbors, manually add them to the adjacency list
    for id, _ in franchises:
        if id in adjacencyList: continue
        adjacencyList[id] = []


    # build graph and get final positions of all nodes
    G: networkx.Graph = networkx.Graph(adjacencyList)
    positions: dict[int, list] = networkx.spectral_layout(G)

    nodes: list[dict] = []
    edges: list[dict] = []
    for id, name in franchises:
        nodes.append({
            "id": id, 
            "name": name, 
            "value": len(adjacencyList[id]),
            "position": list(positions[id])
        })

        for neighbor in adjacencyList[id]:
            edges.append({"source": id, "target": neighbor})


    graphData: dict[str, list] = {"nodes": nodes, "links": edges}
    jsonString: str = json.dumps(graphData, separators=(',', ':')) # disallow spaces between the key and values and commas and stuff to further reduce space
    compressedGraph: bytes = gzip.compress(jsonString.encode(('utf-8')))

    with open('graph.gzip', 'wb') as file:
        file.write(compressedGraph)


    # print(position_list)

    # # Construct nodes and edges
    # nodes = []
    # edges = []

    # for id, name in games:
    #     connections = link_map[id]
    #     value: int = len(connections)
    #     nodes.append({"id": id, "name": name, "value": value})

    #     for c in connections:
    #         edges.append({"source": id, "target": c})

    # graphData: dict[str, list] = {"nodes": nodes, "links": edges}
    # jsonString: str = json.dumps(graphData, separators=(',', ':')) # disallow spaces between the key and values and commas and stuff to further reduce space
    
    # return gzip.compress(jsonString.encode(('utf-8')))

GetCrossoversInGraphFormat()