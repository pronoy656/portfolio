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
  Eye,
  Maximize2,
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

  // Prepared data (JSON prioritised with clean fallbacks to base project attributes)
  const title = richData?.title || project.title;
  const tagline = richData?.tagline || project.tagline;
  const category = richData?.category || project.category;
  const role = richData?.role || project.role;
  const badge = richData?.badge || "Production Deployed";
  const summary = richData?.summary || project.fullDesc || project.desc;
  const metrics = richData?.metrics || project.metrics || [];
  
  // Gallery images with rich labels and captions
  const images = richData?.images || (
    project.images && project.images.length > 0
      ? project.images.map((url, idx) => ({
          url,
          label: `Screen 0${idx + 1} — Overview & Interface`,
          caption: `${title} visual interface screen ${idx + 1} showcasing responsive layout and user workflows.`,
        }))
      : [{
          url: project.image,
          label: "Screen 01 — Main Interface Showcase",
          caption: `${title} primary high-resolution interface preview.`,
        }]
  );

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

  // Features list
  const features = project.features || [];

  // Contributions
  const contributions = richData?.contributions || project.contributions || [];

  // Tech stack
  const techStack = richData?.techStack || project.techStack || [];

  // Live and GitHub links
  const liveLink = richData?.liveLink || project.liveLink || "https://github.com/pronoy656";
  const githubLink = richData?.githubLink || project.githubLink || "https://github.com/pronoy656";

  return (
    <div className="min-h-screen bg-[#fafbfc] dark:bg-[#08090f] dark:bg-[radial-gradient(ellipse_at_top,#141731_0%,#090a11_48%,#07080d_100%)] text-gray-900 dark:text-zinc-50 flex flex-col selection:bg-indigo-600 selection:text-white transition-colors duration-300">
      {/* ── Top Navbar ── */}
      <Navbar />

      {/* ── Main Case Study Article ── */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-32 sm:pt-36 md:pt-40 pb-28">
        
        {/* ── Breadcrumb & Action Bar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200/80 dark:border-zinc-800/80">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500 dark:text-zinc-400">
            <Link
              href="/projects"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Projects</span>
            </Link>
            <span className="text-gray-300 dark:text-zinc-700">/</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-mono font-bold">{title}</span>
            <span className="text-gray-300 dark:text-zinc-700">/</span>
            <span className="text-gray-400 dark:text-zinc-500 font-medium">Enterprise Case Study</span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
            >
              <span>Explore Live</span>
              <ExternalLink size={13} />
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 text-xs font-bold shadow-2xs active:scale-95 transition-all"
            >
              <GithubIcon />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* ── Title & Executive Header ── */}
        <div className="space-y-6 mb-14">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200/80 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 text-[11px] font-mono font-bold uppercase tracking-wider">
              <Sparkles size={13} className="text-indigo-600 dark:text-indigo-400" />
              {category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300 text-[11px] font-mono font-bold uppercase tracking-wider">
              {role}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider">
              {badge}
            </span>
          </div>

          <div className="max-w-4xl space-y-3.5">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-950 dark:text-white tracking-tight leading-[1.08]">
              {title} — {tagline}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-zinc-400 leading-relaxed font-normal">
              {summary}
            </p>
          </div>

          {/* Quick Metrics Grid */}
          {metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {metrics.map((m: any, idx: number) => (
                <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#111218] border border-gray-200/80 dark:border-zinc-800 shadow-2xs">
                  <span className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400 font-mono tracking-tight">
                    {m.value}
                  </span>
                  <p className="text-xs font-semibold text-gray-500 dark:text-zinc-400 mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── SECTION 1: Featured Main Screen Stage ── */}
        <div className="mb-8">
          <div className="relative rounded-3xl bg-gradient-to-b from-gray-900 via-gray-950 to-black p-3 sm:p-5 md:p-6 shadow-2xl border border-gray-800 overflow-hidden">
            {/* Top Browser Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 px-2 border-b border-gray-800/80 gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-[11px] font-mono text-gray-400 hidden sm:inline bg-gray-900/90 px-3 py-1 rounded-md border border-gray-800">
                  {title.toLowerCase().replace(/\s+/g, "")}.production.app
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-indigo-400">
                  {currentImage.label}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mt-3 bg-gray-950 border border-gray-800/50">
              <Image
                src={currentImage.url}
                alt={`${title} featured mockup`}
                fill
                priority
                className="object-cover object-top transition-all duration-500"
              />
            </div>

            {/* Caption beneath active image */}
            {currentImage.caption && (
              <div className="mt-4 px-2 pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                <span className="line-clamp-1">{currentImage.caption}</span>
                <span className="font-mono text-indigo-400 shrink-0 ml-4">
                  0{activeImageIndex + 1} / 0{images.length}
                </span>
              </div>
            )}
          </div>

          {/* ── Interactive Thumbnails Row ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-4">
            {images.map((img: any, idx: number) => {
              const isActive = activeImageIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3.5 cursor-pointer ${
                    isActive
                      ? "bg-white dark:bg-[#111218] border-indigo-600 dark:border-indigo-400 shadow-md ring-2 ring-indigo-500/20"
                      : "bg-white/80 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-[#111218] border-gray-200/90 dark:border-zinc-800 shadow-2xs hover:shadow-xs"
                  }`}
                >
                  <div className="relative w-16 h-11 rounded-lg overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shrink-0">
                    <Image
                      src={img.url}
                      alt={img.label}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                        isActive ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400 dark:text-zinc-500"
                      }`}>
                        Screen 0{idx + 1}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                      )}
                    </div>
                    <p className="text-xs font-bold text-gray-900 dark:text-white truncate">
                      {img.label.replace(/^Screen\s*\d+\s*[-—]\s*/i, "")}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── SECTION 2: All Screens Interface Walkthrough (100% VISIBLE TOGETHER) ── */}
        <section className="mt-20 mb-24 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
              Visual Interface &amp; Design System
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 dark:text-white tracking-tight mt-1.5">
              Complete High-Resolution Screen Walkthrough
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-zinc-400 mt-2">
              Every critical screen, dashboard console, and interface designed for {title}. Inspect all high-resolution layouts simultaneously below.
            </p>
          </div>

          <div className="space-y-12">
            {images.map((img: any, idx: number) => (
              <div
                key={idx}
                className="rounded-3xl bg-white dark:bg-[#11131f] dark:bg-gradient-to-br dark:from-[#16192a] dark:via-[#11131f] dark:to-[#0c0e17] border border-gray-200/90 dark:border-indigo-500/15 shadow-sm overflow-hidden p-5 sm:p-7 md:p-8 flex flex-col gap-6"
              >
                {/* Header for each screen */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-100 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight">
                        {img.label}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium mt-0.5">
                        {img.caption}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveImageIndex(idx);
                      window.scrollTo({ top: 380, behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gray-100 hover:bg-indigo-50 dark:bg-zinc-900 dark:hover:bg-indigo-500/15 text-gray-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs font-bold transition-all shrink-0 self-start sm:self-auto cursor-pointer"
                  >
                    <Maximize2 size={13} />
                    <span>Focus View</span>
                  </button>
                </div>

                {/* MacBook Browser Frame */}
                <div className="rounded-2xl bg-gray-950 p-2 sm:p-3 border border-gray-800 shadow-xl overflow-hidden">
                  <div className="flex items-center gap-1.5 pb-2 px-2 border-b border-gray-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[10px] font-mono text-gray-400">
                      {title.toLowerCase().replace(/\s+/g, "")}.com / screen-{idx + 1}
                    </span>
                  </div>

                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mt-2 bg-gray-900">
                    <Image
                      src={img.url}
                      alt={`${title} Screen ${idx + 1}`}
                      fill
                      sizes="(max-width: 1280px) 100vw, 1200px"
                      className="object-cover object-center hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Domain Problem Analysis (Comparison Matrix) ── */}
        {comparison && (
          <section className="mb-24 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                Domain Problem Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 dark:text-white tracking-tight mt-1.5">
                {comparison.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-zinc-400 mt-2">
                {comparison.sectionDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {comparison.items.map((item: any, idx: number) => {
                const IconComponent = ICON_MAP[item.icon] || Compass;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-[#11131f] dark:bg-gradient-to-br dark:from-[#16192a] dark:via-[#11131f] dark:to-[#0c0e17] border border-gray-200/90 dark:border-indigo-500/15 shadow-2xs flex flex-col justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-100 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="text-base font-black text-gray-900 dark:text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed">
                      <div className="p-3 rounded-xl bg-red-50/70 dark:bg-red-500/10 border border-red-100/80 dark:border-red-500/20 text-red-950 dark:text-red-200">
                        <span className="font-bold text-red-600 dark:text-red-400 block text-[11px] font-mono uppercase tracking-wider mb-0.5">
                          Traditional limitation:
                        </span>
                        {item.traditional}
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-500/10 border border-emerald-100/80 dark:border-emerald-500/20 text-emerald-950 dark:text-emerald-200">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-[11px] font-mono uppercase tracking-wider mb-0.5">
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
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                System Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 dark:text-white tracking-tight mt-1.5">
                Exhaustive Breakdown by Core Subsystems
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-zinc-400 mt-2">
                Explore the modular subsystems engineered to power core workflows and high-concurrency domains.
              </p>
            </div>

            {/* Subsystem Selectors */}
            <div className="flex flex-wrap gap-2 pb-2 border-b border-gray-200 dark:border-zinc-800">
              {subsystems.map((sub: any) => {
                const IconComponent = ICON_MAP[sub.icon] || Layers;
                const isActive = activeSubsystem === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubsystem(sub.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      isActive
                        ? "bg-gray-950 dark:bg-white text-white dark:text-zinc-950 shadow-sm"
                        : "bg-white dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-300 border border-gray-200 dark:border-zinc-800"
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
                  className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#11131f] dark:bg-gradient-to-br dark:from-[#16192a] dark:via-[#11131f] dark:to-[#0c0e17] border border-gray-200/90 dark:border-indigo-500/15 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-gray-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-100 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        {React.createElement(ICON_MAP[activeSub.icon] || Layers, { size: 24 })}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                          {activeSub.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                          {activeSub.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-semibold text-gray-500 dark:text-zinc-400">
                      {activeSub.subtitle}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                    {activeSub.details?.map((detail: any, idx: number) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-gray-50/70 dark:bg-zinc-900/70 border border-gray-200/70 dark:border-zinc-800 flex flex-col gap-2.5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-mono font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <h4 className="text-sm font-black text-gray-900 dark:text-white leading-snug">
                            {detail.heading}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-[13px] text-gray-600 dark:text-zinc-400 leading-relaxed font-normal">
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
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                Affiliate Business Logic
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 dark:text-white tracking-tight mt-1.5">
                {dualCommission.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-zinc-400 mt-2">
                {dualCommission.sectionDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Model A */}
              <div className="p-7 rounded-3xl bg-white dark:bg-[#11131f] dark:bg-gradient-to-br dark:from-[#16192a] dark:via-[#11131f] dark:to-[#0c0e17] border border-gray-200/90 dark:border-indigo-500/15 shadow-xs flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 font-mono text-xs font-bold uppercase">
                      {dualCommission.modelA.title}
                    </span>
                    <span className="text-xs font-mono text-gray-400 dark:text-zinc-500">{dualCommission.modelA.badge}</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
                    {dualCommission.modelA.rate}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mt-2.5">
                    {dualCommission.modelA.desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-xs text-indigo-950 dark:text-indigo-200 font-mono space-y-1.5">
                  <p className="font-bold">Yield Projection:</p>
                  <p>{dualCommission.modelA.example}</p>
                </div>
              </div>

              {/* Model B */}
              <div className="p-7 rounded-3xl bg-white dark:bg-[#11131f] dark:bg-gradient-to-br dark:from-[#16192a] dark:via-[#11131f] dark:to-[#0c0e17] border border-gray-200/90 dark:border-indigo-500/15 shadow-xs flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                      {dualCommission.modelB.title}
                    </span>
                    <span className="text-xs font-mono text-gray-400 dark:text-zinc-500">{dualCommission.modelB.badge}</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
                    {dualCommission.modelB.rate}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mt-2.5">
                    {dualCommission.modelB.desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-200 font-mono space-y-1.5">
                  <p className="font-bold">Yield Projection:</p>
                  <p>{dualCommission.modelB.example}</p>
                </div>
              </div>
            </div>

            {dualCommission.contractRules && (
              <div className="p-6 rounded-2xl bg-gray-900 dark:bg-zinc-900 border border-transparent dark:border-zinc-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                Engineering Specs
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 dark:text-white tracking-tight mt-1.5">
                Technology Stack &amp; Architectural Decisions
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techArchitecture.map((arch: any, idx: number) => (
                <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-[#11131f] dark:bg-gradient-to-br dark:from-[#16192a] dark:via-[#11131f] dark:to-[#0c0e17] border border-gray-200/90 dark:border-indigo-500/15 shadow-2xs">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                    {arch.title}
                  </h4>
                  <p className="text-base font-black text-gray-900 dark:text-white">{arch.tech}</p>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    {arch.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Core Features & Capabilities ── */}
        {features.length > 0 && (
          <section className="mb-24 space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                Platform Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 dark:text-white tracking-tight mt-1.5">
                Core Features &amp; User Workflows
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feat: string, idx: number) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#11131f] dark:bg-gradient-to-br dark:from-[#16192a] dark:via-[#11131f] dark:to-[#0c0e17] border border-gray-200/90 dark:border-indigo-500/15 shadow-2xs flex items-start gap-3.5"
                >
                  <CheckCircle2 size={18} className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-800 dark:text-zinc-200 leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Lead Engineering Contributions ── */}
        {contributions.length > 0 && (
          <section className="mb-24 space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                Personal Engineering Impact
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white tracking-tight mt-1.5">
                Key Deliverables &amp; Lead Engineering Roles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contributions.map((con: string, idx: number) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#111218] border border-gray-200/80 dark:border-zinc-800 shadow-2xs flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-zinc-200 leading-relaxed">
                    {con}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Tech Stack Badges ── */}
        {techStack.length > 0 && (
          <section className="mb-24 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400 block">
              Core Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-[#111218] border border-gray-200 dark:border-zinc-800 text-gray-800 dark:text-zinc-200 text-xs sm:text-sm font-bold shadow-2xs"
                >
                  {tech}
                </span>
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
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-gray-950 hover:bg-gray-100 font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all shrink-0 cursor-pointer"
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
