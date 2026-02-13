from typing import List, Dict
import statistics


class BiasDetectionService:
    """
    Detects potential bias in difficulty distribution
    across user groups.
    """

    @staticmethod
    def detect_difficulty_bias(data: List[Dict]) -> Dict:
        """
        data format:
        [
            {"group": "A", "difficulty": 7},
            {"group": "B", "difficulty": 4}
        ]
        """

        group_scores = {}

        for entry in data:
            group = entry["group"]
            group_scores.setdefault(group, []).append(entry["difficulty"])

        group_averages = {
            group: statistics.mean(scores)
            for group, scores in group_scores.items()
        }

        max_avg = max(group_averages.values())
        min_avg = min(group_averages.values())

        bias_gap = round(max_avg - min_avg, 2)

        return {
            "group_averages": group_averages,
            "bias_gap": bias_gap,
            "potential_bias_detected": bias_gap > 2
        }
