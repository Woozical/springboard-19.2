from flask import Flask, render_template, request
from stories import *

app = Flask(__name__)

@app.route('/')
def home():
    base_story = story
    return render_template('home.html', story=base_story)