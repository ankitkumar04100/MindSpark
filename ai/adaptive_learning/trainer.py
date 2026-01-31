import pandas as pd
import tensorflow as tf
from model import build_model

data = pd.read_csv("training_data.csv")

X = data.drop("score", axis=1)
y = data["score"]

model = build_model(X.shape[1])

model.fit(
    X,
    y,
    epochs=50,
    batch_size=4,
    verbose=1
)

model.save("adaptive_model.h5")
print("Model trained and saved successfully")
