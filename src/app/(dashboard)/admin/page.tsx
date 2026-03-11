import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminRoot() {
    // const session = await getServerSession(authOptions);

    // if(!session || session.user.role != "admin") {
    //     redirect("/patient/dashboard")
    // }
    return null;
}