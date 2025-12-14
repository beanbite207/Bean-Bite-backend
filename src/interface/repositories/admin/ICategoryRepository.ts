// src/common/interfaces/ICategoryRepository.ts
import { ICategory } from "../../../types/category";

export default interface ICategoryRepository {
  findAll(): Promise<ICategory[]>;
  findById(id: string): Promise<ICategory | null>;
  create(data: Partial<ICategory>): Promise<ICategory>;
  update(id: string, data: Partial<ICategory>): Promise<ICategory | null>;
  delete(id: string): Promise<ICategory | null>;
  findBySlug(slug: string): Promise<ICategory | null>;
}
