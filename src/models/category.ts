import mongoose, { Schema, Document } from "mongoose";
import { Product } from "./product";

interface Category extends Document {
  name: string;
  description: string;
  products: Product[];
}

const CategorySchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model<Category>("Category", CategorySchema);

export default Category;