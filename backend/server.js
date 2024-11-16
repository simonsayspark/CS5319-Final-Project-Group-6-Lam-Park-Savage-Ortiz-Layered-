import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const MGDB_URL = process.env.MONGODB_URL;

app.use(express.json());
app.use(categoryRoutes);
app.use(productRoutes);

mongoose
  .connect(MGDB_URL)
  .then(() => {
    console.log("Database connected succesfull");
    app.listen(PORT, () => {
      console.log("Server started on port 8000");
    });
  })
  .catch((error) => console.log(error));
