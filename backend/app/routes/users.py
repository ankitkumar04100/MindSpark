from fastapi import APIRouter
from app.database import get_db
from app.utils import calculate_level

router = APIRouter()

@router.get("/")
def get_users():
    db = get_db()
    users = db.execute("SELECT * FROM students").fetchall()
    return {"users": [dict(user) for user in users]}


@router.post("/add")
def add_user(name: str):
    db = get_db()
    db.execute(
        "INSERT INTO students (name, level, points) VALUES (?, ?, ?)",
        (name, 1, 0)
    )
    db.commit()
    return {"message": "User added successfully"}


@router.post("/update-points")
def update_points(user_id: int, points: int):
    level = calculate_level(points)
    db = get_db()
    db.execute(
        "UPDATE students SET points=?, level=? WHERE id=?",
        (points, level, user_id)
    )
    db.commit()
    return {"message": "Progress updated", "level": level}
