import express , { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRouter from './routes';
import Database from '../data/database';

class App {
  private app: Application
  constructor(private PORT: number) {
    this.app = express();
    this.middleware();
    this.routes();
    this.connectDB();
    this.listen();
  }
  middleware() {
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
  }
  connectDB() {
    new Database();
  }
  routes() {
    this.app.use(indexRouter);
  }
  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`server running on port ${this.PORT}`);
    })
  }
}
export default App;