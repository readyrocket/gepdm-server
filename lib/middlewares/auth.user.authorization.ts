import { NextFunction, Request, Response } from 'express';
import JWT from 'jsonwebtoken';

export default {
  async userAuthorization(req: Request, res: Response, next: NextFunction) {
    try {
      const authorizationToken = req.headers.authorization;

      if (!authorizationToken) {
        throw new Error(`ERR_TOKEN_NOT_FOUND`);
      }

      const tokenParts = authorizationToken.split(` `);

      if (tokenParts.length !== 2) {
        throw new Error(`ERR_INVALID_TOKEN`);
      }

      const [scheme, token] = tokenParts;

      if (!/^Bearer$/i.test(scheme)) {
        throw new Error(`ERR_INVALID_TOKEN`);
      }

      const secretKey = String(process.env.SECRET_JWT_KEY).trim();

      JWT.verify(token, secretKey, (err, decoded: any) => {
        try {
          const decodedToken = decoded?.sub;
          if (err) {
            throw new Error(err.message);
          }
          if (!token) {
            throw new Error(err!.message);
          }
          req.token = decodedToken;
          return next();
        } catch (error) {
          throw new Error(`ERR_EXPIRED_TOKEN`);
        }
      });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  },
};
