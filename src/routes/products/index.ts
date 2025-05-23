import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  getProductsByCategory,
  deleteProduct,
  deactivateProduct,
  activateProduct,
  searchProductsByName,
} from "../../controllers/products/";

const router = express.Router();

router.get("/", getProducts);
router.get("/search", searchProductsByName)
router.get("/:id", getProductById);
router.get("/category/:id", getProductsByCategory);
router.post("/", createProduct);
router.patch("/:id/deactivate", deactivateProduct);
router.patch("/:id/activate", activateProduct);
router.delete("/:id", deleteProduct);

export default router;
