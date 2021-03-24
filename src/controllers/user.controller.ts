import UserModel from '../models/user/user.schema';
import CrudController from './crud.controller';

class UserController extends CrudController {
  constructor(model: any) {
    super(model);
  }
}

export default new UserController(UserModel);