import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const MGDB_URL = process.env.MONGODB_URL;

app.use(express.json());
app.use(categoryRoutes);

mongoose
  .connect(MGDB_URL)
  .then(() => {
    console.log("Database connected succesfull");
    app.listen(PORT, () => {
      console.log("Server started on port 8000");
    });
  })
  .catch((error) => console.log(error));

// app.get("/api", (req, res) => {
//   res.json({ users: "helo" });
// });\

// POST API to add all categories and products
app.post("/api/all-categories-and-products", async (req, res) => {
  try {
    const categories = req.body;

    // Insert all categories into the database
    const result = await categoryModel.insertMany(categories);
    res.status(201).json({
      message: "Categories and products added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
