"use client";

import React from "react";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
} from "react-icons/si";
import { motion, useReducedMotion } from "motion/react";

const experienceData = {
  role: "Frontend Developer",
  company: "Sparktech Agency",
  location: "Dhaka, Bangladesh",
  type: "Full-Time",
  period: "August 2025 – Present",
  summary:
    "Developing high-performance, responsive web applications and translating Figma design systems into pixel-perfect, accessible production interfaces.",
  highlights: [
    {
      label: "Performance & Rendering",
      text: "Architecting dynamic SSR, CSR, and SSG with Next.js for sub-second speeds and optimal SEO.",
    },
    {
      label: "Design-System Fidelity",
      text: "Translating complex Figma design tokens into component architectures with strict WCAG a11y standards.",
    },
    {
      label: "Full-Stack API Flow",
      text: "Collaborating with backend engineers to integrate robust RESTful APIs across Node.js and MongoDB.",
    },
    {
      label: "Agile Engineering",
      text: "Contributing actively in sprint planning, asynchronous workflows, and peer pull-request code reviews.",
    },
  ],
  technologies: [
    { name: "Next.js", icon: <SiNextdotjs className="w-3.5 h-3.5 text-black" /> },
    { name: "React", icon: <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-3.5 h-3.5 text-[#5FA04E]" /> },
    { name: "Express.js", icon: <SiExpress className="w-3.5 h-3.5 text-gray-900" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" /> },
    { name: "Figma", icon: <SiFigma className="w-3.5 h-3.5 text-[#F24E1E]" /> },
  ],
};

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="experience"
      className="scroll-mt-24 md:scroll-mt-28 py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 bg-white border-t border-gray-150 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* ── Section Header (Quiet, Confident & Minimalist) ── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease }}
          className="flex flex-col gap-2.5 sm:gap-3 mb-12 sm:mb-16"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
            Career &amp; Experience
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-none text-gray-900">
              PROVEN EXPERIENCE <span className="text-gray-300 font-light">IN</span> <br />
              <span className="text-gray-300 italic">PRODUCTION TEAMS.</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-gray-500">
              // 01 PRODUCTION ROLE • ACTIVE
            </p>
          </div>
        </motion.div>

        {/* ── Clean Editorial Experience Row (Zero Clutter, Maximum Clarity) ── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.65, ease }}
          className="border-t border-gray-200/90 pt-8 sm:pt-12 pb-6 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 hover:bg-gray-50/40 transition-colors px-2 -mx-2 sm:px-4 sm:-mx-4 rounded-2xl"
        >
          {/* Column 1: Status, Period, Location (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-2.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active Role
            </span>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-gray-700 mt-1">
              <Calendar size={13} className="text-indigo-600 shrink-0" />
              <span>{experienceData.period}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
              <MapPin size={12} className="text-gray-400 shrink-0" />
              <span>{experienceData.location}</span>
            </div>

            <span className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest mt-2">
              {experienceData.type}
            </span>
          </div>

          {/* Column 2: Role, Company & Context (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight leading-tight">
              {experienceData.role}
            </h3>

            <p className="text-base font-bold text-indigo-600">
              {experienceData.company}
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal pt-1">
              {experienceData.summary}
            </p>
          </div>

          {/* Column 3: Key Deliverables & Applied Stack (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            {/* Key Deliverables Bullet List */}
            <div className="space-y-3">
              {experienceData.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                  <p className="text-gray-600">
                    <strong className="text-gray-900 font-semibold">{item.label}:</strong>{" "}
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Applied Tech Stack */}
            <div className="pt-4 border-t border-gray-100">
              <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block mb-2.5">
                // TECHNOLOGIES APPLIED
              </span>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {experienceData.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 hover:bg-white border border-gray-200/90 text-xs font-mono font-medium text-gray-800 transition-colors"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-gray-200/90" />

      </div>
    </section>
  );
}
