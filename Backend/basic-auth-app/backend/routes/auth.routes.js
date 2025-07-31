import express from "express";
import {
  registerUser,
  loginUser,
  profile,
} from "../controller/auth.controller.js";
import { auth } from "../middleware/auth.middlware.js";

const authRouter = express.Router();

// Route to register a new user

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

authRouter.get("/profile", auth, profile);
export default authRouter;
