import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardRoot() {
    const session = await getServerSession(authOptions);
    // console.log("Session:", session)
    if(!session) redirect("/login");

    if(session.user.role === "admin") {
        redirect("/admin/dashboard");
    }
    if(session.user.role === "patient") {
        redirect("/patient/dashboard");
    }

    return null;
}