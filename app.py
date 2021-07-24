from flask import Flask, render_template, request
from stories import *

app = Flask(__name__)

@app.route('/')
def home():
    base_story = story
    return render_template('home.html', story=base_story)

@app.route('/story')
def write_story():
    display_text = story.generate(request.args)
    return render_template('results.html', result=display_text)