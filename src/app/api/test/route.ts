import { connectDB } from "@/lib/mongodb";
import { getNextSequence } from "@/lib/nextSequence";
import Test from "@/models/Test";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { testName, specimenType, price } = await req.json();
        await connectDB();

        const sequence = await getNextSequence("testId");
        const testId = `T-${sequence}`;

        await Test.create({
            testId,
            testName,
            specimenType,
            status: true as Boolean,
            price,
        });
        return NextResponse.json({message: "Test added"}, {status: 201});
    }
    catch {
        return NextResponse.json({messege: "Server error"}, {status: 500});
    }
 }

export async function GET() {
    try {
        await connectDB();
        const tests = await Test.find().sort({ createdAt: -1})
        return NextResponse.json(tests, {status: 201})
    }
    catch {
        return NextResponse.json({message: "Server error"}, {status: 500});
    }
}