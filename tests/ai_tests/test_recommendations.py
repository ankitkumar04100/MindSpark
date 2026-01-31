from analytics_ai.recommendations import recommend_next_lesson

def test_recommendation_level_1():
    result = recommend_next_lesson(1)
    assert "Basic" in result
