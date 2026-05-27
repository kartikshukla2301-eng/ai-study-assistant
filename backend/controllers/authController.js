import Settings from "../models/Settings.js";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { verifyGoogleCredential } from "../services/googleAuthService.js";

const sessionPayload = (user) => ({ user, token: generateToken(user._id) });

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Name, email, and password are required");
  }

  const exists = await User.findOne({ email });
  if (exists) {
    res.status(409);
    throw new Error("Email is already registered");
  }

  const user = await User.create({ name, email, password });
  await Settings.create({ user: user._id });
  res.status(201).json(sessionPayload(user));
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  res.json(sessionPayload(user));
});

export const googleLogin = asyncHandler(async (req, res) => {
  const { credential } = req.body;
  if (!credential) {
    res.status(400);
    throw new Error("Google credential is required");
  }

  const profile = await verifyGoogleCredential(credential);
  let user = await User.findOne({ email: profile.email });

  if (!user) {
    user = await User.create({
      name: profile.name,
      email: profile.email,
      authProvider: "google",
      googleId: profile.googleId,
      avatar: profile.avatar
    });
    await Settings.create({ user: user._id });
  } else {
    user.googleId = user.googleId || profile.googleId;
    user.avatar = profile.avatar || user.avatar;
    await user.save();
    await Settings.findOneAndUpdate({ user: user._id }, { $setOnInsert: { user: user._id } }, { upsert: true, new: true });
  }

  res.json(sessionPayload(user));
});

export const me = asyncHandler(async (req, res) => {
  res.json({ user: req.user });
});
