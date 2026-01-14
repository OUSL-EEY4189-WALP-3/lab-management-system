import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const role: "patient" | "admin" = "admin";
    return (
        <div>
            <Sidebar role={role} />
            <main>{children}</main>;
    </div>
    );
}