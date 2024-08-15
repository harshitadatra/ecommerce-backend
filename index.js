const express = require("express");
const app = express();
const router = express.Router();
const authRoutes = require("./routes/auth.router");
const productRoutes = require("./routes/product.router");
const categoryRoutes = require("./routes/category.router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./db");
// app.use(bodyParser.json());
dotenv.config();
//connect db
connectDB();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);
app.listen(3000, () => {
  console.log("server is running");
});
