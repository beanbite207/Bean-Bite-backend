import { Model } from "mongoose";
import { BaseRepository } from "../baseRepository";
import { ICategoryDocument } from "../../types/category";
import ICategoryRepository from "../../interface/repositories/admin/ICategoryRepository";

export class CategoryRepository extends BaseRepository<ICategoryDocument> implements ICategoryRepository {
  constructor(categoryModel: Model<ICategoryDocument>) {
    super(categoryModel);
  }

  findBySlug(slug: string): Promise<ICategoryDocument | null> {
    return this.model.findOne({ slug }).exec();
  }

  findByName(categoryName: string): Promise<ICategoryDocument | null> {
    return this.model.findOne({ categoryName }).exec();
  }
}
