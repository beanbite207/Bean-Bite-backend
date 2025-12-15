import { Request, Response } from "express";
import ICategoryServiceInteface from "../../interface/service/admin/ICategoryService";

export class CategoryController {
  constructor(private _categoryService:ICategoryServiceInteface){

  }
  async create(req: Request, res: Response){
    try {
      const { categoryName, description, slug } = req.body;
    
         console.log(req.file)
      if (!categoryName || !description) {
        res.status(400).json({
          success: false,
          message: "categoryName and description are required",
        });
        return;
      }

      if (!req.file) {
        res.status(400).json({
          success: false,
          message: "Image is required",
        });
        return;
      }

      const category = await this._categoryService.createCategory({
        categoryName,
        description,
        slug,
        imageBuffer:req.file.buffer,
      });

      res.status(201).json({
        success: true,
        message: "Category created successfully",
        data: category,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || "Internal server error",
      });
    }
  }
}

