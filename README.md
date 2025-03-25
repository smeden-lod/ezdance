# version simplifiée de ezDance

## pour exécuter
taper `flask --app ez --debug run` dans un terminal ouvert dans le dossier courant. Puis Ctrl-click sur l'url http://127.0.0.1:5000


## todo

1. Lélio : accueil/consulter/click sur une choré. ça t'amène à la vue jouer.html avec le code de la choré (séquence des numéros de clips) passé en paramètre. jouer.js récupère ce code dans `code_chor.textContent` sous forme d'une str. Ta mission : reprendre le boulot fait dans app.js pour que le player joue la séquence de clips dans l'ordre donné par `code_chor.textContent`.
2. Margot : dans save_clip.py, tu complètes le code pour sauver une vidéo. Pour l'instant ça écrit dans videos_modif.json. Quand ce sera bon, on fera une MAJ de videos.json.
Puis on remplacera "jean-michel" par id_user comme défini à la connexion, et on remplacera "code_chor" par ce qui sera renvoyé par app.js de Lélio.   

