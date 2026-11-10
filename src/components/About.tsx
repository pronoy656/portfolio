"use client";

import React from "react";
import dynamic from "next/dynamic";
import { MoveRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { RevealText, CountUp } from "@/components/animations";

const MagicRings = dynamic(() => import("@/components/MagicRings"), {
  ssr: false,
});

const keyStats = [
  { value: "16+", label: "Live Projects", detail: "Delivered to production" },
  { value: "01+", label: "Agency Year", detail: "At Sparktech Agency" },
  { value: "98+", label: "Performance", detail: "Lighthouse & Vitals" },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="about"
      className="scroll-mt-24 md:scroll-mt-28 pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12 bg-white border-t border-gray-100 relative overflow-hidden"
    >
      {/* ── Background Magic Rings ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
        <MagicRings
          color="#A855F7"
          colorTwo="#6366F1"
          motion="ripple"
          ringCount={8}
          speed={1.25}
          lineThickness={4.5}
          glow={1}
          hoverScale={1.2}
          clickBurst={true}
          baseRadius={0.27}
          taper={1.6}
          tilt={2}
          grain={1}
          theme="light"
          maxDevicePixelRatio={1.5}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-9">
        
        {/* ── Big Centered Section Title ── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.65, ease }}
          className="flex flex-col items-center text-center w-full"
        >
          <RevealText as="h2" mode="once" className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tighter text-gray-900 leading-none">
            ENGINEERING VALUE <span className="text-gray-300 font-light italic">&amp; IMPACT.</span>
          </RevealText>
        </motion.div>

        {/* ── Unified High-Impact Value Narrative ── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, delay: shouldReduceMotion ? 0 : 0.15, ease }}
          className="flex flex-col items-center text-center gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-gray-900 tracking-tight leading-tight">
            About Me
          </h3>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium text-center max-w-4xl">
            I transform complex business visions into <strong className="text-gray-950 font-bold">resilient, high-velocity digital products</strong>. By unifying <strong className="text-indigo-600 font-bold">system design</strong>, production-grade frontend architecture, and <strong className="text-indigo-600 font-bold">sub-second web performance</strong>, I engineer software that scales effortlessly, retains users, and delivers measurable ROI — validated across <strong className="text-gray-950 font-bold">16+ live production deployments</strong>.
          </p>
        </motion.div>

        {/* ── Quick Metrics Cards (Centered Grid) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 w-full max-w-3xl mx-auto pt-1">
          {keyStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.25 + idx * 0.08,
                ease,
              }}
              className="p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/80 shadow-xs hover:border-indigo-300 hover:shadow-sm transition-all flex flex-col items-center justify-center text-center gap-1.5"
            >
              <p className="text-3xl sm:text-4xl font-black text-indigo-600 tracking-tight leading-none">
                <CountUp value={stat.value} />
              </p>
              <div>
                <p className="text-xs sm:text-sm font-bold text-gray-800 leading-tight">
                  {stat.label}
                </p>
                <p className="text-[11px] font-mono text-gray-400 mt-0.5 truncate">
                  {stat.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Actions Bar (Centered) ── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.55,
            delay: shouldReduceMotion ? 0 : 0.45,
            ease,
          }}
          className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-5"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-xs sm:text-sm active:scale-95 shadow-[0_4px_16px_rgba(99,102,241,0.28)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.38)] transition-all duration-200"
          >
            <span>Get In Touch</span>
            <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <MoveRight size={12} />
            </span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-700 hover:text-indigo-600 transition-colors py-2 px-3 rounded-full hover:bg-gray-100/60"
          >
            <span>Explore Featured Projects</span>
            <span className="text-indigo-600 font-bold">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
