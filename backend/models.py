from pydantic import BaseModel
from typing import List

class Student(BaseModel):
    id: int
    name: str
    level: int
    points: int

class Quiz(BaseModel):
    id: int
    lesson_id: int
    question: str
    options: List[str]
    correct_answer: str
