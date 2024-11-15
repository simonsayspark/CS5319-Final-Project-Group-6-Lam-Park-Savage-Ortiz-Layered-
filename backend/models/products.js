import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  animalType: {
    type: String,
    enum: ["dog", "cat", "fish", "bird", "reptile"],
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    required: true,
  },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  availableStock: { type: Number, required: true },
});

export const productModel = mongoose.model("products", ProductSchema);
