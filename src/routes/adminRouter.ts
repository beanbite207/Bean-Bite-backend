import { Router } from "express";
import CategoryController from "../controller/admin/categoryController";
import { upload } from "../config/multer";
import { CategoryRepository } from "../repository/admin/categoryRepository";
const router = Router();
const categoryRepository=new CategoryRepository()
router.post("/categories",  upload.single("image"),  CategoryController.create);

export default router;
