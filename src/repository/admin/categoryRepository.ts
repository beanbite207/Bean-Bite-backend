import { BaseRepository } from "../baseRepository";
import CategoryModel from "../../model/CategoryModel";
import { ICategoryDocument } from "../../types/category";

class CategoryRepository extends BaseRepository<ICategoryDocument> {
  constructor() {
    super(CategoryModel);
  }

  findBySlug(slug: string) {
    return this.model.findOne({ slug }).exec();
  }

  findByName(categoryName: string) {
    return this.model.findOne({ categoryName }).exec();
  }
}

export default new CategoryRepository();
