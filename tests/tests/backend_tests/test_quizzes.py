from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_quizzes():
    response = client.get("/quizzes/")
    assert response.status_code == 200
    assert "quizzes" in response.json()


def test_submit_quiz():
    response = client.post("/quizzes/submit", params={"score": 75})
    assert response.status_code == 200
    assert "feedback" in response.json()
