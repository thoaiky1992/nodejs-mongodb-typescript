import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { UserDto } from '../dto/user/user-create.dto';
import validationRequest from '../middleware/validate-request';

const userRouter: Router = Router();

userRouter.post('/', validationRequest(UserDto), UserController.createOne())

export default userRouter;