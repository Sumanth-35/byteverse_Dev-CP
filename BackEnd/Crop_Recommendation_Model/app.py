from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)


@app.route('/predict', methods=['POST'])
def predict():
    with open('NBClassifier.pkl', 'rb') as file:
        model = pickle.load(file)

    data = request.get_json()

    prediction = model.predict(np.array([[
        data['temperature'],
        data['rainfall'],
        data['nitrogen'],
        data['phosphorous'],
        data['potassium'],
        data['ph'],
        data['humidity']
    ]]))


    return jsonify({'prediction': prediction[0]})


if __name__ == '__main__':
    app.run(debug=True)