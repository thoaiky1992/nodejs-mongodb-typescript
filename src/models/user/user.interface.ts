import { Document } from 'mongoose';
interface UserInterface extends Document {
  name: string,
  email: string,
  password: string
}

export default UserInterface