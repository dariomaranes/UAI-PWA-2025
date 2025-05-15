import mongoose, { Schema } from "mongoose";

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

const Product = mongoose.model("Product", productSchema);

export default Product;