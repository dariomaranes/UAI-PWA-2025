"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../../controllers/categories/index");
const router = express_1.default.Router();
router.get("/", index_1.getCategories);
router.post("/", index_1.createCategory);
exports.default = router;
