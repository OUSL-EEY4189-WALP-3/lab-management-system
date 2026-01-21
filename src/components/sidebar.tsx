"use client";

import { sidebarConfig } from "@/lib/sidebarConfig";
import Link from "next/link";

type SidebarProps = {
  role: "patient" | "admin";
};

export default function Sidebar({ role }: SidebarProps) {
  const menu = sidebarConfig[role];

  return (
    <aside className="bg-white rounded-4 shadow-sm p-3 vh-100 sidebar-wrapper mt-4 mb-4">
      {/* Navigation */}
      <nav className="nav flex-column gap-2">
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

      <style jsx>{`
        .sidebar-wrapper {
          min-width: 220px;
          background: #ffffff;
        }

        .sidebar-link {
          transition: all 0.2s ease;
        }

        .sidebar-link:hover {
          background: #f0f2f7;
          color: #007bff;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </aside>
  );
}
