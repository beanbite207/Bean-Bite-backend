import categoryRepository from "../../repository/admin/categoryRepository";
import { uploadToCloudinary } from "../../config/cloudinary";
import { ICategory } from "../../types/category";

interface CreateCategoryDTO {
  categoryName: string;
  description: string;
  slug:string;
  imageBuffer: Buffer;
}

class CategoryService {
  async createCategory(data: CreateCategoryDTO): Promise<ICategory> {
    const { categoryName, description,slug, imageBuffer } = data;


  

    const existing = await categoryRepository.findBySlug(slug);
    if (existing) {
      throw new Error("Category already exists");
    }

    const imageUrl = await uploadToCloudinary(imageBuffer, "categories");

    // Create category
    return categoryRepository.create({
      categoryName,
      description,
      slug,
      image: imageUrl,
      status: true,
    });
  }
}

export default new CategoryService();
