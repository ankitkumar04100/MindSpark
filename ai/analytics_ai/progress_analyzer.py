def analyze_progress(scores):
    average = sum(scores) / len(scores)

    if average >= 80:
        return "Excellent progress"
    elif average >= 50:
        return "Good progress"
    else:
        return "Needs improvement"
