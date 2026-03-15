import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Booking from "@/models/Booking";

export async function GET(req: Request, context: {params: Promise<{id: string}>}) {
    try {
        await connectDB();
        const { id } = await context.params;
        const booking = await Booking.findById(id);
        if(!booking) {
            return NextResponse.json({message: "Booking not found"}, {status: 404});
        }
        return NextResponse.json(booking, {status: 200})
    }
    catch(error) {
        return NextResponse.json({message: "Server Error"}, {status: 500});
    }
}

export async function PUT(req: Request,  context: {params: Promise<{id: string}>}) {
    try {
        await connectDB();
        const { id } = await context.params;
        const { status } = await req.json();

        await Booking.findByIdAndUpdate(id, { status }, { new: true })
        return NextResponse.json({message: "Status updated"}, {status: 200});
    }
    catch(error) {
        console.log(error);
        return NextResponse.json({message:"Server error"}, {status: 500});
    }
}