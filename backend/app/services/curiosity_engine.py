from typing import List
import random


class CuriosityEngine:
    """
    Injects curiosity-driven prompts
    to improve intrinsic motivation.
    """

    curiosity_prompts = [
        "Did you know this concept connects to real-world AI systems?",
        "Want to try a challenge slightly harder than your level?",
        "This topic is used in space research!",
        "Can you solve this faster than last time?"
    ]

    @staticmethod
    def generate_prompt() -> str:
        return random.choice(CuriosityEngine.curiosity_prompts)

    @staticmethod
    def recommend_exploration_topics(current_topic: str) -> List[str]:
        return [
            current_topic,
            "Interdisciplinary Applications",
            "Advanced Problem Solving"
        ]
