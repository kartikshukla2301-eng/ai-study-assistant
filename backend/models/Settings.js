import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    theme: { type: String, default: "glass" },
    accentColor: { type: String, default: "" },
    fontScale: { type: Number, default: 1 },
    animations: { type: Boolean, default: true },
    aiResponseStyle: { type: String, enum: ["balanced", "exam", "concise", "deep", "code"], default: "balanced" }
  },
  { timestamps: true }
);

export default mongoose.model("Settings", settingsSchema);
