import express from 'express';
import userRoute  from './authRoutes';
import { newsRoute } from './newsRoutes';
import { defaultRoute } from './defaultRouter';



export const routes = express.Router();

routes.use(userRoute);
routes.use(newsRoute)
routes.use(defaultRoute);
