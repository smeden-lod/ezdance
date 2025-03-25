import json

user_name= "jean-michel"
code_chor = "007"

with open("videos.json", 'r') as f:
    b = json.load(f)

for x in b:
    ...
    """
    si  x['id_user'] == user_name
        ajouter {"id_chor": ... , "code_chor": code_chor} à la liste x['bibli'])
        en mettant le bon numéro pour "id_chor" (compte combien y a de vids dans la biblil et ajoute 1)
    """

with open("videos_modif.json", 'w') as f:
    b = json.dump(b, f, indent=4)
