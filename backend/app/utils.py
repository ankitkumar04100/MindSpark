def calculate_level(points: int) -> int:
    if points < 100:
        return 1
    elif points < 250:
        return 2
    elif points < 500:
        return 3
    else:
        return 4


def adaptive_feedback(score: int) -> str:
    if score >= 80:
        return "Excellent! You are ready for advanced content."
    elif score >= 50:
        return "Good job! Keep practicing to master this topic."
    else:
        return "Don't worry! Let's revise this lesson step by step."
