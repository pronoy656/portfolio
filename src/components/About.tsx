"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MoveRight, Briefcase, Code2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "01+", label: "Year Agency Exp." },
  { value: "16+", label: "Live Projects" },
  { value: "Full-Stack", label: "Active Direction" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 25,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="scroll-mt-20 md:scroll-mt-28 py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* ── Section Header ── */}
        <div className="about-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-gray-100">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-indigo-600 block mb-2 font-semibold">
              // 01 · Profile &amp; Mission
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-gray-900 leading-none">
              DRIVEN BY <span className="text-gray-300 font-light italic">PASSION.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for new opportunities</span>
          </div>
        </div>

        {/* ── Main Two-Column Editorial Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ── Left Column: Layered Glassmorphic Portrait ── */}
          <div className="about-reveal lg:col-span-5 flex flex-col gap-6">
            <div className="relative py-6 sm:py-8 px-2 sm:px-4 flex items-center justify-center">
              
              {/* Layer 1: True Frosted Glass Panel (Tilted Background) */}
              <div 
                className="absolute inset-x-2 inset-y-2 rounded-[2.5rem] rotate-[5deg] border border-white/60 bg-gradient-to-br from-white/30 via-indigo-50/20 to-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(99,102,241,0.12)] pointer-events-none ring-1 ring-indigo-500/10" 
              />

              {/* Layer 2: Subtle secondary refraction rim */}
              <div 
                className="absolute inset-x-5 inset-y-4 rounded-[2.5rem] -rotate-[3deg] border border-white/40 bg-gradient-to-tr from-white/20 via-transparent to-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] pointer-events-none" 
              />

              {/* Main Photo Card (Clean & Normal, no artificial overlays) */}
              <div className="relative w-[84%] aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-gray-100 z-10 group">
                <Image
                  src="/pronoy-photo.jpg"
                  alt="Pronoy Pal — Frontend-Focused Full-Stack Developer"
                  fill
                  sizes="(max-width: 768px) 84vw, 420px"
                  className="object-cover object-top hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Floating Glass Card (Left: 1+ Years Experience - Premium Glassmorphism) */}
              <div className="absolute top-8 sm:top-10 -left-1 sm:-left-3 z-20 p-3 sm:p-4 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center">
                    <Briefcase size={11} className="text-indigo-600" />
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="text-xl sm:text-2xl font-black text-gray-900 leading-none">1+</p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-1">
                  Years Exp.
                </p>
              </div>

              {/* Floating Glass Pill (Right: </> React.js • Next.js - Premium Glassmorphism) */}
              <div className="absolute bottom-8 sm:bottom-10 -right-1 sm:-right-3 z-20 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.08)] flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-indigo-600/10 flex items-center justify-center">
                  <Code2 size={10} className="text-indigo-600" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-800 tracking-wide">
                  React.js <span className="text-indigo-600 mx-0.5 sm:mx-1">•</span> Next.js
                </span>
              </div>

            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl bg-gray-50/70 border border-gray-100">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-lg sm:text-2xl font-black text-gray-900 tracking-tight leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Narrative + Key Engineering Pillars ── */}
          <div className="about-reveal lg:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-snug mb-6">
                Bridging modern frontend craftsmanship with{" "}
                <span className="text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-8">
                  full-stack architecture.
                </span>
              </h3>

              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-10">
                <p>
                  I&apos;m a Software Engineer with <strong className="text-gray-900 font-semibold">over 1 year of agency experience</strong> at{" "}
                  <strong className="text-gray-900 font-semibold">Sparktech Agency</strong>, where I have engineered and successfully delivered{" "}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-xs sm:text-sm">
                    16+ live client projects
                  </span>{" "}
                  from initial concept through to live deployment.
                </p>
                <p>
                  My foundational expertise lies in modern frontend development, driven primarily by{" "}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-xs sm:text-sm">
                    JavaScript &amp; TypeScript
                  </span>{" "}
                  alongside <strong className="text-gray-900 font-semibold">React.js, Next.js (App Router), and Tailwind CSS</strong>.
                </p>
                <p>
                  Currently, I am actively evolving into a complete{" "}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-xs sm:text-sm">
                    Full-Stack Developer
                  </span>{" "}
                  with an intensive focus on{" "}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-xs sm:text-sm">
                    Backend Development
                  </span>
                  ,{" "}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-xs sm:text-sm">
                    System Design Architecture
                  </span>
                  , and{" "}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-xs sm:text-sm">
                    Web Performance
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <a
                href="#contact"
                className="group relative flex items-center justify-center gap-4 px-9 py-4 bg-[#1a1c20] text-white rounded-full font-bold overflow-hidden active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.3)] transition-all duration-500"
              >
                {/* Left-to-right fill effect */}
                <div className="absolute inset-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                <span className="relative z-10 text-sm">Let&apos;s Talk</span>
                <span className="relative z-10 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <MoveRight size={13} />
                </span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors py-2 sm:py-0"
              >
                <span>Explore Featured Works</span>
                <span className="text-indigo-600 font-bold">→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
