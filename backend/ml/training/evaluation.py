"""
Model Training Script
Trains adaptive difficulty prediction model
"""

import pandas as pd
import joblib
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

from feature_engineering import FeatureEngineer


MODEL_PATH = "../models/adaptive_model.pkl"


def train():

    # Load dataset
    df = pd.read_csv("../../data/training_dataset.csv")

    # Feature Engineering
    df = FeatureEngineer.preprocess(df)
    X, y = FeatureEngineer.select_features(df)

    # Train/Test Split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    # Model
    model = RandomForestRegressor(
        n_estimators=100,
        max_depth=5,
        random_state=42
    )

    model.fit(X_train, y_train)

    # Save model
    joblib.dump(model, MODEL_PATH)

    print("Model training complete.")
    print(f"Model saved to {MODEL_PATH}")

    return model, X_test, y_test


if __name__ == "__main__":
    train()
