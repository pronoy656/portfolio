import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased noise selection:bg-indigo-500 selection:text-white transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <CustomCursor />
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--bg-gradient-start)_0%,_var(--bg-gradient-end)_100%)] pointer-events-none -z-10" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
