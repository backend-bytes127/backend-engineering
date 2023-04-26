import express from 'express';
import { authRoute } from './authRoutes';
import { defaultRoute } from './defaultRouter';

export const routes = express.Router();

routes.use(authRoute);
routes.use(defaultRoute);
