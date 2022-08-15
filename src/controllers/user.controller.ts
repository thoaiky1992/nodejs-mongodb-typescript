import { Request, Response } from "express";
import { FindOptions } from "../interfaces";
import { UserSevice } from "../services/user.service";
const getMany = async (req: Request, res: Response) => {
  const options: FindOptions = req.query.options
    ? JSON.parse(req.query.options as any)
    : {};
  const result = await UserSevice.getMany(options);
  return res.json(result);
};

const getOne = async (req: Request, res: Response) => {
  const options: FindOptions = req.query.options
    ? JSON.parse(req.query.options as any)
    : {};
  const id = req.params.id;
  const user = await UserSevice.getOne(id, options);
  return res.json(user);
};

const createOne = async (req: Request, res: Response) => {
  const newUser = await UserSevice.createOne(req.body);
  return res.json(newUser);
};

const udpateOne = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await UserSevice.udpateOne(id, req.body);
  return res.json(user);
};

const deleteOne = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UserSevice.deleteOne(id);
  return res.json(result);
};

export const UserController = {
  getMany,
  createOne,
  udpateOne,
  deleteOne,
  getOne,
};
