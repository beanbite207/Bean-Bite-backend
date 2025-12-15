// service/admin/CategoryService.ts
import ICategoryServiceInterface from "../../interface/service/admin/ICategoryService";
import ICategoryRepository from "../../interface/repositories/admin/ICategoryRepository";
import { CreateCategoryDTO } from "../../types/category";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";

export class CategoryService implements ICategoryServiceInterface {
  constructor(
    private readonly categoryRepository: ICategoryRepository
  ) {}

  async createCategory(data: CreateCategoryDTO) {
    const { categoryName, description, slug, imageBuffer } = data;

    const existing = await this.categoryRepository.findBySlug(slug);
    if (existing) {
      throw new Error("Category already exists");
    }
                          
    const imageUrl = await uploadToCloudinary(imageBuffer, "categories");

    return this.categoryRepository.create({
      categoryName,
      description,
      slug,
      image: imageUrl,
      status: true,
    });
  }
}
