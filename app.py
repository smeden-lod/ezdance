from flask import Flask, render_template, redirect, request
import json, os


SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
app = Flask(__name__, static_url_path='', static_folder="./static")




@app.route("/")
def index(): 
    return render_template("index.html")

@app.route("/composer")
def composer(): 
    return render_template("composer.html")

@app.route("/save", methods=['POST'])
def save():
    d = request.form['code_chor']
    with open(os.path.join(SITE_ROOT,"videos.json"), "r") as f:
        b = json.load(f)
    b.append({"id_chor": len(b)+1, "code_chor": d})
     with open(os.path.join(SITE_ROOT,"videos.json"), "w") as f:
        json.dump(b, f)   

@app.route("/consulter")
def consulter():
    return render_template("consulter.html", chors = videos_database)

@app.route("/play/<int:code>")
def play(code):
    return render_template("jouer.html", vids=code)

if __name__ == "main":
    app.run(debug=True)
