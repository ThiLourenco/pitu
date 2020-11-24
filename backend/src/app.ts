import express from 'express';
import linksRouter from './routes/routes';
import helmet from 'helmet';
import cors from 'cors';


const app = express();
app.use(cors())
app.use(helmet());
app.use(express.json());
app.use(linksRouter);

export default app;