declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      NODE_ENV: "development" | "production";
      PORT?: number;
      JWT_SECRET: string;
    }
  }
}

declare global {
  namespace Express {
    interface Request {
      user?: Record<string, any>;
    }
  }
}

export {};
