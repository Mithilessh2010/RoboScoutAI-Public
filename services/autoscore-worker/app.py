from fastapi import FastAPI, UploadFile, File

app = FastAPI(title="RoboScoutAI Public Autoscore Worker")


@app.get("/health")
def health():
    return {
        "ok": True,
        "service": "public-worker-scaffold",
        "models": "not included in this repository",
    }


@app.post("/upload-video")
async def upload_video(file: UploadFile = File(...)):
    return {
        "filename": file.filename,
        "status": "accepted-for-public-demo",
        "note": "Production upload handling is hosted separately.",
    }
