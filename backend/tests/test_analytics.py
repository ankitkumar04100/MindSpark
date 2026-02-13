from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_analytics_batch():
    payload = {
        "events": [
            {
                "event": "lesson_start",
                "metadata": {"topic": "math"},
                "timestamp": 1234567890.0
            },
            {
                "event": "lesson_complete",
                "metadata": {"score": 90},
                "timestamp": 1234567891.0
            }
        ]
    }

    response = client.post("/analytics/batch", json=payload)

    assert response.status_code == 200
    data = response.json()

    assert data["status"] == "received"
    assert data["count"] == 2
