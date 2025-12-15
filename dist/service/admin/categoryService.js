"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryRepository_1 = __importDefault(require("../../repository/admin/categoryRepository"));
const uploadToCloudinary_1 = require("../../utils/uploadToCloudinary");
class CategoryService {
    async createCategory(data) {
        const { categoryName, description, slug, imageBuffer } = data;
        const existing = await categoryRepository_1.default.findBySlug(slug);
        if (existing) {
            throw new Error("Category already exists");
        }
        const imageUrl = await (0, uploadToCloudinary_1.uploadToCloudinary)(imageBuffer, "categories");
        // Create category
        return categoryRepository_1.default.create({
            categoryName,
            description,
            slug,
            image: imageUrl,
            status: true,
        });
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=categoryService.js.map