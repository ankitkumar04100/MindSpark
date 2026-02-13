from dataclasses import dataclass


@dataclass
class MasteryInput:
    correct_answers: int
    total_questions: int
    previous_mastery: float


class MasteryModel:
    """
    Bayesian-inspired mastery update model.
    Smooth progression instead of sharp jumps.
    """

    LEARNING_RATE = 0.1

    @staticmethod
    def update_mastery(data: MasteryInput) -> float:

        if data.total_questions == 0:
            return data.previous_mastery

        accuracy = data.correct_answers / data.total_questions

        new_mastery = (
            data.previous_mastery +
            MasteryModel.LEARNING_RATE *
            (accuracy - data.previous_mastery)
        )

        return round(max(0.0, min(new_mastery, 1.0)), 4)
