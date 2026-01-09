import dotenv from "dotenv";
import app from "./app.js";
import { connectDb } from "./dbConnection.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

// This logic ensures we connect to DB only when a request actually comes in
const start = async () => {
  try {
    await connectDb(MONGODB_URI);
  } catch (err) {
    console.error("Database connection failed:", err);
  }
};

// Check if we are running on Vercel or locally
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 4000;
  start().then(() => {
    app.listen(PORT, () => console.log(`Server running at ${PORT}`));
  });
}

// Vercel handles the execution by calling this export
export default async (req, res) => {
  await start(); // Ensure DB is connected for every serverless hit
  return app(req, res);
};
