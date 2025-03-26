def save_chor(codechor):
    with open("videos.json", 'r') as f:
        b = json.load(f)
    b.append({"id_chor": len(b)+1, "code_chor": codechor})
    with open("videos.json", 'w') as f:
        json.dump(b, f, indent=4)
