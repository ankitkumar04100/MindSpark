def simplify_content(level: int, content: str) -> str:
    if level == 1:
        return f"Simplified Explanation: {content}"
    elif level == 2:
        return f"Moderate Explanation: {content}"
    else:
        return f"Advanced Explanation: {content}"
