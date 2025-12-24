import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapScripts from '@/components/BootstrapScripts.js';
import "./globals.css";
import { Header, Footer } from '@/components';  

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
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
