import ICategoryServiceInterface from "../../interface/service/admin/ICategoryService";
import ICategoryRepository from "../../interface/repositories/admin/ICategoryRepository";
import { CreateCategoryDTO, UpdateCategoryDTO } from "../../types/category";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";

export class CategoryService implements ICategoryServiceInterface {
  constructor(
    private _categoryRepository: ICategoryRepository
  ) { }

  async createCategory(data: CreateCategoryDTO) {
    const { categoryName, description, slug, imageBuffer } = data;

    const existing = await this._categoryRepository.findBySlug(slug);
    if (existing) {
      throw new Error("Category already exists");
    }

    const imageUrl = await uploadToCloudinary(imageBuffer, "categories");

    return this._categoryRepository.create({
      categoryName,
      description,
      slug,
      image: imageUrl,
      status: true,
    });
  }
  async getCategoryForEdit(slug: string) {
    console.log(`service recive ${slug}`)
    const category = await this._categoryRepository.findBySlug(slug);

    if (!category) {
      throw new Error("Category not found");
    }

    return category;
  }
  async updateCategory(id: string, data: UpdateCategoryDTO) {
    if (data.categoryName) {
    const existingCategory =
      await this._categoryRepository.findByName(data.categoryName);

    if (existingCategory && existingCategory.slug !== data.slug) {
      throw new Error("Category name already exists");
    }
  }
    const updateData: any = {
      categoryName: data.categoryName,
      description: data.description,
      status: data.status,
      slug: data.slug,
    };

    if (data.imageBuffer) {
      const imageUrl = await uploadToCloudinary(
        data.imageBuffer,
        "categories"
      );
      updateData.image = imageUrl;
    }

    const updated = await this._categoryRepository.update(id, updateData);

    if (!updated) {
      throw new Error("Category not found or update failed");
    }

    return updated;
  }

}
