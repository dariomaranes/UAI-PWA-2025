import Category from "../../models/category.js";
import Product from "../../models/product.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Products obtained successfully",
      data: products,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        error: true,
      });
    }
    res.status(200).json({
      message: "Product obtained successfully",
      data: product,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({
      message: "Product created successfully",
      data: product,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate("products");

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
        error: true,
        data: undefined,
      });
    }

    return res.status(200).json({
      message: "Products obtained successfully",
      error: false,
      data: category.products,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export { getProducts, getProductById, createProduct, getProductsByCategory };
