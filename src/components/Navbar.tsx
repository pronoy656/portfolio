"use client";

import React, { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

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
  const [menuBurst, setMenuBurst]           = useState({ x: 340, y: 36, radius: 1100 });
  const [mounted, setMounted]               = useState(false);
  const { resolvedTheme, setTheme }         = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const toggleMobileMenu = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e?.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.round(rect.left + rect.width / 2);
      const y = Math.round(rect.top + rect.height / 2);
      const radius = Math.ceil(
        Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        )
      );
      setMenuBurst({ x, y, radius });
    }
    setMobileMenuOpen((v) => !v);
  };

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextIsDark = !isDark;
    const nextTheme = nextIsDark ? "dark" : "light";

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const doc = document as unknown as {
      startViewTransition?: (cb: () => void) => {
        ready: Promise<void>;
        finished: Promise<void>;
      };
    };

    if (typeof doc.startViewTransition !== "function" || prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const root = document.documentElement;
    root.classList.add("theme-burst");

    const transition = doc.startViewTransition(() => {
      root.classList.toggle("dark", nextIsDark);
      root.style.colorScheme = nextTheme;
      flushSync(() => {
        setTheme(nextTheme);
      });
    });

    transition.ready
      .then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 750,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {});

    transition.finished
      .finally(() => {
        root.classList.remove("theme-burst");
      })
      .catch(() => {
        root.classList.remove("theme-burst");
      });
  };

  useEffect(() => {
    let lastState = false;
    const onScroll = () => {
      const isOver = window.scrollY > 40;
      if (isOver !== lastState) {
        lastState = isOver;
        setScrolled(isOver);
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

    // Unlock scroll & resume Lenis immediately before computing/performing scroll (critical on mobile menu)
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;
    if (lenis && typeof lenis.start === "function") {
      try {
        lenis.start();
      } catch (_) {}
    }
    setMobileMenuOpen(false);

    if (href === "#hero" || href === "#") {
      requestAnimationFrame(() => {
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(0, { duration: 1.0, force: true });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
      window.history.pushState(null, "", "/");
      return;
    }

    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      requestAnimationFrame(() => {
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        // Generous clearance offset so section headers never hide underneath the fixed navbar pill
        const navClearance = isMobile ? 85 : 95;
        const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navClearance);

        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(targetY, { duration: 1.0, force: true });
        } else {
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      });
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
        html.dark .nav-link {
          color: #a1a1aa;
        }
        html.dark .nav-link:hover {
          color: #ffffff;
          background: rgba(99, 102, 241, 0.22);
        }
        @media (max-width: 767px) {
          .nav-header-scrolled {
            box-sizing: border-box;
          }
          .nav-bar-scrolled {
            box-shadow: 0 8px 24px rgba(99, 102, 241, 0.28) !important;
            box-sizing: border-box;
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
            maxWidth:       scrolled ? "900px"                              : "1920px",
            boxSizing:      "border-box",
            padding:        scrolled ? "8px 12px 8px 16px"                  : "14px 18px",
            borderRadius:   scrolled ? "9999px"                             : "0px",
            background:     scrolled
              ? (isDark ? "rgba(17,18,24,0.9)" : "rgba(255,255,255,0.92)")
              : "rgba(255,255,255,0)",
            backdropFilter: scrolled ? "blur(16px)"                         : "none",
            boxShadow:      scrolled
              ? (isDark
                  ? "0 0 0 1px rgba(255,255,255,0.10), 0 8px 32px rgba(0,0,0,0.45)"
                  : "0 0 0 1px rgba(0,0,0,0.07), 0 8px 32px rgba(0,0,0,0.10)")
              : "0 0 0 0px rgba(0,0,0,0), 0 0px 0px rgba(0,0,0,0)",
            pointerEvents: "auto",
            transition: [
              `border-radius   ${DUR} ${SPRING} ${D1}`,
              `padding         ${DUR} ${SPRING} ${D1}`,
              `max-width       ${DUR} ${SPRING} ${D2}`,
              `background      ${DUR} ease      ${D3}`,
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
              background:     scrolled
                ? "rgba(255,255,255,0)"
                : (isDark ? "rgba(24,24,27,0.68)" : "rgba(255,255,255,0.5)"),
              backdropFilter: scrolled ? "blur(0px)"                 : "blur(20px)",
              borderRadius:   "9999px",
              border:         isDark ? "1px solid rgba(255,255,255,0.09)" : "1px solid rgba(0,0,0,0.06)",
              borderColor:    scrolled
                ? "transparent"
                : (isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.06)"),
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

            {/* Desktop Dark/Light Mode Switch */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20 transition-all duration-200 active:scale-90 cursor-pointer ml-1"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

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

          {/* ── Mobile controls: Theme Switch + Hamburger ── */}
          <div className="md:hidden flex items-center gap-2 relative z-20 pointer-events-auto shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-transform duration-150 active:scale-90 bg-white/95 hover:bg-gray-100 dark:bg-zinc-900/95 dark:hover:bg-zinc-800 text-gray-900 dark:text-zinc-100 border border-gray-200/90 dark:border-zinc-700/80 shadow-2xs shrink-0"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-9 h-9 rounded-full transition-transform duration-150 active:scale-90 bg-white/95 hover:bg-gray-100 dark:bg-zinc-900/95 dark:hover:bg-zinc-800 text-gray-900 dark:text-zinc-100 border border-gray-200/90 dark:border-zinc-700/80 shadow-2xs shrink-0"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Full-Screen Editorial Menu Overlay (Circular Burst Reveal like Dark Mode Toggle) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: `circle(0px at ${menuBurst.x}px ${menuBurst.y}px)` }}
            animate={{ clipPath: `circle(${menuBurst.radius}px at ${menuBurst.x}px ${menuBurst.y}px)` }}
            exit={{ clipPath: `circle(0px at ${menuBurst.x}px ${menuBurst.y}px)` }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "clip-path", pointerEvents: mobileMenuOpen ? "auto" : "none" }}
            className="md:hidden fixed inset-0 w-full h-[100dvh] max-h-[100dvh] bg-white dark:bg-[#08090f] dark:bg-[radial-gradient(ellipse_at_top_right,#151936_0%,#090a11_60%,#07080d_100%)] z-[120] flex flex-col justify-between px-6 sm:px-10 pt-5 pb-6 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden select-none"
          >
            {/* Top Bar: Brand Logo & Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-150 dark:border-zinc-800 shrink-0">
              <span className="font-serif italic font-bold text-xl text-gray-950 dark:text-zinc-50 tracking-tight">
                Pronoy Pal
              </span>
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-900 dark:text-zinc-100 transition-colors cursor-pointer active:scale-95"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation List matching the editorial screenshot structure */}
            <nav className="flex-1 flex flex-col justify-start pt-2 sm:pt-4 pb-3">
              {mobileNavItems.map((item, i) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="group flex items-baseline gap-4 sm:gap-6 py-3.5 sm:py-4 border-b border-gray-100 dark:border-zinc-800/80 text-left transition-colors duration-200 cursor-pointer"
                >
                  {/* Number Prefix (01, 02, etc.) */}
                  <span className="font-mono text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 shrink-0 select-none w-7 sm:w-8">
                    {item.number}
                  </span>

                  {/* Editorial Serif Heading */}
                  <span
                    className={`font-serif text-[32px] sm:text-4xl leading-[1.15] text-gray-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:italic group-hover:translate-x-2 transition-transform duration-200 ${
                      i === 0 ? "italic text-gray-950 dark:text-white font-normal" : "font-normal"
                    }`}
                  >
                    {item.name}
                  </span>
                </a>
              ))}
            </nav>

            {/* Bottom Footer Bar */}
            <div className="pt-4 border-t border-gray-150 dark:border-zinc-800 flex flex-row items-center justify-between gap-3 shrink-0 mt-auto">
              {/* Left Social Links */}
              <div className="flex items-center gap-4 sm:gap-5">
                <a
                  href="https://github.com/pronoy656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] sm:text-xs font-semibold text-gray-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/pronoy-pal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] sm:text-xs font-semibold text-gray-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:pronoypaul56@gmail.com"
                  className="font-mono text-[11px] sm:text-xs font-semibold text-gray-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
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
                <span className="font-mono text-[10px] sm:text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider whitespace-nowrap">
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
