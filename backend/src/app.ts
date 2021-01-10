import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import linksRouter from './routes/routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(linksRouter);

export default app;