import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function PatientRoot() {
    // const session = await getServerSession(authOptions);
    
    // if(!session || session.user.role !== "patient") {
    //     redirect("/admin/dashboard");
    // }
    return null;
}