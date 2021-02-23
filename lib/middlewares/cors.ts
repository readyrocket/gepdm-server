import { ExpressHttp } from '../interfaces/express.interface';

export default ({ ...rest }: ExpressHttp) => {
  const { res, next } = rest;
  res.setHeader(`Access-Control-Allow-Origin`, `http://localhost:3333`);
  res.setHeader(`Access-Control-Allow-Methods`, `OPTIONS, POST, GET`);
  if (typeof next === `undefined`) return;
  next();
};
