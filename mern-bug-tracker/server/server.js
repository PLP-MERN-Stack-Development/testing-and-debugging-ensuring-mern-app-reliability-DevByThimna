import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bugRoutes from "./routes/bugRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/bugtracker");

app.use("/api/bugs", bugRoutes);
app.use(errorHandler);

app.listen(5000, () => console.log("Server running on port 5000"));
