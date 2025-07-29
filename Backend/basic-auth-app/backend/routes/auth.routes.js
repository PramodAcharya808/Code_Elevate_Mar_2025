import express from "express";
import { registerUser } from "../controller/auth.controller.js";

const authRouter = express.Router();

// Route to register a new user
console.log("Router executed");

authRouter.post("/register", registerUser);

export default authRouter;
