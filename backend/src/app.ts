import express from 'express';
import linksRouter from './routes/routes';
import * as dotenv from 'dotenv';


const app = express();
app.use(express.json());
app.use(linksRouter);
dotenv.config();

export default app;