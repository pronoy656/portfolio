"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight, X, ExternalLink, Sparkles, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project, projectsData } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const featuredProjects = projectsData.slice(0, 6);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const arenaRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !pinRef.current) return;
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length) return;

      // ── Initial setup ──
      // Card 0 starts positioned at top: 0, 100% solid opaque
      gsap.set(cards[0], {
        y: 0,
        opacity: 1,
        scale: 1,
        zIndex: 10,
        pointerEvents: "auto",
      });

      // Subsequent cards start offscreen below the viewport, 100% solid opaque
      cards.slice(1).forEach((card, idx) => {
        gsap.set(card, {
          y: "115vh",
          opacity: 1,
          zIndex: 10 + idx + 1,
          pointerEvents: "auto",
        });
      });

      // ── Master Pinned Timeline ──
      let lastIndex = 0;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 110}%`,
          pin: true,
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

      // Subtle upward glide of the arena as cards stack to ensure ample bottom space for all cards
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

      // Animate each card into its stacked position with a clean tab offset
      // Each card stops at i * 36px, exposing the full header tab so text & numbers are 100% unclipped
      cards.forEach((card, i) => {
        if (i === 0) return;
        const targetY = i * 36;

        tl.to(
          card,
          {
            y: targetY,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
          },
          (i - 1) * 1.15
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative min-h-screen bg-[#fafbfc] overflow-hidden">
      
      {/* ── Fixed Viewport Pin Container (Spacious clearance below navbar & generous bottom margin) ── */}
      <div ref={pinRef} className="h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 md:pt-22 pb-10 sm:pb-14 relative overflow-hidden">
        
        {/* ── Section Title Header (Spacious clean gap below navbar and above cards) ── */}
        <div className="w-full max-w-7xl mx-auto flex items-end justify-between gap-4 z-[60] shrink-0 mb-6 sm:mb-8 md:mb-10">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.35em] text-indigo-600 flex items-center gap-1.5">
              <Sparkles size={12} className="text-indigo-600" />
              Selected Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-gray-900 leading-none">
              WORKS <span className="text-gray-300 font-light">&amp;</span>{" "}
              <span className="text-gray-400 italic font-semibold">CREATIONS.</span>
            </h2>
          </div>

          {/* ── View All Projects Link Button (Top Right) ── */}
          <Link
            href="/projects"
            className="group/all inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white hover:bg-gray-900 text-gray-900 hover:text-white border border-gray-200/90 hover:border-gray-900 font-bold text-xs sm:text-[13px] tracking-tight shadow-xs hover:shadow-md active:scale-95 transition-all duration-200 shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight size={14} className="transition-transform group-hover/all:translate-x-1" />
          </Link>
        </div>

        {/* ── Master Cards Stacking Arena (Generous bottom clearance for the final stacked card) ── */}
        <div
          ref={arenaRef}
          className="relative w-full max-w-7xl mx-auto flex-1 min-h-0 flex items-start justify-center mb-8 sm:mb-12 will-change-transform"
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
              {/* ── Clean Solid White Card (Generous height & rich mockups) ── */}
              <div
                className="relative w-full h-[calc(100vh-275px)] min-h-[440px] max-h-[515px] bg-white rounded-[1.8rem] sm:rounded-[2.4rem] border border-gray-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col"
              >
                
                {/* ── Top File-Tab Header Bar (38px height, 100% visible and unclipped) ── */}
                <div className="h-[38px] px-6 sm:px-8 bg-white flex items-center justify-between shrink-0 select-none z-30">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-gray-100 border border-gray-200/90 flex items-center justify-center text-[10px] font-mono font-bold text-gray-700 shrink-0">
                      {project.number}
                    </span>
                    <span className="text-xs sm:text-[13px] font-black tracking-tight text-gray-900 leading-none truncate">
                      {project.title}
                    </span>
                    <span className="hidden sm:inline-block text-[11px] font-mono text-gray-400 leading-none truncate">
                      / {project.category}
                    </span>
                  </div>
                </div>

                {/* ── Card Main Content Area ── */}
                <div className="flex-1 min-h-0 p-4 sm:p-5 md:p-6 flex flex-col justify-between gap-3 overflow-hidden">
                  
                  {/* ── Clean Minimalist Header (No redundancy, unified horizontal row) ── */}
                  <div className="shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-900 tracking-tight leading-snug">
                      {project.tagline}
                    </h3>

                    {/* Quiet Minimal Metrics Pills */}
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

                  {/* ── Multi-Image Showcase Row (Spacious, tall & high-res — clean, no hover overlay button) ── */}
                  <div className="flex-1 min-h-[170px] max-h-[265px] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 my-2 sm:my-2.5">
                    {project.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        onClick={() => setSelectedProject(project)}
                        className="group/img relative h-full w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/90 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                      >
                        {/* Browser Window Bar Accent on first mockup */}
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
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 380px"
                          className="object-cover object-top group-hover/img:scale-102 transition-transform duration-500 ease-out"
                          loading={i === 0 ? "eager" : "lazy"}
                          priority={i === 0 && imgIdx === 0}
                        />
                      </div>
                    ))}
                  </div>

                  {/* ── Bottom Bar: Tech Stack & Action Buttons (Generous height & prominent modern buttons) ── */}
                  <div className="shrink-0 pt-3.5 sm:pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gray-100/90 text-gray-700 border border-gray-200/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons: View Details, Live Preview & GitHub */}
                    <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-center">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-[13px] font-bold shadow-sm hover:shadow-md hover:shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowUpRight size={14} />
                      </button>

                      <a
                        href={project.liveLink || "https://github.com/pronoy656"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 sm:px-4.5 py-2.5 sm:py-3 rounded-xl bg-gray-900 hover:bg-black text-white text-xs sm:text-[13px] font-bold shadow-xs hover:shadow-md active:scale-95 transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} />
                      </a>

                      <a
                        href={project.githubLink || "https://github.com/pronoy656"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-indigo-600 hover:border-indigo-600 flex items-center justify-center transition-all shadow-2xs hover:shadow-xs active:scale-95"
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

        {/* ── Fixed Position Bottom-Right Deck Indicator (Marked in Red Box, Outside Card Entirely) ── */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-12 z-[70] flex items-center gap-3 select-none pointer-events-auto">
          {/* Active Card Counter: e.g. 01 / 06 */}
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-gray-600 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-200/90 shadow-sm">
            <span className="text-indigo-600 font-black">
              {String(activeCardIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400">
              {String(featuredProjects.length).padStart(2, "0")}
            </span>
          </div>

          {/* Horizontal Progress Bar */}
          <div className="w-28 sm:w-36 h-2 bg-gray-200/90 rounded-full overflow-hidden shadow-2xs">
            <div
              ref={progressBarRef}
              className="h-full bg-indigo-600 rounded-full w-0 transition-all duration-150"
            />
          </div>
        </div>

      </div>

      {/* ── Fullscreen Case Study Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-gray-950/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl bg-white rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Left Pane: Image Showcase */}
              <div className="w-full md:w-[45%] shrink-0 relative bg-[#0f1117] flex items-center justify-center p-6 md:p-10 overflow-hidden" style={{ minHeight: "320px" }}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-contain p-6 md:p-8 drop-shadow-2xl"
                />
              </div>

              {/* Right Pane: Detailed Scrollable Content */}
              <div className="w-full md:w-[55%] p-6 sm:p-10 md:p-12 flex flex-col gap-6 overflow-y-auto">
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

                <div className="space-y-6 pt-2">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-indigo-600">
                      Overview
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedProject.fullDesc}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-indigo-600">
                      Key Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-gray-400">
                        Role
                      </span>
                      <p className="text-sm font-bold text-gray-900">{selectedProject.role}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-gray-400">
                        Category
                      </span>
                      <p className="text-sm font-bold text-gray-900">{selectedProject.category.split('/')[0]}</p>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <a
                      href={selectedProject.liveLink || "https://github.com/pronoy656"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 rounded-full bg-gray-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Visit Live Project</span>
                      <ArrowUpRight size={15} />
                    </a>

                    <a
                      href={selectedProject.githubLink || "https://github.com/pronoy656"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="px-5 py-4 rounded-full border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center justify-center text-gray-700"
                    >
                      <GithubIcon />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
