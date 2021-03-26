import io , { Server } from 'socket.io'
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { resolve } from 'path';

config({path: resolve(__dirname, '..', '..', '.env')});

export class SockerIo {
  public static _server = new Server(Number(process.env.PORT_SOCKET_IO), {
    cors: {
      origin: '*'
    }
  });
  static middleware() {
    this._server.use(async (socket: any, next: any) => {
      
      if(socket.handshake?.headers?.authorization) {
        const token = socket.handshake.headers.authorization.split(' ')[1];
        const decode = await jwt.verify(token, String(process.env.JWT_SECRET));
        if(!decode) {
          return next(new Error('Authentication error'));
        }
        socket.user = decode;
        next();
      }
    })
  }
  static connect() {
    this._server.on('connection', (socket:any) => {
      socket.emit("test",socket.user)
    })
  }
}