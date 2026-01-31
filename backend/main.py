from fastapi import FastAPI
from app.routes import users, lessons, quizzes

app = FastAPI(
    title="MindSpark Backend API",
    description="AI-powered personalized learning backend",
    version="1.0.0"
)

app.include_router(users, prefix="/users", tags=["Users"])
app.include_router(lessons, prefix="/lessons", tags=["Lessons"])
app.include_router(quizzes, prefix="/quizzes", tags=["Quizzes"])

@app.get("/")
def root():
    return {
        "message": "MindSpark Backend is running",
        "status": "OK"
    }
