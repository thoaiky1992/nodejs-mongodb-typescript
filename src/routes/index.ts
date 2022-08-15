import { Application, Router } from "express";
import userRouter from "./user.router";

export function initialRouter(app: Application) {
  const router = Router();
  router.use("/users", userRouter);

  app.use(router);
}
