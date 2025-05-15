"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../../controllers/products/index");
const router = express_1.default.Router();
router.get("/", index_1.getProducts);
router.post("/", index_1.createProduct);
router.get("/:id", index_1.getProductById);
router.get("/category/:id", index_1.getProductsByCategory);
exports.default = router;
