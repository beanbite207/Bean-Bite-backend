import { Model, Types, Document } from "mongoose";

export abstract class BaseRepository<T extends Document> {
  constructor(protected readonly model: Model<T>) {}

  findAll() {
    return this.model.find().exec();
  }

  findById(id: string | Types.ObjectId) {
    return this.model.findById(id).exec();
  }

  create(data: any) {
    return this.model.create(data);
  }

  update(id: string | Types.ObjectId, data: Partial<T>) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  delete(id: string | Types.ObjectId) {
    return this.model.findByIdAndDelete(id).exec();
  }
}