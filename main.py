# main.py

from fastapi import FastAPI, Request
from pydantic import BaseModel
from modules.extract_endpoints import extract_endpoints_from_swagger_data
from modules.match_intent import find_best_match
from modules.collect_fields import load_swagger, get_required_fields
from sentence_transformers import SentenceTransformer
import uvicorn

app = FastAPI()
SWAGGER_PATH = "swagger_specs/industrial_platform.json"
model = SentenceTransformer("all-MiniLM-L6-v2")

# ✉️ ساختار درخواست ورودی
class UserRequest(BaseModel):
    query: str

@app.post("/chatbot")
async def chatbot_endpoint(request: UserRequest):
    user_input = request.query
    swagger = load_swagger(SWAGGER_PATH)
    endpoints = extract_endpoints_from_swagger_data(swagger)
    score, matched_endpoint = find_best_match(user_input, endpoints, model)

    fields = get_required_fields(swagger, matched_endpoint["path"], matched_endpoint["method"])

    return {
        "match": matched_endpoint,
        "score": float(score),   # 👈 تبدیل به float پایتونی
        "required_fields": fields
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

