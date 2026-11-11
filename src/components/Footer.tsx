"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void } }).__lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-white dark:bg-[#08090f] overflow-hidden select-none transition-colors duration-300">
      
      {/* ── Soft Ambient Glow bridging Contact & Footer ── */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[800px] h-[160px] bg-indigo-500/[0.08] dark:bg-indigo-500/[0.18] blur-[100px] rounded-full pointer-events-none z-[1]" />

      {/* ── Immersive Full-Width Nature Canvas (All Footer Content Inside the Image) ── */}
      <div className="relative w-full h-[540px] sm:h-[620px] md:h-[720px] lg:h-[780px] overflow-hidden select-none flex flex-col justify-between">
        
        {/* 4K HD Illustrated Mountain Landscape */}
        <Image
          src="/footer-nature-mountain.webp"
          alt="Curated 4K HD Mountain Landscape Horizon"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center select-none pointer-events-none transition-all duration-500 dark:brightness-[0.72] dark:contrast-[1.08] dark:saturate-[0.9]"
        />

        {/* Seamless top blend into page background */}
        <div className="absolute inset-x-0 top-0 h-32 sm:h-44 bg-gradient-to-b from-white via-white/80 dark:from-[#08090f] dark:via-[#0a0c16]/85 to-transparent pointer-events-none z-10 transition-colors duration-300" />

        {/* Soft bottom vignette for dock legibility */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none z-10" />

        {/* ── Top Area: Brand Identity in the Sky ── */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.97, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, ease }}
            className="w-full select-none pointer-events-none flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 dark:bg-zinc-900/75 backdrop-blur-md border border-white/80 dark:border-zinc-700/70 text-[11px] font-mono font-semibold text-gray-800 dark:text-zinc-100 shadow-2xs mb-2 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Dhaka, Bangladesh • Open for select opportunities
            </span>
            <h1 className="text-[18vw] sm:text-[17vw] md:text-[16vw] lg:text-[15vw] font-black tracking-tight leading-none text-gray-950/20 dark:text-white/20 uppercase select-none drop-shadow-xs">
              PRONOY
            </h1>
          </motion.div>
        </div>

        {/* ── Bottom Edge Glass Dock (Inside the Image, Zero Separate Section) ── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.15, ease }}
          className="relative z-20 w-full backdrop-blur-md bg-black/30 border-t border-white/15 px-6 sm:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white/90 pointer-events-auto"
        >
          {/* Location */}
          <div className="flex items-center gap-2 font-bold text-white order-2 sm:order-1">
            <MapPin size={14} className="text-indigo-400 shrink-0" />
            <span className="tracking-tight">Dhaka, Bangladesh</span>
          </div>

          {/* Copyright */}
          <div className="text-center order-3 sm:order-2 text-white/80 font-medium">
            <span>© {new Date().getFullYear()} Pronoy Pal. All rights reserved.</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-gray-950 border border-white/25 hover:border-white transition-all duration-200 active:scale-95 cursor-pointer order-1 sm:order-3"
          >
            <span className="text-xs font-bold font-sans">Back to top</span>
            <ArrowUp size={11} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

      </div>

    </footer>
  );
}
