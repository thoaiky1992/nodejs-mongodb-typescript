import { Request,Response, NextFunction } from 'express';
class CrudService {
  private _model: any
  constructor(model: any) {
    this._model = model;
  }
  async createOne(req: Request,res: Response,next: NextFunction, dto: any) {
    const instance = await this._model.create(dto);
    if(!instance) {
      return res.status(500).json({
        message: "create fail ......."
      })
    }
    return res.status(200).json(instance);
  }
}
export default CrudService