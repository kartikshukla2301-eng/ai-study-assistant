import Notes from "../models/Notes.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const listNotes = asyncHandler(async (req, res) => {
  const notes = await Notes.find({ user: req.user._id }).sort({ updatedAt: -1 });
  res.json({ notes });
});

export const createNote = asyncHandler(async (req, res) => {
  const note = await Notes.create({ user: req.user._id, ...req.body });
  res.status(201).json({ note });
});
