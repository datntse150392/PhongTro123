import express from "express";
import { register, login } from "../controllers/auth";
const router = express.Router();

// API AUTHENTICATION
router.post("/register", register);
router.post("/login", login);
export default router;
