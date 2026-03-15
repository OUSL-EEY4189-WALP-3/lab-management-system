import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true,
    },
    name: String,
    age: String,
    contact: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    role: {
        type: String,
        enum: ["admin", "patient"],
        default: "patient",
    },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
