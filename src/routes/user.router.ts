import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserCreateDtoShema } from "../dto/user/user-create-dto-schema";
import { UserUpdateDtoShema } from "../dto/user/user-update-dto.schema";
import { validateDto } from "../middleware/validateDto";

const userRouter = Router();

userRouter
  .get("/", UserController.getMany)
  .get("/:id", UserController.getOne)
  .post("/", validateDto(UserCreateDtoShema), UserController.createOne)
  .put("/:id", validateDto(UserUpdateDtoShema), UserController.udpateOne)
  .delete("/:id", UserController.deleteOne);
export default userRouter;
