from bottle import route, run, view
from datetime import datetime as dt
from random import random
from horoscope import generate_prophecies

@route("/")
@view("predictions")
def index():
    now = dt.now()
    x = random()
    p = generate_prophecies(5, 3)
    return {
        "date": f"{now.year}-{now.month}-{now.day}",
        "predictions": p,
        "special_date": x > 0.5,
        "x": x,
    }

@route("/api/test")
def api_test():
    return{"test": True}

@route("/about")
@view("about")
def about():
    return {}

@route("/api/forecasts")
def api_forecasts():
    p = generate_prophecies(6, 2)
    return{"prophecies": p}

run(
    host="localhost",
    port=8080,
    debug=True,
    reloader=True
)