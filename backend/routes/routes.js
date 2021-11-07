import express from "express";
import {showCategories, showCategoryById, showDishesByIdCategory, createCategory, createDish} from "../controllers.js";

const router = express.Router();

router.get("/categories/", showCategories);
router.get("/category_id/:id", showCategoryById);
router.get("/categories/:id", showDishesByIdCategory);

router.post("/categories/", createCategory);
router.post("/dishes/", createDish);

export default router;