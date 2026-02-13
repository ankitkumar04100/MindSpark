from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/recommendations", tags=["AI Recommendations"])

class RecommendationRequest(BaseModel):
    studentId: str
    topic: str
    performance: float


class RecommendationResponse(BaseModel):
    nextDifficulty: int
    recommendedTopics: List[str]
    message: str


@router.post("/adaptive", response_model=RecommendationResponse)
async def adaptive_recommendation(payload: RecommendationRequest):

    if payload.performance > 0.85:
        difficulty = 9
        message = "You're excelling! Time for advanced challenges."
    elif payload.performance > 0.6:
        difficulty = 7
        message = "Great work! Keep improving."
    else:
        difficulty = 4
        message = "Let's strengthen the basics."

    return RecommendationResponse(
        nextDifficulty=difficulty,
        recommendedTopics=[
            payload.topic,
            "Concept Reinforcement",
            "Critical Thinking"
        ],
        message=message
    )
