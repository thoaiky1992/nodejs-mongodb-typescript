  
import { verify } from 'jsonwebtoken';
import { config } from 'dotenv';
import { resolve } from 'path';
import { Request, Response, NextFunction } from 'express';
config({path: resolve(__dirname, '..', '..', '.env')})

const AuthMiddleware  = (request: Request, response: Response, next: NextFunction) => {
  if( request?.headers?.authorization ) {
    let token = request.headers.authorization.split(" ")[1];  
    const decode = verify(token, String(process.env.JWT_SECRET));
    if(!decode) {
      return response.status(401).json({ message: "UnAuthenticate ......" });
    }
    request.user = decode;
    next();
  } else {
    return response.status(400).json({ message: "Token not found ......" });
  }
  
  
}
export default AuthMiddleware;