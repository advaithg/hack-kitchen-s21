from flask import Flask, request
import json
import numpy as np
from csv import writer

#__garlic__

app = Flask(__name__)

@app.route('/call0')
def makeCall0():
    return json.dumps({
        'imgUrl': '/placeholder.png',
        'imgName': 'GAREGGUCKENIZZA'
    })

@app.route('/call1')
def makeCall1():
    return json.dumps({
        'imgUrl': '/garlic.jpg',
        'imgName': 'GARLIC | लहसुन'
    })

@app.route('/call2')
def makeCall2():
    return json.dumps({
        'imgUrl': '/egg.jpg',
        'imgName': 'EGG | अंडा'
    })

@app.route('/call3')
def makeCall3():
    return json.dumps({
        'imgUrl': '/duck.jpg',
        'imgName': 'DUCK | द्वंद्व'
    })

@app.route('/call4')
def makeCall4():
    return json.dumps({
        'imgUrl': '/chicken.jpg',
        'imgName': 'CHICKEN | मुर्गी'
    })

@app.route('/call5')
def makeCall5():
    return json.dumps({
        'imgUrl': '/pizza.jpg',
        'imgName': 'PIZZA | पिज़्ज़ा'
    })

@app.route('/validate')
def validate():
    uname = request.args.get('username')
    pwd = request.args.get('password')
    msg = ""
    with open ('./loginData.csv', newline='') as csvfile:
        line = np.loadtxt('./loginData.csv', delimiter=',')[:, 0]
        
        if uname not in line:
            msg = "New"
            with open("./loginData.csv", "a") as csvfile:
                writer(csvfile).writerow([uname, pwd])
        else:
            msg = "Exists"
        
    return json.dumps({
        'msg': msg
    }) 

if __name__ == "__main__":
    app.run(debug=True)