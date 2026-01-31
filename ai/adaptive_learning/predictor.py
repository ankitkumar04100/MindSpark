import tensorflow as tf
import numpy as np

model = tf.keras.models.load_model("adaptive_model.h5")

def predict_score(time_spent, attempts, previous_score):
    input_data = np.array([[time_spent, attempts, previous_score]])
    prediction = model.predict(input_data)
    return round(float(prediction[0][0]), 2)
