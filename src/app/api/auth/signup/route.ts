import { connectDB } from "@/lib/mongodb";
import { getNextSequence } from "@/lib/nextSequence";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, age, contact, email, password } = await req.json();
        await connectDB();

        const existUser = await User.findOne({ email });
        if (existUser) {
            return NextResponse.json({ message: "User exists" }, { status: 400 });
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
            role: "patient",
        });
        return NextResponse.json({ messege: "User created" }, { status: 201 });
    } catch {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
