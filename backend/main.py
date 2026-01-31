from fastapi import FastAPI
from routes import lessons, quizzes, users

app = FastAPI(title="MindSpark API")

app.include_router(lessons.router, prefix="/lessons")
app.include_router(quizzes.router, prefix="/quizzes")
app.include_router(users.router, prefix="/users")

@app.get("/")
def home():
    return {"message": "Welcome to MindSpark API"}
