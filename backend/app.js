import express from "express";
import dotenv from "dotenv";
import { db } from './dbConnection.js';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import hotelRoutes from './routes/hotel.route.js'
import roomRoutes from './routes/rooms.route.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);

app.get("/", (req, res) => res.json({ message: "Welcome to EasyBookings" }));

db.then(() => {
    app.listen(PORT, () => console.log(`server running at ${PORT}`));
});