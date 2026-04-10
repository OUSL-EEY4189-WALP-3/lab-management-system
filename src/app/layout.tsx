import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapScripts from "@/components/BootstrapScripts.js";
import "./globals.css";
import { Header, Footer, Providers, BootstrapClient } from "@/components";
import { SessionProvider } from "next-auth/react";
import { Geist } from 'next/font/google'
 
const geist = Geist({
  subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Allied Diagnostics",
    description: "Lab Management System",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={geist.className}>
            <body>
              <Providers>
                <Header />
                <BootstrapClient />
                {children}
                <Footer />
              </Providers>  
            </body>
        </html>
    );
}
