import { connectDB } from "@/lib/mongodb";
import Test from "@/models/Test";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: Promise<{ id: string }>}) {
    try {
        await connectDB();
        const { id } = await context.params;
        const test = await Test.findById(id);
        if(!test) {
            return NextResponse.json({message: "Test not found"}, {status: 404})
        }
        return NextResponse.json(test, {status: 200});
    }
    catch {
        return NextResponse.json({message: "Server error"}, {status: 500});
    }
}

export async function PUT(req: Request, context: {params: Promise<{id: string}>}) {
    try {
        await connectDB();
        const { id } = await context.params;
        const { testName, specimenType, status, price } = await req.json();
        // console.log("Test name: ", testName, specimenType, status, price);
        const update = await Test.findByIdAndUpdate(id, { testName, specimenType, status, price }, {new: true});

        return NextResponse.json({message: "Test updated"}, {status: 200});
    }
    catch {
        return NextResponse.json({message: "Server error"}, {status: 500});
    }
}