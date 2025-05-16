import mongoose, { Document, Schema } from "mongoose";

export interface Product extends Document {
  name: string;
  description: string;
  amount: number;
  price: number;
  isActive: boolean;
  image: string;
}

const productSchema = new Schema(
    {
        name: { type: String },
        description: { type: String },
        amount: { type: Number },
        price: { type: Number },
        isActive: { type: Boolean },
        image: { type: String },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model<Product>("Product", productSchema);

export default Product;