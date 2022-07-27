import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getcookie } from "../utils/helper";

const SALT_ROUNDS = process.env.SALT_ROUNDS;

// Hashing password
export async function hash(password) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// Comparing hashed password with user password
export async function compare(password, userPassword) {
  if(password === userPassword) {
    return true;
  }
  return false;
}

// Generating token
export function generateAccessToken(userEmail) {
  return jwt.sign(userEmail, process.env.TOKEN_SECRET, { expiresIn: "18000s" });
}

// Authenticating token
export function authenticateToken(req, res, next) {
  const token = getcookie("token", req.headers.cookie);
  if (token == null)
    return res.status(401).json({ success: false, msg: "Unauthorized Access" });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err)
      return res
        .status(403)
        .json({ success: false, msg: `${err.name} - ${err.message}` });
    next();
  });
}

