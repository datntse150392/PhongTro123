import express from "express";
import cors from "cors";
import initRoutes from "./src/routes";
import connectDatabase from "./src/config/connectDatabase";
require("dotenv").config();
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// Đọc được dữ liệu từ client gửi lên
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
connectDatabase();
const port = process.env.PORT || 8888;

const listener = app.listen(port, () => {
  console.log(`Sever is running on the port ${listener.address().port}`);
});
