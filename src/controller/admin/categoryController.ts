import { Request, Response } from "express";
import ICategoryServiceInteface from "../../interface/service/admin/ICategoryService";
import { Types } from "mongoose";
import ICategoryController from "../../interface/controller/admin/ICategoryController";

export class CategoryController implements ICategoryController {
  constructor(private _categoryService: ICategoryServiceInteface) {

  }
  create=async(req: Request, res: Response) =>{
    try {
      const { categoryName, description, slug } = req.body;

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
        imageBuffer: req.file.buffer,
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
  getCategoryBySlug = async (req: Request, res: Response) => {
    try {
      const { slug } = req.params;
      console.log("controller slug:", slug);

      const category =
        await this._categoryService.getCategoryForEdit(slug);

      res.status(200).json({
        success: true,
        data: category,
      });
    } catch (error: unknown) {
      res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      });
    }
  };
  editCategory = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { categoryName, description, status, slug } = req.body;

      if (!Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "Invalid category ID" });
        return;
      }

      const updatedData: any = {
        categoryName,
        description,
        status,
        slug,
      };

      if (req.file) {
        updatedData.imageBuffer = req.file.buffer;
      }

      const updatedCategory =
        await this._categoryService.updateCategory(id, updatedData);

      res.status(200).json({
        success: true,
        message: "Category updated successfully",
        data: updatedCategory,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Category update failed",
      });
    }
  };
 getAllCategories = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 6;
    const search = req.query.search as string | undefined;

    const categories =await this._categoryService.getAllCategories(page, limit,search);

    res.status(200).json({
      success: true,
      ...categories
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};

  toggleCategoryStatus = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
       console.log(id)
      const updated =await this._categoryService.toggleCategoryStatus(id);

      res.status(200).json({
        success: true,
        message: "Category status toggled",
        data: updated,
      });
    } catch (error: unknown) {
      res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      });
    }
  };
}

