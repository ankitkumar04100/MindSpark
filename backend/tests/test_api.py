from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_health_endpoint():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"


def test_adaptive_endpoint():
    payload = {
        "studentId": "123",
        "topic": "math",
        "performance": 0.9
    }

    response = client.post("/ai/adaptive", json=payload)

    assert response.status_code == 200
    data = response.json()

    assert "nextDifficulty" in data
    assert "recommendedTopics" in data


def test_invalid_endpoint():
    response = client.get("/non-existent-route")
    assert response.status_code == 404
