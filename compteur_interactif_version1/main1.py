from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()
counter = 0

# Dossier static
app.mount("/static1", StaticFiles(directory="static1"), name="static1")

@app.get("/")
def index():
    return FileResponse("static1/index1.html")

@app.get("/counter")
def get_counter():
    return {"counter": counter}

@app.post("/counter/{action}")
def update_counter(action: str):
    global counter
    if action == "inc":
        counter += 1
    elif action == "dec":
        counter -= 1
    return {"counter": counter}