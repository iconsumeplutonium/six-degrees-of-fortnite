from contextlib import asynccontextmanager
from fastapi import FastAPI, Request, HTTPException
from . import search
import urllib.parse
from fastapi.middleware.cors import CORSMiddleware

@asynccontextmanager
async def lifespan(app: FastAPI):
    search.setup()
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
async def getPath(franchise: str, request: Request, minLinkType: int | None = None):
    if franchise not in search.adj:
        raise HTTPException(status_code=404, detail="Franchise not found")
    
    if not minLinkType: 
        minLinkType = float('inf')
    
    franchise = urllib.parse.unquote(franchise)

    return search.bfs(search.idFromName[franchise], minLinkType, False) 