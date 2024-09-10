import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import contributionRoutes from './routes/contributionRoutes';
import authRoutes from './routes/authRoutes';
// import { authMiddleware } from './middlewares/authMiddleware';

const app = express();

app.use(bodyParser.json());

app.use(cors());

// To allows requests from a specific origin
// app.use(cors({
//   origin: 'http://your-frontend-domain.com', // Allow only this origin
//   methods: ['GET', 'POST'], // Allow only these methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
// }));


app.use('/api', contributionRoutes); 
app.use('/api/auth', authRoutes);

export default app;
