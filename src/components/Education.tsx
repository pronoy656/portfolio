"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useReducedMotion } from "motion/react";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Eye,
  X,
  FileText,
  Building2,
  Images,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  status: string;
  description: string;
  highlights: string[];
}

interface CertificationItem {
  id: string;
  institution: string;
  title: string;
  instructor?: string;
  period: string;
  credentialId?: string;
  image: string;
  pdfUrl: string;
  credentialUrl: string;
  status: string;
  description: string;
  skills: string[];
}

interface CampusPhoto {
  id: number;
  src: string;
  title: string;
  tag: string;
  description: string;
}

const campusImages: CampusPhoto[] = [
  {
    id: 1,
    src: "/ulab-campus-4.webp",
    title: "Campus Grounds & Architecture",
    tag: "Permanent Campus",
    description:
      "Sprawling permanent campus grounds with modern red-brick architectural blocks surrounded by open green fields in Mohammadpur, Dhaka.",
  },
  {
    id: 2,
    src: "/ulab-campus-1.webp",
    title: "Red-Brick Atrium & Spiral Columns",
    tag: "Architectural Core",
    description:
      "Iconic multi-story red brick architectural columns, spiral staircases, and circular skylights designed for natural lighting and ventilation.",
  },
  {
    id: 3,
    src: "/ulab-campus-2.webp",
    title: "Open-Air Balcony & Greenery",
    tag: "Veranda View",
    description:
      "Wide open-air brick balconies and walkways overlooking lush green trees and academic zones.",
  },
  {
    id: 4,
    src: "/ulab-campus-3.webp",
    title: "ULAB Main Entrance & Pavilion",
    tag: "Main Gate",
    description:
      "Official entry gate and security pavilion with the university emblem at the permanent campus.",
  },
];

const educationList: EducationItem[] = [
  {
    institution: "University of Liberal Arts Bangladesh (ULAB)",
    degree: "B.Sc. in Computer Science and Engineering",
    period: "2022 — Present",
    location: "Dhaka, Bangladesh",
    status: "Ongoing",
    description:
      "Focusing on core software engineering principles, algorithms, data structures, database systems, and modern web architecture.",
    highlights: [
      "Data Structures & Algorithms, Object-Oriented Programming (OOP)",
      "Database Management Systems, Software Engineering & System Design",
      "Building practical software and collaborative student projects",
    ],
  },
];

const certificationList: CertificationItem[] = [
  {
    id: "programming-hero",
    institution: "Programming Hero",
    title: "Complete Web Development Course",
    period: "Issued Jun 2024",
    image: "/programming-hero-certificate.webp",
    pdfUrl: "https://drive.google.com/file/d/1ybXLDUERHXevoHB4FKON83tkpHuV_IUd/view?usp=sharing",
    credentialUrl: "https://drive.google.com/file/d/1ybXLDUERHXevoHB4FKON83tkpHuV_IUd/view?usp=sharing",
    status: "Verified Credential",
    description:
      "Comprehensive full-stack web development program covering modern frontend architectures, React, Next.js, TypeScript, state management, REST APIs, and backend integrations.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
      "REST APIs",
      "MongoDB",
    ],
  },
  {
    id: "10min-school",
    institution: "10 Minute School",
    title: "Presentation & Public Speaking",
    instructor: "Ayman Sadiq (CEO, 10 Minute School)",
    period: "Issued Oct 26, 2024",
    credentialId: "671cf57a4dee5",
    image: "/10min-school-certificate.webp",
    pdfUrl: "https://drive.google.com/file/d/1WkeoenL4_knX1smqOOcGYizj4MEvqc39/view?usp=sharing",
    credentialUrl: "https://drive.google.com/file/d/1WkeoenL4_knX1smqOOcGYizj4MEvqc39/view?usp=sharing",
    status: "Verified Credential",
    description:
      "Professional certification in speech delivery, executive communication, presentation structuring, and engaging high-stakes audience storytelling.",
    skills: [
      "Public Speaking",
      "Presentation Design",
      "Executive Communication",
      "Storytelling & Pitching",
    ],
  },
];

