"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryService_1 = __importDefault(require("../../service/admin/categoryService"));
class CategoryController {
    async create(req, res) {
        try {
            const { categoryName, description, slug } = req.body;
            console.log(req.file);
            if (!categoryName || !description) {
                res.status(400).json({
                    success: false,
                    message: "categoryName and description are required",
                });
                return;
            }
            if (!req.file) {
                res.status(400).json({
                    success: false,
                    message: "Image is required",
                });
                return;
            }
            console.log(process.env.CLOUDINARY_CLOUD_NAME);
            console.log(process.env.CLOUDINARY_API_KEY);
            console.log(process.env.CLOUDINARY_API_SECRET);
            const category = await categoryService_1.default.createCategory({
                categoryName,
                description,
                slug,
                imageBuffer: req.file.buffer,
            });
            res.status(201).json({
                success: true,
                message: "Category created successfully",
                data: category,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: error.message || "Internal server error",
            });
        }
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=categoryController.js.map