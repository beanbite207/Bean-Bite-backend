import mongoose, { Schema } from "mongoose";
import { ICategory } from "../types/category";

const categorySchema = new Schema<ICategory>(
    {
        categoryName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        image: {
            type: String,
            default: null,
        },
        description: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        status: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model<ICategory>("Category", categorySchema);