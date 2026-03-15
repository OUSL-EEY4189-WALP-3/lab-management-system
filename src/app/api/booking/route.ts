import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Booking from "@/models/Booking";
import { getNextSequence } from "@/lib/nextSequence";

export async function POST(req: Request) {
    try {
        await connectDB();
        const { userId, userName, testId, date, time, note } = await req.json();

        const sequence = await getNextSequence("bookingId");
        const bookingId = `B-${sequence}`;

        await Booking.create({
            bookingId,
            userId,
            userName,
            testId,
            date,
            time,
            note,
        });
        return NextResponse.json({ message: "Booking added" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const bookings = await Booking.find().sort({ createdAt: -1 });
        return NextResponse.json(bookings, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
