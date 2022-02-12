from pydantic import BaseModel


class ParaphraseRequestModel(BaseModel):
    text: str
    sentences_to_return: int


class T5SummaryRequestModel(BaseModel):
    text: str
    min_length: int
    max_length: int
