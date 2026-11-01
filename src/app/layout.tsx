import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pronoy Pal | Frontend-Focused Full-Stack Developer",
  description: "Portfolio of Pronoy Pal — Frontend-Focused Full-Stack Developer specializing in React.js, Next.js, TypeScript, and responsive production web applications.",
  metadataBase: new URL("https://pronoypal.dev"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Pronoy Pal | Frontend-Focused Full-Stack Developer",
    description: "Portfolio of Pronoy Pal — Frontend-Focused Full-Stack Developer specializing in React.js, Next.js, TypeScript, and responsive production web applications.",
    url: "https://pronoypal.dev",
    siteName: "Pronoy Pal",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Pronoy Pal Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pronoy Pal | Frontend-Focused Full-Stack Developer",
    description: "Portfolio of Pronoy Pal — Frontend-Focused Full-Stack Developer specializing in React.js, Next.js, TypeScript, and responsive production web applications.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased selection:bg-indigo-500 selection:text-white`}>
        <SmoothScroll />
        <CustomCursor />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--bg-gradient-start)_0%,_var(--bg-gradient-end)_100%)] pointer-events-none -z-10" />
        {children}
      </body>
    </html>
  );
}
