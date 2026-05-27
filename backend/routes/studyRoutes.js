import express from "express";
import { generateStudy } from "../controllers/studyController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/generate", protect, generateStudy);

export default router;
