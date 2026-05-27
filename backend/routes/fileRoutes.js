import express from "express";
import { analyzeUpload } from "../controllers/fileController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/analyze", protect, upload.single("file"), analyzeUpload);

export default router;
