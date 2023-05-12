import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import {routes} from './routes';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const { SERVER_PORT } = process.env;

console.log(SERVER_PORT)


app.use('/', cors({
    origin: true, // NOTE: Allowing all origins for now
    optionsSuccessStatus: 200,
    preflightContinue: false,
    methods: "GET,POST,OPTIONS",
    credentials: true
  }));
  
app.use(express.json());




app.use('/', routes);


export default app;