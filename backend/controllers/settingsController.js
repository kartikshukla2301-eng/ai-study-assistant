import Settings from "../models/Settings.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const getSettings = asyncHandler(async (req, res) => {
  const settings = await Settings.findOneAndUpdate({ user: req.user._id }, { $setOnInsert: { user: req.user._id } }, { upsert: true, new: true });
  res.json({ settings });
});

export const updateSettings = asyncHandler(async (req, res) => {
  const settings = await Settings.findOneAndUpdate({ user: req.user._id }, req.body, { upsert: true, new: true, runValidators: true });
  res.json({ settings });
});
