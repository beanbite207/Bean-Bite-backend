import { Document } from "mongoose";
export interface ICustomer extends Document {
  fullName: string;
  mobile: string;
  password: string;
  isAdmin:boolean
  otp?: string;
  otpExpires?: Date;
}