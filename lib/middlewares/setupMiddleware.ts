import cors from 'cors';
import { Express } from 'express';

import CorsMiddleware from './cors';

export default (app: Express) => {
  app.use(CorsMiddleware, cors());
};
