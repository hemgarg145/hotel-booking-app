import User from "../models/user.js";

// middleware to check if user if authenticated
export const protect = async (req, res, next) => {
  const { userId } = req.auth();
  if (!userId) {
    return res.json({ success: false, message: "Not Authorized" });
  } else {
    const user = await User.findById(userId);
    req.user = user;
    next();
  }
};