export default function Education() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const [activeTab, setActiveTab] = useState<"education" | "certification">("education");
  const [previewCert, setPreviewCert] = useState<CertificationItem | null>(null);

  // ── Hover Campus Preview States ──
  const [isHoveringCampus, setIsHoveringCampus] = useState(false);
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const [showCampusModal, setShowCampusModal] = useState(false);
  const [modalCampusIndex, setModalCampusIndex] = useState(0);

  // Track cursor smoothly via Framer Motion values (zero React re-renders) and clamp inside screen boundaries
  const updateCardPosition = (clientX: number, clientY: number) => {
    if (typeof window === "undefined") return;
    const cardWidth = window.innerWidth < 640 ? 320 : 480;
    const cardHeight = 350;
    const padding = 16;

    let x = clientX + 20;
    if (x + cardWidth > window.innerWidth - padding) {
      x = clientX - cardWidth - 20;
    }
    if (x < padding) x = padding;

    let y = clientY - cardHeight / 2;
    if (y < padding) y = padding;
    if (y + cardHeight > window.innerHeight - padding) {
      y = window.innerHeight - cardHeight - padding;
    }

    cardX.set(x);
    cardY.set(y);
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    updateCardPosition(e.clientX, e.clientY);
    setIsHoveringCampus(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    updateCardPosition(e.clientX, e.clientY);
  };

  return (
    <section id="education" className="scroll-mt-24 md:scroll-mt-28 py-14 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 bg-[#fafafa]/70 dark:bg-[#090a11] dark:bg-gradient-to-b dark:from-[#090a11] dark:via-[#0e1121] dark:to-[#090a11] border-t border-gray-100 dark:border-zinc-800/80 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* ── Section Header (Scroll Reveal) ── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.65, ease }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-8 mb-8 sm:mb-14 md:mb-16"
        >
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 dark:text-indigo-400">
              Academic &amp; Credentials
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none text-gray-900 dark:text-zinc-50">
              KNOWLEDGE <span className="text-gray-300 dark:text-zinc-600">&amp;</span> <br />
              <span className="text-gray-300 dark:text-zinc-600 italic">GROWTH.</span>
            </h2>
          </div>

          {/* ── 2 Tabs: Education & Certification (Fully Responsive) ── */}
          <div className="flex w-full sm:w-auto p-1 sm:p-1.5 rounded-full bg-white dark:bg-zinc-900 border border-gray-200/90 dark:border-zinc-800 shadow-sm self-stretch sm:self-start md:self-end">
            <button
              onClick={() => setActiveTab("education")}
              className={`relative flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeTab === "education"
                  ? "text-white dark:text-zinc-950 shadow-sm"
                  : "text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100"
              }`}
            >
              {activeTab === "education" && (
                <motion.div
                  layoutId="activeEducationPill"
                  className="absolute inset-0 rounded-full bg-[#1a1c20] dark:bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <GraduationCap size={14} className="relative z-10 shrink-0" />
              <span className="relative z-10">Education</span>
              <span
                className={`relative z-10 text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                  activeTab === "education"
                    ? "bg-white/20 dark:bg-zinc-950/15 text-white dark:text-zinc-950"
                    : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400"
                }`}
              >
                {educationList.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("certification")}
              className={`relative flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeTab === "certification"
                  ? "text-white dark:text-zinc-950 shadow-sm"
                  : "text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100"
              }`}
            >
              {activeTab === "certification" && (
                <motion.div
                  layoutId="activeEducationPill"
                  className="absolute inset-0 rounded-full bg-[#1a1c20] dark:bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Award size={14} className="relative z-10 shrink-0" />
              <span className="relative z-10">Certifications</span>
              <span
                className={`relative z-10 text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                  activeTab === "certification"
                    ? "bg-white/20 dark:bg-zinc-950/15 text-white dark:text-zinc-950"
                    : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400"
                }`}
              >
                {certificationList.length}
              </span>
            </button>
          </div>
        </motion.div>

        {/* ── Tab Content ── */}
        <AnimatePresence mode="wait">
          {activeTab === "certification" ? (
            /* ── CERTIFICATIONS VISUAL GRID ── */
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {certificationList.map((cert) => (
                <div
                  key={cert.id}
                  className="group relative bg-white dark:bg-[#11131f] dark:bg-gradient-to-br dark:from-[#16192a] dark:via-[#11131f] dark:to-[#0c0e17] rounded-3xl overflow-hidden border border-gray-200/80 dark:border-indigo-500/15 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Top Bar inside Card */}
                  <div className="p-6 sm:p-8 pb-4 flex items-center justify-between gap-4 border-b border-gray-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        {cert.institution}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/30">
                      <CheckCircle2 size={11} />
                      {cert.status}
                    </span>
                  </div>

                  {/* ── Certificate Visual Preview Window ── */}
                  <div className="px-6 sm:px-8 pt-5">
                    <div
                      onClick={() => setPreviewCert(cert)}
                      className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-gray-50 dark:bg-zinc-900 border border-gray-200/90 dark:border-zinc-800 shadow-sm cursor-pointer group/preview"
                    >
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-2 transition-transform duration-700 group-hover/preview:scale-103"
                        priority
                      />

                      {/* Hover Overlay with Preview Pill */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <span className="px-5 py-2.5 rounded-full bg-white text-gray-900 text-xs font-bold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover/preview:translate-y-0 transition-transform duration-300">
                          <Eye size={14} className="text-indigo-600" />
                          View Certificate
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ── Certificate Details ── */}
                  <div className="p-6 sm:p-8 pt-6 flex flex-col gap-4 flex-1 justify-between">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-gray-400 dark:text-zinc-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-gray-400 dark:text-zinc-500" />
                          <span>{cert.period}</span>
                        </div>
                        {cert.credentialId && (
                          <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 text-[10px] font-bold">
                            ID: {cert.credentialId}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {cert.title}
                      </h3>

                      {cert.instructor && (
                        <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium">
                          Instructor: <span className="text-gray-800 dark:text-zinc-200 font-semibold">{cert.instructor}</span>
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 leading-relaxed pt-1">
                        {cert.description}
                      </p>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-zinc-800/90 text-gray-700 dark:text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* ── Action Buttons ── */}
                    <div className="pt-4 mt-2 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between gap-4">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-gray-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <FileText size={14} className="text-indigo-600 dark:text-indigo-400" />
                        <span>View Credential</span>
                        <ExternalLink size={12} className="opacity-60" />
                      </a>

                      <button
                        onClick={() => setPreviewCert(cert)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 dark:bg-white hover:bg-indigo-600 dark:hover:bg-indigo-500 text-white dark:text-zinc-950 dark:hover:text-white text-xs font-semibold transition-all cursor-pointer shadow-sm"
                      >
                        <Eye size={13} />
                        <span>Preview</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            /* ── EDUCATION LIST VIEW ── */
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-0"
            >
              {educationList.map((item) => (
                <div
                  key={item.institution + item.degree}
                  className="group rounded-2xl md:rounded-2xl p-4 sm:p-5 md:py-12 md:px-4 md:-mx-4 bg-white dark:bg-[#11131f] dark:bg-gradient-to-br dark:from-[#16192a] dark:via-[#11131f] dark:to-[#0c0e17] md:bg-transparent md:dark:bg-transparent md:dark:bg-none border border-gray-200/85 dark:border-indigo-500/15 md:border-0 md:border-t md:border-gray-200/90 md:dark:border-zinc-800/90 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 hover:bg-white/60 dark:hover:bg-zinc-900/40 transition-colors relative"
                >
                  {/* ── Desktop Left Column (Quiet, Clean Editorial Metadata) ── */}
                  <div className="hidden md:flex md:col-span-4 flex-col gap-2 pt-1">
                    <div className="flex items-center gap-2 text-sm font-mono font-semibold text-gray-800 dark:text-zinc-200">
                      <Calendar size={13} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-zinc-400 font-medium">
                      <MapPin size={12} className="text-gray-400 dark:text-zinc-500 shrink-0" />
                      <span>{item.location} · {item.status}</span>
                    </div>

                    <button
                      onClick={() => {
                        setModalCampusIndex(0);
                        setShowCampusModal(true);
                      }}
                      className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-indigo-50 dark:bg-zinc-900 dark:hover:bg-indigo-500/15 text-gray-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 border border-gray-200/80 dark:border-zinc-800 transition-all cursor-pointer w-fit group/btn"
                    >
                      <Images size={13} className="text-indigo-500 dark:text-indigo-400 group-hover/btn:scale-110 transition-transform" />
                      <span>Campus Gallery</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 border border-gray-200 dark:border-zinc-700">
                        {campusImages.length}
                      </span>
                    </button>
                  </div>

                  {/* ── Main: Institution, Degree & Campus Photo Strip ── */}
                  <div
                    className="md:col-span-8 relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={() => setIsHoveringCampus(false)}
                    onMouseMove={handleMouseMove}
                  >
                    <div className="inline-block cursor-pointer w-full">
                      <h3 className="text-lg sm:text-2xl lg:text-[26px] font-bold tracking-[-0.015em] text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                        {item.institution}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                        {item.degree}
                      </p>

                      <p className="md:hidden text-[11px] font-mono text-gray-500 dark:text-zinc-400 mt-1.5">
                        {item.period} · {item.location} · {item.status}
                      </p>

                      {/* ── ALL 4 CAMPUS PHOTOS PREVIEW STRIP ── */}
                      <div className="mt-4 pt-3.5 border-t border-gray-100 dark:border-zinc-800/80">
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="text-[11px] font-mono text-gray-500 dark:text-zinc-400 font-medium flex items-center gap-1.5">
                            <Images size={12} className="text-indigo-500 dark:text-indigo-400" />
                            Campus Gallery
                          </span>
                          <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-medium md:hidden">
                            Tap to view
                          </span>
                          <span className="hidden md:inline-block text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-medium">
                            {campusImages.length} photos
                          </span>
                        </div>
                        <div className="grid grid-cols-4 gap-2 sm:gap-3">
                          {campusImages.map((img, i) => (
                            <div
                              key={img.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setModalCampusIndex(i);
                                setShowCampusModal(true);
                              }}
                              className="group/thumb relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200/80 dark:border-zinc-800 shadow-2xs hover:scale-[1.03] hover:shadow-md hover:border-indigo-400 transition-all cursor-pointer bg-gray-100 dark:bg-zinc-900"
                            >
                              <Image
                                src={img.src}
                                alt="ULAB Campus View"
                                fill
                                className="object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="hidden md:block border-t border-gray-200/90 dark:border-zinc-800/90" />
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ── FLOATING CAMPUS PREVIEW CARD (CLEAN, CURATED GALLERY - ZERO CLUTTER) ── */}
      <AnimatePresence>
        {isHoveringCampus && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ type: "spring", damping: 28, stiffness: 360 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              x: cardX,
              y: cardY,
              zIndex: 9999,
              pointerEvents: "none",
              willChange: "transform",
            }}
            className="pointer-events-none select-none w-[320px] sm:w-[440px] rounded-2xl bg-white dark:bg-[#111218] border border-gray-200/90 dark:border-zinc-800 p-2.5 shadow-[0_24px_55px_-12px_rgba(0,0,0,0.18)] dark:shadow-[0_24px_55px_-12px_rgba(0,0,0,0.65)] flex flex-col gap-2"
          >
            {/* ── Clean 2x2 Photo Grid (Pure Photographs Only, Zero Text Overlays) ── */}
            <div className="grid grid-cols-2 gap-2">
              {campusImages.map((img, idx) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.03, duration: 0.2 }}
                  className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-900"
                >
                  <Image
                    src={img.src}
                    alt="ULAB Campus"
                    fill
                    sizes="(max-width: 640px) 160px, 230px"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Quiet, Understated Footer Caption */}
            <div className="px-1.5 pt-0.5 flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-800 dark:text-zinc-100 tracking-tight">
                ULAB Permanent Campus
              </span>
              <span className="text-[11px] text-gray-400 dark:text-zinc-500">
                Mohammadpur, Dhaka
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FULLSCREEN CAMPUS GALLERY LIGHTBOX MODAL (PURE EDITORIAL VIEWER) ── */}
      <AnimatePresence>
        {showCampusModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md"
            onClick={() => setShowCampusModal(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative w-full max-w-4xl bg-white dark:bg-[#111218] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 dark:border-zinc-800 flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Clean Minimal Header */}
              <div className="px-4 py-3.5 sm:px-6 sm:py-4 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-snug truncate">
                    University of Liberal Arts Bangladesh (ULAB)
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 dark:text-zinc-400 truncate">
                    Mohammadpur, Dhaka
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="text-xs font-mono text-gray-400 dark:text-zinc-500 whitespace-nowrap">
                    {modalCampusIndex + 1} / {campusImages.length}
                  </span>
                  <button
                    onClick={() => setShowCampusModal(false)}
                    aria-label="Close modal"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-200 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Main Clean Image Display */}
              <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:flex-1 sm:min-h-[450px] bg-gray-50 dark:bg-zinc-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={campusImages[modalCampusIndex].src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={campusImages[modalCampusIndex].src}
                      alt="ULAB Campus Photo"
                      fill
                      className="object-contain rounded-xl"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Arrows */}
                <button
                  onClick={() =>
                    setModalCampusIndex(
                      (prev) => (prev - 1 + campusImages.length) % campusImages.length
                    )
                  }
                  className="absolute left-3 sm:left-5 w-9 h-9 rounded-full bg-white/90 hover:bg-white dark:bg-zinc-900/90 dark:hover:bg-zinc-800 text-gray-900 dark:text-white border border-gray-200/80 dark:border-zinc-700 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={() =>
                    setModalCampusIndex(
                      (prev) => (prev + 1) % campusImages.length
                    )
                  }
                  className="absolute right-3 sm:right-5 w-9 h-9 rounded-full bg-white/90 hover:bg-white dark:bg-zinc-900/90 dark:hover:bg-zinc-800 text-gray-900 dark:text-white border border-gray-200/80 dark:border-zinc-700 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105"
                  aria-label="Next photo"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Clean Centered Thumbnail Strip Only (No Image Names/Tags) */}
              <div className="px-5 py-4 bg-white dark:bg-[#111218] border-t border-gray-100 dark:border-zinc-800 flex items-center justify-center gap-2.5">
                {campusImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setModalCampusIndex(idx)}
                    className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      modalCampusIndex === idx
                        ? "border-indigo-600 dark:border-indigo-400 scale-105 shadow-sm"
                        : "border-transparent opacity-55 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt="Campus thumbnail"
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Fullscreen Lightbox / Certificate Preview Modal ── */}
      <AnimatePresence>
        {previewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md"
            onClick={() => setPreviewCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white dark:bg-[#111218] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 dark:border-zinc-800 flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-3.5 sm:p-5 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between gap-3 bg-gray-50/80 dark:bg-zinc-900/80">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-100 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Award size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white leading-snug truncate">
                      {previewCert.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 dark:text-zinc-400 font-medium truncate">
                      {previewCert.institution} · {previewCert.period}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={previewCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 dark:bg-white hover:bg-indigo-600 dark:hover:bg-indigo-500 text-white dark:text-zinc-950 dark:hover:text-white text-xs font-bold whitespace-nowrap transition-all shadow-sm"
                  >
                    <span>View Credential</span>
                    <ExternalLink size={12} />
                  </a>

                  <button
                    onClick={() => setPreviewCert(null)}
                    aria-label="Close modal"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-600 dark:text-zinc-300 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Modal Image Area */}
              <div className="relative w-full aspect-[16/11] sm:aspect-auto sm:flex-1 sm:min-h-[450px] bg-[#0c0e14] flex items-center justify-center p-2.5 sm:p-6 overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={previewCert.image}
                    alt={previewCert.title}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-4 py-3 sm:px-6 sm:py-4 bg-white dark:bg-[#111218] border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between gap-3 text-xs text-gray-500 dark:text-zinc-400">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-semibold text-gray-700 dark:text-zinc-200 truncate">{previewCert.status}</span>
                  {previewCert.credentialId && (
                    <span className="hidden sm:inline font-mono text-gray-400 dark:text-zinc-500">· ID: {previewCert.credentialId}</span>
                  )}
                </div>

                <a
                  href={previewCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-zinc-950 text-[11px] font-bold whitespace-nowrap shrink-0 shadow-xs"
                >
                  <span>View Credential</span>
                  <ExternalLink size={11} />
                </a>

                <p className="hidden sm:block text-[11px] text-gray-400 dark:text-zinc-500">
                  Click anywhere outside or the close button to dismiss
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
