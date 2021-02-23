import { app, PORT } from './config/app';
import setupMiddlewares from './middlewares/setupMiddleware';
import setupRoutes from './routes/setupRoutes';

setupMiddlewares(app);
setupRoutes(app);

app.listen(PORT);
