import express from "express";
import { categoryModel } from "../models/category.js";

const router = express.Router();

// POST route to create a new category
router.post("/api/category", async (req, res) => {
  try {
    const { name, description } = req.body;

    // Check if the category already exists
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ error: "Category already exists" });
    }

    // Create a new category
    const newCategory = new categoryModel({ name, description });
    await newCategory.save();

    res.status(201).json({
      message: "Category created successfully",
      category: newCategory,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
