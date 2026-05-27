from pathlib import Path
from PIL import Image


def extract_image_text(path: str | Path) -> str:
    try:
        import pytesseract

        image = Image.open(path)
        return pytesseract.image_to_string(image).strip()
    except Exception as exc:
        return f"OCR could not run locally. Install Tesseract OCR and ensure it is on PATH. Details: {exc}"


def detect_numbers(text: str) -> list[str]:
    import re

    return re.findall(r"[-+]?\d*\.?\d+(?:e[-+]?\d+)?", text or "", flags=re.IGNORECASE)
