"use client";

import React from "react";
import Image from "next/image";
import { MapPin, CheckCircle2, Mail, Sparkles } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiStripe,
} from "react-icons/si";
import { motion, useReducedMotion } from "motion/react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const coreArsenal = [
  { name: "React", icon: <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-3.5 h-3.5 text-black" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-3.5 h-3.5 text-[#5FA04E]" /> },
  { name: "Express.js", icon: <SiExpress className="w-3.5 h-3.5 text-gray-900" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" /> },
  { name: "Stripe", icon: <SiStripe className="w-3.5 h-3.5 text-[#635BFF]" /> },
  { name: "Agentic AI", icon: <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> },
  { name: "Redux / Zustand", icon: <SiRedux className="w-3.5 h-3.5 text-[#764ABC]" /> },
];

const metricStats = [
  {
    value: "01+",
    label: "Year of Experience",
    detail: "Building modern web apps",
  },
  {
    value: "16+",
    label: "Projects Completed",
    detail: "Production & side products",
  },
  {
    value: "10+",
    label: "Core Technologies",
    detail: "Frontend to backend stacks",
  },
  {
    value: "100%",
    label: "Code Dedication",
    detail: "Clean, robust & scalable",
  },
];

export default function AboutPhilosophy() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="about-philosophy"
      className="scroll-mt-24 md:scroll-mt-28 py-14 sm:py-18 md:py-24 px-4 sm:px-8 md:px-12 bg-white border-t border-gray-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── Section Header (Compact & Clean) ── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, ease }}
          className="flex flex-col gap-1.5 sm:gap-2 mb-8 sm:mb-10"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
            About Me
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.1] text-gray-950">
            Engineering interfaces <br className="hidden sm:block" />
            that feel{" "}
            <span className="font-serif italic font-normal text-indigo-600 sm:text-[1.04em]">
              effortless.
            </span>
          </h2>
        </motion.div>

        {/* ── Main 2-Column Split Arena ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch mb-5 sm:mb-6">
          
          {/* ── Left Column: Profile Card ── */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.03)] p-4 sm:p-5 flex flex-col justify-between h-full">
              
              {/* Photo Box with Floating Availability Pill */}
              <div className="relative w-full aspect-[4/4.4] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/80 shadow-2xs">
                <Image
                  src="/pronoy-about.jpg"
                  alt="Pronoy Pal - Frontend Focused & Full Stack Developer"
                  fill
                  className="object-cover object-[center_12%]"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />

                {/* Floating Availability Pill */}
                <div className="absolute bottom-2.5 inset-x-2.5 bg-white/95 backdrop-blur-md border border-gray-200/90 px-3 py-1.5 rounded-full flex items-center justify-between shadow-2xs z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-gray-900">
                      Available for Work
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-gray-600">
                    <MapPin size={11} className="text-indigo-600 shrink-0" />
                    <span>Dhaka, BD</span>
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <div className="pt-3.5 pb-2">
                <h3 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight leading-tight">
                  Pronoy Pal
                </h3>
                <p className="text-xs sm:text-[13px] font-semibold text-indigo-600 mt-0.5">
                  Frontend Focused &amp; Full Stack Developer
                </p>
              </div>

              {/* Connect Footer */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  CONNECT
                </span>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://github.com/pronoy656"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-800 transition-colors shadow-2xs"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href="https://linkedin.com/in/pronoy-pal"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-800 transition-colors shadow-2xs"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href="mailto:pronoypaul56@gmail.com"
                    aria-label="Email Pronoy Pal"
                    className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-800 transition-colors shadow-2xs"
                  >
                    <Mail size={14} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ── Right Column: Philosophy & Tech Arsenal Card ── */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease,
            }}
            className="lg:col-span-8 flex flex-col"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.03)] p-5 sm:p-6 flex flex-col justify-between h-full">
              
              {/* Header Row */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-widest">
                  // BACKGROUND &amp; PHILOSOPHY
                </span>
                <span className="font-serif italic text-xs sm:text-sm text-gray-400">
                  Story
                </span>
              </div>

              {/* Narrative Content with exactly 18px (15-20px) top gap */}
              <div className="mt-[18px] mb-3 flex flex-col gap-2.5">
                {/* Main Focus Statement (Larger size & Hero-style Solid Brand Highlights) */}
                <p className="text-[15px] sm:text-base md:text-[17px] font-medium leading-[1.65] text-gray-900 tracking-[-0.01em]">
                  I&apos;m <strong className="text-gray-950 font-black">Pronoy Pal</strong> — a{" "}
                  <strong className="text-gray-950 font-black">Frontend-Focused Full-Stack Engineer</strong>{" "}
                  currently focused on architecting resilient{" "}
                  <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-2xs">
                    System Design
                  </span>
                  , maximizing{" "}
                  <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-2xs">
                    Web Performance
                  </span>{" "}
                  for sub-second speeds, and actively building with{" "}
                  <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-2xs">
                    Agentic Workflows
                  </span>{" "}
                  to ship scalable digital products that drive real business value.
                </p>

                {/* Subtext Paragraph */}
                <p className="text-xs sm:text-[13.5px] text-gray-600 leading-relaxed font-normal">
                  Bridging client-side fidelity with server-side stability across the{" "}
                  <strong className="text-gray-900 font-semibold">MERN stack</strong> (React, Next.js, Node.js, Express, MongoDB) while actively exploring cutting-edge AI technologies — integrating autonomous agent pipelines, LLM tooling, and Model Context Protocols (MCP) to automate complex engineering workflows into production-grade applications.
                </p>
              </div>

              {/* Core Tech Arsenal with Reduced Gap */}
              <div className="mt-1 pt-1">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  // CORE TECH ARSENAL
                </span>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {coreArsenal.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200 text-xs font-mono font-medium text-gray-800 shadow-2xs"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* 4 Feature Checklist Points (Compact 2x2 Grid - Strictly 1 Line Each) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-3 border-t border-gray-100/90 mt-3">
                <div className="flex items-center gap-2 min-w-0">
                  <CheckCircle2 size={14} className="text-indigo-600 shrink-0" />
                  <p className="text-xs text-gray-700 truncate">
                    <strong className="text-gray-950 font-bold">Pixel Precision:</strong> Flawless design-system translation
                  </p>
                </div>

                <div className="flex items-center gap-2 min-w-0">
                  <CheckCircle2 size={14} className="text-indigo-600 shrink-0" />
                  <p className="text-xs text-gray-700 truncate">
                    <strong className="text-gray-950 font-bold">Secure Endpoints:</strong> JWT, OAuth &amp; protected data flows
                  </p>
                </div>

                <div className="flex items-center gap-2 min-w-0">
                  <CheckCircle2 size={14} className="text-indigo-600 shrink-0" />
                  <p className="text-xs text-gray-700 truncate">
                    <strong className="text-gray-950 font-bold">Agile Execution:</strong> Sprint velocity, CI/CD &amp; peer reviews
                  </p>
                </div>

                <div className="flex items-center gap-2 min-w-0">
                  <CheckCircle2 size={14} className="text-indigo-600 shrink-0" />
                  <p className="text-xs text-gray-700 truncate">
                    <strong className="text-gray-950 font-bold">Error Resilience:</strong> Fault tolerance &amp; graceful fallbacks
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* ── Bottom Row: 4 Metric / Impact Cards (Static, Solid, No Hover Jumps) ── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.55,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4"
        >
          {metricStats.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-gray-200/90 shadow-[0_5px_15px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <span className="text-2xl sm:text-3xl font-black text-indigo-600 tracking-tight leading-none inline-block">
                {item.value}
              </span>
              <div className="mt-2.5">
                <span className="text-xs font-bold text-gray-900 block leading-tight">
                  {item.label}
                </span>
                <span className="text-[11px] font-mono text-gray-500 block mt-0.5">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
