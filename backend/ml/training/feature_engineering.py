"""
Feature Engineering Module
Transforms raw student data into ML-ready features
"""

import pandas as pd


class FeatureEngineer:

    @staticmethod
    def preprocess(df: pd.DataFrame) -> pd.DataFrame:
        """
        Clean dataset and create derived features
        """

        df = df.copy()

        # Basic feature cleaning
        df["accuracy_rate"] = df["correct_answers"] / df["total_questions"]
        df["engagement_score"] = (
            df["time_spent_minutes"] / (df["total_questions"] + 1)
        )

        # Fill missing values safely
        df.fillna(0, inplace=True)

        return df

    @staticmethod
    def select_features(df: pd.DataFrame):
        features = [
            "accuracy_rate",
            "engagement_score",
            "previous_mastery",
        ]

        return df[features], df["target_difficulty"]
