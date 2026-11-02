"use client";

import React from "react";
import { ArrowUp, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import ShapesDots from "@/components/ShapesDots";

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
    <footer className="relative bg-white overflow-hidden select-none">
      
      {/* ── Soft Ambient Glow bridging Contact & Footer ── */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[800px] h-[160px] bg-indigo-500/[0.08] blur-[100px] rounded-full pointer-events-none z-[1]" />

      {/* ── Interactive Shapes & Dots Canvas Background with Seamless Top Fade ── */}
      <div className="absolute inset-0 z-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_100%)]">
        <ShapesDots
          cellSize={40}
          influenceRadiusVmin={25}
          attackTime={0.05}
          releaseTime={0.2}
          idleScale={0.1}
          minPeakScale={1}
          maxPeakScale={3}
          burstSpeed={1200}
          burstThickness={180}
          backgroundColor="transparent"
          shapes={["circle", "triangle", "square"]}
          dpr={1.5}
          opacity={1}
          animationMode="off"
          animationSpeed={1}
          overlapGuard={0.86}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-24 pb-12 flex flex-col items-center justify-between gap-12 sm:gap-16 pointer-events-none">
        
        {/* ── Giant Name: PRONOY (Clearly Visible Brand Watermark Typography) ── */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, ease }}
          className="w-full text-center select-none py-4 pointer-events-none"
        >
          <h1 className="text-[17vw] sm:text-[16vw] md:text-[15vw] font-black tracking-tight leading-none text-center uppercase text-gray-900/[0.08] select-none">
            PRONOY
          </h1>
        </motion.div>

        {/* ── Bottom Balanced Row: Location | Copyright | Back to Top (Crisp & Fully Visible) ── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.15, ease }}
          className="w-full pt-8 border-t border-gray-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-700 pointer-events-auto"
        >
          
          {/* Location */}
          <div className="flex items-center gap-2 text-gray-900 font-bold order-2 sm:order-1">
            <MapPin size={15} className="text-indigo-600 shrink-0" />
            <span className="tracking-tight">Dhaka, Bangladesh</span>
          </div>

          {/* Copyright */}
          <div className="text-center order-3 sm:order-2 text-gray-600 font-medium">
            <span>© {new Date().getFullYear()} Pronoy Pal. All rights reserved.</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white hover:bg-gray-900 text-gray-900 hover:text-white border border-gray-200/90 hover:border-gray-900 shadow-2xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer order-1 sm:order-3"
          >
            <span className="text-xs font-bold font-sans">Back to top</span>
            <div className="w-4.5 h-4.5 rounded-full bg-gray-100 group-hover:bg-white/20 border border-gray-200/90 group-hover:border-transparent flex items-center justify-center transition-colors">
              <ArrowUp size={11} className="text-gray-700 group-hover:text-white transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>

        </motion.div>

      </div>

    </footer>
  );
}
