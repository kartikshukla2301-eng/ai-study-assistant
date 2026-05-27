import jwt from "jsonwebtoken";
import User from "../models/User.js";
import asyncHandler from "./asyncHandler.js";

export const protect = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) {
    res.status(401);
    throw new Error("Authentication required");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET || "development-secret-change-me");
  const user = await User.findById(decoded.id).select("-password");
  if (!user) {
    res.status(401);
    throw new Error("User session is no longer valid");
  }
  req.user = user;
  next();
});
