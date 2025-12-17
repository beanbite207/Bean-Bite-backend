import { Model } from "mongoose";
import { BaseRepository } from "../baseRepository";
import { ICategoryDocument, PaginatedCategories } from "../../types/category";
import ICategoryRepository from "../../interface/repositories/admin/ICategoryRepository";
import CategoryModel from "../../model/CategoryModel";

export class CategoryRepository extends BaseRepository<ICategoryDocument> implements ICategoryRepository {
  constructor() {
    super(CategoryModel);
  }

  findBySlug(slug: string){
    return this.model.findOne({ slug }).exec();
  }

  findByName(categoryName: string) {
    return this.model.findOne({ categoryName }).exec();
  }
  
async findAllPaginated(page: number,limit: number,search?: string){
  const skip = (page - 1) * limit;
  const query: any = {};
  if (search) {
    query.$or = [
      { categoryName: { $regex: search, $options: "i" } },
      { slug: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } }
    ];
  }
  const [data, total] = await Promise.all([
    this.model.find(query).sort({createdAt: -1}).skip(skip).limit(limit).lean(), 
    this.model.countDocuments(query)
  ]);

  return {
    data,
    total,
    page,
    limit
  };
}

}
