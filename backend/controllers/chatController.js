import Chat from "../models/Chat.js";
import Message from "../models/Message.js";
import Settings from "../models/Settings.js";
import { generateChatReply } from "../services/aiService.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const listChats = asyncHandler(async (req, res) => {
  let chats = await Chat.find({ user: req.user._id }).sort({ updatedAt: -1 });
  if (chats.length === 0) {
    const chat = await Chat.create({ user: req.user._id, title: "First study chat" });
    chats = [chat];
  }
  res.json({ chats });
});

export const createChat = asyncHandler(async (req, res) => {
  const chat = await Chat.create({ user: req.user._id, title: req.body.title || "New study chat" });
  res.status(201).json({ chat });
});

export const getChat = asyncHandler(async (req, res) => {
  const chat = await Chat.findOne({ _id: req.params.id, user: req.user._id });
  if (!chat) {
    res.status(404);
    throw new Error("Chat not found");
  }
  const messages = await Message.find({ chat: chat._id, user: req.user._id }).sort({ createdAt: 1 });
  res.json({ chat, messages });
});

export const addMessage = asyncHandler(async (req, res) => {
  const { content } = req.body;
  if (!content?.trim()) {
    res.status(400);
    throw new Error("Message content is required");
  }

  const chat = await Chat.findOne({ _id: req.params.id, user: req.user._id });
  if (!chat) {
    res.status(404);
    throw new Error("Chat not found");
  }

  await Message.create({ chat: chat._id, user: req.user._id, role: "user", content });
  const history = await Message.find({ chat: chat._id, user: req.user._id }).sort({ createdAt: 1 }).limit(12);
  const settings = await Settings.findOne({ user: req.user._id });
  const reply = generateChatReply({ content, history, style: settings?.aiResponseStyle || "balanced" });
  await Message.create({ chat: chat._id, user: req.user._id, role: "assistant", content: reply });

  chat.lastMessage = content.slice(0, 140);
  if (chat.title === "New study chat" || chat.title === "First study chat") chat.title = content.slice(0, 42);
  await chat.save();

  const messages = await Message.find({ chat: chat._id, user: req.user._id }).sort({ createdAt: 1 });
  res.status(201).json({ chat, messages });
});

export const deleteChat = asyncHandler(async (req, res) => {
  const chat = await Chat.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!chat) {
    res.status(404);
    throw new Error("Chat not found");
  }
  await Message.deleteMany({ chat: req.params.id, user: req.user._id });
  res.json({ ok: true });
});
