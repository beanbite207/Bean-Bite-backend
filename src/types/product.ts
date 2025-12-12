import mongoose from "mongoose";
import  { Document } from "mongoose";


export interface IProduct extends Document {
  name: string;
  slug: string;
  category: mongoose.Types.ObjectId;
  price: number;
  description: string;
  images: string[];
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}