import mongoose, { Schema, Document } from "mongoose";
import { IProduct } from "../types/product";

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    description: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
      default: [],
    },

    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);


export default mongoose.model<IProduct>("Product", productSchema);
