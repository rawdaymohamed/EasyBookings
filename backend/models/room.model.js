import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomSchema = new Schema({

}, { timestamps: true });
export default mongoose.model('Room', roomSchema);