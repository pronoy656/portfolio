"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "About",      href: "#about" },
  { name: "Services",   href: "#services" },
  { name: "Works",      href: "#projects" },
  { name: "Stack",      href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Connect",    href: "#contact" },
];

const mobileNavItems = [
  { number: "01", name: "Home",       href: "#hero" },
  { number: "02", name: "About",      href: "#about" },
  { number: "03", name: "Skills",     href: "#skills" },
  { number: "04", name: "Experience", href: "#experience" },
  { number: "05", name: "Work",       href: "#projects" },
  { number: "06", name: "Education",  href: "#education" },
  { number: "07", name: "Contact",    href: "#contact" },
];

// ── Timing tokens ────────────────────────────────────────────────────────────
const SPRING = "cubic-bezier(0.25, 1, 0.5, 1)";
const DUR    = "0.72s";
const D1     = "0s";     // shape — instant start
const D2     = "0.08s";  // width — follows shape
const D3     = "0.15s";  // glass — breathes in after shape
const D4     = "0.20s";  // shadow — final flourish

export default function Navbar() {
  const [scrolled, setScrolled]             = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastState = false;
    const onScroll = () => {
      const isOver = window.scrollY > 40;
      if (isOver !== lastState) {
        lastState = isOver;
        setScrolled(isOver);
      }
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const p = Math.min(100, Math.max(0, (window.scrollY / total) * 100));
        setScrollProgress(p);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      if (lenis && typeof lenis.stop === "function") {
        try { lenis.stop(); } catch (_) {}
      }
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      if (lenis && typeof lenis.start === "function") {
        try { lenis.start(); } catch (_) {}
      }
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      if (lenis && typeof lenis.start === "function") {
        try { lenis.start(); } catch (_) {}
      }
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#hero" || href === "#") {
      const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { duration: 1.1 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      window.history.pushState(null, "", "/");
      return;
    }
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      // Generous clearance offset so section headers never hide underneath the fixed navbar pill
      const navClearance = isMobile ? 85 : 95;
      const targetY = Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - navClearance);

      const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(targetY, { duration: 1.1 });
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
      // Update the URL hash without triggering a jump
      window.history.pushState(null, "", href);
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <>
      {/*
       * ── Pure CSS hover for nav links ────────────────────────────────────
       * Using a <style> tag means ZERO JS on hover — runs entirely in the
       * browser's native style engine. No React re-renders, no interruptions.
       */}
      <style>{`
        .nav-link {
          display: block;
          border-radius: 9999px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #9ca3af;
          background: transparent;
          text-decoration: none;
          transition: color 0.28s ease, background 0.28s ease;
        }
        .nav-link:hover {
          color: #1a1c20;
          background: rgba(99, 102, 241, 0.09);
        }
        @media (max-width: 767px) {
          .nav-header-scrolled {
            padding: 10px 14px !important;
            max-width: 100vw !important;
            box-sizing: border-box !important;
          }
          .nav-bar-scrolled {
            box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3) !important;
            max-width: calc(100vw - 28px) !important;
            box-sizing: border-box !important;
          }
        }
        @media (min-width: 768px) {
          .nav-header-scrolled {
            padding: 14px 24px !important;
          }
          .nav-bar-scrolled {
            padding: 10px 10px 10px 24px !important;
          }
          .nav-bar-default {
            padding: 20px 48px !important;
          }
        }
      `}</style>

      {/* ── Fixed wrapper ────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center w-full max-w-full box-border ${scrolled ? "nav-header-scrolled" : ""}`}
        style={{
          padding:       scrolled ? "10px 14px" : "0",
          boxSizing:     "border-box",
          maxWidth:      "100vw",
          pointerEvents: "none",
          transition:    `padding ${DUR} ${SPRING} ${D1}`,
        }}
      >
        {/*
         * ── Inner bar / pill ─────────────────────────────────────────────
         *
         * Key fixes vs previous version:
         *  • font-size → transform:scale (GPU, no reflow)
         *  • backdrop-filter: blur(0px) NOT "none" — interpolatable
         *  • box-shadow zero-value instead of "none" — no flash
         *  • No React hover state — pure CSS :hover
         */}
        <div
          className={`w-full max-w-full min-w-0 box-border flex items-center justify-between relative overflow-hidden ${scrolled ? "nav-bar-scrolled" : "nav-bar-default"}`}
          style={{
            maxWidth:       scrolled ? "860px"                              : "1920px",
            boxSizing:      "border-box",
            padding:        scrolled ? "8px 12px 8px 16px"                  : "14px 18px",
            borderRadius:   scrolled ? "9999px"                             : "0px",
            background:     scrolled ? "rgba(255,255,255,0.88)"             : "rgba(255,255,255,0)",
            backdropFilter: scrolled ? "blur(24px) saturate(1.8)"           : "blur(0px)",
            boxShadow:      scrolled
              ? "0 0 0 1px rgba(0,0,0,0.07), 0 8px 40px rgba(0,0,0,0.10)"
              : "0 0 0 0px rgba(0,0,0,0), 0 0px 0px rgba(0,0,0,0)",
            pointerEvents: "auto",
            transition: [
              `border-radius   ${DUR} ${SPRING} ${D1}`,
              `padding         ${DUR} ${SPRING} ${D1}`,
              `max-width       ${DUR} ${SPRING} ${D2}`,
              `background      ${DUR} ease      ${D3}`,
              `backdrop-filter ${DUR} ease      ${D3}`,
              `box-shadow      ${DUR} ease      ${D4}`,
            ].join(", "),
          }}
        >
          {/* ── Mobile Scrolled Brand Fill (Smooth Left-to-Right sweep on scroll, 100% Solid Plain Color) ── */}
          <div
            className="md:hidden absolute inset-0 rounded-full overflow-hidden pointer-events-none z-10"
            aria-hidden="true"
          >
            {/* Pure solid plain brand color layer — zero gradient */}
            <div
              className="w-full h-full bg-[#6366f1]"
              style={{
                transformOrigin: "left center",
                transform: scrolled ? "scaleX(1)" : "scaleX(0)",
                opacity: scrolled ? 1 : 0,
                transition: "transform 0.68s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease",
              }}
            />
          </div>

          {/* ── Logo ── */}
          <a href="/" className="shrink-0 group select-none flex items-center relative z-20">
            <Image
              src="/logo.png"
              alt="Pronoy Pal Logo"
              width={40}
              height={40}
              priority
              style={{
                width:           scrolled ? "32px" : "40px",
                height:          scrolled ? "32px" : "40px",
                borderRadius:    "8px",
                objectFit:       "contain",
                transformOrigin: "left center",
                transition: `width ${DUR} ${SPRING} ${D1}, height ${DUR} ${SPRING} ${D1}`,
              }}
            />
          </a>

          {/* ── Desktop nav ── */}
          <nav
            className="hidden md:flex items-center relative z-20"
            style={{
              gap:            "3px",
              padding:        scrolled ? "0"                         : "4px",
              background:     scrolled ? "rgba(255,255,255,0)"       : "rgba(255,255,255,0.5)",
              backdropFilter: scrolled ? "blur(0px)"                 : "blur(20px)",
              borderRadius:   "9999px",
              border:         "1px solid rgba(0,0,0,0.06)",
              borderColor:    scrolled ? "transparent"               : "rgba(0,0,0,0.06)",
              transition: [
                `padding         ${DUR} ${SPRING} ${D1}`,
                `background      ${DUR} ease      ${D3}`,
                `border-color    ${DUR} ease      ${D3}`,
                `backdrop-filter ${DUR} ease      ${D3}`,
              ].join(", "),
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link"
                style={{
                  padding:    scrolled ? "8px 14px" : "8px 20px",
                  transition: [
                    `padding    ${DUR} ${SPRING} ${D2}`,
                    "color      0.28s ease",
                    "background 0.28s ease",
                  ].join(", "),
                }}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              style={{
                display:         "block",
                borderRadius:    "9999px",
                fontSize:        "11px",
                fontWeight:      "700",
                textTransform:   "uppercase",
                letterSpacing:   "0.08em",
                color:           "white",
                background:      "#4f46e5",
                padding:         scrolled ? "8px 18px" : "8px 20px",
                marginLeft:      scrolled ? "3px"      : "0px",
                textDecoration:  "none",
                transition: [
                  `padding       ${DUR} ${SPRING} ${D2}`,
                  `margin-left   ${DUR} ${SPRING} ${D2}`,
                  "background    0.3s ease",
                ].join(", "),
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#4338ca")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#4f46e5")}
            >
              Hire
            </a>
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 active:scale-95 relative z-20 pointer-events-auto bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200/90 shadow-2xs"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Full-Screen Editorial Menu Overlay (Silky Smooth Curtain Drop & Staggered Reveal) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.985, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.985, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 w-full h-[100dvh] max-h-[100dvh] bg-white z-[120] flex flex-col justify-between px-6 sm:px-10 pt-5 pb-6 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden select-none pointer-events-auto shadow-2xl"
          >
            {/* Top Bar: Brand Logo & Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-150 shrink-0">
              <span className="font-serif italic font-bold text-xl text-gray-950 tracking-tight">
                Pronoy Pal
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 flex items-center justify-center text-gray-900 transition-colors cursor-pointer active:scale-95"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation List matching the editorial screenshot structure */}
            <nav className="flex flex-col justify-center my-auto py-2">
              {mobileNavItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 8, filter: "blur(2px)" }}
                  transition={{ delay: 0.05 + i * 0.032, duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setMobileMenuOpen(false);
                  }}
                  className="group flex items-baseline gap-4 sm:gap-6 py-2.5 sm:py-3.5 border-b border-gray-100 text-left transition-all duration-300 cursor-pointer"
                >
                  {/* Number Prefix (01, 02, etc.) */}
                  <span className="font-mono text-xs sm:text-sm font-bold text-indigo-600 shrink-0 select-none w-6 sm:w-8">
                    {item.number}
                  </span>

                  {/* Editorial Serif Heading */}
                  <span
                    className={`font-serif text-2xl sm:text-3xl text-gray-800 group-hover:text-indigo-600 group-hover:italic group-hover:translate-x-2 transition-all duration-300 ${
                      i === 0 ? "italic text-gray-950 font-normal" : "font-normal"
                    }`}
                  >
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Bottom Footer Bar */}
            <div className="pt-4 border-t border-gray-150 flex flex-row items-center justify-between gap-3 shrink-0 mt-auto">
              {/* Left Social Links */}
              <div className="flex items-center gap-4 sm:gap-5">
                <a
                  href="https://github.com/pronoy656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] sm:text-xs font-semibold text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/pronoy-pal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] sm:text-xs font-semibold text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:pronoypaul56@gmail.com"
                  className="font-mono text-[11px] sm:text-xs font-semibold text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Email
                </a>
              </div>

              {/* Right Available for Work with Pulse */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[10px] sm:text-xs font-bold text-indigo-600 uppercase tracking-wider whitespace-nowrap">
                  Available for work
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
