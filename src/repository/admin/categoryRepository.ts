import { Model } from "mongoose";
import { BaseRepository } from "../baseRepository";
import { ICategoryDocument } from "../../types/category";
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
}
