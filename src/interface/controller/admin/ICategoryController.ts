import { Request, Response } from "express";

export default interface ICategoryController {
  create(req: Request, res: Response): Promise<void>;
}
