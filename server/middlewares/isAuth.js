import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(400).json({ message: "Token not found" });
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return res.status(500).json({ message: "Token not found" });
  }
};
export default isAuth;
