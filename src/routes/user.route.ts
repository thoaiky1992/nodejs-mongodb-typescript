import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userRouter: Router = Router();

userRouter.get('/', UserController.index)

export default userRouter;