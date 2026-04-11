import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const formData = await req.formData();

    const file = formData.get("report") as File;
    const bookingId = formData.get("bookingId") as string;

    if (!file) {
        return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }

    // Upload to Vercel Blob
    const blob = await put(`reports/${Date.now()}-${file.name}`, file, {
        access: "public",
    });

    await connectDB();

    await Booking.findByIdAndUpdate(bookingId, {
        reportUrl: blob.url,
    });

    return NextResponse.json({
        message: "Uploaded successfully",
        url: blob.url,
    });
}