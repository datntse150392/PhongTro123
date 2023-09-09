import express from "express";

const router = express.Router();

// API AUTHENTICATION
router.post("/login", (req, res) => {
  res.status(200).json("ok");
});
export default router;
