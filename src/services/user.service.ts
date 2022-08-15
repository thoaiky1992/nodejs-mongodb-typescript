import { FindOptions } from "../interfaces";
import { User } from "../models/user.model";

const getMany = async (options: FindOptions = {}) => {
  const users = await User.find(options.where)
    .select(options.select)
    .populate(options.populate)
    .skip(options.skip)
    .limit(options.limit)
    .sort(options.sort)
    .exec();
  const count = await User.countDocuments();
  return { users, count };
};

const getOne = async (_id: string, options: FindOptions = {}) => {
  const user = await User.findOne({ _id })
    .select(options.select)
    .populate(options.populate)
    .skip(options.skip)
    .limit(options.limit)
    .sort(options.sort)
    .exec();
  return user;
};

const createOne = async (dto: any) => {
  const user = new User(dto);
  return await user.save();
};

const udpateOne = async (id: string, dto: any) => {
  return await User.findByIdAndUpdate(id, dto, { new: true });
};

const deleteOne = async (id: string) => {
  return await User.deleteOne({ _id: id });
};

export const UserSevice = {
  getMany,
  createOne,
  udpateOne,
  deleteOne,
  getOne,
};
