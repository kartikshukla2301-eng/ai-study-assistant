import { generateStudyContent } from "../services/aiService.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const generateStudy = asyncHandler(async (req, res) => {
  const { topic, mode, options } = req.body;
  if (!topic?.trim()) {
    res.status(400);
    throw new Error("Topic is required");
  }
  res.json({ content: generateStudyContent(topic, mode, options) });
});
