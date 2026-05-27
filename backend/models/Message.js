import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: true, index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    role: { type: String, enum: ["user", "assistant", "system"], required: true },
    content: { type: String, required: true },
    metadata: {
      source: { type: String, default: "chat" },
      tokens: { type: Number, default: 0 }
    }
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
