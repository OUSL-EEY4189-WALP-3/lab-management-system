import { SettingsBar } from "@/components";

export default function SettingsLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
    return(
        <div>
             <div className="d-flex justify-content-between align-items-center px-4 py-2 mb-4 mt-2" style={{borderBottom: "1px solid #d6cece"}}>
                <h2>Settings</h2>
                <SettingsBar />
            </div>
            {children}
        </div>
    );
}