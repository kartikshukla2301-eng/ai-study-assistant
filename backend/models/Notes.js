import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    sourceType: { type: String, enum: ["manual", "pdf", "image", "chat"], default: "manual" },
    topics: [{ type: String, trim: true }],
    formulas: [{ type: String, trim: true }]
  },
  { timestamps: true }
);

export default mongoose.model("Notes", notesSchema);
