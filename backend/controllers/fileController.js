import Notes from "../models/Notes.js";
import { analyzeFile } from "../services/fileAnalysisService.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const analyzeUpload = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error("File is required");
  }
  const analysis = await analyzeFile(req.file);
  await Notes.create({
    user: req.user._id,
    title: analysis.filename,
    content: analysis.text || analysis.summary,
    sourceType: req.file.mimetype === "application/pdf" ? "pdf" : req.file.mimetype.startsWith("image/") ? "image" : "manual",
    topics: analysis.topics,
    formulas: analysis.formulas
  });
  res.json(analysis);
});
