import { settingsbarConfig } from "@/lib/settingsbarConfig";
import Link from "next/link";

export default function SettingsBar() {
    const menu = settingsbarConfig["admin"];
    return (
        <div className="container d-flex justify-content-end align-items-center">
            <div className="btn-group" role="group">
                {menu.map((item, index) => (
                    <Link key={index} href={item.href} className="btn btn-outline-primary">
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
