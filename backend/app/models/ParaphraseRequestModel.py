from pydantic import BaseModel


class ParaphraseRequestModel(BaseModel):
    text: str
