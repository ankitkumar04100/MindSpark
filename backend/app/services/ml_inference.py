import joblib
import os
import pandas as pd

MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "../../ml/models/adaptive_model.pkl"
)

class MLInferenceService:

    def __init__(self):
        self.model = joblib.load(MODEL_PATH)

    def predict_difficulty(self, accuracy_rate, engagement_score, previous_mastery):

        data = pd.DataFrame([{
            "accuracy_rate": accuracy_rate,
            "engagement_score": engagement_score,
            "previous_mastery": previous_mastery
        }])

        prediction = self.model.predict(data)[0]

        return int(round(prediction))
