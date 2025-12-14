import { Document } from "mongoose";
export interface ICustomerDocument extends Document {
  fullName: string;
  phoneNumber: string;
  password: string;
  isAdmin:boolean
  otp?: string;
  otpExpires?: Date;
}

export interface ICustomer {
  fullName: string;
  phoneNumber: string;
  password: string;
  isAdmin: boolean;
  otp?: string;
  otpExpires?: Date;
}