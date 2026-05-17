"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About",      href: "#about" },
  { name: "Works",      href: "#projects" },
  { name: "Stack",      href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Connect",    href: "#contact" },
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update the URL hash without triggering a jump
      window.history.pushState(null, "", href);
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
      `}</style>

      {/* ── Fixed wrapper ────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center"
        style={{
          padding:       scrolled ? "12px 20px" : "0",
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
          className="w-full flex items-center justify-between"
          style={{
            maxWidth:       scrolled ? "740px"                              : "1920px",
            padding:        scrolled ? "6px 6px 6px 22px"                  : "20px 48px",
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
          {/* ── Logo ── */}
          <a href="/" className="shrink-0 group select-none flex items-center">
            <span
              className="font-black uppercase tracking-tighter text-gray-900 group-hover:text-indigo-600 transition-colors duration-300"
              style={{
                fontSize:        "20px",   // static — no reflow
                lineHeight:      "1",
                display:         "inline-block",
                transformOrigin: "left center",
                // scale() is GPU-composited → never triggers layout
                transform:  scrolled ? "scale(0.75)" : "scale(1)",
                transition: `transform ${DUR} ${SPRING} ${D1}`,
              }}
            >
              Pronoy<span className="text-indigo-600">.</span>
            </span>
          </a>

          {/* ── Desktop nav ── */}
          <nav
            className="hidden md:flex items-center"
            style={{
              gap:            "2px",
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
                  padding:    scrolled ? "6px 12px" : "8px 20px",
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
                fontSize:        "10px",
                fontWeight:      "700",
                textTransform:   "uppercase",
                letterSpacing:   "0.1em",
                color:           "white",
                background:      "#4f46e5",
                padding:         scrolled ? "6px 14px" : "8px 20px",
                marginLeft:      scrolled ? "2px"      : "0px",
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
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="md:hidden fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35, ease: "easeOut" }}
                onClick={(e) => { handleNavClick(e, item.href); setMobileMenuOpen(false); }}
                className="text-5xl font-bold tracking-tighter text-gray-900 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.05, duration: 0.35 }}
              onClick={(e) => { handleNavClick(e, "#contact"); setMobileMenuOpen(false); }}
              className="mt-4 px-12 py-4 rounded-full bg-[#1a1c20] text-white font-bold uppercase tracking-widest text-xs hover:bg-indigo-600 transition-all duration-300"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
