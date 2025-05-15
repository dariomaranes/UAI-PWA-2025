import Category from "../../models/category.js";

const getCategories = async (req, res) => {
  try {
    const products = await Category.find();
    res.status(200).json({
      message: "Categories obtained successfully",
      data: products,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json({
      message: "Category created successfully",
      data: category,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export { getCategories, createCategory };
