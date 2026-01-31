from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_lessons():
    response = client.get("/lessons/")
    assert response.status_code == 200
    assert "lessons" in response.json()


def test_add_lesson():
    response = client.post(
        "/lessons/add",
        params={
            "title": "AI Basics",
            "difficulty": "Beginner",
            "description": "Introduction to AI"
        }
    )
    assert response.status_code == 200
