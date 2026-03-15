import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const TestSchema = new mongoose.Schema(
    {
        testId: {
            type: String,
            unique: true,
        },
        testName: {
            type: String,
            required: true,
        },
        specimenType: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true },
);

export default mongoose.models.Test || mongoose.model("Test", TestSchema);
