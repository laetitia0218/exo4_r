from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()
counter = 0

# Dossier static pour HTML et JS
app.mount("/static", StaticFiles(directory="static"), name="static")

# Page d'accueil
@app.get("/")
def index():
    return FileResponse("static/index.html")

# Récupérer la valeur du compteur
@app.get("/counter")
def get_counter():
    return {"counter": counter}

# Incrémenter ou décrémenter le compteur
@app.post("/counter/{action}")
def update_counter(action: str):
    global counter
    if action == "inc":
        counter += 1
    elif action == "dec":
        counter -= 1
    return {"counter": counter}
