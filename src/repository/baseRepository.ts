import { Model, Types, UpdateQuery, Document } from "mongoose";

export class BaseRepository<TDoc extends Document> {
  constructor(protected readonly model: Model<TDoc>) {}


  findAll() {
    return this.model.find().exec();
  }

  findById(id: string | Types.ObjectId) {
    return this.model.findById(id).exec();
  }
  async create(data: Partial<TDoc>) {
    const doc = new this.model(data);
    return await doc.save();
  }

  update(id: string | Types.ObjectId, data: UpdateQuery<TDoc>) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  delete(id: string | Types.ObjectId) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
