from backend.app.models.ParaphraseRequestModel import ParaphraseRequestModel
from backend.app.networks import Summary
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
async def paraphrase(data: ParaphraseRequestModel):
    summary: Summary = Summary()
    print(data)
    summarized_data = summary.generate_summary(data.text, data.sentences_to_return)
    return {"text": data.text,
            "summarized": summarized_data}


@router.post('/t5_paraphrase', tags=['ml_models_endpoint'])
async def t5_summary(data: ParaphraseRequestModel):
    model: T5Summary = models['t5']
    text = model.summarize(ParaphraseRequestModel.text, 50, 100)[0]['summary_text']
    return {'text': data.text,
            'summarized': text}
