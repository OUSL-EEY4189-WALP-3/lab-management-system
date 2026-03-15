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
    <div className="d-flex ">
      
      {/* Sidebar */}
      <div style={{borderRight: "1px solid #d6cece", paddingTop: 50, minWidth: 150, maxWidth: 150, width: 150}}>
          <Sidebar role={role} />
      </div>

      {/* Main content area */}
      <main style={{flexGrow: 1}}>
        <div>
          {children}
        </div>
      </main>

    </div>
  );
}
