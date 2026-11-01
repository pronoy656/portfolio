"use client";

import React from "react";
import {
  Calendar,
  MapPin,
  Building2,
  ShieldCheck,
  Zap,
  Layers,
  Users,
} from "lucide-react";

const sparktechData = {
  role: "Frontend Developer",
  company: "Sparktech Agency",
  period: "Jul 2025 — Present",
  type: "Full-Time · Onsite",
  location: "Dhaka, Bangladesh",
  status: "Active Position",
  summary:
    "Spearheading frontend architecture and client deliverables at Sparktech Agency. Translating intricate Figma design systems into accessible, responsive Next.js and React web applications with real-time Socket.IO communication, centralized state management, and sub-second page performance.",
  highlights: [
    {
      title: "16+ Production Deliveries",
      desc: "Engineered and shipped 16+ live client web platforms from architectural blueprint to high-availability deployment.",
      icon: <Zap size={16} className="text-amber-500" />,
    },
    {
      title: "Real-Time WebSocket Architecture",
      desc: "Built low-latency real-time data feeds, live match statistics, and collaborative feeds using Socket.IO and optimistic updates.",
      icon: <Layers size={16} className="text-indigo-500" />,
    },
    {
      title: "Pixel-Perfect Figma Translation",
      desc: "Converted complex multi-breakpoint design files into responsive, zero-layout-shift UI systems compliant with WCAG 2.1 AA standards.",
      icon: <ShieldCheck size={16} className="text-emerald-500" />,
    },
    {
      title: "Cross-Functional Sprint Leadership",
      desc: "Collaborated directly with product managers, UI/UX designers, backend engineers, and clients to ensure on-time delivery.",
      icon: <Users size={16} className="text-sky-500" />,
    },
  ],
  techStack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Socket.IO",
    "Redux Toolkit",
    "TanStack Query",
    "REST APIs",
    "Figma",
    "Framer Motion",
  ],
  metrics: [
    { value: "16+", label: "Shipped Projects", desc: "Production Client Sites" },
    { value: "100%", label: "On-Time Handoff", desc: "Sprint Milestones" },
    { value: "98/100", label: "Avg Lighthouse", desc: "Core Web Vitals" },
    { value: "60fps", label: "Real-Time UI", desc: "Socket.IO Integration" },
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 md:scroll-mt-28 py-16 sm:py-24 md:py-36 px-4 sm:px-8 md:px-12 bg-white border-t border-gray-100 relative overflow-hidden">
      
      {/* ── Background Ambience ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[45vw] h-[30vw] bg-indigo-50/40 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[40vw] h-[25vw] bg-emerald-50/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── Section Header (Editorial, Bold & Human) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-gray-100">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none text-gray-900">
              STORY <span className="text-gray-300 font-light">&amp;</span> <br />
              <span className="text-gray-300 font-light italic">JOURNEY.</span>
            </h2>
          </div>

          {/* Live Availability Status Pill */}
          <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-gray-600 bg-gray-50 border border-gray-200/80 px-4 py-2.5 rounded-full shadow-2xs self-start md:self-end">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active at Sparktech Agency · Open to Opportunities</span>
          </div>
        </div>

        {/* ── Top Proof-of-Craft Impact Grid (4 Agency Stat Tiles) ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-12">
          {sparktechData.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-2xl bg-gray-50/70 border border-gray-200/70 flex flex-col justify-between hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              <span className={`text-2xl sm:text-4xl font-black tracking-tight ${
                idx === 1 ? "text-indigo-600" : idx === 2 ? "text-emerald-600" : "text-gray-900"
              }`}>
                {m.value}
              </span>
              <div className="mt-2">
                <span className="text-xs font-bold text-gray-900 block leading-tight">{m.label}</span>
                <span className="text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-wider block mt-0.5">{m.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Featured Agency Role Spotlight Card ── */}
        <div className="bg-white rounded-2xl sm:rounded-[2.5rem] border border-gray-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-5 sm:p-10 md:p-12 relative overflow-hidden flex flex-col gap-8 sm:gap-10">
          
          {/* Top Header Row of the Spotlight Card */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 sm:pb-8 border-b border-gray-100">
            <div className="flex items-start gap-3 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0 shadow-xs">
                <Building2 size={24} />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{sparktechData.status}</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold bg-gray-100 px-2.5 py-0.5 rounded-full border border-gray-200/60">
                    {sparktechData.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-gray-500">
                    <MapPin size={11} className="text-indigo-500" />
                    <span>{sparktechData.location}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight pt-1">
                  {sparktechData.role}
                </h3>
                <span className="text-base sm:text-lg font-bold text-indigo-600">
                  {sparktechData.company}
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-gray-600 bg-gray-50 px-4 py-2 rounded-full border border-gray-200/80 self-start">
              <Calendar size={13} className="text-gray-400" />
              <span>{sparktechData.period}</span>
            </div>
          </div>

          {/* Role Summary / Executive Narrative */}
          <div className="max-w-4xl">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              {sparktechData.summary}
            </p>
          </div>

          {/* Key Deliverables & Engineering Accomplishments (2x2 Grid) */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-gray-400 block">
              Core Engineering Impact &amp; Responsibilities
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sparktechData.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-gray-50/70 border border-gray-200/70 hover:bg-white hover:border-indigo-100 hover:shadow-xs transition-all duration-200 flex flex-col justify-between gap-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-white border border-gray-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                      {h.icon}
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 leading-tight">
                      {h.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-6 border-t border-gray-100">
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-gray-400 block mb-3">
              Production Tooling &amp; Technology Stack
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {sparktechData.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono font-semibold px-3 py-1.5 rounded-xl bg-gray-100/90 hover:bg-indigo-50 hover:text-indigo-600 text-gray-700 border border-gray-200/70 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
