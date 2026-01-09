import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectDb(uri) {
  console.log(uri);
  if (!uri) throw new Error("Missing MongoDB URI (MONGODB_URI)");
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri, {
    dbName: process.env.MONGODB_URI || "mongodb://localhost:27017/easybookings",
  });
  console.log("Database connection successfully to MongoDB");
}

export async function disconnectDb() {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close();
  }
}
