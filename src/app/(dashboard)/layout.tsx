import Sidebar from "@/components/sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  
  if(!session) {
    redirect("/login");
  }

  const role = session.user.role;
  
  return (
    <div className="dashboard-wrapper">
      
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main content area */}
      <main className="dashboard-content">
        <div className="content-card">
          {children}
        </div>
      </main>

    </div>
  );
}
