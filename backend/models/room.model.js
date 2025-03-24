import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomModel = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    maxPeople: { type: Number, required: true },
    roomNumbers: [{ Number: Number, unavailableDates: { type: [Date] }, }]
},
    { timestamps: true }
);
export default mongoose.model('Room', roomModel);