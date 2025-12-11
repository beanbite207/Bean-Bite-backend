import { model, Schema } from "mongoose";
import { ICustomer } from "../types/customer";

const customerSchema = new Schema<ICustomer>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      default: null,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    otpExpires: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, 
  }
);

export const Customer = model<ICustomer>("Customer", customerSchema);

