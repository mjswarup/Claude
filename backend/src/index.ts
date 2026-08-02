import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import authRouter from './routes/auth';
import resumeRouter from './routes/resume';

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:4173' }));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/resumes', resumeRouter);

app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`CareerForge AI backend listening on port ${port}`);
});
