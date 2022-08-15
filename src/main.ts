import express, { Application } from "express";
import { config } from "dotenv";
import { connectMongoDB } from "./config/connect-db";
import { initialRouter } from "./routes";
config();

connectMongoDB().then(() => {
  const app: Application = express();
  app.use(express.json());
  // initial Router
  initialRouter(app);

  app.listen(Number(process.env.PORT), () =>
    console.log("server starting in post 3000")
  );
});
