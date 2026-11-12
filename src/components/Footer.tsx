"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const menuLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const footerLinkClass =
  "relative inline-flex items-center gap-1 w-fit text-sm sm:text-base font-medium text-[#090a10]/90 hover:text-[#090a10] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1.5px] after:w-full after:bg-[#090a10] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]";

export default function Footer() {
  const [dhakaTime, setDhakaTime] = useState("--:--:--");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const tick = () => setDhakaTime(formatter.format(new Date()));
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      const lenis = (
        window as unknown as {
          __lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void };
        }
      ).__lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { duration: 1.1 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    const navClearance = window.innerWidth < 768 ? 85 : 95;
    const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navClearance);
    const lenis = (
      window as unknown as {
        __lenis?: { scrollTo: (target: number, opts?: { duration?: number; force?: boolean }) => void };
      }
    ).__lenis;

    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(targetY, { duration: 1.0, force: true });
    } else {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
    window.history.pushState(null, "", href);
  };

  return (
    <footer className="relative bg-white dark:bg-[#08090f] overflow-hidden select-none transition-colors duration-300">
      {/* Brand-colored Swiss Editorial Rounded Footer Surface */}
      <div className="relative w-full bg-[#6366f1] text-[#090a10] rounded-t-[28px] sm:rounded-t-[40px] overflow-hidden pt-10 sm:pt-14 md:pt-16">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14">
          {/* ── Top 4-Area Grid ── */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-y-8 gap-x-6 pb-10 sm:pb-14">
            {/* Brand Contact */}
            <div className="col-span-2 md:col-span-4 flex flex-col items-start">
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold tracking-tight text-[#090a10] leading-tight">
                Contact{" "}
                <span className="font-serif italic font-normal">Pronoy</span>
              </h2>
              <a
                href="mailto:pronoypaul56@gmail.com"
                className="relative inline-block mt-2 text-sm sm:text-base md:text-[17px] font-medium text-[#090a10]/90 hover:text-[#090a10] transition-colors break-all after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1.5px] after:w-full after:bg-[#090a10] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                pronoypaul56@gmail.com
              </a>
            </div>

            {/* Menu Navigation */}
            <div className="col-span-1 md:col-span-2">
              <p className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.18em] text-[#090a10]/70 mb-3.5">
                Menu
              </p>
              <ul className="space-y-2 sm:space-y-2.5">
                {menuLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={`/${item.href}`}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className={footerLinkClass}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore Links */}
            <div className="col-span-1 md:col-span-2">
              <p className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.18em] text-[#090a10]/70 mb-3.5">
                Explore
              </p>
              <ul className="space-y-2 sm:space-y-2.5">
                <li>
                  <Link href="/projects" className={footerLinkClass}>
                    All projects
                  </Link>
                </li>
                <li>
                  <Link href="/projects/shabos-rent" className={footerLinkClass}>
                    ShabbosRent
                  </Link>
                </li>
                <li>
                  <Link href="/projects/islandhop" className={footerLinkClass}>
                    IslandHop
                  </Link>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1gUIGo-8uYLgRPA1SKYWc2b63JtcBBI5k/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={footerLinkClass}
                  >
                    <span>Résumé</span>
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Local Time & Social Pills */}
            <div className="col-span-2 md:col-span-4 flex flex-col items-start md:items-end md:text-right">
              <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-[#090a10]/65">
                Local Time &bull; Dhaka
              </p>
              <p
                suppressHydrationWarning
                className="mt-1 text-2xl sm:text-[28px] font-extrabold tracking-tight tabular-nums text-[#090a10] leading-none"
              >
                {dhakaTime}
              </p>
              <div className="mt-3.5 flex items-center gap-2">
                <a
                  href="https://linkedin.com/in/pronoy-pal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full border border-[#090a10]/25 hover:border-[#090a10] hover:bg-[#090a10] hover:text-[#6366f1] text-xs font-medium text-[#090a10] transition-all duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/pronoy656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full border border-[#090a10]/25 hover:border-[#090a10] hover:bg-[#090a10] hover:text-[#6366f1] text-xs font-medium text-[#090a10] transition-all duration-200"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* ── Middle Divider with Centered Ring Ornament, Copyright & Back to Top ── */}
          <div className="relative border-t border-[#090a10]/15 py-5 flex items-center justify-between gap-4">
            <span
              aria-hidden="true"
              className="hidden sm:block absolute left-1/2 -top-[13px] -translate-x-1/2 w-6 h-6 rounded-full border border-[#090a10]/20 bg-[#6366f1]"
            />

            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.16em] text-[#090a10]/85">
              &copy; {new Date().getFullYear()} Pronoy Pal
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#090a10]/90 hover:text-[#090a10] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <span className="w-7 h-7 rounded-full bg-[#090a10] text-[#6366f1] flex items-center justify-center group-hover:-translate-y-0.5 transition-transform duration-200">
                <ArrowUp size={13} strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>

        {/* ── Monumental Cropped Display Name ── */}
        <div className="w-full overflow-hidden pt-2 sm:pt-4">
          <div
            aria-hidden="true"
            className="w-full text-center font-black uppercase text-[#090a10] tracking-[-0.04em] leading-[0.76] text-[22.5vw] sm:text-[22vw] translate-y-[6%] pointer-events-none select-none"
          >
            PRONOY
          </div>
        </div>
      </div>
    </footer>
  );
}
