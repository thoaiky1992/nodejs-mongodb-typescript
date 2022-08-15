import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    let token = req.headers.authorization.split(" ")[1];
    const decode = verify(token, String(process.env.JWT_SECRET));
    if (!decode) {
      return res.status(401).json({ message: "UnAuthenticate ......" });
    }
    req.user = decode as any;
    next();
  } else {
    return res.status(400).json({ message: "Token not found ......" });
  }
};
export default AuthMiddleware;
