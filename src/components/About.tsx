"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ──────────────────────────────────────────────────── */
const STATS = [
  { target: 3,    suffix: "+",  label: "Years Experience",  color: "from-indigo-500 to-purple-600" },
  { target: 24,   suffix: "+",  label: "Projects Shipped",  color: "from-blue-500 to-cyan-500" },
  { target: 12,   suffix: "+",  label: "Happy Clients",     color: "from-emerald-500 to-teal-600" },
  { target: 1200, suffix: "+",  label: "GitHub Commits",    color: "from-orange-500 to-pink-600" },
];

const SERVICES = [
  {
    num: "01",
    title: "UI Engineering",
    desc: "Crafting pixel-perfect, accessible interfaces with React and Next.js that scale beautifully across all devices.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Motion Design",
    desc: "Bringing static layouts to life with purposeful GSAP and Framer Motion animations that enhance user engagement.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Design Systems",
    desc: "Building scalable, token-based component libraries that maintain consistency and speed up development cycles.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Performance",
    desc: "Optimizing Core Web Vitals to ensure sub-second load times and silky-smooth 60fps interactions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

/* ─── Components ────────────────────────────────────────────── */

function StatCounter({ target, suffix, label, color, delay }: any) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 90%",
      onEnter: () => {
        let start = 0;
        const end = target;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
      once: true,
    });
    return () => trigger.kill();
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/50 backdrop-blur-sm border border-white shadow-xl shadow-gray-200/50">
      <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-1`}>
        {count}{suffix}
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 text-center leading-tight">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Heading
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 90%",
        },
      });

      // Portrait Animation
      gsap.from(imageBoxRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: imageBoxRef.current,
          start: "top 85%",
        },
      });

      // Service Cards - Individual Triggers for reliability
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
        gsap.fromTo(card, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Floating elements animation
      gsap.to(".floating", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-24 lg:py-40 bg-[#f8fafc] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[150px] -ml-96 -mb-96" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ── LEFT: Visual ── */}
          <div className="relative group">
            <div 
              ref={imageBoxRef}
              className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-200/50"
            >
              <Image
                src="/logo-2.png"
                alt="Pronoy Portfolio"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge */}
              <div className="absolute top-8 left-8 floating">
                <div className="px-5 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-lg flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest text-gray-800">Available to work</span>
                </div>
              </div>

              {/* Glass Info Plate */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-[2rem] bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white leading-none mb-1">Pronoy</h3>
                    <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Dhaka, Bangladesh</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-20 pointer-events-none floating">
              <div className="grid grid-cols-6 gap-4">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="flex flex-col">
            <div className="reveal-text mb-6">
              <span className="px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
                The Architect
              </span>
            </div>

            <h2 className="reveal-text text-5xl lg:text-7xl font-black text-gray-900 leading-[0.95] tracking-tight mb-10">
              Turning vision into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">digital reality.</span>
            </h2>

            <div className="reveal-text space-y-6 text-lg lg:text-xl text-gray-500 font-medium leading-relaxed mb-12">
              <p>
                I&apos;m <span className="text-gray-900 font-bold">Pronoy</span>, a Frontend Engineer obsessed with the tiny details that transform a good interface into a <span className="text-indigo-600 underline decoration-indigo-200 decoration-4 underline-offset-4">masterpiece</span>.
              </p>
              <p>
                With 3+ years of experience, I bridge the gap between design and development, ensuring every pixel is purposeful and every animation is smooth.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="reveal-text grid grid-cols-2 gap-4 mb-16">
              {STATS.map((stat, i) => (
                <StatCounter key={i} {...stat} delay={i * 0.1} />
              ))}
            </div>

            {/* CTA */}
            <div className="reveal-text flex flex-wrap gap-5">
              <button className="px-8 py-4 rounded-2xl bg-gray-900 text-white font-bold text-sm tracking-widest hover:bg-gray-800 transition-all hover:shadow-xl hover:-translate-y-1">
                LET&apos;S TALK
              </button>
              <button className="px-8 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 font-bold text-sm tracking-widest hover:border-indigo-500 hover:text-indigo-600 transition-all">
                VIEW WORK
              </button>
            </div>
          </div>
        </div>

        {/* ── SERVICES BENTO GRID ── */}
        <div className="mt-32 lg:mt-48">
          <div className="text-center mb-16">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 mb-4">Core Expertise</h3>
            <h4 className="text-4xl lg:text-5xl font-black text-gray-900">What I Bring to the Table</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <div 
                key={i} 
                className="service-card group p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                  {svc.icon}
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-4">{svc.title}</h5>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {svc.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More 
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side Marquee or Strip can be added here if needed, but keeping it clean for premium feel */}
    </section>
  );
}
