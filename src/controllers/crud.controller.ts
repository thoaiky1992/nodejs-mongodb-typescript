import { Request, Response, NextFunction } from 'express';
import { model } from 'mongoose';
import { UserDto } from '../dto/user/user-create.dto';

class CrudController {
  private _model: any
  constructor(model:any) {
    this._model = model;
  }
  public index() {
    return async (req: Request, res: Response, next: NextFunction) => {
      const userDto: UserDto = req.body;
      const userCreated = await this._model.create(userDto);
      if(!userCreated) {
        return res.json({
          status: 500,
          message: "errors"
        })
      }
      res.json({
        status: 200,
        data: userCreated
      })
    }
  }
}
export default CrudController;