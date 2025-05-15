import mongoose, { Schema } from "mongoose";

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

const Category = mongoose.model("Category", CategorySchema);

export default Category;