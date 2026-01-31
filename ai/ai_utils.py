from adaptive_learning.predictor import predict_score
from analytics_ai.progress_analyzer import analyze_progress
from analytics_ai.recommendations import recommend_next_lesson

def full_ai_analysis(time_spent, attempts, previous_score, history_scores, level):
    predicted = predict_score(time_spent, attempts, previous_score)
    progress = analyze_progress(history_scores)
    recommendation = recommend_next_lesson(level)

    return {
        "predicted_score": predicted,
        "progress_status": progress,
        "next_recommendation": recommendation
    }
