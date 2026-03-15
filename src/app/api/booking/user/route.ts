import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB();
    const session = await getServerSession(authOptions);

    if(!session) {
        return NextResponse.json({message: "Unauthorized"}, {status: 404});
    }
    const userId = session.user.userId;

    const bookings = await Booking.find({ userId });
    return NextResponse.json(bookings);
}