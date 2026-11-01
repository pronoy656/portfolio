"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
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
    src: "/ulab-campus-4.jpg",
    title: "Campus Grounds & Architecture",
    tag: "Permanent Campus",
    description:
      "Sprawling permanent campus grounds with modern red-brick architectural blocks surrounded by open green fields in Mohammadpur, Dhaka.",
  },
  {
    id: 2,
    src: "/ulab-campus-1.jpg",
    title: "Red-Brick Atrium & Spiral Columns",
    tag: "Architectural Core",
    description:
      "Iconic multi-story red brick architectural columns, spiral staircases, and circular skylights designed for natural lighting and ventilation.",
  },
  {
    id: 3,
    src: "/ulab-campus-2.jpg",
    title: "Open-Air Balcony & Greenery",
    tag: "Veranda View",
    description:
      "Wide open-air brick balconies and walkways overlooking lush green trees and academic zones.",
  },
  {
    id: 4,
    src: "/ulab-campus-3.jpg",
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
    image: "/programming-hero-certificate.png",
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
    image: "/10min-school-certificate.png",
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
    <section id="education" className="scroll-mt-20 md:scroll-mt-28 py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#fafafa]/70 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
              Academic &amp; Credentials
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none text-gray-900">
              KNOWLEDGE <span className="text-gray-300">&amp;</span> <br />
              <span className="text-gray-300 italic">GROWTH.</span>
            </h2>
          </div>

          {/* ── 2 Tabs: Education & Certification ── */}
          <div className="inline-flex p-1 sm:p-1.5 rounded-full bg-white border border-gray-200/80 shadow-sm self-start md:self-end">
            <button
              onClick={() => setActiveTab("education")}
              className={`relative flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "education"
                  ? "text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {activeTab === "education" && (
                <motion.div
                  layoutId="activeEducationPill"
                  className="absolute inset-0 rounded-full bg-[#1a1c20]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <GraduationCap size={15} className="relative z-10" />
              <span className="relative z-10">Education</span>
              <span
                className={`relative z-10 text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                  activeTab === "education"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {educationList.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("certification")}
              className={`relative flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "certification"
                  ? "text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {activeTab === "certification" && (
                <motion.div
                  layoutId="activeEducationPill"
                  className="absolute inset-0 rounded-full bg-[#1a1c20]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Award size={15} className="relative z-10" />
              <span className="relative z-10">Certifications</span>
              <span
                className={`relative z-10 text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                  activeTab === "certification"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {certificationList.length}
              </span>
            </button>
          </div>
        </div>

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
                  className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Top Bar inside Card */}
                  <div className="p-6 sm:p-8 pb-4 flex items-center justify-between gap-4 border-b border-gray-100">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-600">
                        {cert.institution}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      <CheckCircle2 size={11} />
                      {cert.status}
                    </span>
                  </div>

                  {/* ── Certificate Visual Preview Window ── */}
                  <div className="px-6 sm:px-8 pt-5">
                    <div
                      onClick={() => setPreviewCert(cert)}
                      className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-gray-50 border border-gray-200/90 shadow-sm cursor-pointer group/preview"
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
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-gray-400" />
                          <span>{cert.period}</span>
                        </div>
                        {cert.credentialId && (
                          <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-[10px] font-bold">
                            ID: {cert.credentialId}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                        {cert.title}
                      </h3>

                      {cert.instructor && (
                        <p className="text-xs text-gray-500 font-medium">
                          Instructor: <span className="text-gray-800 font-semibold">{cert.instructor}</span>
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed pt-1">
                        {cert.description}
                      </p>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* ── Action Buttons ── */}
                    <div className="pt-4 mt-2 border-t border-gray-100 flex items-center justify-between gap-4">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-indigo-600 transition-colors"
                      >
                        <FileText size={14} className="text-indigo-600" />
                        <span>View Credential</span>
                        <ExternalLink size={12} className="opacity-60" />
                      </a>

                      <button
                        onClick={() => setPreviewCert(cert)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 hover:bg-indigo-600 text-white text-xs font-semibold transition-all cursor-pointer shadow-sm"
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
                  className="group border-t border-gray-200/90 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-white/60 transition-colors px-4 -mx-4 rounded-2xl relative"
                >
                  {/* Left: Period, Location, Status */}
                  <div className="md:col-span-3 flex flex-col gap-2.5">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 w-fit">
                      <CheckCircle2 size={11} />
                      {item.status}
                    </span>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">
                      <Calendar size={13} className="text-gray-400" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <MapPin size={12} className="text-gray-400" />
                      <span>{item.location}</span>
                    </div>

                    {/* Quick Button to open full campus gallery modal */}
                    <button
                      onClick={() => {
                        setModalCampusIndex(0);
                        setShowCampusModal(true);
                      }}
                      className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 border border-gray-200/80 transition-all cursor-pointer w-fit group/btn"
                    >
                      <Images size={13} className="text-indigo-500 group-hover/btn:scale-110 transition-transform" />
                      <span>Campus Gallery</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-white text-indigo-600 border border-gray-200">
                        {campusImages.length}
                      </span>
                    </button>
                  </div>

                  {/* Middle: Title & Institution with Interactive Hover Trigger */}
                  <div
                    className="md:col-span-5 relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={() => setIsHoveringCampus(false)}
                    onMouseMove={handleMouseMove}
                  >
                    <div className="inline-block cursor-pointer">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/80 px-2.5 py-0.5 rounded-full border border-indigo-100">
                          <Building2 size={11} />
                          Permanent Campus
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Hover to view all 4 photos
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black tracking-tighter text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {item.institution}
                      </h3>

                      <p className="text-sm font-semibold text-gray-600 mt-1 italic">
                        {item.degree}
                      </p>

                      {/* ── ALL 4 CAMPUS PHOTOS PREVIEW STRIP (Visible directly) ── */}
                      <div className="mt-4 pt-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-mono text-gray-400 font-semibold">
                            Campus Views (4 photos)
                          </span>
                          <span className="text-[10px] font-mono text-indigo-600 font-medium">
                            Click to expand
                          </span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          {campusImages.map((img, i) => (
                            <div
                              key={img.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setModalCampusIndex(i);
                                setShowCampusModal(true);
                              }}
                              className="group/thumb relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200/90 shadow-sm hover:scale-105 hover:shadow-md hover:border-indigo-500 transition-all cursor-pointer bg-gray-100"
                              title={`${img.title} — Click to view`}
                            >
                              <Image
                                src={img.src}
                                alt={img.title}
                                fill
                                className="object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/10 group-hover/thumb:bg-black/0 transition-colors" />
                              <div className="absolute bottom-1 right-1 px-1 rounded bg-black/60 text-white text-[8px] font-mono font-bold">
                                #{i + 1}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Description & Highlights */}
                  <div className="md:col-span-4 flex flex-col gap-4">
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                    <ul className="space-y-2 mt-1">
                      {item.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-200/90" />
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ── FLOATING CAMPUS PREVIEW CARD (SHOWING ALL 4 IMAGES SIMULTANEOUSLY, 100% NON-BLOCKING SCROLL) ── */}
      <AnimatePresence>
        {isHoveringCampus && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 28, stiffness: 360 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              x: cardX,
              y: cardY,
              zIndex: 9999,
              pointerEvents: "none", // Critical: prevents blocking native smooth scroll or wheel events
              willChange: "transform",
            }}
            className="pointer-events-none select-none w-[320px] sm:w-[480px] rounded-2xl bg-white/95 dark:bg-[#0c0e14]/95 backdrop-blur-2xl border border-white/80 dark:border-white/10 p-3 shadow-[0_30px_70px_rgba(0,0,0,0.28)] ring-1 ring-black/5 flex flex-col gap-2.5"
          >
            {/* Top Bar inside Floating Card */}
            <div className="flex items-center justify-between px-1 text-[11px] font-mono text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  ULAB Permanent Campus
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 font-bold border border-indigo-100 text-[10px]">
                All 4 Views
              </span>
            </div>

            {/* ── 2x2 GRID DISPLAYING ALL 4 PHOTOS AT THE SAME TIME ── */}
            <div className="grid grid-cols-2 gap-2">
              {campusImages.map((img, idx) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.04, duration: 0.2 }}
                  className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-900 border border-black/5 dark:border-white/10 shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 640px) 160px, 240px"
                    className="object-cover"
                  />
                  {/* Dark gradient for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Top-right index badge */}
                  <div className="absolute top-1.5 right-1.5 px-1.5 py-0.2 rounded-full bg-black/60 text-white font-mono text-[9px] font-bold border border-white/20">
                    {idx + 1}/4
                  </div>

                  {/* Bottom caption */}
                  <div className="absolute bottom-1.5 left-2 right-2 flex flex-col pointer-events-none">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-indigo-300 font-bold leading-tight">
                      {img.tag}
                    </span>
                    <span className="text-[10px] font-bold text-white truncate drop-shadow-sm">
                      {img.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Card Footer with Location & Non-blocking info */}
            <div className="px-1 pt-0.5 flex items-center justify-between text-[11px] text-gray-500">
              <div className="flex items-center gap-1.5">
                <MapPin size={11} className="text-indigo-600" />
                <span className="text-gray-700 font-medium">Mohammadpur, Dhaka</span>
              </div>
              <span className="text-[10px] font-mono text-gray-400">
                100% Green Permanent Campus
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FULLSCREEN CAMPUS GALLERY LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {showCampusModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md"
            onClick={() => setShowCampusModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-[#0e1117] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Header */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between gap-4 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      University of Liberal Arts Bangladesh (ULAB)
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      Permanent Campus Architecture &amp; Grounds · Mohammadpur, Dhaka
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs font-mono text-gray-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {modalCampusIndex + 1} of {campusImages.length}
                  </span>
                  <button
                    onClick={() => setShowCampusModal(false)}
                    aria-label="Close modal"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Main Image Display with Next/Prev Controls */}
              <div className="relative w-full flex-1 min-h-[320px] sm:min-h-[500px] bg-black flex items-center justify-center p-2 sm:p-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={campusImages[modalCampusIndex].src}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full min-h-[320px] sm:min-h-[500px] flex items-center justify-center"
                  >
                    <Image
                      src={campusImages[modalCampusIndex].src}
                      alt={campusImages[modalCampusIndex].title}
                      fill
                      className="object-contain"
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
                  className="absolute left-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={() =>
                    setModalCampusIndex(
                      (prev) => (prev + 1) % campusImages.length
                    )
                  }
                  className="absolute right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
                  aria-label="Next photo"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Modal Footer with Thumbnail Strip & Info */}
              <div className="p-4 sm:p-6 bg-[#0c0e14] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                      {campusImages[modalCampusIndex].tag}
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {campusImages[modalCampusIndex].title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400 max-w-xl">
                    {campusImages[modalCampusIndex].description}
                  </p>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex items-center gap-2 self-start sm:self-center">
                  {campusImages.map((img, idx) => (
                    <button
                      key={img.id}
                      onClick={() => setModalCampusIndex(idx)}
                      className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        modalCampusIndex === idx
                          ? "border-indigo-500 scale-105 shadow-md"
                          : "border-white/20 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
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
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between gap-4 bg-gray-50/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight">
                      {previewCert.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      {previewCert.institution} · {previewCert.period}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={previewCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 hover:bg-indigo-600 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <span>View Credential</span>
                    <ExternalLink size={12} />
                  </a>

                  <button
                    onClick={() => setPreviewCert(null)}
                    aria-label="Close modal"
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Modal Image Area */}
              <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[460px] bg-[#0c0e14] flex items-center justify-center p-4 sm:p-8 overflow-auto">
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[460px] flex items-center justify-center">
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
              <div className="p-4 sm:p-6 bg-white border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-gray-700">{previewCert.status}</span>
                  {previewCert.credentialId && (
                    <span className="font-mono text-gray-400">· ID: {previewCert.credentialId}</span>
                  )}
                </div>

                <p className="text-[11px] text-gray-400">
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
