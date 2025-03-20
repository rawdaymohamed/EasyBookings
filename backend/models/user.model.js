import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({

});
export default mongoose.model('User', userSchema);