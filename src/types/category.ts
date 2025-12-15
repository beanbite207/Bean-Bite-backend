import { Document } from "mongoose";

export interface ICategory  {
    categoryName: string;
    image: string;
    slug: string;
    description: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface ICategoryDocument extends Document {
    categoryName: string;
    image: string 
    slug: string;
    description: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface CreateCategoryDTO {
  categoryName: string;
  description: string;
  slug:string;
  imageBuffer: Buffer;
}
export interface UpdateCategoryDTO {
  categoryName?: string;
  description?: string;
  status?: boolean;
  slug?: string;
  imageBuffer?: Buffer;
}
