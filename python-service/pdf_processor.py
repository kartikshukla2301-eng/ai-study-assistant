from pathlib import Path
from pypdf import PdfReader


def extract_pdf_text(path: str | Path) -> str:
    reader = PdfReader(str(path))
    pages = []
    for index, page in enumerate(reader.pages, start=1):
        text = page.extract_text() or ""
        pages.append(f"\n\n--- Page {index} ---\n{text}")
    return "\n".join(pages).strip()
