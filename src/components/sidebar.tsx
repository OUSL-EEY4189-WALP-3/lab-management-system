"use client";

import { sidebarConfig } from "@/lib/sidebarConfig";
import { MdDashboard } from "react-icons/md";

import Link from "next/link";

type SidebarProps = {
    role: "patient" | "admin";
};

export default function Sidebar({ role }: SidebarProps) {
    const menu = sidebarConfig[role];

    return (
        <aside className="bg-white p-2 vh-100">
            {/* Navigation */}
            <nav className="nav flex-column gap-4 ">
                {menu.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="nav-link text-dark rounded-3 px-3 py-2 sidebar-link"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
