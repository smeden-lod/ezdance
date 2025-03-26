from flask import Flask, render_template, redirect, request
import json, os


SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
app = Flask(__name__, static_url_path='', static_folder="./static")

with open(os.path.join(SITE_ROOT, "utilisateurs.json"), "r") as users_database_file:
    user_database = json.load(users_database_file)

def user_database_write() -> bool:
    with open(os.path.join(SITE_ROOT,"utilisateurs.json"), "w") as user_database_file:
        json.dump(user_database, user_database_file)

with open(os.path.join(SITE_ROOT,"videos.json"), "r") as videos_database_file:
    videos_database = json.load(videos_database_file)

def videos_database_write() -> bool:
    with open(os.path.join(SITE_ROOT,"videos.json"), "w") as videos_database_file:
        json.dump(user_database, videos_database, videos_database_file)

with open(os.path.join(SITE_ROOT,"clips.json"), "r") as clips_database_file:
    clips_database = json.load(clips_database_file)
  

@app.route("/")
def index(): 
    return render_template("index.html")

@app.route("/composer")
def composer(): 
    return render_template("composer.html")

@app.route("/consulter")
def consulter(): 
    return render_template("consulter.html", chors = videos_database["bibli"])

@app.route("/accueil")
def accueil():
    return render_template("accueil.html")
      
@app.route("/play/<int:code>")
def play(code):
    return render_template("jouer.html", vids=code)

if __name__ == "main":
    app.run(debug=True)
