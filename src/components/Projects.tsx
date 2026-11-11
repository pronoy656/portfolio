"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
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

const featuredProjects = projectsData.slice(0, 7);

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [viewportMode, setViewportMode] = useState<"unknown" | "desktop" | "mobile">("unknown");

  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const arenaRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const syncViewport = () => {
      setViewportMode(mediaQuery.matches ? "desktop" : "mobile");
    };
    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);
    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  // Desktop Pinned GSAP Scroll Animation (mounts ONLY on md: 768px and up)
  useEffect(() => {
    if (viewportMode !== "desktop") return;

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !pinRef.current) return;
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length) return;

      // Initial desktop card setup with GPU layer acceleration
      gsap.set(cards[0], {
        y: 0,
        opacity: 1,
        scale: 1,
        zIndex: 10,
        force3D: true,
        pointerEvents: "auto",
      });

      cards.slice(1).forEach((card, idx) => {
        gsap.set(card, {
          y: "110vh",
          opacity: 1,
          zIndex: 10 + idx + 1,
          force3D: true,
          pointerEvents: "auto",
        });
      });

      let lastIndex = 0;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: pinRef.current,
          start: "top top",
          // Responsive scroll distance (approx half the previous excessive scroll length)
          end: `+=${cards.length * 60}%`,
          // Snappy scrub: 0.25 removes the sluggish rubber-banding lag with smooth scroll
          scrub: 0.25,
          // Zero anticipatePin prevents the sudden hitch/catch when scrolling down from About
          anticipatePin: 0,
          fastScrollEnd: true,
          preventOverlaps: true,
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
            duration: (cards.length - 1) * 1.0,
          },
          0
        );
      }

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(
          card,
          {
            y: i * 32,
            opacity: 1,
            ease: "power1.out",
            duration: 1,
            force3D: true,
          },
          (i - 1) * 1.0
        );
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [viewportMode]);

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
    <section id="projects" className="scroll-mt-24 md:scroll-mt-28 relative bg-[#fafbfc] dark:bg-[#090a11] dark:bg-gradient-to-b dark:from-[#090a11] dark:via-[#0e1121] dark:to-[#090a11] transition-colors duration-300">
      
      {viewportMode === "unknown" && (
        <div className="min-h-screen" aria-hidden="true" />
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP VIEW (Mounted ONLY on md: 768px+, Original Stacking Deck)
          ══════════════════════════════════════════════════════════════════════ */}
      {viewportMode === "desktop" && (
        <div ref={sectionRef} className="relative min-h-screen overflow-hidden">
        
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
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 dark:text-zinc-50 leading-none">
                WORKS <span className="text-gray-300 dark:text-zinc-600 font-light">&amp;</span>{" "}
                <span className="text-gray-400 dark:text-zinc-500 italic font-semibold">CREATIONS.</span>
              </h2>
            </div>

            <Link
              href="/projects"
              className="group/all inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-zinc-900 hover:bg-gray-900 dark:hover:bg-white text-gray-900 dark:text-zinc-100 hover:text-white dark:hover:text-zinc-950 border border-gray-200/90 dark:border-zinc-800 hover:border-gray-900 dark:hover:border-white font-bold text-[13px] tracking-tight shadow-xs hover:shadow-md active:scale-95 transition-all duration-200 shrink-0"
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
                <div className="relative w-full h-[calc(100vh-275px)] min-h-[440px] max-h-[515px] bg-white dark:bg-[#11131f] dark:bg-gradient-to-br dark:from-[#171a2c] dark:via-[#111320] dark:to-[#0d0e17] rounded-[2.4rem] border border-gray-200/90 dark:border-indigo-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.55)] overflow-hidden flex flex-col">
                  {/* File Tab Header */}
                  <div className="h-[38px] px-8 bg-white dark:bg-[#131523] dark:bg-gradient-to-r dark:from-[#171a2c] dark:to-[#121422] flex items-center justify-between shrink-0 select-none z-30">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-gray-100 dark:bg-zinc-800 border border-gray-200/90 dark:border-zinc-700 flex items-center justify-center text-[10px] font-mono font-bold text-gray-700 dark:text-zinc-200 shrink-0">
                        {project.number}
                      </span>
                      <span className="text-[13px] font-bold tracking-tight text-gray-900 dark:text-white leading-none truncate">
                        {project.title}
                      </span>
                      <span className="text-[11px] font-mono text-gray-400 dark:text-zinc-500 leading-none truncate">
                        / {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 min-h-0 p-6 flex flex-col justify-between gap-3 overflow-hidden">
                    <div className="shrink-0 flex items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-zinc-100 tracking-[-0.015em] leading-snug">
                        {project.tagline}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        {project.metrics.map((metric, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 text-xs font-mono"
                          >
                            <span className="font-black text-gray-900 dark:text-white">{metric.value}</span>
                            <span className="text-[10px] text-gray-400 dark:text-zinc-400 uppercase tracking-wider">{metric.label}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Image Showcase Row */}
                    <div
                      className={`flex-1 min-h-[170px] max-h-[265px] grid ${
                        project.images.length === 2
                          ? "grid-cols-2 max-w-4xl mx-auto w-full gap-5"
                          : "grid-cols-3 w-full gap-4"
                      } my-2.5`}
                    >
                      {project.images.map((img, imgIdx) => (
                        <Link
                          key={imgIdx}
                          href={`/projects/${project.slug || project.id}`}
                          className="group/img relative h-full w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-200/90 dark:border-zinc-800 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer block"
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
                            quality={82}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 560px"
                            className="object-cover object-center group-hover/img:scale-102 transition-transform duration-500 ease-out"
                            loading={i <= 1 ? "eager" : "lazy"}
                            priority={i === 0 && imgIdx === 0}
                          />
                        </Link>
                      ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="shrink-0 pt-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border border-gray-200/70 dark:border-zinc-800"
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
                          className="inline-flex items-center gap-2 px-4.5 py-3 rounded-xl bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-zinc-200 text-white dark:text-zinc-950 text-[13px] font-bold shadow-xs hover:shadow-md active:scale-95 transition-all"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={13} />
                        </a>

                        <a
                          href={project.githubLink || "https://github.com/pronoy656"}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 flex items-center justify-center transition-all shadow-2xs hover:shadow-xs active:scale-95"
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
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-gray-600 dark:text-zinc-300 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-200/90 dark:border-zinc-800 shadow-sm">
              <span className="text-indigo-600 dark:text-indigo-400 font-black">
                {String(activeCardIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-gray-300 dark:text-zinc-700">/</span>
              <span className="text-gray-400 dark:text-zinc-500">
                {String(featuredProjects.length).padStart(2, "0")}
              </span>
            </div>

            <div className="w-36 h-2 bg-gray-200/90 dark:bg-zinc-800 rounded-full overflow-hidden shadow-2xs">
              <div
                ref={progressBarRef}
                className="h-full bg-indigo-600 rounded-full w-0 transition-all duration-150"
              />
            </div>
          </div>
        </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE VIEW (Mounted ONLY on < md: 768px, Touch-Optimized Native Cards)
          ══════════════════════════════════════════════════════════════════════ */}
      {viewportMode === "mobile" && (
        <div className="pt-16 sm:pt-20 pb-6 bg-[#fafbfc] dark:bg-[#090a11] dark:bg-gradient-to-b dark:from-[#090a11] dark:via-[#0e1121] dark:to-[#090a11] transition-colors duration-300">
        
        {/* Mobile Header (Scroll Reveal) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease }}
          className="px-4 mb-3.5 flex items-end justify-between gap-3"
        >
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400 font-bold block mb-1">
              {"// Selected Works"}
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 dark:text-zinc-50 leading-none">
              WORKS <span className="text-gray-300 dark:text-zinc-600 font-light">&amp;</span>{" "}
              <span className="text-gray-400 dark:text-zinc-500 italic font-semibold">CREATIONS.</span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900 hover:bg-gray-900 dark:hover:bg-white text-gray-900 dark:text-zinc-100 hover:text-white dark:hover:text-zinc-950 border border-gray-200/90 dark:border-zinc-800 font-bold text-xs tracking-tight shadow-xs active:scale-95 transition-all shrink-0"
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
              className="w-[86vw] max-w-[340px] shrink-0 snap-center rounded-2xl bg-white dark:bg-[#11131f] dark:bg-gradient-to-br dark:from-[#171a2c] dark:via-[#111320] dark:to-[#0d0e17] border border-gray-200/90 dark:border-indigo-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.45)] overflow-hidden flex flex-col h-auto"
            >
              {/* Card Header Tab (Clean number + title only on mobile) */}
              <div className="h-[38px] px-3.5 bg-white dark:bg-[#131523] dark:bg-gradient-to-r dark:from-[#171a2c] dark:to-[#121422] border-b border-gray-100 dark:border-zinc-800 flex items-center select-none">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-100 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 font-mono font-bold text-[9px] flex items-center justify-center shrink-0">
                    {project.number}
                  </span>
                  <span className="text-xs font-bold tracking-tight text-gray-900 dark:text-white truncate">
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Card Body (Tight, clean, uniform height) */}
              <div className="p-3 flex-1 flex flex-col justify-between gap-2.5">
                {/* Tagline */}
                <h3 className="text-xs font-semibold text-gray-900 dark:text-zinc-100 tracking-normal leading-snug line-clamp-1">
                  {project.tagline}
                </h3>

                {/* Mockup Image (Crisp 16/10 aspect ratio with browser accent bar) */}
                <Link
                  href={`/projects/${project.slug || project.id}`}
                  className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 shadow-2xs cursor-pointer group block"
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
                    quality={82}
                    sizes="(max-width: 640px) 95vw, 480px"
                    loading={idx <= 1 ? "eager" : "lazy"}
                    priority={idx === 0}
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                </Link>

                {/* Tech Stack (Compact single-row pills) */}
                <div className="flex items-center gap-1 overflow-hidden">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-semibold px-2 py-0.5 rounded-md bg-gray-100/90 dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border border-gray-200/70 dark:border-zinc-800 whitespace-nowrap shrink-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons (100% visible, snug & tap-friendly) */}
                <div className="pt-2 border-t border-gray-100 dark:border-zinc-800 flex items-center gap-1.5">
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
                    className="flex-1 inline-flex items-center justify-center gap-1 py-2 rounded-xl bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-zinc-200 text-white dark:text-zinc-950 text-xs font-bold shadow-xs active:scale-95 transition-all"
                  >
                    <span>Live</span>
                    <ExternalLink size={11} />
                  </a>

                  <a
                    href={project.githubLink || "https://github.com/pronoy656"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 flex items-center justify-center transition-all shadow-2xs active:scale-95 shrink-0"
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
              className="w-7 h-7 rounded-full bg-white dark:bg-zinc-900 border border-gray-200/90 dark:border-zinc-800 flex items-center justify-center text-gray-700 dark:text-zinc-200 disabled:opacity-30 shadow-2xs active:scale-95 transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => scrollMobileTo(Math.min(featuredProjects.length - 1, mobileActiveIndex + 1))}
              disabled={mobileActiveIndex === featuredProjects.length - 1}
              className="w-7 h-7 rounded-full bg-white dark:bg-zinc-900 border border-gray-200/90 dark:border-zinc-800 flex items-center justify-center text-gray-700 dark:text-zinc-200 disabled:opacity-30 shadow-2xs active:scale-95 transition-all"
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
                      ? "w-3.5 bg-indigo-600 dark:bg-indigo-400"
                      : "w-1.5 bg-gray-200 dark:bg-zinc-800"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] font-bold text-gray-500 dark:text-zinc-400">
              0{mobileActiveIndex + 1} / 0{featuredProjects.length}
            </span>
          </div>
        </div>
        </div>
      )}
    </section>
  );
}
