from adaptive_learning.predictor import predict_score

def test_prediction_output():
    score = predict_score(20, 2, 40)
    assert isinstance(score, float)
