import express from 'express';
import linksRouter from './routes/routes';

const app = express();
app.use(express.json());
app.use(linksRouter);

export default app;