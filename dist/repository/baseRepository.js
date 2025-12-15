"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    findAll() {
        return this.model.find().exec();
    }
    findById(id) {
        return this.model.findById(id).exec();
    }
    async create(data) {
        const doc = new this.model(data);
        return await doc.save();
    }
    update(id, data) {
        return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    delete(id) {
        return this.model.findByIdAndDelete(id).exec();
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=baseRepository.js.map