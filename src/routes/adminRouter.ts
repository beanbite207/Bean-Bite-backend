import { Router } from "express";
import CategoryController from "../controller/admin/categoryController";
import multer from "multer";
import { upload } from "../config/multer";
const router = Router();


router.post(
  "/categories",
  upload.single("image"),
  CategoryController.create
);

export default router;
