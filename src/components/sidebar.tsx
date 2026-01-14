import { sidebarConfig } from "@/lib/sidebarConfig";
import Link from "next/link";

type SidebarProps = {
    role: "patient" | "admin";
};
export default function Sidebar({ role }: SidebarProps) {
    const menu = sidebarConfig[role];
    return (
        <aside>
            <div>
                <Link href="/">
                    <img src="/logo.png" alt="logo" width={100} height={30} />
                </Link>
                <nav>
                    {menu.map((item) => (
                        <Link key={item.href} href={item.href}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
