from utils.text import extract_formulas, extract_topics, summarize


def analyze_text(text: str) -> dict:
    topics = extract_topics(text)
    formulas = extract_formulas(text)
    return {
        "text": text,
        "summary": summarize(text),
        "topics": topics,
        "formulas": formulas,
    }


def build_unit_breakdown(text: str) -> list[dict]:
    topics = extract_topics(text, limit=8)
    return [
        {
            "unit": index + 1,
            "title": topic,
            "focus": f"Define {topic}, list key points, add one example, and prepare one diagram cue.",
        }
        for index, topic in enumerate(topics)
    ]
