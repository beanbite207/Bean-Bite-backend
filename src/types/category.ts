import { Document } from "mongoose";

export interface ICategory extends Document {
    categoryName: string;
    image: string;
    slug: string;
    description: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}