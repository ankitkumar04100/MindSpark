from fastapi import APIRouter
from app.database import get_db
from app.utils import adaptive_feedback

router = APIRouter()

@router.get("/")
def get_quizzes():
    db = get_db()
    quizzes = db.execute("SELECT * FROM quizzes").fetchall()
    return {"quizzes": [dict(q) for q in quizzes]}


@router.post("/submit")
def submit_quiz(score: int):
    feedback = adaptive_feedback(score)
    return {
        "score": score,
        "feedback": feedback
    }
