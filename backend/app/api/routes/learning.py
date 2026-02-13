from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/learning", tags=["Learning"])

class Question(BaseModel):
    id: str
    difficulty: int
    topic: str
    content: str


class AnswerSubmission(BaseModel):
    questionId: str
    selectedAnswer: str
    correctAnswer: str


@router.get("/questions/{topic}", response_model=List[Question])
async def get_questions(topic: str):
    # Production → Fetch from DB
    return [
        {
            "id": "q1",
            "difficulty": 5,
            "topic": topic,
            "content": "What is 2 + 2?"
        }
    ]


@router.post("/submit")
async def submit_answer(payload: AnswerSubmission):
    is_correct = payload.selectedAnswer == payload.correctAnswer

    return {
        "correct": is_correct,
        "message": "Correct!" if is_correct else "Try again."
    }
