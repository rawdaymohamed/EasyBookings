import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import hotelRoutes from './routes/hotel.route.js';
import roomRoutes from './routes/rooms.route.js';

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);

// Health + welcome
app.get('/health', (_req, res) => res.status(200).json({ ok: true }));
app.get('/api', (_req, res) => res.json({ message: 'Welcome to EasyBookings' }));

// Central error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).json({ message: errorMessage });
});

export default app;