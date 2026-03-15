import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    bookingId: {
        type: String,
        unique: true,
    },
    userId: String,
    userName: String,
    testId: String,
    date: String,
    time: String,
    note: String,
    status: {
        type: String,
        enum: ["pending", "ongoing", "completed", "Cancelled"],
        default: "pending",
    },
    reportUrl: String,
});

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
