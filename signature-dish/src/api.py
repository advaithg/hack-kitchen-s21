from flask import Flask
import json

#__garlic__

app = Flask(__name__)

@app.route('/call1')
def makeCall1():
    return json.dumps({
        "imgUrl":'/chicken.jpg',
        "imgName": 'MEATURBALIZZA'
    })

@app.route('/call2')
def makeCall2():
    return json.dumps({
        "imgUrl": '/chicken.jpg',
        "imgName": 'Chicken'
    })

@app.route('/call3')
def makeCall3():
    return "todo" #todo

@app.route('/call4')
def makeCall4():
    return "todo" #todo

@app.route('/call5')
def makeCall5():
    return "todo" #todo

if __name__ == "__main__":
    app.run(debug=True)
