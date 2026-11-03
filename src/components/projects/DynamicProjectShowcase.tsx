"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Repeat,
  Compass,
  Flame,
  Calendar,
  Layers,
  Sparkles,
  Zap,
  Globe2,
  FileText,
  Clock,
  ChevronRight,
  AlertTriangle,
  RefreshCw,
  Search,
  Phone,
  FileSpreadsheet,
  Mic,
  Coins,
  Check,
  MapPin,
  Lock,
  Percent,
  Sliders,
  Printer,
  Ship,
  Anchor,
  HeartHandshake,
  Cpu,
  Database,
  Code2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Project, projectsData } from "@/data/projects";
import projectDetailsData from "@/data/projectDetails.json";

// Map string icon names to Lucide icon components
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Compass,
  Flame,
  Calendar,
  Repeat,
  Printer,
  Search,
  Coins,
  Building2,
  Ship,
  Anchor,
  Sliders,
  Layers,
  Sparkles,
  Cpu,
  Database,
  Code2,
};

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
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

interface DynamicProjectShowcaseProps {
  project: Project;
}

export default function DynamicProjectShowcase({ project }: DynamicProjectShowcaseProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Look up rich JSON data by slug or id
  const detailsMap = projectDetailsData as Record<string, any>;
  const richData =
    detailsMap[project.slug || ""] ||
    detailsMap[project.id] ||
    (project.slug === "islandhop" ? detailsMap["island-hop"] : null) ||
    null;

  // Active subsystem for tabbed exploration
  const initialSubsystem = richData?.subsystems?.[0]?.id || "";
  const [activeSubsystem, setActiveSubsystem] = useState(initialSubsystem);

  // Next project navigation
  const currentIndex = projectsData.findIndex(
    (p) => p.id === project.id || p.slug === project.slug
  );
  const nextProject =
    projectsData[(currentIndex + 1) % projectsData.length] || projectsData[0];

  // Prepared data (JSON優先 with fallback to base project attributes)
  const title = richData?.title || project.title;
  const tagline = richData?.tagline || project.tagline;
  const category = richData?.category || project.category;
  const role = richData?.role || project.role;
  const badge = richData?.badge || "Production Deployed";
  const summary = richData?.summary || project.fullDesc || project.desc;
  const metrics = richData?.metrics || project.metrics || [];
  
  // Gallery images with labels
  const images = richData?.images || project.images?.map((url, idx) => ({
    url,
    label: `Screen ${idx + 1}`,
  })) || [{ url: project.image, label: "Main Screenshot" }];

  const currentImage = images[activeImageIndex] || images[0];

  // Subsystems
  const subsystems = richData?.subsystems || [];
  const activeSub = subsystems.find((s: any) => s.id === activeSubsystem) || subsystems[0];

  // Comparison Matrix
  const comparison = richData?.comparison || null;

  // Dual Commission / Special Pricing Block
  const dualCommission = richData?.dualCommission || null;

  // Technical Architecture
  const techArchitecture = richData?.techArchitecture || [];

  // Contributions
  const contributions = richData?.contributions || project.contributions || [];

  // Live and GitHub links
  const liveLink = richData?.liveLink || project.liveLink || "https://github.com/pronoy656";
  const githubLink = richData?.githubLink || project.githubLink || "https://github.com/pronoy656";

  return (
    <div className="min-h-screen bg-[#fafbfc] text-gray-900 flex flex-col selection:bg-indigo-600 selection:text-white">
      {/* ── Top Navbar ── */}
      <Navbar />

      {/* ── Main Case Study Article ── */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-32 sm:pt-36 md:pt-40 pb-28">
        
        {/* ── Breadcrumb & Action Bar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200/80">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500">
            <Link
              href="/projects"
              className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Projects</span>
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-indigo-600 font-mono font-bold">{title}</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400 font-medium">Enterprise Case Study</span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
            >
              <span>Explore Platform</span>
              <ExternalLink size={13} />
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-indigo-600 hover:border-indigo-600 text-xs font-bold shadow-2xs active:scale-95 transition-all"
            >
              <GithubIcon />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* ── Title & Executive Header ── */}
        <div className="space-y-6 mb-16">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-[11px] font-mono font-bold uppercase tracking-wider">
              <Sparkles size={13} className="text-indigo-600" />
              {category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-[11px] font-mono font-bold uppercase tracking-wider">
              {role}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-mono font-bold uppercase tracking-wider">
              {badge}
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-950 tracking-tight leading-[1.08]">
              {title} — {tagline}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
              {summary}
            </p>
          </div>

          {/* Quick Metrics Grid */}
          {metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {metrics.map((m: any, idx: number) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
                  <span className="text-2xl sm:text-3xl font-black text-indigo-600 font-mono tracking-tight">
                    {m.value}
                  </span>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Mockup Interactive Showcase ── */}
        <div className="mb-20">
          <div className="relative rounded-3xl bg-gradient-to-b from-gray-900 via-gray-950 to-black p-3 sm:p-5 md:p-6 shadow-2xl border border-gray-800 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 px-2 border-b border-gray-800/80 gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-[11px] font-mono text-gray-400 hidden sm:inline">
                  {title.toLowerCase().replace(/\s+/g, "")}.app — {currentImage.label}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {images.map((img: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      activeImageIndex === idx
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-gray-800 text-gray-400 hover:text-white"
                    }`}
                  >
                    {img.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mt-3 bg-gray-950">
              <Image
                src={currentImage.url}
                alt={`${title} mockup screen ${activeImageIndex + 1}`}
                fill
                priority
                className="object-cover object-top transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* ── Domain Problem Analysis (Comparison Matrix) ── */}
        {comparison && (
          <section className="mb-24 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
                Domain Problem Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
                {comparison.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {comparison.sectionDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {comparison.items.map((item: any, idx: number) => {
                const IconComponent = ICON_MAP[item.icon] || Compass;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-2xs flex flex-col justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="text-base font-black text-gray-900 tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed">
                      <div className="p-3 rounded-xl bg-red-50/70 border border-red-100/80 text-red-950">
                        <span className="font-bold text-red-600 block text-[11px] font-mono uppercase tracking-wider mb-0.5">
                          Traditional limitation:
                        </span>
                        {item.traditional}
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100/80 text-emerald-950">
                        <span className="font-bold text-emerald-600 block text-[11px] font-mono uppercase tracking-wider mb-0.5">
                          Purpose-Built Solution:
                        </span>
                        {item.solution}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ── Subsystems Breakdown (Interactive Architecture Tabs) ── */}
        {subsystems.length > 0 && (
          <section className="mb-24 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
                System Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
                Exhaustive Breakdown by Core Subsystems
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Explore the modular subsystems engineered to power core workflows and high-concurrency domains.
              </p>
            </div>

            {/* Subsystem Selectors */}
            <div className="flex flex-wrap gap-2 pb-2 border-b border-gray-200">
              {subsystems.map((sub: any) => {
                const IconComponent = ICON_MAP[sub.icon] || Layers;
                const isActive = activeSubsystem === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubsystem(sub.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                      isActive
                        ? "bg-gray-950 text-white shadow-sm"
                        : "bg-white hover:bg-gray-100 text-gray-700 border border-gray-200"
                    }`}
                  >
                    <IconComponent size={16} />
                    <span>{sub.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Subsystem Details */}
            {activeSub && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSub.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                        {React.createElement(ICON_MAP[activeSub.icon] || Layers, { size: 24 })}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600">
                          {activeSub.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                          {activeSub.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-semibold text-gray-500">
                      {activeSub.subtitle}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                    {activeSub.details?.map((detail: any, idx: number) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-gray-50/70 border border-gray-200/70 flex flex-col gap-2.5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-mono font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <h4 className="text-sm font-black text-gray-900 leading-snug">
                            {detail.heading}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
                          {detail.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </section>
        )}

        {/* ── Dual Commission / Pricing Logic (If Available) ── */}
        {dualCommission && (
          <section className="mb-24 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
                Affiliate Business Logic
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
                {dualCommission.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {dualCommission.sectionDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Model A */}
              <div className="p-7 rounded-3xl bg-white border border-gray-200/90 shadow-xs flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-xs font-bold uppercase">
                      {dualCommission.modelA.title}
                    </span>
                    <span className="text-xs font-mono text-gray-400">{dualCommission.modelA.badge}</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">
                    {dualCommission.modelA.rate}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2.5">
                    {dualCommission.modelA.desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-950 font-mono space-y-1.5">
                  <p className="font-bold">Yield Projection:</p>
                  <p>{dualCommission.modelA.example}</p>
                </div>
              </div>

              {/* Model B */}
              <div className="p-7 rounded-3xl bg-white border border-gray-200/90 shadow-xs flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold uppercase">
                      {dualCommission.modelB.title}
                    </span>
                    <span className="text-xs font-mono text-gray-400">{dualCommission.modelB.badge}</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">
                    {dualCommission.modelB.rate}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2.5">
                    {dualCommission.modelB.desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-950 font-mono space-y-1.5">
                  <p className="font-bold">Yield Projection:</p>
                  <p>{dualCommission.modelB.example}</p>
                </div>
              </div>
            </div>

            {dualCommission.contractRules && (
              <div className="p-6 rounded-2xl bg-gray-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400">
                    Guaranteed Contract Rules
                  </span>
                  <p className="text-sm font-bold text-gray-100">
                    {dualCommission.contractRules}
                  </p>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono font-semibold shrink-0">
                  Anti-Fraud Verified
                </span>
              </div>
            )}
          </section>
        )}

        {/* ── Key Technical Deliverables / Architecture Specs ── */}
        {techArchitecture.length > 0 && (
          <section className="mb-24 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
                Engineering Specs
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
                Technology Stack &amp; Architectural Decisions
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techArchitecture.map((arch: any, idx: number) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 mb-2">
                    {arch.title}
                  </h4>
                  <p className="text-base font-black text-gray-900">{arch.tech}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {arch.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Lead Engineering Contributions ── */}
        {contributions.length > 0 && (
          <section className="mb-24 space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
                Personal Engineering Impact
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight mt-1.5">
                Key Deliverables &amp; Lead Engineering Roles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contributions.map((con: string, idx: number) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">
                    {con}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Next Project Footer Banner ── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-indigo-400 font-bold">
              Next In Case Studies
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              {nextProject.title} — {nextProject.tagline}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
              {nextProject.desc}
            </p>
          </div>

          <Link
            href={`/projects/${nextProject.slug || nextProject.id}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-gray-950 hover:bg-gray-100 font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all shrink-0"
          >
            <span>Next Project</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}

