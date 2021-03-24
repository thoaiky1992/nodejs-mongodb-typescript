import { Request, Response, NextFunction } from 'express';
import { model } from 'mongoose';

class CrudController {
  private _model: any
  constructor(model:any) {
    this._model = model;
  }
  get Model() {
    return this._model;
  }
  public index(req: Request, res: Response, next: NextFunction) {
    console.log('abc')
    console.log(this);
  }
}
export default CrudController;