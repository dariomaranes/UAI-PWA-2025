import express from "express";
import userRouter from "./users/";
import productRouter from "./products/";
import categoryRouter from "./categories/";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);

export default router;
