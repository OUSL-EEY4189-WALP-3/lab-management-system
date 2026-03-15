import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> },
) {
    try {
        await connectDB();
        const { id } = await context.params;
        const user = await User.findById(id);
        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 },
            );
        }
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

export async function PUT(
    req: Request,
    context: { params: Promise<{ id: string }> },
) {
    try {
        await connectDB();
        const { id } = await context.params;
        const { name, age, contact, email, password, role } = await req.json();

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const update = await User.findByIdAndUpdate(
                id,
                { name, age, contact, email, password: hashedPassword, role },
                { new: true },
            );
        }

        if (!password) {
            const update = await User.findByIdAndUpdate(
                id,
                { name, age, contact, email, role },
                { new: true },
            );
        }

        return NextResponse.json({ message: "User updated" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
