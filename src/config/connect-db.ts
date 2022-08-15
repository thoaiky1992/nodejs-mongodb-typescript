import mongoose, { ConnectOptions } from "mongoose";

type ConnectionOptionsExtend = {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
};

const options: ConnectOptions & ConnectionOptionsExtend = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export async function connectMongoDB() {
  try {
    await mongoose.connect(String(process.env.MONGO_URI), options);
    console.log("Connected to MONGODB !!");
  } catch (error) {
    console.log("Failed to establish connection with MONGODB !! ");
    console.log(error);
  }
}
