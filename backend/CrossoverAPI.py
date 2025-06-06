from contextlib import asynccontextmanager
from fastapi import FastAPI, Request, HTTPException
from . import search
import urllib.parse
from fastapi.middleware.cors import CORSMiddleware
import sys

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
async def GetPath(franchise: str, request: Request, minLinkType: int = 9999999):
    if franchise not in search.adj:
        raise HTTPException(status_code=404, detail="Franchise not found")
    
    franchise = urllib.parse.unquote(franchise)

    return search.bfs(search.idFromName[franchise], minLinkType, False) 