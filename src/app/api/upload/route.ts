import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";


export async function POST(req: Request) {
    const formData = await req.formData();

    const file = formData.get("report") as File;
    const bookingId = formData.get("bookingId") as string;
    console.log("BOOKING ID:", bookingId);

    if(!file) {
        return NextResponse.json({message: "No file uploaded"}, { status: 404});
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${Date.now()}_${file.name}`;
    const filePath = path.join(process.cwd(),"public/reports", fileName)
    await writeFile(filePath, buffer)

    await connectDB();
    const updated = await Booking.findByIdAndUpdate(bookingId, {
        reportUrl: `/reports/${fileName}`,
    });
    console.log("UPDATED BOOKING:", updated);
    return NextResponse.json({message: "File uploaded"}, {status: 200});
}