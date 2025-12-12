import { Request,response } from "express";
import CategoryModel from "../../model/CategoryModel.js";
import slugify from "slugify";
import { uploadBufferToCloudinary } from "../../utils/cloudinaryUpload.js";


export const addCategory=async(req:Request,res=response)=>{
    try {
        const { categoryName, description } = req.body;
       console.log(req.body)
       
        
    } catch (error) {
        
    }
}
  