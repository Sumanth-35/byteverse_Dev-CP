import os
import tensorflow as tf
import numpy as np
from tensorflow import keras
# import keras
from keras.models import load_model
import keras.backend as K
import imageio
from keras import preprocessing
from keras.preprocessing import image
from flask import Flask, request,jsonify
from werkzeug.utils import secure_filename
import joblib

app = Flask(__name__)

def load_model_custom(path):
    # Load the model using Keras's low-level API
    with K.get_graph().as_default():
        model = K.models.load_model(path)
    return model
model = load_model_custom('model.h5')
# print('Model loaded. Check http://127.0.0.1:5000/')


def model_predict(img_path, model):
    img = image.load_img(img_path, grayscale=False, target_size=(64, 64))
    show_img = image.load_img(img_path, grayscale=False, target_size=(64, 64))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = np.array(x, 'float32')
    x /= 255
    preds = model.predict(x)
    return preds


@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(f.filename))
        f.save(file_path)

        # Make prediction
        preds = model_predict(file_path, model)
        print(preds[0])

        # x = x.reshape([64, 64]);
        disease_class = ['Tomato_TargetSpot', 'Tomato_Spidermites', 'Tomato_YellowLeafCurlVirus','Tomato_Bacterialspot',
                         'Tomato_Lateblight', 'Tomato_Septorialeafspot', 'Tomato_LeafMold', 'Tomato_Earlyblight',
                         'Rice_Leafsmut', 'Tomato_mosaicvirus', 'Potato_Lateblight', 'Rice_Brownspot', 'Corn_Commonrust',
                         'Corn_Grayleafspot', 'Potato_Earlyblight', 'Potato_healthy', 'Cotton_healthy',
                         'Rice_Bacterialleafblight', 'Cotton_diseasedleaf', 'Corn_healthy', 'Chilli_Healthy',
                         'Chilli_Anthracnose']
        a = preds[0]
        ind = np.argmax(a)
        print('Prediction:', disease_class[ind])
        result = disease_class[ind]
        return result
    return None


if __name__ == '__main__':
    app.run(port=5000, debug=True)

    # # Serve the app with gevent
    # http_server = WSGIServer(('', 5000), app)
    # http_server.serve_forever()
    # app.run()

#     from flask import Flask, request, jsonify
# from keras.models import load_model
# import joblib

# app = Flask(__name__)

# # Load the model
# best_model = load_model("best_model.h5")

# # Function to preprocess text input
# def preprocess_text(text):
#     # Your preprocessing steps here
#     return processed_text

# # Route for making predictions
# @app.route('/predict', methods=['POST'])
# def predict():
#     # Get the input text from the request
#     input_text = request.json['text']

#     # Preprocess the input text
#     processed_text = preprocess_text(input_text)

#     # Make prediction
#     prediction = best_model.predict(processed_text)

#     # Convert prediction to a readable format
#     # For example, if it's a classification model, you might want to convert
#     # the predicted probabilities to class labels or something similar
#     # prediction_label = convert_to_label(prediction)

#     # Return the prediction
#     return jsonify({'prediction': prediction})

# if __name__ == '__main__':
#     app.run(debug=True)
