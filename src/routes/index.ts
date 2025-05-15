import express from "express";
import userRouter from "./users/index";
import productRouter from "./products/index";
import categoryRouter from "./categories/index";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);

export default router;
