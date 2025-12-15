import { ICustomer, ICustomerDocument } from "../../../types/customer";

export interface ICustomerAuthRepo{
    create(data:Partial<ICustomer>):Promise<ICustomerDocument>
}