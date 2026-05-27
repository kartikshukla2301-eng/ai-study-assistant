from pathlib import Path
from tempfile import NamedTemporaryFile

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from ai_utils import analyze_text, build_unit_breakdown
from ocr import detect_numbers, extract_image_text
from pdf_processor import extract_pdf_text

app = FastAPI(title="AI Study Assistant Python Service", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict:
    return {"ok": True, "service": "ai-study-assistant-python-service"}


@app.post("/analyze")
async def analyze(file: UploadFile = File(...)) -> dict:
    suffix = Path(file.filename or "upload").suffix
    with NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
        tmp.write(await file.read())
        tmp_path = Path(tmp.name)

    try:
        if file.content_type == "application/pdf" or suffix.lower() == ".pdf":
            text = extract_pdf_text(tmp_path)
            kind = "pdf"
        elif (file.content_type or "").startswith("image/"):
            text = extract_image_text(tmp_path)
            kind = "image"
        else:
            text = tmp_path.read_text(encoding="utf-8", errors="ignore")
            kind = "text"

        result = analyze_text(text)
        result.update(
            {
                "filename": file.filename,
                "type": file.content_type,
                "kind": kind,
                "numbers": detect_numbers(text),
                "units": build_unit_breakdown(text),
            }
        )
        return result
    finally:
        tmp_path.unlink(missing_ok=True)
