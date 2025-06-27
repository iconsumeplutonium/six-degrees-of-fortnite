from contextlib import asynccontextmanager
from fastapi import FastAPI, Request, HTTPException
import urllib.parse, json
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Response

AllPaths: dict[str, list[dict[str, str]]]
GraphData: Response

# runs this function on server startup
@asynccontextmanager
async def lifespan(app: FastAPI):
    global AllPaths, GraphData

    # load all shortest paths
    with open('text/AllPaths.json', 'r') as file:
        AllPaths = json.load(file)

    # load graph data
    with open('text/graph.gz', 'rb') as file:
        GraphData = Response(
            content=file.read(),
            media_type="application/json",
            headers={"Content-Encoding": "gzip"}
        )
    
    yield

api: FastAPI = FastAPI(lifespan=lifespan)
api.add_middleware(
    CORSMiddleware, 
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@api.post("/path/{franchise}")
async def GetPath(franchise: str, request: Request, minLinkType: int = 9999999):
    if franchise not in AllPaths:
        raise HTTPException(status_code=404, detail="Franchise not found")
    
    franchise = urllib.parse.unquote(franchise)
    return AllPaths[franchise]

# returns the gzip-compressed json representation of the graph (with node positions precalculated)
@api.get("/graph")
async def GetGraph(request: Request):
    return GraphData