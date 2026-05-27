import fs from "fs/promises";
import pdf from "pdf-parse";
import { analyzeWithPythonService } from "./pythonService.js";

function summarizeText(text) {
  const normalized = text.replace(/\s+/g, " ").trim();
  const sentences = normalized.split(/(?<=[.!?])\s+/).filter(Boolean);
  const summary = sentences.slice(0, 4).join(" ") || normalized.slice(0, 500) || "No readable text was found.";
  const topics = [...new Set((normalized.match(/\b[A-Z][a-zA-Z]{4,}\b/g) || []).slice(0, 12))];
  const formulas = normalized.match(/[A-Za-z0-9()^+\-*/. ]+\s*=\s*[A-Za-z0-9()^+\-*/. ]+/g) || [];
  return { summary, topics, formulas: formulas.slice(0, 10) };
}

export async function analyzeFile(file) {
  try {
    const remote = await analyzeWithPythonService(file);
    return {
      filename: file.originalname,
      type: file.mimetype,
      text: remote.text || "",
      summary: remote.summary || summarizeText(remote.text || "").summary,
      topics: remote.topics || [],
      formulas: remote.formulas || [],
      source: "python-service"
    };
  } catch (_error) {
    let text = "";
    if (file.mimetype === "application/pdf") {
      const buffer = await fs.readFile(file.path);
      const parsed = await pdf(buffer);
      text = parsed.text;
    } else if (file.mimetype.startsWith("text/")) {
      text = await fs.readFile(file.path, "utf8");
    } else {
      text = "Image OCR requires the FastAPI python-service to be running.";
    }
    const analyzed = summarizeText(text);
    return {
      filename: file.originalname,
      type: file.mimetype,
      text,
      ...analyzed,
      source: "node-fallback"
    };
  }
}
