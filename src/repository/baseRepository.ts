import { Model, Types, UpdateQuery } from "mongoose";

export class BaseRepository<TSchema> {
  constructor(protected readonly model: Model<TSchema>) { }

  findAll() {
    return this.model.find().exec();
  }

  findById(id: string | Types.ObjectId) {
    return this.model.findById(id).exec();
  }
  async create(data: Partial<TSchema>) {
    const doc = new this.model(data);
    return await doc.save();
  }

  update(id: string | Types.ObjectId, data: UpdateQuery<TSchema>) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  delete(id: string | Types.ObjectId) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
