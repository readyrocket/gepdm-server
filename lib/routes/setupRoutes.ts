import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import path from 'path';

export default (app: Express): void => {
  const router = Router();
  app.use(router);

  const dirRoutes = path.resolve(`${__dirname}`, `app-routes`);

  readdirSync(dirRoutes).map(async (file) => {
    (await import(`./app-routes/${file}`)).default(router);
  });
};
