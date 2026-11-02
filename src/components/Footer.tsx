"use client";

import React from "react";
import { ArrowUp, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-[#fafbfc] border-t border-indigo-100/70 overflow-hidden select-none">
      
      {/* ── Main Website Brand Colors Ambient Glowing Orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main Central Brand Indigo Aura directly behind the name PRONOY */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[75vw] h-[380px] bg-gradient-to-b from-indigo-500/22 via-indigo-400/12 to-transparent blur-[140px] rounded-full" />
        
        {/* Bottom Ambient Glow */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[95vw] h-[280px] bg-gradient-to-t from-indigo-300/25 via-indigo-100/20 to-transparent blur-[120px] rounded-full" />
        
        {/* Side Violet Glow Accent */}
        <div className="absolute top-1/3 right-0 w-[45vw] h-[280px] bg-gradient-to-b from-purple-400/15 to-transparent blur-[110px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-10 flex flex-col items-center">
        
        {/* ── Giant Typography Name: PRONOY ──
            Top half towers proudly; lower half is embraced by the stacked gradient tiers.
        */}
        <div className="w-full text-center select-none pointer-events-none">
          <h1 className="text-[18vw] sm:text-[16vw] md:text-[14.5vw] font-black tracking-tighter leading-none text-center uppercase text-indigo-950/[0.08] select-none">
            PRONOY
          </h1>
        </div>

        {/* ── Stacked Gradient Tiers (Architectural stacked layers in website brand colors, covering half the name) ── */}
        <div className="w-full -mt-[9vw] sm:-mt-[8vw] md:-mt-[7.2vw] relative flex flex-col items-center">
          
          {/* Tier 1 (Topmost / Back: Soft Whitish Glass Gradient) */}
          <div className="w-[88%] sm:w-[92%] max-w-5xl h-8 sm:h-11 rounded-t-[1.8rem] sm:rounded-t-[2.8rem] bg-gradient-to-b from-white/95 via-white/80 to-indigo-50/40 backdrop-blur-md border-t border-x border-gray-200/80 shadow-[0_-6px_22px_rgba(99,102,241,0.04)]" />

          {/* Tier 2 (Middle: Concrete / Cool Slate Gradient Tone) */}
          <div className="w-[94%] sm:w-[96%] max-w-6xl h-9 sm:h-12 -mt-4 sm:-mt-5 rounded-t-[2.2rem] sm:rounded-t-[3.2rem] bg-gradient-to-b from-[#eef1f6] via-[#e8ecf4] to-indigo-100/50 border-t border-x border-gray-300/80 shadow-[0_-8px_25px_rgba(99,102,241,0.06)] relative z-10" />

          {/* Tier 3 (Front / Base: Pure Whitish & Brand Indigo Gradient Horizon) */}
          <div className="w-full max-w-7xl -mt-5 sm:-mt-6 rounded-t-[2.5rem] sm:rounded-t-[3.8rem] bg-gradient-to-b from-white via-indigo-50/40 to-indigo-100/60 border-t border-x border-indigo-100/90 shadow-[0_-16px_45px_rgba(79,70,229,0.08)] relative z-20 px-6 sm:px-10 py-8 sm:py-10 flex flex-col items-center gap-6">
            
            {/* Ambient Brand Accent Line */}
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-purple-500 opacity-60 mb-2" />

            {/* Bottom Balanced Row: Location | Copyright | Back to Top */}
            <div className="w-full pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-600">
              
              {/* Location */}
              <div className="flex items-center gap-2 text-[#1a1c20] font-semibold order-2 sm:order-1">
                <MapPin size={14} className="text-indigo-600" />
                <span>Dhaka, Bangladesh · UTC+6</span>
              </div>

              {/* Copyright */}
              <div className="text-center order-3 sm:order-2 text-gray-400 text-[11px] sm:text-xs">
                <span>© {new Date().getFullYear()} Pronoy Pal. All rights reserved.</span>
              </div>

              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#1a1c20] text-gray-800 hover:text-white border border-gray-200/90 hover:border-[#1a1c20] shadow-2xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer order-1 sm:order-3"
              >
                <span className="text-xs font-bold font-sans">Back to top</span>
                <div className="w-4 h-4 rounded-full bg-gray-100 group-hover:bg-white/20 border border-gray-200 group-hover:border-transparent flex items-center justify-center transition-colors">
                  <ArrowUp size={11} className="text-gray-700 group-hover:text-white transition-transform group-hover:-translate-y-0.5" />
                </div>
              </button>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
