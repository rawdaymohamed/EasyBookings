
import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^\S*$/, "Username should not contain spaces"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
