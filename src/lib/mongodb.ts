import mongoose from "mongoose";

export async function connectDB() {
    try {
        if (mongoose.connection.readyState >= 1) return;
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Connected to mongodb");
    } catch (error) {
        console.log("Error connecting to mongodb", error);
    }
}
