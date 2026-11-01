"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Sparkles,
  Building2,
  Laptop,
  GraduationCap,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  Zap,
  Layers,
  Users,
} from "lucide-react";

interface Milestone {
  id: string;
  period: string;
  role: string;
  company: string;
  type: string;
  location: string;
  status: "active" | "completed";
  summary: string;
  highlights: { title: string; desc: string; icon: React.ReactNode }[];
  techStack: string[];
  metrics: { value: string; label: string }[];
}

const milestones: Milestone[] = [
  {
    id: "sparktech",
    period: "Jul 2025 — Present",
    role: "Frontend Developer",
    company: "Sparktech Agency",
    type: "Full-Time · Onsite",
    location: "Dhaka, Bangladesh",
    status: "active",
    summary:
      "Spearheading frontend architecture and client deliverables at Sparktech Agency. Translating intricate Figma design systems into accessible, responsive Next.js and React web applications with real-time Socket.IO communication, centralized state management, and sub-second page performance.",
    highlights: [
      {
        title: "16+ Production Deliveries",
        desc: "Engineered and shipped 16+ live client web platforms from architectural blueprint to high-availability deployment.",
        icon: <Zap size={14} className="text-amber-500" />,
      },
      {
        title: "Real-Time WebSocket Architecture",
        desc: "Built low-latency real-time data feeds, live match statistics, and collaborative feeds using Socket.IO and optimistic updates.",
        icon: <Layers size={14} className="text-indigo-500" />,
      },
      {
        title: "Pixel-Perfect Figma Translation",
        desc: "Converted complex multi-breakpoint design files into responsive, zero-layout-shift UI systems compliant with WCAG 2.1 AA standards.",
        icon: <ShieldCheck size={14} className="text-emerald-500" />,
      },
      {
        title: "Cross-Functional Sprint Leadership",
        desc: "Collaborated directly with product managers, UI/UX designers, backend engineers, and clients to ensure on-time delivery.",
        icon: <Users size={14} className="text-sky-500" />,
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
    ],
    metrics: [
      { value: "16+", label: "Shipped Projects" },
      { value: "100%", label: "On-Time Handoff" },
      { value: "98/100", label: "Avg Lighthouse" },
    ],
  },
  {
    id: "freelance",
    period: "2024 — 2025",
    role: "Independent Full-Stack Developer",
    company: "Freelance & Client Solutions",
    type: "Contract · Remote",
    location: "Global & Domestic Clients",
    status: "completed",
    summary:
      "Delivered end-to-end bespoke digital products for emerging startups, creators, and local businesses. Focused on high-conversion landing pages, e-commerce stores, and fintech prototypes with custom authentication, payment gateway integrations, and fluid micro-interactions.",
    highlights: [
      {
        title: "Full-Cycle Product Engineering",
        desc: "Developed turnkey applications like NovaPay Wallet (Fintech), Heaven Furniture (E-Commerce), and Fixpair (Consultation Platform).",
        icon: <Zap size={14} className="text-amber-500" />,
      },
      {
        title: "Payment & WebRTC Integrations",
        desc: "Engineered Stripe payment checkout sessions and WebRTC peer-to-peer audio/video consultation rooms with live transcriptions.",
        icon: <Layers size={14} className="text-indigo-500" />,
      },
      {
        title: "Client Retention & Direct Communication",
        desc: "Managed client expectations directly from discovery sprint to deployment, maintaining a 100% positive project delivery record.",
        icon: <Users size={14} className="text-sky-500" />,
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WebRTC",
      "Stripe API",
      "Zustand",
      "Framer Motion",
    ],
    metrics: [
      { value: "6+", label: "Custom Builds" },
      { value: "0.4s", label: "Instant Transfers" },
      { value: "2.4x", label: "Client Conversion" },
    ],
  },
  {
    id: "academic",
    period: "2022 — Present",
    role: "B.Sc. in Computer Science & Engineering",
    company: "University of Liberal Arts Bangladesh (ULAB)",
    type: "Degree & Core Academics",
    location: "Dhaka, Bangladesh",
    status: "active",
    summary:
      "Pursuing formal software engineering studies with focused coursework in Algorithms, Data Structures, Database Systems (DBMS), Object-Oriented Programming (OOP), and System Architecture. Complemented by full-stack specialization certifications from Programming Hero with honors.",
    highlights: [
      {
        title: "Algorithms & Algorithmic Rigor",
        desc: "Rigorous foundation in graph theory, sorting, tree traversal, dynamic programming, and computational complexity analysis.",
        icon: <ShieldCheck size={14} className="text-emerald-500" />,
      },
      {
        title: "Software System Architecture",
        desc: "Studied relational and non-relational database design, normalization, ACID properties, indexing, and distributed system trade-offs.",
        icon: <Layers size={14} className="text-indigo-500" />,
      },
      {
        title: "Continuous Honors & Specialization",
        desc: "Completed industry web development certifications with top marks, bridging academic theory with modern production practices.",
        icon: <Zap size={14} className="text-amber-500" />,
      },
    ],
    techStack: [
      "Data Structures",
      "Algorithms",
      "C++",
      "JavaScript",
      "MongoDB",
      "SQL",
      "System Design",
    ],
    metrics: [
      { value: "4th", label: "Year CSE Undergrad" },
      { value: "Top Tier", label: "Practical Projects" },
      { value: "Verified", label: "Course Certifications" },
    ],
  },
];

export default function Experience() {
  const [selectedMilestone, setSelectedMilestone] = useState<string>("sparktech");

  const current = milestones.find((m) => m.id === selectedMilestone) || milestones[0];

  return (
    <section id="experience" className="py-28 md:py-36 px-4 sm:px-8 md:px-12 bg-white border-t border-gray-100 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[45vw] h-[30vw] bg-indigo-50/40 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[40vw] h-[25vw] bg-emerald-50/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── Section Header (Editorial, Bold & Human) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-gray-100">
          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.35em] text-indigo-600 font-bold flex items-center gap-2">
              <Sparkles size={12} className="text-indigo-600" />
              Career Architecture &amp; Timeline
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none text-gray-900">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-14">
          <div className="p-5 sm:p-6 rounded-2xl bg-gray-50/70 border border-gray-200/70 flex flex-col justify-between hover:bg-white hover:shadow-sm transition-all duration-300">
            <span className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">16+</span>
            <div className="mt-2">
              <span className="text-xs font-bold text-gray-900 block leading-tight">Production Deliveries</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mt-0.5">Live Client Applications</span>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-gray-50/70 border border-gray-200/70 flex flex-col justify-between hover:bg-white hover:shadow-sm transition-all duration-300">
            <span className="text-3xl sm:text-4xl font-black text-indigo-600 tracking-tight">01+</span>
            <div className="mt-2">
              <span className="text-xs font-bold text-gray-900 block leading-tight">Year Agency Exp.</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mt-0.5">Sparktech Agency Direction</span>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-gray-50/70 border border-gray-200/70 flex flex-col justify-between hover:bg-white hover:shadow-sm transition-all duration-300">
            <span className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">100%</span>
            <div className="mt-2">
              <span className="text-xs font-bold text-gray-900 block leading-tight">Pixel-Perfect Fidelity</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mt-0.5">Zero Layout Shifts (CLS)</span>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-gray-50/70 border border-gray-200/70 flex flex-col justify-between hover:bg-white hover:shadow-sm transition-all duration-300">
            <span className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">60fps</span>
            <div className="mt-2">
              <span className="text-xs font-bold text-gray-900 block leading-tight">Real-Time Fluidity</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mt-0.5">Socket.IO &amp; WebSockets</span>
            </div>
          </div>
        </div>

        {/* ── Interactive Editorial Timeline (Dual Panel Architecture) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* ── Left Column: Career Milestone Navigation Strip (5 Cols) ── */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-gray-400 mb-1 block px-2">
              Chronological Milestones
            </span>

            {milestones.map((m) => {
              const active = selectedMilestone === m.id;

              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMilestone(m.id)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all duration-300 relative group cursor-pointer flex flex-col gap-3 ${
                    active
                      ? "bg-white border-indigo-600/30 shadow-[0_12px_32px_rgba(99,102,241,0.08)] ring-1 ring-indigo-600/10"
                      : "bg-gray-50/60 hover:bg-white border-gray-200/70 hover:border-gray-300 hover:shadow-xs"
                  }`}
                >
                  {/* Top Meta: Status pill & Period */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1.5 ${
                        m.status === "active"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200/70"
                          : "bg-gray-100 text-gray-600 border border-gray-200"
                      }`}
                    >
                      {m.status === "active" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                      <span>{m.status === "active" ? "Active Position" : "Milestone"}</span>
                    </span>

                    <span className="text-[11px] font-mono text-gray-400 font-bold">
                      {m.period}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-black tracking-tight leading-tight transition-colors ${
                      active ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
                    }`}>
                      {m.company}
                    </h3>
                    <p className={`text-xs sm:text-sm font-bold pt-1 transition-colors ${
                      active ? "text-indigo-600" : "text-gray-500"
                    }`}>
                      {m.role}
                    </p>
                  </div>

                  {/* Location & Type */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100/80 text-[11px] font-mono text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className={active ? "text-indigo-500" : "text-gray-400"} />
                      <span>{m.location}</span>
                    </span>
                    <span className="flex items-center gap-0.5 text-indigo-600 font-bold">
                      <span>Explore</span>
                      <ChevronRight size={13} className={`transition-transform duration-300 ${active ? "translate-x-1" : "group-hover:translate-x-0.5"}`} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Right Column: Rich Detailed Narrative & Deliverables (7 Cols) ── */}
          <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[2.5rem] border border-gray-200/90 shadow-[0_16px_45px_rgba(0,0,0,0.04)] p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-8 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Header Block */}
                <div className="space-y-3 pb-6 border-b border-gray-100">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                        {current.id === "sparktech" && <Building2 size={16} />}
                        {current.id === "freelance" && <Laptop size={16} />}
                        {current.id === "academic" && <GraduationCap size={16} />}
                      </span>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-600 font-bold block leading-none">
                          {current.type}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight pt-1">
                          {current.company}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200/60">
                      <Calendar size={12} className="text-gray-400" />
                      <span>{current.period}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal pt-2">
                    {current.summary}
                  </p>
                </div>

                {/* Key Accomplishments & Deliverables Grid */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-gray-400 block">
                    Engineering Impact &amp; Responsibilities
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-gray-50/80 border border-gray-200/70 hover:bg-white hover:border-indigo-100 hover:shadow-xs transition-all duration-200 flex flex-col justify-between gap-2"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-white border border-gray-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                            {h.icon}
                          </div>
                          <h4 className="text-xs sm:text-[13px] font-bold text-gray-900 leading-tight">
                            {h.title}
                          </h4>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {h.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Pill Row */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-gray-400 block mb-2.5">
                    Benchmark Highlights
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {current.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gray-50 border border-gray-200/90 text-xs font-mono"
                      >
                        <span className="font-black text-gray-900">{m.value}</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-gray-400 block mb-2.5">
                    Technology &amp; Tooling Applied
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {current.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-gray-100/90 hover:bg-indigo-50 hover:text-indigo-600 text-gray-700 border border-gray-200/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
