import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const connectionURL = process.env.MONGODB_URI;

// Ensure connectionURL is a string
if (!connectionURL) {
    throw new Error("CONNECTION_URL is not defined in the environment variables.");
}

//db connection
export const db = mongoose.connect((connectionURL))
    .then(res => {
        if (res) {
            console.log(`Database connection succeffully to mongodb`)
        }
    }).catch(err => {
        console.log(err)
    });