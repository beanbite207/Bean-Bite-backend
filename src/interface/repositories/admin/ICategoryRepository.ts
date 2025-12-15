import { ICategory } from "../../../types/category";

export default interface ICategoryRepository {
  findBySlug(slug: string): Promise<ICategory | null>;
  create(data: Partial<ICategory>): Promise<ICategory>;
}
