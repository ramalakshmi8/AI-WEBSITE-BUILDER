import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import websiteRouter from "./routes/website.route.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/website", websiteRouter);

app.get("/", (req, res) => {
  res.send("hello server is running");
});
app.listen(port, () => {
  console.log("server is running at port", port);
  connectDB();
});
