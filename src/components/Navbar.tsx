"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Works", href: "#projects" },
  { name: "Stack", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Connect", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Pill Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 pl-2 pr-4 py-2 rounded-full bg-black/5 border border-black/10 backdrop-blur-md"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-brand">
            <Image
              src="/logo-potfolio.png"
              alt="Logo"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block text-foreground">
            Pronoy
          </span>
          <button className="md:hidden ml-2 text-foreground">
            <Menu size={16} />
          </button>
        </motion.div>

        {/* Desktop Nav - Centered/Right */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-1 border border-border-color bg-[var(--nav-bg)] backdrop-blur-xl p-1 rounded-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-muted-text hover:text-foreground hover:bg-foreground/5 transition-all"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest bg-brand text-white hover:bg-black transition-all"
            >
              Hire
            </a>
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle for full menu */}
        <button
          className="md:hidden text-white mix-blend-difference"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-background z-[90] flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-5xl font-bold tracking-tighter hover:text-[#ff7d4d] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-12 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest text-xs"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
