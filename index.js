const express = require("express");
const app = express();
const router = express.Router();
const authRoutes = require("./routes/auth.router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./db");
// app.use(bodyParser.json());
dotenv.config();
//connect db
connectDB();

app.use(express.json());
app.use("/auth", authRoutes);
app.listen(3000, () => {
  console.log("server is running");
});
