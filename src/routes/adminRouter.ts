import { Router } from "express";
import { upload } from "../config/multer";
import { CategoryRepository } from "../repository/admin/categoryRepository";
import { CategoryService } from "../service/admin/categoryService";
import { CategoryController } from "../controller/admin/categoryController";
const router = Router();
const categoryRepository= new CategoryRepository()
const categoryService= new CategoryService(categoryRepository)
const categoryController=new CategoryController(categoryService)
router.post(
  "/categories",
  upload.single("image"),
  categoryController.create.bind(categoryController)
);
router.get("/categories/:slug", categoryController.getCategoryBySlug);
router.put(
  "/categories/:id",
  upload.single("image"),
  categoryController.editCategory
);

export default router;