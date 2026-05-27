import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${unique}${path.extname(file.originalname).toLowerCase()}`);
  }
});

export const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ["application/pdf", "image/png", "image/jpeg", "image/webp", "text/plain", "text/markdown"];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Only PDF, image, and text notes are supported"));
  }
});
