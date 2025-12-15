"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepo = void 0;
const baseRepository_1 = require("../baseRepository");
const CustomerModel_1 = require("../../model/CustomerModel");
class CustomerRepo extends baseRepository_1.BaseRepository {
    constructor() {
        super(CustomerModel_1.Customer);
    }
}
exports.CustomerRepo = CustomerRepo;
//# sourceMappingURL=authRepository.js.map