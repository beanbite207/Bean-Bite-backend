import ICategoryServiceInterface from "../../interface/service/admin/ICategoryService";
import ICategoryRepository from "../../interface/repositories/admin/ICategoryRepository";
import { CreateCategoryDTO, ICategory, PaginatedCategoryResponse, UpdateCategoryDTO, UpdateCategoryStatusDTO } from "../../types/category";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";

export class CategoryService implements ICategoryServiceInterface {
  constructor(
    private _categoryRepository: ICategoryRepository
  ) { }

  createCategory = async (data: CreateCategoryDTO) => {
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
  getCategoryForEdit = async (slug: string) => {
    console.log(`service recive ${slug}`)
    const category = await this._categoryRepository.findBySlug(slug);

    if (!category) {
      throw new Error("Category not found");
    }

    return category;
  }
  updateCategory = async (id: string, data: UpdateCategoryDTO) => {
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
  getAllCategories = async (page: number,limit: number,search?: string) => {
    const result = await this._categoryRepository.findAllPaginated(page,limit,search);
    return {
      data: result.data,
      total: result.total,
      page: result.page,
      limit: result.limit,
      totalPages: Math.ceil(result.total / result.limit)
    };
  };



  toggleCategoryStatus = async (id: string) => {
    const category = await this._categoryRepository.findById(id);

    if (!category) {
      throw new Error("Category not found");
    }

    category.status = !category.status;

    const updated = await this._categoryRepository.update(id, {
      status: category.status,
    });

    if (!updated) {
      throw new Error("Failed to update status");
    }

    return updated;
  }

}
