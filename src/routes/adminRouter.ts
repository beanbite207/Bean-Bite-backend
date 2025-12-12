import express from 'express'
import { addCategory } from "../controller/admin/categoryController";
import { upload } from '../config/multer';
const router=express.Router()

router.post("/categories", upload.single("image"), addCategory);

export default router