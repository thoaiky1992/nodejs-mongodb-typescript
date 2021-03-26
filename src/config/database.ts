import mongoose from 'mongoose';
const chalk = require('chalk');
class Database {
  private URI = 'mongodb://mongo:27017/rest_full_api'
  private options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  constructor() {
    this.connect();
  }
  connect() {
    mongoose.set('debug', true);
    mongoose.connect(this.URI, this.options);
  }
}
export default Database;