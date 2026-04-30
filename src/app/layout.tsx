import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pronoy | Digital Architect",
  description: "Portfolio of Pronoy, crafting high-end digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased noise selection:bg-indigo-500 selection:text-white`}>
        <SmoothScroll />
        <CustomCursor />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--bg-gradient-start)_0%,_var(--bg-gradient-end)_100%)] pointer-events-none -z-10" />
        {children}
      </body>
    </html>
  );
}
