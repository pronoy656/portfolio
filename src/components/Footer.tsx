"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 text-[#1a1c20] transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* ── Main Minimal Grid ── */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-gray-100">
          {/* Brand & Title */}
          <div className="flex flex-col gap-1.5">
            <a href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Pronoy Pal Logo"
                width={44}
                height={44}
                style={{ borderRadius: "10px", objectFit: "contain" }}
              />
              <span className="text-2xl font-black uppercase tracking-tighter text-[#1a1c20] hover:text-indigo-600 transition-colors">
                Pronoy<span className="text-indigo-600">.</span>
              </span>
            </a>
            <p className="text-xs font-medium text-gray-500">
              Frontend Developer • Dhaka, Bangladesh
            </p>
          </div>

          {/* Minimal Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-wider text-gray-500">
            {[
              { name: "About", href: "#about" },
              { name: "Works", href: "#projects" },
              { name: "Stack", href: "#skills" },
              { name: "Experience", href: "#experience" },
              { name: "Education", href: "#education" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/pronoy656"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:border-indigo-600 transition-all hover:scale-105"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/pronoy-pal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:border-indigo-600 transition-all hover:scale-105"
            >
              <LinkedinIcon />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-indigo-600 transition-all hover:scale-105 ml-2"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* ── Sub Footer / Copyright ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Pronoy Pal. All rights reserved.</p>
          <p className="text-[11px] text-gray-400">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
