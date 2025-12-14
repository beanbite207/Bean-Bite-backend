import { BaseRepository } from "../baseRepository";
import { ICustomerRepo } from "../../interface/service/customer/authServiceInterface";
import { ICustomerDocument } from "../../types/customer";
import { Customer } from "../../model/CustomerModel";



export class CustomerRepo extends BaseRepository<ICustomerDocument> implements ICustomerRepo {
    constructor() {
        super(Customer)
    }
}