#!flask/bin/python
from crypt import methods
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import pandas as pd

# Model Loader
import statsmodels.api as sm

DATA_FILE = '../data/Salary_Data.csv'
MODEL_FILE = '../model/linear_regression.pickle'

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/datasets', methods=['GET'])
@cross_origin()
def get_dataset():
    df = pd.read_csv(DATA_FILE)
    x = df['YearsExperience'].tolist()
    y = df['Salary'].tolist()
    return jsonify({'x':x, 'y':y})

@app.route('/get-predicted-value', methods=['POST'])
@cross_origin()
def get_predicted_value():
    model = sm.load(MODEL_FILE)
    _intercept, _slope = model.params
    print(request.json, request.args, request.form, request.values, request.data)
    salary = (request.json['value']*_slope) + _intercept
    return jsonify({
        'y': salary
    })

if __name__ == '__main__':
    app.run(debug=True)



