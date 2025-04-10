import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { db } from './dbConnection.js';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import hotelRoutes from './routes/hotel.route.js'
import roomRoutes from './routes/rooms.route.js';
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/users", userRoutes);
app.use("/api/rooms", roomRoutes);

app.get("/api", (req, res) => res.json({ message: "Welcome to EasyBookings" }));
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({ message: errorMessage });
})
db.then(() => {
    app.listen(PORT, () => console.log(`server running at ${PORT}`));
});
export default (req, res) => {
    return app(req, res);
};