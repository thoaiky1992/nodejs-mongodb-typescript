import { Request, Response, NextFunction } from 'express';

class CrudController {
  private _service: any
  constructor(_service:any) {
    this._service = _service;
  }
  public createOne() {
    return async (req: Request, res: Response, next: NextFunction) => {
      const dto = req.body;
      this._service.createOne(req, res, next, dto);
    }
  }
}
export default CrudController;