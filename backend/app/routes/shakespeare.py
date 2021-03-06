from backend.app.models.request_models import ParaphraseRequestModel, T5SummaryRequestModel
from backend.app.networks.Summary import Summary
from backend.app.networks.T5Summary import T5Summary
from fastapi import APIRouter

router = APIRouter(
    prefix="/api"
)

models = {}



@router.on_event("startup")
async def router_startup():
    models['t5'] = T5Summary()


@router.post('/paraphrase', tags=['ml_models_endpoint'])
async def paraphrase(request_data: ParaphraseRequestModel):
    summary: Summary = Summary()
    summarized_data = summary.generate_summary(request_data.text, request_data.sentences_to_return)
    return {"text": request_data.text,
            "summarized": summarized_data,
            "type": "math"}


@router.post('/t5_paraphrase', tags=['ml_models_endpoint'])
async def t5_summary(request_data: T5SummaryRequestModel):
    model: T5Summary = models['t5']
    text = model.summarize(request_data.text, request_data.min_length, request_data.max_length)[0]['summary_text']
    return {'text': request_data.text,
            'summarized': text,
            "type": "t5"}
