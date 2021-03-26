import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { UserDto } from '../dto/user/user-create.dto';
import validationRequest from '../middleware/validate-request';
import AuthMiddleware from '../middleware/authenticate';

const userRouter: Router = Router();

userRouter.post('/', AuthMiddleware , validationRequest(UserDto), UserController.createOne())

export default userRouter;