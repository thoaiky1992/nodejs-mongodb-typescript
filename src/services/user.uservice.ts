import CrudService from "./crud.service";
import UserModel from "../models/user/user.schema";

class UserService extends CrudService {
  constructor() {
    super(UserModel)
  }
}
export default UserService;