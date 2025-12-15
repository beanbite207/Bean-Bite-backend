import { CreateCategoryDTO, ICategory } from "../../../types/category";

export default interface ICategoryServiceInteface {
    createCategory(data: CreateCategoryDTO): Promise<ICategory>
}