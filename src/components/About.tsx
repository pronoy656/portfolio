"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { 
  MoveRight, 
  MapPin,
  ArrowUpRight,
  Mail
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const keyStats = [
  { value: "16+", label: "Live Projects", detail: "Delivered to production" },
  { value: "01+", label: "Agency Year", detail: "At Sparktech Agency" },
  { value: "98+", label: "Performance", detail: "Lighthouse & Vitals" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 25,
        duration: 0.85,
        stagger: 0.1,
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
      className="scroll-mt-24 md:scroll-mt-28 pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
        
        {/* ── Section Header ── */}
        <div className="about-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 sm:pb-5 border-b border-gray-100">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.3em] text-indigo-600 block mb-1 font-bold">
              // 01 · Profile &amp; Mission
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-gray-900 leading-none">
              DRIVEN BY <span className="text-gray-300 font-light italic">PASSION.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            <span className="font-semibold text-gray-700">Software Engineer · Frontend Focused</span>
          </div>
        </div>

        {/* ── Main Two-Column Bento Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── Left Column: Clean Light Profile Card (Brand Indigo Theme) ── */}
          <div className="about-reveal lg:col-span-5 flex flex-col">
            <div className="relative rounded-[2rem] sm:rounded-[2.2rem] bg-white border border-gray-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.08)] transition-all duration-300 p-4 sm:p-5 flex flex-col gap-4">
              
              {/* Photo Viewport */}
              <div className="relative w-full aspect-[4/4.2] sm:aspect-[4/4.3] rounded-[1.6rem] overflow-hidden bg-gray-100 border border-gray-200/70 shadow-inner group">
                <Image
                  src="/pronoy-photo.jpg"
                  alt="Pronoy Pal — Frontend Focused & Full Stack Developer"
                  fill
                  sizes="(max-width: 768px) 90vw, 460px"
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Floating Bottom Pill: Available for Work + Location (Clean Light Glass) */}
                <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white text-gray-900 shadow-[0_8px_20px_rgba(0,0,0,0.12)] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600" />
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs text-gray-900 font-bold tracking-tight">
                      Available for Work
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-indigo-700 font-semibold">
                    <MapPin size={12} className="text-indigo-600 shrink-0" />
                    <span>Dhaka, BD</span>
                  </div>
                </div>
              </div>

              {/* Identity & Subtitle (Crisp Light Theme Typography) */}
              <div className="flex flex-col gap-1 px-1">
                <h4 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                  Pronoy Pal
                </h4>
                <p className="text-xs sm:text-sm font-bold text-indigo-600 font-mono tracking-tight">
                  Frontend Focused &amp; Full Stack Developer
                </p>
              </div>

              {/* Action Buttons: Hire Me (Brand Indigo) & Get in Touch (Light Frosted Pill) */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(99,102,241,0.3)] active:scale-95 group/btn"
                >
                  <span>Hire Me</span>
                  <ArrowUpRight size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="mailto:pronoypaul56@gmail.com"
                  className="inline-flex items-center justify-center py-3 px-5 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold text-xs sm:text-sm border border-gray-200/90 hover:border-gray-300 transition-all duration-200 active:scale-95 shadow-2xs"
                >
                  <span>Get in Touch</span>
                </a>
              </div>

              {/* Bottom Row: CONNECT Label & Social Icons (Light Theme Circles) */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-gray-400 uppercase">
                  CONNECT
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/pronoy656"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-8 h-8 rounded-full bg-gray-50 hover:bg-indigo-50 border border-gray-200/90 hover:border-indigo-300 text-gray-600 hover:text-indigo-600 flex items-center justify-center transition-all duration-200 shadow-2xs"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href="https://linkedin.com/in/pronoy-pal"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-8 h-8 rounded-full bg-gray-50 hover:bg-indigo-50 border border-gray-200/90 hover:border-indigo-300 text-gray-600 hover:text-indigo-600 flex items-center justify-center transition-all duration-200 shadow-2xs"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href="mailto:pronoypaul56@gmail.com"
                    aria-label="Email"
                    className="w-8 h-8 rounded-full bg-gray-50 hover:bg-indigo-50 border border-gray-200/90 hover:border-indigo-300 text-gray-600 hover:text-indigo-600 flex items-center justify-center transition-all duration-200 shadow-2xs"
                  >
                    <Mail size={13} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* ── Right Column: Clean Light Narrative & Impact Stats ── */}
          <div className="about-reveal lg:col-span-7 flex flex-col justify-center gap-5 sm:gap-6">
            
            {/* Headline Hook */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-gray-900 leading-[1.25]">
                Engineering modern digital products with{" "}
                <span className="text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-4">
                  precision, speed &amp; scalability.
                </span>
              </h3>

              <div className="space-y-2.5 text-sm sm:text-[15px] text-gray-600 leading-relaxed font-normal">
                <p>
                  I&apos;m a Software Engineer with <strong className="text-gray-900 font-semibold">over 1 year of agency experience</strong> at{" "}
                  <strong className="text-indigo-600 font-semibold">Sparktech Agency</strong>, where I have engineered and successfully deployed{" "}
                  <strong className="text-gray-900 font-semibold">16+ live client web applications</strong> from initial concept to scalable production.
                </p>

                <p>
                  Specialized in building reactive, accessible frontend architectures using{" "}
                  <strong className="text-gray-900 font-semibold">React.js, Next.js (App Router), TypeScript, and Tailwind CSS</strong>, while continuously advancing full-stack capabilities in <strong className="text-gray-900 font-semibold">Node.js, Express, MongoDB, and Core Web Vitals optimization</strong>.
                </p>
              </div>
            </div>

            {/* Quick Metrics Cards (Clean Light Cards with Vibrant Brand Indigo Accents) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 pt-1">
              {keyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 sm:p-3.5 rounded-xl bg-white border border-gray-200/80 shadow-xs hover:border-indigo-300 hover:shadow-sm transition-all flex flex-col justify-between gap-1"
                >
                  <p className="text-xl sm:text-2xl font-black text-indigo-600 tracking-tight leading-none">
                    {stat.value}
                  </p>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold text-gray-800 leading-tight">
                      {stat.label}
                    </p>
                    <p className="hidden sm:block text-[10px] font-mono text-gray-400 mt-0.5 truncate">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions Bar (Light Brand-Indigo Theme, No Pitch-Black Dark Button) */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-xs sm:text-sm active:scale-95 shadow-[0_4px_16px_rgba(99,102,241,0.28)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.38)] transition-all duration-200"
              >
                <span>Get In Touch</span>
                <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <MoveRight size={12} />
                </span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-700 hover:text-indigo-600 transition-colors py-2 px-2"
              >
                <span>Explore Featured Projects</span>
                <span className="text-indigo-600 font-bold">→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
