import User from "../models/user.js";
import { requireAuth } from "@clerk/express";

// middleware to check if user if authenticated
export const protect = async (req, res, next) => {
  const { userId } = req.auth();
  if (!userId) {
    res.json({ success: false, message: "Not Authorized" });
  } else {
    const user = await User.findById(userId);
    req.user = user;
    next();
  }
};
