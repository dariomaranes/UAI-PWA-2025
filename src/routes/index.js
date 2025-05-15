import express from "express";
import userRouter from "./users/index.js";
import productRouter from "./products/index.js";
import categoryRouter from "./categories/index.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);

export default router;
