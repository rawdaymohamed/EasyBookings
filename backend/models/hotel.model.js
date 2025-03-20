import mongoose from 'mongoose';
const { Schema } = mongoose;

const hotelSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    name: { type: String, required: true },
    photos: { type: [String] },
    description: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 },
    rooms: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Room',
            default: [],
        }],
    },
    cheapestPrice: { type: Number, required: true },
    featured: { type: Boolean, default: false },
});
export default mongoose.model('Hotel', hotelSchema);