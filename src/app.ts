import express , { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRouter from './routes';
import Database from './config/database';
import { SockerIo } from './socket.io/socket.io';

class App {
  private app: Application
  constructor(private PORT: number) {
    this.app = express();
    this.middleware();
    this.routes();
    this.connectDB();
    this.connectSocketIo();
  }
  middleware() {
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
  }
  connectDB() {
    new Database();
  }
  connectSocketIo() {
    SockerIo.middleware();
    SockerIo.connect();
  }
  routes() {
    this.app.use(indexRouter);
  }
  async listen() {
    await this.app.listen(this.PORT, () => {
      console.log(`server running on port ${this.PORT}`);
    })
  }
}
export default App;