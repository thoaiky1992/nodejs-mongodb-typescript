import UserModel from '../models/user/user.schema';
import CrudController from './crud.controller';
import UserService from '../services/user.uservice';

class UserController extends CrudController {
  constructor(service: any) {
    super(service);
  }
}

export default new UserController(new UserService);