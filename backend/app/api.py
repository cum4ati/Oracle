from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .models.ParaphraseRequestModel import ParaphraseRequestModel
from .networks.Summary import Summary

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
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


@app.post('/api/paraphrase')
async def paraphrase(data: ParaphraseRequestModel):
    summary: Summary = Summary()
    print(data)
    summarized_data = summary.generate_summary(data.text)
    return {"text": data.text,
            "summarized": summarized_data}
