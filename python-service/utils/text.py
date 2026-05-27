import re
from collections import Counter


def normalize_text(text: str) -> str:
    return re.sub(r"\s+", " ", text or "").strip()


def extract_topics(text: str, limit: int = 12) -> list[str]:
    words = re.findall(r"\b[A-Za-z][A-Za-z0-9]{4,}\b", text or "")
    ignored = {"which", "there", "their", "about", "where", "these", "those", "study", "notes"}
    counts = Counter(word.lower() for word in words if word.lower() not in ignored)
    return [word.title() for word, _count in counts.most_common(limit)]


def extract_formulas(text: str, limit: int = 10) -> list[str]:
    formulas = re.findall(r"[A-Za-z0-9()^+\-*/. ]+\s*=\s*[A-Za-z0-9()^+\-*/. ]+", text or "")
    return [normalize_text(formula)[:160] for formula in formulas[:limit]]


def summarize(text: str, max_sentences: int = 5) -> str:
    clean = normalize_text(text)
    if not clean:
        return "No readable text was found."
    sentences = re.split(r"(?<=[.!?])\s+", clean)
    selected = [sentence for sentence in sentences if sentence][:max_sentences]
    return " ".join(selected) if selected else clean[:700]
