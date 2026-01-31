from fastapi import APIRouter
from app.database import get_db

router = APIRouter()

@router.get("/")
def get_lessons():
    db = get_db()
    lessons = db.execute("SELECT * FROM lessons").fetchall()
    return {"lessons": [dict(lesson) for lesson in lessons]}


@router.post("/add")
def add_lesson(title: str, difficulty: str, description: str):
    db = get_db()
    db.execute(
        "INSERT INTO lessons (title, difficulty, description) VALUES (?, ?, ?)",
        (title, difficulty, description)
    )
    db.commit()
    return {"message": "Lesson added successfully"}
