import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes.shakespeare import router

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.include_router(router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}


@app.get("/test_react")
async def test_react():
    return {"status": "succ"}
