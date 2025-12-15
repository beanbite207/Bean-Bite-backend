import { ICustomerAuthRepo } from "../../interface/repository/customer/authRepositoryInterface";
import { Customer } from "../../model/CustomerModel";
import { ICustomerDocument } from "../../types/customer";
import { BaseRepository } from "../baseRepository";


export class CustomerAuthRepository extends BaseRepository<ICustomerDocument> implements ICustomerAuthRepo{
    constructor(){
        super(Customer)
    }
}