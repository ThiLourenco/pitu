import express from 'express';
import linksRouter from './routes/routes';
import helmet from 'helmet';
import * as dotenv from 'dotenv';


const app = express();
app.use(helmet());
app.use(express.json());
app.use(linksRouter);
dotenv.config();

export default app;