import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import roomsRoute from "./routes/rooms.js"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser";
import cors from "cors"

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(PORT, () => {
  connect();
  console.log("Connected to backend.");
});
