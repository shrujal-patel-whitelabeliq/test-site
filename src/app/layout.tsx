import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Antigravity Solutions | Top-Tier IT Services & Digital Transformation",
    description: "Antigravity Solutions provides enterprise-grade web development, mobile apps, and digital marketing strategies. 25+ years of excellence.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("font-sans antialiased bg-primary-950 text-slate-100 min-h-screen flex flex-col")}>
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
