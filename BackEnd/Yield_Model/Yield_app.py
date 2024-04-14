from flask import Flask, request
from flask_cors import CORS

import numpy as np
import pickle


model = pickle.load(open('dtr.pkl', 'rb'))
preprocessor = pickle.load(open('preprocessor.pkl', 'rb'))


app = Flask(__name__)
CORS(app, resources={r"/*": {"origin": "*"}})



@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    features = np.array([ data['Year'],data['average_rain_fall_mm_per_year'], data['pesticides_tonnes'], data['avg_temp'], data['Area'], data['Item']], dtype=object)
    transformed_features = preprocessor.transform(features)
    prediction = model.predict(transformed_features).reshape(1, -1)
    return str(prediction[0])


if __name__ == '__main__':
    app.run(port=7000, debug=True)