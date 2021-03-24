import { model, Schema } from 'mongoose';
import UserInterface from './user.interface';

const userSchema: Schema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  }
}, { timestamps: true })

const UserModel = model<UserInterface>('users', userSchema);
export default UserModel;