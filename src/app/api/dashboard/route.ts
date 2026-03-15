import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await connectDB();
    const pendingCount = await Booking.countDocuments({ status: "pending"});
    const ongoingCount = await Booking.countDocuments({ status: "ongoing"});
    const completedCount = await Booking.countDocuments({ status: "completed"});
    return NextResponse.json({pendingCount, ongoingCount, completedCount}, {status: 200});
}