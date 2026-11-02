"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ArrowRight,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Project, projectsData } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
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

const featuredProjects = projectsData.slice(0, 6);

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const arenaRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  // Desktop Pinned GSAP Scroll Animation (strictly md: 768px and up)
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!sectionRef.current || !pinRef.current) return;
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length) return;

      // Initial desktop card setup
      gsap.set(cards[0], {
        y: 0,
        opacity: 1,
        scale: 1,
        zIndex: 10,
        pointerEvents: "auto",
      });

      cards.slice(1).forEach((card, idx) => {
        gsap.set(card, {
          y: "115vh",
          opacity: 1,
          zIndex: 10 + idx + 1,
          pointerEvents: "auto",
        });
      });

      let lastIndex = 0;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: pinRef.current,
          start: "top top",
          end: `+=${cards.length * 110}%`,
          scrub: 0.7,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
            const total = cards.length;
            const current = Math.min(total - 1, Math.floor(self.progress * total));
            if (current !== lastIndex) {
              lastIndex = current;
              setActiveCardIndex(current);
            }
          },
        },
      });

      if (arenaRef.current && cards.length > 1) {
        tl.to(
          arenaRef.current,
          {
            y: -26,
            ease: "none",
            duration: (cards.length - 1) * 1.15,
          },
          0
        );
      }

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(
          card,
          {
            y: i * 36,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
          },
          (i - 1) * 1.15
        );
      });
    });

    return () => mm.revert();
  }, []);

  // Mobile carousel navigation
  const scrollMobileTo = (index: number) => {
    setMobileActiveIndex(index);
    if (!mobileCarouselRef.current) return;
    const container = mobileCarouselRef.current;
    const card = container.children[index] as HTMLElement | undefined;
    if (card) {
      const left = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
      container.scrollTo({ left, behavior: "smooth" });
    }
  };

  const handleMobileScroll = () => {
    if (!mobileCarouselRef.current) return;
    const container = mobileCarouselRef.current;
    const center = container.scrollLeft + container.clientWidth / 2;
    const cards = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const diff = Math.abs(center - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    if (closestIndex !== mobileActiveIndex) {
      setMobileActiveIndex(closestIndex);
    }
  };

  return (
    <section id="projects" className="scroll-mt-24 md:scroll-mt-28 relative bg-[#fafbfc]">
      
      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP VIEW (Visible ONLY on md: 768px+, 100% untouched original deck)
          ══════════════════════════════════════════════════════════════════════ */}
      <div ref={sectionRef} className="hidden md:block relative min-h-screen overflow-hidden">
        
        {/* Pinned Viewport Container */}
        <div
          ref={pinRef}
          className="h-screen w-full flex flex-col justify-between px-8 md:px-12 pt-20 md:pt-22 pb-14 relative overflow-hidden"
        >
          {/* Header (Scroll Reveal) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.65, ease }}
            className="w-full max-w-7xl mx-auto flex items-end justify-between gap-4 z-[60] shrink-0 mb-8 md:mb-10"
          >
            <div className="flex flex-col gap-1.5">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 leading-none">
                WORKS <span className="text-gray-300 font-light">&amp;</span>{" "}
                <span className="text-gray-400 italic font-semibold">CREATIONS.</span>
              </h2>
            </div>

            <Link
              href="/projects"
              className="group/all inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-gray-900 text-gray-900 hover:text-white border border-gray-200/90 hover:border-gray-900 font-bold text-[13px] tracking-tight shadow-xs hover:shadow-md active:scale-95 transition-all duration-200 shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight size={14} className="transition-transform group-hover/all:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stacking Arena */}
          <div
            ref={arenaRef}
            className="relative w-full max-w-7xl mx-auto flex-1 min-h-0 flex items-start justify-center mb-12 will-change-transform"
          >
            {featuredProjects.map((project, i) => (
              <div
                key={project.id}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                style={{ zIndex: 10 + i }}
                className="absolute inset-x-0 top-0 flex justify-center will-change-transform [transform:translateZ(0)]"
              >
                <div className="relative w-full h-[calc(100vh-275px)] min-h-[440px] max-h-[515px] bg-white rounded-[2.4rem] border border-gray-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
                  {/* File Tab Header */}
                  <div className="h-[38px] px-8 bg-white flex items-center justify-between shrink-0 select-none z-30">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-gray-100 border border-gray-200/90 flex items-center justify-center text-[10px] font-mono font-bold text-gray-700 shrink-0">
                        {project.number}
                      </span>
                      <span className="text-[13px] font-black tracking-tight text-gray-900 leading-none truncate">
                        {project.title}
                      </span>
                      <span className="text-[11px] font-mono text-gray-400 leading-none truncate">
                        / {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 min-h-0 p-6 flex flex-col justify-between gap-3 overflow-hidden">
                    <div className="shrink-0 flex items-center justify-between gap-3">
                      <h3 className="text-xl font-black text-gray-900 tracking-tight leading-snug">
                        {project.tagline}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        {project.metrics.map((metric, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200/80 text-xs font-mono"
                          >
                            <span className="font-black text-gray-900">{metric.value}</span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">{metric.label}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 3-Column Image Showcase Row */}
                    <div className="flex-1 min-h-[170px] max-h-[265px] grid grid-cols-3 gap-4 my-2.5">
                      {project.images.map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          onClick={() => setSelectedProject(project)}
                          className="group/img relative h-full w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/90 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                        >
                          {imgIdx === 0 && (
                            <div className="absolute top-0 inset-x-0 h-4 bg-gray-950/60 backdrop-blur-xs border-b border-white/20 z-20 px-2 flex items-center gap-1 pointer-events-none">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            </div>
                          )}

                          <Image
                            src={img}
                            alt={`${project.title} screen ${imgIdx + 1}`}
                            fill
                            sizes="(max-width: 1024px) 33vw, 380px"
                            className="object-cover object-top group-hover/img:scale-102 transition-transform duration-500 ease-out"
                            loading={i === 0 ? "eager" : "lazy"}
                            priority={i === 0 && imgIdx === 0}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="shrink-0 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-700 border border-gray-200/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0">
                        <Link
                          href={`/projects/${project.slug || project.id}`}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-bold shadow-sm hover:shadow-md hover:shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer"
                        >
                          <span>View Details</span>
                          <ArrowUpRight size={14} />
                        </Link>

                        <a
                          href={project.liveLink || "https://github.com/pronoy656"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4.5 py-3 rounded-xl bg-gray-900 hover:bg-black text-white text-[13px] font-bold shadow-xs hover:shadow-md active:scale-95 transition-all"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={13} />
                        </a>

                        <a
                          href={project.githubLink || "https://github.com/pronoy656"}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          className="w-11 h-11 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-indigo-600 hover:border-indigo-600 flex items-center justify-center transition-all shadow-2xs hover:shadow-xs active:scale-95"
                        >
                          <GithubIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Deck Indicator */}
          <div className="absolute bottom-8 right-12 z-[70] flex items-center gap-3 select-none pointer-events-auto">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-gray-600 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-200/90 shadow-sm">
              <span className="text-indigo-600 font-black">
                {String(activeCardIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-400">
                {String(featuredProjects.length).padStart(2, "0")}
              </span>
            </div>

            <div className="w-36 h-2 bg-gray-200/90 rounded-full overflow-hidden shadow-2xs">
              <div
                ref={progressBarRef}
                className="h-full bg-indigo-600 rounded-full w-0 transition-all duration-150"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE VIEW (Visible ONLY on < md: 768px, Touch-Optimized Native Cards)
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="block md:hidden pt-16 sm:pt-20 pb-12 bg-[#fafbfc]">
        
        {/* Mobile Header (Scroll Reveal) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease }}
          className="px-4 mb-3.5 flex items-end justify-between gap-3"
        >
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-indigo-600 font-bold block mb-1">
              {"// Selected Works"}
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 leading-none">
              WORKS <span className="text-gray-300 font-light">&amp;</span>{" "}
              <span className="text-gray-400 italic font-semibold">CREATIONS.</span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-gray-900 text-gray-900 hover:text-white border border-gray-200/90 font-bold text-xs tracking-tight shadow-xs active:scale-95 transition-all shrink-0"
          >
            <span>View All</span>
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Mobile Native Snap Carousel (Compact, zero empty vertical gaps) */}
        <div
          ref={mobileCarouselRef}
          onScroll={handleMobileScroll}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-4 py-1 items-start [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.08,
                ease,
              }}
              className="w-[86vw] max-w-[340px] shrink-0 snap-center rounded-2xl bg-white border border-gray-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-auto"
            >
              {/* Card Header Tab */}
              <div className="h-[34px] px-3.5 bg-white border-b border-gray-100 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-mono font-bold text-[9px] flex items-center justify-center">
                    {project.number}
                  </span>
                  <span className="text-xs font-black tracking-tight text-gray-900 truncate">
                    {project.title}
                  </span>
                </div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/70 px-1.5 py-0.5 rounded-md">
                  {project.category.split("/")[0].trim()}
                </span>
              </div>

              {/* Card Body (Tight, clean, snug padding) */}
              <div className="p-3 flex flex-col gap-2.5">
                {/* Tagline */}
                <h3 className="text-xs font-black text-gray-900 tracking-tight leading-snug line-clamp-1">
                  {project.tagline}
                </h3>

                {/* Mockup Image (Crisp 16/10 aspect ratio with browser accent bar) */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 border border-gray-200/80 shadow-2xs cursor-pointer group"
                >
                  <div className="absolute top-0 inset-x-0 h-3 bg-gray-950/70 backdrop-blur-xs border-b border-white/20 z-20 px-1.5 flex items-center gap-1 pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="90vw"
                    className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-semibold px-2 py-0.5 rounded-md bg-gray-100/90 text-gray-700 border border-gray-200/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons (100% visible, snug & tap-friendly) */}
                <div className="pt-2 border-t border-gray-100 flex items-center gap-1.5">
                  <Link
                    href={`/projects/${project.slug || project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowUpRight size={12} />
                  </Link>

                  <a
                    href={project.liveLink || "https://github.com/pronoy656"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 py-2 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
                  >
                    <span>Live</span>
                    <ExternalLink size={11} />
                  </a>

                  <a
                    href={project.githubLink || "https://github.com/pronoy656"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="w-8 h-8 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-indigo-600 hover:border-indigo-600 flex items-center justify-center transition-all shadow-2xs active:scale-95 shrink-0"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation Controls & Indicator */}
        <div className="mt-3 px-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollMobileTo(Math.max(0, mobileActiveIndex - 1))}
              disabled={mobileActiveIndex === 0}
              className="w-7 h-7 rounded-full bg-white border border-gray-200/90 flex items-center justify-center text-gray-700 disabled:opacity-30 shadow-2xs active:scale-95 transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => scrollMobileTo(Math.min(featuredProjects.length - 1, mobileActiveIndex + 1))}
              disabled={mobileActiveIndex === featuredProjects.length - 1}
              className="w-7 h-7 rounded-full bg-white border border-gray-200/90 flex items-center justify-center text-gray-700 disabled:opacity-30 shadow-2xs active:scale-95 transition-all"
              aria-label="Next project"
            >
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {featuredProjects.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    mobileActiveIndex === dotIdx
                      ? "w-3.5 bg-indigo-600"
                      : "w-1.5 bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] font-bold text-gray-500">
              0{mobileActiveIndex + 1} / 0{featuredProjects.length}
            </span>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SHARED CASE STUDY MODAL (Universal for Desktop & Mobile)
          ══════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            <div
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-gray-950/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl flex flex-col md:flex-row max-h-[92vh] sm:max-h-[90vh] overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100/90 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Left Pane: Image Showcase */}
              <div className="w-full md:w-[45%] shrink-0 relative bg-[#0f1117] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden min-h-[220px] sm:min-h-[320px]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-contain p-4 sm:p-6 md:p-8 drop-shadow-2xl"
                />
              </div>

              {/* Right Pane: Detailed Scrollable Content */}
              <div className="w-full md:w-[55%] p-5 sm:p-8 md:p-12 flex flex-col gap-4 sm:gap-6 overflow-y-auto">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono font-black uppercase tracking-[0.35em] text-indigo-600">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    {selectedProject.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  <p>{selectedProject.fullDesc}</p>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-gray-400 block">
                    Core Technical Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs font-medium text-gray-700 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/projects/${selectedProject.slug || selectedProject.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight size={14} />
                  </Link>

                  <a
                    href={selectedProject.liveLink || "https://github.com/pronoy656"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                  >
                    <span>View Live</span>
                    <ArrowUpRight size={14} />
                  </a>

                  <a
                    href={selectedProject.githubLink || "https://github.com/pronoy656"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-gray-900 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}