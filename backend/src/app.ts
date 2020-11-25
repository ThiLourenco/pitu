import express from 'express';
import linksRouter from './routes/routes';
import helmet from 'helmet';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(linksRouter);

export default app;