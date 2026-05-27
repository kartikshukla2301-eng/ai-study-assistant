import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";
import studyRoutes from "./routes/studyRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

await connectDB();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`Origin not allowed by CORS: ${origin}`));
    },
    credentials: true
  })
);
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));

app.get("/api/health", (_req, res) => res.json({ ok: true, service: "ai-study-assistant-api" }));
app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/study", studyRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`AI Study Assistant API running on http://localhost:${port}`);
});
