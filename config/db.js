import mongoose from "mongoose";

export const connectDB = async () => {
    const password = process.env.DB_PASSWORD;
    const DB_URI = `mongodb+srv://n0548425076:${password}@cluster0.uy6w9ie.mongodb.net/` || 'mongodb://127.0.0.1/storeDB';
    try {
        await mongoose.connect(DB_URI
        );
        console.log(`Mongo Connect to ${DB_URI}`);
    } catch (error) {
        console.log('Mongo Error', error.message);
    }
}