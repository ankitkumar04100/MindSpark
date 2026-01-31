from adaptive_learning.model import build_model

def test_model_creation():
    model = build_model(3)
    assert model is not None
