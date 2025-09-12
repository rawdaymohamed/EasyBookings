import dotenv from 'dotenv';
import app from './app.js';
import { connectDb } from './dbConnection.js';

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/easybookings';

async function start() {
  try {
    await connectDb(MONGODB_URI);
    app.listen(PORT, () => console.log(`server running at ${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();