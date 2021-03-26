declare global {
  namespace Express {
    interface Request {
      user: any; //or can be anythin
    }
  }
}