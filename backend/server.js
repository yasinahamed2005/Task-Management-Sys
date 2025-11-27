import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import userRouter from './routes/userRoute.js'
import taskRouter from './routes/taskRoute.js'

// Load env variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // your React frontend
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB
connectDB();

// Routes
app.use("/api/user", userRouter);
app.use("/api/tasks",taskRouter);
app.get('/', (req, res) => {
  res.send('API WORKING');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
