import { NextFunction, Request, Response } from "express";

export const validateDto =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (err) {
      return res
        .status(400)
        .json({ type: (err as any).name, message: (err as any).message });
    }
  };
