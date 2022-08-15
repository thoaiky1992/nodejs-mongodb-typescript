import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  phone: number;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  { timestamps: true, collection: "users" }
);
export const User = model<IUser>("User", userSchema);
