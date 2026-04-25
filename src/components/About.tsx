"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

/* ─── Count-up hook ─────────────────────────────────────────── */
function useCountUp(target: number, suffix: string, duration = 1.8, start = false) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!start) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration,
      ease: "power2.out",
      onUpdate: () => setDisplay(Math.floor(obj.val).toString() + suffix),
    });
  }, [start, target, suffix, duration]);
  return display;
}

/* ─── Data ──────────────────────────────────────────────────── */
const STATS = [
  { target: 3,    suffix: "+",  label: "Years\nExperience",  color: "#6366f1" },
  { target: 24,   suffix: "+",  label: "Projects\nShipped",  color: "#8b5cf6" },
  { target: 12,   suffix: "+",  label: "Happy\nClients",     color: "#0ea5e9" },
  { target: 1200, suffix: "+",  label: "GitHub\nCommits",    color: "#10b981" },
];

const SERVICES = [
  {
    num: "01", title: "UI Engineering",
    desc: "Pixel-perfect interfaces built with React & Next.js — fast, accessible, and beautiful at every breakpoint.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    num: "02", title: "Motion & Interaction",
    desc: "Bringing interfaces to life with purposeful GSAP & Framer Motion animations that guide and delight.",
    tags: ["GSAP", "Framer Motion", "CSS"],
  },
  {
    num: "03", title: "Design Systems",
    desc: "Scalable, token-based component libraries built for teams that ship fast without sacrificing quality.",
    tags: ["Tokens", "Figma", "Storybook"],
  },
  {
    num: "04", title: "Performance",
    desc: "Lighthouse-optimised, Core Web Vitals green — sub-second loads and buttery 60fps interactions.",
    tags: ["Optimization", "SEO", "Vercel"],
  },
];

const MARQUEE_ITEMS = [
  "React", "·", "Next.js", "·", "TypeScript", "·",
  "Tailwind CSS", "·", "GSAP", "·", "Framer Motion", "·",
  "Node.js", "·", "Figma", "·", "PostgreSQL", "·",
  "REST APIs", "·", "Git", "·", "Vercel", "·",
];

/* ─── Stat card ─────────────────────────────────────────────── */
function StatCard({ target, suffix, label, color }: typeof STATS[0]) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const val = useCountUp(target, suffix, 2, active);

  useEffect(() => {
    if (!ref.current) return;
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 90%",
      onEnter: () => setActive(true),
    });
    return () => trigger.kill();
  }, []);

  return (
    <div
      ref={ref}
      className="ab-stat flex flex-col justify-center p-6 lg:p-8 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-indigo-100"
    >
      <span className="text-4xl lg:text-5xl font-black tracking-tight mb-2" style={{ color }}>
        {val}
      </span>
      <span className="text-xs lg:text-sm uppercase tracking-wider font-bold text-gray-400 whitespace-pre-line leading-relaxed">
        {label}
      </span>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────── */
export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef   = useRef<HTMLDivElement>(null);
  const marqRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* heading */
      gsap.from(".ab-head-el", {
        scrollTrigger: { trigger: ".ab-head-el", start: "top 85%" },
        y: 40, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1,
      });

      /* portrait reveal */
      gsap.from(imageRef.current, {
        scrollTrigger: { trigger: imageRef.current, start: "top 80%" },
        y: 40, opacity: 0, duration: 1.2, ease: "power3.out",
      });

      gsap.fromTo(".ab-img-wipe",
        { scaleY: 1, transformOrigin: "top" },
        {
          scaleY: 0, duration: 1.2, ease: "power4.inOut",
          scrollTrigger: { trigger: imageRef.current, start: "top 80%" },
        }
      );

      /* bio lines */
      gsap.from(".ab-bio-line", {
        scrollTrigger: { trigger: ".ab-bio-wrap", start: "top 85%" },
        y: 30, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.15,
      });

      /* service cards */
      gsap.from(".ab-svc-card", {
        scrollTrigger: { trigger: ".ab-svc-grid", start: "top 85%" },
        y: 40, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1,
      });

      /* marquee */
      if (marqRef.current) {
        const total = marqRef.current.scrollWidth / 2;
        gsap.to(marqRef.current, {
          x: `-=${total}`, duration: 30, repeat: -1, ease: "none",
          modifiers: {
            x: gsap.utils.unitize((x: any) => parseFloat(String(x)) % total),
          },
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#fafafa] text-gray-900 py-20 lg:py-32"
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
        
        {/* ── LEFT: Portrait & Stats ── */}
        <div className="flex flex-col gap-8 w-full max-w-[500px] mx-auto lg:mx-0">
          
          <div ref={imageRef} className="relative w-full h-[450px] sm:h-[550px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-black/5 bg-white">
            <Image
              src="/logo-2.png"
              alt="Pronoy"
              fill
              className="object-cover object-top"
              unoptimized
              priority
            />
            
            {/* Reveal wipe */}
            <div className="ab-img-wipe absolute inset-0 bg-[#fafafa] z-10" />

            {/* Floating Name Plate */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between p-4 sm:px-6 sm:py-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 shadow-sm">
              <div>
                <p className="text-gray-900 font-black text-lg leading-none">Pronoy</p>
                <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1.5">Frontend Developer</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 text-[10px] font-black uppercase tracking-wider">Available</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="flex flex-col pt-0 lg:pt-8">
          
          <div className="ab-head-el inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-gray-200 w-fit mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600">About Me</span>
          </div>

          <h2 className="ab-head-el text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.05] mb-8">
            Driven by design.<br/>
            <span className="text-gray-300">Engineered for performance.</span>
          </h2>

          <div className="ab-bio-wrap flex flex-col gap-6 text-lg sm:text-xl text-gray-500 leading-relaxed mb-14 font-medium">
            <p className="ab-bio-line">
              Hey — I&apos;m <span className="text-indigo-600 font-bold">Pronoy</span>, a passionate frontend developer based in Dhaka who lives at the intersection of design and engineering.
            </p>
            <p className="ab-bio-line">
              With over 3 years crafting production-grade applications, I specialise in building interfaces that feel as good as they look. React, Next.js, and TypeScript are my daily tools, but what really drives me is the obsessive pursuit of a flawless user experience.
            </p>
          </div>

          <div className="mb-14">
            <h3 className="ab-head-el text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">What I Do</h3>
            <div className="ab-svc-grid grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SERVICES.map((s) => (
                <div
                  key={s.num}
                  className="ab-svc-card flex flex-col p-6 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 text-indigo-500 flex items-center justify-center mb-5 border border-gray-100 group-hover:bg-indigo-50 transition-colors">
                    <span className="font-black text-xs tracking-wider">{s.num}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-500 mb-6 flex-grow">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] text-gray-500 font-bold uppercase tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#"
            className="ab-head-el inline-flex items-center justify-center gap-3 w-fit px-8 py-4 rounded-full font-bold text-sm tracking-wide text-white bg-indigo-600 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:-translate-y-1 hover:bg-indigo-700 transition-all duration-300"
          >
            Download Resume
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ════════════ MARQUEE STRIP ════════════ */}
      <div className="relative z-10 overflow-hidden py-6 bg-white border-y border-gray-100 mt-24">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        
        <div ref={marqRef} className="flex items-center gap-12 whitespace-nowrap w-max">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className={
                item === "·"
                  ? "text-gray-200 text-2xl select-none"
                  : "text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-gray-400 hover:text-indigo-600 transition-colors cursor-default"
              }
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
