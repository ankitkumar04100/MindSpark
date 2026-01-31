from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_users():
    response = client.get("/users/")
    assert response.status_code == 200
    assert "users" in response.json()


def test_add_user():
    response = client.post("/users/add", params={"name": "Test User"})
    assert response.status_code == 200
    assert response.json()["message"] == "User added successfully"
