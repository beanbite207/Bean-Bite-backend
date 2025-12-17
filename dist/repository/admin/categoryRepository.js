"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRepository_1 = require("../baseRepository");
const CategoryModel_1 = __importDefault(require("../../model/CategoryModel"));
class CategoryRepository extends baseRepository_1.BaseRepository {
    constructor() {
        super(CategoryModel_1.default);
    }
    findBySlug(slug) {
        return this.model.findOne({ slug }).exec();
    }
    findByName(categoryName) {
        return this.model.findOne({ categoryName }).exec();
    }
}
exports.default = new CategoryRepository();
//# sourceMappingURL=categoryRepository.js.map