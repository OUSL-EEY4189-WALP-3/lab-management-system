import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const role: "patient" | "admin" = "patient";

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
