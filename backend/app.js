import express from "express";
import dotenv from "dotenv";
import { db } from './dbConnection.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => res.json({ message: "Welcome to EasyBookings" }))
db.then(() => {
    app.listen(PORT, () => console.log(`server running at ${PORT}`));
});