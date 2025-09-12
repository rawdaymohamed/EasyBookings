// Vercel serverless handler (no app.listen here)
import dotenv from 'dotenv';
import app from '../app.js';
import { connectDb } from '../dbConnection.js';

dotenv.config();

let connected = false;

async function ensureDb() {
  if (!connected) {
    const uri = process.env.MONGODB_URI;
    await connectDb(uri);
    connected = true;
  }
}

// Express adapter for Vercel
export default async (req, res) => {
  await ensureDb();
  return app(req, res);
};