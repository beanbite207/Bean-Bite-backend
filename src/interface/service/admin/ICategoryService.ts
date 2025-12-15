import { CreateCategoryDTO, UpdateCategoryDTO, ICategory } from "../../../types/category";

export default interface ICategoryServiceInterface {
  createCategory(data: CreateCategoryDTO): Promise<ICategory>;

  getCategoryForEdit(slug: string): Promise<ICategory>;

  updateCategory(
    id: string,
    data: UpdateCategoryDTO
  ): Promise<ICategory>;
}
