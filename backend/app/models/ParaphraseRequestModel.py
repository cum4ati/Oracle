from pydantic import BaseModel


class ParaphraseRequestModel(BaseModel):
    text: str
    sentences_to_return: int
