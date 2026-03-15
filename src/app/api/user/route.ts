import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getNextSequence } from "@/lib/nextSequence";

export async function POST(req: Request) {
    try {
        await connectDB();
        const { name, age, contact, email, password, role } = await req.json();
        //console.log(name, age, contact, email, password, role);
        const existUser = await User.findOne({ email });
        if (existUser) {
            return NextResponse.json(
                { message: "User exists" },
                { status: 400 },
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const sequence = await getNextSequence("userId");
        const userId = `U-${sequence}`;

        await User.create({
            userId,
            name,
            age,
            contact,
            email,
            password: hashedPassword,
            role,
        });
        return NextResponse.json(
            { message: "User profile created" },
            { status: 201 },
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const users = await User.find().sort({ createdAt: -1 });
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
