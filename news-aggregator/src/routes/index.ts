import express from 'express';
import { authRoute } from './authRoutes';
import { newsRoute } from './newsRoutes';
import { defaultRoute } from './defaultRouter';


export const routes = express.Router();

routes.use(authRoute);
routes.use(newsRoute)
routes.use(defaultRoute);
