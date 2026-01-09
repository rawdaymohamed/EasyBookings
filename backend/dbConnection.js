import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectDb(uri) {
  if (!uri) throw new Error("Missing MongoDB URI (MONGODB_URI)");
  // mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log("Database connection successfully to MongoDB");
}

export async function disconnectDb() {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close();
  }
}
