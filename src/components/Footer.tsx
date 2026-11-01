"use client";

import React from "react";
import { ArrowUp, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-indigo-50/40 to-indigo-100/60 border-t border-indigo-100/80 overflow-hidden select-none">
      
      {/* ── Background Gradient with Website Main Brand Colors (Indigo & Soft Violet) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main Central Brand Indigo Aura Glow */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[75vw] h-[360px] bg-gradient-to-t from-indigo-500/20 via-indigo-400/12 to-transparent blur-[130px] rounded-full" />
        
        {/* Top-Right Ambient Brand Indigo Orb */}
        <div className="absolute -top-20 right-0 w-[45vw] h-[280px] bg-gradient-to-b from-indigo-200/40 to-transparent blur-[100px] rounded-full" />
        
        {/* Bottom-Left Ambient Brand Violet Orb */}
        <div className="absolute -bottom-16 left-0 w-[40vw] h-[260px] bg-gradient-to-tr from-indigo-300/25 via-indigo-100/20 to-transparent blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-24 pb-12 flex flex-col items-center justify-between gap-12 sm:gap-16">
        
        {/* ── Giant Name: PRONOY (Halka / Subtly Visible Watermark) ── */}
        <div className="w-full text-center select-none py-4 pointer-events-none">
          <h1 className="text-[17vw] sm:text-[16vw] md:text-[15vw] font-black tracking-tight leading-none text-center uppercase text-indigo-950/[0.09] select-none">
            PRONOY
          </h1>
        </div>

        {/* ── Bottom Balanced Row: Location | Copyright | Back to Top ── */}
        <div className="w-full pt-8 border-t border-indigo-100/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-600">
          
          {/* Location */}
          <div className="flex items-center gap-2 text-[#1a1c20] font-semibold order-2 sm:order-1">
            <MapPin size={14} className="text-indigo-600" />
            <span>Dhaka, Bangladesh</span>
          </div>

          {/* Copyright */}
          <div className="text-center order-3 sm:order-2 text-gray-500">
            <span>© {new Date().getFullYear()} Pronoy Pal. All rights reserved.</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#1a1c20] text-gray-800 hover:text-white border border-gray-200/90 hover:border-[#1a1c20] shadow-2xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer order-1 sm:order-3"
          >
            <span className="text-xs font-bold font-sans">Back to top</span>
            <div className="w-4 h-4 rounded-full bg-gray-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <ArrowUp size={11} className="text-gray-700 group-hover:text-white transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>

        </div>

      </div>

    </footer>
  );
}
