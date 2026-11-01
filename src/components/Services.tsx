"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ChevronsRight, Sparkles } from "lucide-react";

interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  badgeGradient: string;
  glowColor: string;
  buttonText: string;
  buttonHref: string;
  items: string[];
  artwork: "digital" | "content" | "audit";
}

const services: ServiceItem[] = [
  {
    id: "01",
    tag: "01 — BUILD",
    title: "Digital Products",
    subtitle:
      "From building your brand to designing and developing the digital products that bring it to life.",
    badgeGradient: "from-purple-400 via-violet-400 to-indigo-300",
    glowColor: "rgba(147, 51, 234, 0.22)",
    buttonText: "View Projects",
    buttonHref: "#projects",
    items: [
      "Brand identity & visual direction",
      "Websites & landing pages",
      "Web applications & SaaS",
      "Mobile applications",
      "UX/UI & design systems",
      "Prototypes & developer handoff",
    ],
    artwork: "digital",
  },
  {
    id: "02",
    tag: "02 — GROW",
    title: "Content & Marketing",
    subtitle:
      "Social content, ad creatives, email templates, motion graphics and video editing.",
    badgeGradient: "from-cyan-400 via-sky-400 to-indigo-300",
    glowColor: "rgba(6, 182, 212, 0.22)",
    buttonText: "Explore Capabilities",
    buttonHref: "#skills",
    items: [
      "Social content & brand storytelling",
      "High-converting ad creatives",
      "Responsive transactional email templates",
      "Motion graphics & micro-interactions",
      "Video editing & product walkthroughs",
      "Campaign strategy & CRO analytics",
    ],
    artwork: "content",
  },
  {
    id: "03",
    tag: "03 — IMPROVE",
    title: "Audit & Review",
    subtitle:
      "UX/UI, product, website, brand and AI design reviews with actionable recommendations.",
    badgeGradient: "from-violet-400 via-indigo-400 to-purple-400",
    glowColor: "rgba(168, 85, 247, 0.22)",
    buttonText: "Request An Audit",
    buttonHref: "#contact",
    items: [
      "UX/UI, product & brand design reviews",
      "Lighthouse 95+ Core Web Vitals audit",
      "React & Next.js performance tuning",
      "Accessibility & WCAG 2.1 AA compliance",
      "AI design & workflow integration",
      "Clear, actionable recommendations report",
    ],
    artwork: "audit",
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState<string>("01");

  return (
    <section id="services" className="py-28 px-6 sm:px-10 lg:px-14 bg-[#fafbfc] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[35vw] bg-gradient-to-r from-emerald-100/30 via-indigo-100/30 to-purple-100/30 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.35em] text-indigo-600 flex items-center gap-2">
              <Sparkles size={13} className="text-indigo-600" />
              Capabilities &amp; Offerings
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight text-gray-900">
              SOLUTIONS <span className="text-gray-300 font-light">&amp;</span> <br className="hidden sm:inline" />
              <span className="text-gray-400 italic font-semibold">SERVICES.</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-500 max-w-md font-medium leading-relaxed">
            End-to-end design and engineering tailored to help ambitious products scale, convert, and outperform.
          </p>
        </div>

        {/* ── 3-Column Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {services.map((service) => {
            const isHovered = activeCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCard(service.id)}
                onFocus={() => setActiveCard(service.id)}
                className={`group relative rounded-[2.5rem] p-7 sm:p-9 flex flex-col justify-between overflow-hidden transition-all duration-700 ease-out border min-h-[580px] sm:min-h-[620px] ${
                  isHovered
                    ? "bg-white border-white shadow-[0_25px_60px_rgba(0,0,0,0.08)] scale-[1.01]"
                    : "bg-white/95 border-gray-200/70 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:border-gray-300/80"
                }`}
              >
                {/* ── Ambient Radial Glow on Card Base ── */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-700 z-0"
                  style={{
                    background: `radial-gradient(circle at 50% 100%, ${service.glowColor} 0%, transparent 70%)`,
                    opacity: isHovered ? 1 : 0.45,
                  }}
                />

                {/* ── 3D Glass Sculpture Artwork (Inside Card) ── */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-all duration-700 ease-out overflow-hidden z-10 flex items-end justify-center ${
                    isHovered
                      ? "opacity-25 scale-95 blur-[1.5px]"
                      : "opacity-100 scale-100"
                  }`}
                >
                  {service.artwork === "digital" && (
                    <div className="relative w-full h-full">
                      <Image
                        src="/services-card1-glass.jpg"
                        alt="Digital Products 3D Glass Artwork"
                        fill
                        className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      {/* Top gradient fade ensuring title & subtitle stay 100% crisp and readable */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/40 to-transparent h-[45%] pointer-events-none" />
                    </div>
                  )}

                  {service.artwork === "content" && (
                    <div className="relative w-full h-full">
                      <Image
                        src="/services-card2-glass.jpg"
                        alt="Content & Marketing 3D Glass Artwork"
                        fill
                        className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      {/* Top gradient fade ensuring title & subtitle stay 100% crisp and readable */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/40 to-transparent h-[45%] pointer-events-none" />
                    </div>
                  )}

                  {service.artwork === "audit" && <AuditReviewGlass />}
                </div>

                {/* ── Card Header (Top Layer) ── */}
                <div className="relative z-20">
                  {/* Top Tag & Mini 3D Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-gray-500">
                      {service.tag}
                    </span>

                    {/* Holographic 3D Icon Badge */}
                    <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-white/90 to-white/40 backdrop-blur-md border border-white shadow-sm flex items-center justify-center overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.badgeGradient} opacity-75`}
                      />
                      <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-white shadow-sm" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 font-medium leading-relaxed mt-2.5 max-w-[280px]">
                    {service.subtitle}
                  </p>
                </div>

                {/* ── Interactive Content Body (Revealed on Hover) ── */}
                <div className="relative z-20 flex-1 flex flex-col justify-between mt-4">
                  {/* Bullet Points Container */}
                  <div
                    className={`transition-all duration-500 ease-out flex flex-col ${
                      isHovered
                        ? "opacity-100 translate-y-0 max-h-[420px]"
                        : "opacity-0 translate-y-4 max-h-0 pointer-events-none overflow-hidden"
                    }`}
                  >
                    {/* Dotted Separator */}
                    <div className="border-b border-dashed border-gray-200/90 my-3.5" />

                    {/* Header Label */}
                    <span className="text-[10px] font-mono font-black tracking-[0.2em] text-gray-400 uppercase mb-3">
                      WHAT&apos;S INCLUDED:
                    </span>

                    {/* Checkmark List */}
                    <ul className="space-y-1.5 sm:space-y-2">
                      {service.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2.5 py-1 text-xs sm:text-[13px] font-bold text-gray-800 border-b border-gray-100/60 last:border-0"
                        >
                          {/* Round Lime Badge with Green Check */}
                          <div className="w-4 h-4 rounded-full bg-[#a3e635] flex items-center justify-center shrink-0 shadow-sm">
                            <Check size={10} className="text-gray-950 stroke-[3.5]" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ── Action Button (Lime Green Pill, Revealed on Hover) ── */}
                  <div
                    className={`pt-5 transition-all duration-500 ease-out ${
                      isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <a
                      href={service.buttonHref}
                      className="group/btn relative w-full py-3.5 px-6 rounded-full bg-[#a3e635] hover:bg-[#bef264] text-gray-950 font-black text-xs sm:text-sm tracking-tight flex items-center justify-between shadow-[0_12px_28px_rgba(163,230,53,0.38)] hover:shadow-[0_16px_36px_rgba(163,230,53,0.5)] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <span>{service.buttonText}</span>
                      <div className="w-7 h-7 rounded-full bg-white/70 group-hover/btn:bg-white text-gray-950 flex items-center justify-center shadow-sm transition-all duration-300 group-hover/btn:translate-x-0.5">
                        <ChevronsRight size={14} className="stroke-[2.5]" />
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* =========================================================================
   TOP-TIER 3D GLASSMORPHISM SCULPTURES:
   - CARD 1: SQUARE ASSET (Isometric Crystal Cube & Square Blocks in Cyan/Lime)
   - CARD 2: CIRCLE ASSET (3D Crystal Glass Spheres & Orbit Lenses in Magenta/Rose)
   - CARD 3: RECTANGLE ASSET (3 Overlapping Floating Glass Slabs in Violet/Indigo)
   ========================================================================= */

/**
 * Card 01 — Digital Products:
 * Ultra-Glossy 3D Crystal Glass Cube & Floating Square Blocks Asset (SQUARE ASSET).
 * Isometric 3D optical glass cube with transparent volumetric faces, internal cyan/lime core,
 * beveled square edges, diagonal studio softbox gloss sheens, and specular bloom hotspots.
 */
function DigitalProductsGlass() {
  return (
    <svg
      viewBox="0 0 460 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[76%] object-contain object-bottom select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
    >
      <defs>
        {/* Radiant Cyan/Sky/Lime Ambient Caustic Underglow */}
        <radialGradient id="c1Caustic" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.55" />
          <stop offset="30%" stopColor="#0284c7" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.3" />
          <stop offset="85%" stopColor="#a3e635" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* Specular Bloom Filter */}
        <filter id="c1Bloom" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Top Face Glass Sheen Gradient */}
        <linearGradient id="cubeTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#e0f2fe" stopOpacity="0.6" />
          <stop offset="80%" stopColor="#a5f3fc" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.25" />
        </linearGradient>

        {/* Left Face Glass Gradient (Cyan Refraction) */}
        <linearGradient id="cubeLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.65" />
          <stop offset="45%" stopColor="#0284c7" stopOpacity="0.5" />
          <stop offset="80%" stopColor="#0369a1" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.2" />
        </linearGradient>

        {/* Right Face Glass Gradient (Teal/Lime Refraction) */}
        <linearGradient id="cubeRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#0d9488" stopOpacity="0.4" />
          <stop offset="85%" stopColor="#a3e635" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
        </linearGradient>

        {/* Polished Glass Bevel Edge Rim */}
        <linearGradient id="cubeRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="65%" stopColor="#67e8f9" stopOpacity="0.85" />
          <stop offset="90%" stopColor="#a3e635" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="1" />
        </linearGradient>

        {/* Studio Softbox Diagonal Glass Gloss Sheen */}
        <linearGradient id="c1SoftboxSheen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="65%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="80%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Deep Ambient Shadow */}
        <filter id="c1Shadow" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="6" dy="22" stdDeviation="24" floodColor="#0891b2" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* ── 1. Radiant Ambient Cyan Pool ── */}
      <circle cx="230" cy="350" r="185" fill="url(#c1Caustic)" />

      {/* ── 2. Layer 1: Floating Background Square Glass Plate (Tilted) ── */}
      <g filter="url(#c1Shadow)" transform="translate(290, 240) rotate(18)">
        <rect
          x="-55"
          y="-55"
          width="110"
          height="110"
          rx="24"
          fill="#ffffff"
          fillOpacity="0.25"
          stroke="url(#cubeRim)"
          strokeWidth="3"
        />
        <rect
          x="-48"
          y="-48"
          width="96"
          height="96"
          rx="20"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeOpacity="0.7"
        />
        <path
          d="M -40 -53 L 25 -53"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#c1Bloom)"
        />
      </g>

      {/* ── 3. Layer 2: Main Hero 3D Isometric Crystal Glass Cube ── */}
      <g filter="url(#c1Shadow)">
        {/* Back Internal Edges (True 3D Glass Transparency) */}
        <g stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 4">
          <line x1="230" y1="355" x2="230" y2="225" />
          <line x1="230" y1="355" x2="120" y2="295" />
          <line x1="230" y1="355" x2="340" y2="295" />
        </g>

        {/* Internal Glowing Holographic Core Cube (Hologram inside Glass) */}
        <g transform="translate(230, 325) scale(0.48)">
          <polygon points="0,-60 60,-25 0,10 -60,-25" fill="#a3e635" fillOpacity="0.6" />
          <polygon points="-60,-25 0,10 0,75 -60,40" fill="#22d3ee" fillOpacity="0.65" />
          <polygon points="0,10 60,-25 60,40 0,75" fill="#0284c7" fillOpacity="0.7" />
          <circle cx="0" cy="10" r="14" fill="#ffffff" filter="url(#c1Bloom)" />
        </g>

        {/* ── TOP FACE (Isometric Glass Square) ── */}
        <polygon
          points="230,190 340,250 230,310 120,250"
          fill="url(#cubeTopGrad)"
          stroke="url(#cubeRim)"
          strokeWidth="3.5"
        />
        {/* Top Face Softbox Diagonal Mirror Gloss Sheen */}
        <path
          d="M 180 220 L 220 220 L 280 280 L 240 280 Z"
          fill="url(#c1SoftboxSheen)"
          opacity="0.85"
        />
        {/* Top Face Intense Specular Bevel Highlight */}
        <path
          d="M 124 248 L 230 190 L 336 248"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeOpacity="1"
          fill="none"
          filter="url(#c1Bloom)"
        />

        {/* ── LEFT FACE (Isometric Glass Square) ── */}
        <polygon
          points="120,250 230,310 230,440 120,380"
          fill="url(#cubeLeftGrad)"
          stroke="url(#cubeRim)"
          strokeWidth="3.5"
        />
        {/* Left Face Inner Glass Bevel */}
        <polygon
          points="128,258 222,308 222,428 128,376"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />
        {/* Left Face Diagonal Sheen */}
        <path
          d="M 130 290 L 165 290 L 220 400 L 185 400 Z"
          fill="url(#c1SoftboxSheen)"
          opacity="0.65"
        />
        {/* Left Vertical Specular Edge */}
        <line
          x1="120"
          y1="252"
          x2="120"
          y2="378"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeOpacity="0.95"
          filter="url(#c1Bloom)"
        />

        {/* ── RIGHT FACE (Isometric Glass Square) ── */}
        <polygon
          points="230,310 340,250 340,380 230,440"
          fill="url(#cubeRightGrad)"
          stroke="url(#cubeRim)"
          strokeWidth="3.5"
        />
        {/* Right Face Inner Glass Bevel */}
        <polygon
          points="238,308 332,258 332,376 238,428"
          fill="none"
          stroke="#bef264"
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />
        {/* Center Vertical Specular Glass Ridge */}
        <line
          x1="230"
          y1="310"
          x2="230"
          y2="438"
          stroke="#ffffff"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeOpacity="1"
          filter="url(#c1Bloom)"
        />
        {/* Bottom Lime Bounce Light Edge */}
        <path
          d="M 124 382 L 230 440 L 336 382"
          stroke="#bef264"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.85"
          fill="none"
        />
      </g>

      {/* ── 4. Layer 3: Secondary Floating Glass Square Tile (Foreground Left) ── */}
      <g filter="url(#c1Shadow)" transform="translate(130, 390) rotate(-16)">
        <rect
          x="-45"
          y="-45"
          width="90"
          height="90"
          rx="20"
          fill="#ffffff"
          fillOpacity="0.32"
          stroke="url(#cubeRim)"
          strokeWidth="3"
        />
        <rect
          x="-39"
          y="-39"
          width="78"
          height="78"
          rx="16"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeOpacity="0.75"
        />
        <path
          d="M -35 -43 L 15 -43"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#c1Bloom)"
        />
      </g>

      {/* ── 5. Brilliant 4-Point Starburst Caustic Sparkles on Cube Vertices ── */}
      <g transform="translate(230, 190)" filter="url(#c1Bloom)">
        <ellipse cx="0" cy="0" rx="26" ry="2" fill="#ffffff" opacity="1" />
        <ellipse cx="0" cy="0" rx="2" ry="26" fill="#ffffff" opacity="1" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
        <circle cx="0" cy="0" r="10" fill="#22d3ee" opacity="0.7" />
      </g>

      <g transform="translate(340, 250)" filter="url(#c1Bloom)">
        <ellipse cx="0" cy="0" rx="18" ry="1.5" fill="#ffffff" opacity="0.95" />
        <ellipse cx="0" cy="0" rx="1.5" ry="18" fill="#ffffff" opacity="0.95" />
        <circle cx="0" cy="0" r="3" fill="#ffffff" />
        <circle cx="0" cy="0" r="8" fill="#a3e635" opacity="0.6" />
      </g>

      <g transform="translate(230, 310)" filter="url(#c1Bloom)">
        <ellipse cx="0" cy="0" rx="16" ry="1.4" fill="#ffffff" opacity="0.95" />
        <ellipse cx="0" cy="0" rx="1.4" ry="16" fill="#ffffff" opacity="0.95" />
        <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
      </g>
    </svg>
  );
}

/**
 * Card 02 — Content & Marketing:
 * Ultra-Glossy 3D Crystal Glass Spheres & Concentric Optical Circular Lenses (CIRCLE ASSET).
 * Oversized 3D crystal glass orb with multi-stop curved softbox reflections, orbiting circular glass rings,
 * secondary floating glass spheres, radiant magenta/rose caustics, and specular bloom hotspots.
 */
function ContentMarketingGlass() {
  return (
    <svg
      viewBox="0 0 460 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[76%] object-contain object-bottom select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
    >
      <defs>
        {/* Radiant Magenta/Rose Ambient Caustic Underglow */}
        <radialGradient id="c2Caustic" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.55" />
          <stop offset="30%" stopColor="#f43f5e" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#c084fc" stopOpacity="0.3" />
          <stop offset="85%" stopColor="#38bdf8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* Specular Bloom Filter */}
        <filter id="c2Bloom" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Main Hero Sphere 3D Gradient */}
        <radialGradient id="c2MainSphere" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
          <stop offset="20%" stopColor="#fce7f3" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#f43f5e" stopOpacity="0.75" />
          <stop offset="70%" stopColor="#c026d3" stopOpacity="0.65" />
          <stop offset="90%" stopColor="#7c3aed" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.25" />
        </radialGradient>

        {/* Secondary Glass Sphere Gradient (Violet/Blue) */}
        <radialGradient id="c2SecSphere" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="25%" stopColor="#e9d5ff" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#a855f7" stopOpacity="0.7" />
          <stop offset="85%" stopColor="#6366f1" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#312e81" stopOpacity="0.2" />
        </radialGradient>

        {/* Circular Glass Rim (White to Magenta) */}
        <linearGradient id="c2CircleRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="65%" stopColor="#f472b6" stopOpacity="0.85" />
          <stop offset="90%" stopColor="#c026d3" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="1" />
        </linearGradient>

        {/* Deep Ambient Shadow */}
        <filter id="c2Shadow" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="6" dy="22" stdDeviation="24" floodColor="#e11d48" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* ── 1. Radiant Ambient Magenta Pool ── */}
      <circle cx="230" cy="350" r="185" fill="url(#c2Caustic)" />

      {/* ── 2. Layer 1: Floating Circular Lens Rings (Concentric Orbit Discs) ── */}
      <g filter="url(#c2Shadow)">
        {/* Outer Circular Optical Ring */}
        <ellipse
          cx="230"
          cy="340"
          rx="155"
          ry="54"
          transform="rotate(-16 230 340)"
          fill="none"
          stroke="url(#c2CircleRim)"
          strokeWidth="10"
          opacity="0.85"
        />
        {/* Specular White Curve on Outer Ring */}
        <path
          d="M 100 325 C 135 285, 310 275, 355 315"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4.5"
          strokeLinecap="round"
          filter="url(#c2Bloom)"
        />

        {/* Inner Secondary Optical Ring */}
        <ellipse
          cx="230"
          cy="340"
          rx="110"
          ry="38"
          transform="rotate(22 230 340)"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeOpacity="0.75"
        />
      </g>

      {/* ── 3. Layer 2: Main Hero 3D Crystal Glass Sphere (CIRCLE ASSET) ── */}
      <g transform="translate(230, 330)" filter="url(#c2Shadow)">
        {/* Main Solid Glass Sphere Body */}
        <circle cx="0" cy="0" r="76" fill="url(#c2MainSphere)" />

        {/* Outer Glass Bevel Rim */}
        <circle cx="0" cy="0" r="76" stroke="url(#c2CircleRim)" strokeWidth="3" fill="none" />

        {/* Inner Glass Glow Rim */}
        <circle cx="0" cy="0" r="72" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />

        {/* ── BROAD CURVED STUDIO SOFTBOX SPECULAR HIGHLIGHT PILL ── */}
        <ellipse
          cx="-22"
          cy="-26"
          rx="34"
          ry="16"
          fill="#ffffff"
          opacity="0.95"
          transform="rotate(-32 -22 -26)"
          filter="url(#c2Bloom)"
        />

        {/* Secondary Glare Highlight Curve */}
        <path
          d="M -48 -18 C -42 -52, -10 -64, 25 -55"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          strokeOpacity="1"
          filter="url(#c2Bloom)"
        />

        {/* Point Specular Reflection */}
        <circle cx="12" cy="-40" r="5" fill="#ffffff" filter="url(#c2Bloom)" />

        {/* Lower Cyan-Mint Bounce Light Arc */}
        <path
          d="M -46 38 C -15 68, 30 62, 58 32"
          stroke="#38bdf8"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
      </g>

      {/* ── 4. Layer 3: Secondary Floating 3D Glass Sphere (Left Foreground) ── */}
      <g transform="translate(135, 385)" filter="url(#c2Shadow)">
        <circle cx="0" cy="0" r="46" fill="url(#c2SecSphere)" />
        <circle cx="0" cy="0" r="46" stroke="url(#c2CircleRim)" strokeWidth="2.5" fill="none" />

        {/* Specular Highlight on Sphere 2 */}
        <ellipse
          cx="-14"
          cy="-16"
          rx="20"
          ry="10"
          fill="#ffffff"
          opacity="0.95"
          transform="rotate(-30 -14 -16)"
          filter="url(#c2Bloom)"
        />
        <circle cx="4" cy="-24" r="3.5" fill="#ffffff" filter="url(#c2Bloom)" />
      </g>

      {/* ── 5. Layer 4: Tertiary Floating Glass Orb (Right Background) ── */}
      <g transform="translate(335, 275)" filter="url(#c2Shadow)">
        <circle cx="0" cy="0" r="36" fill="url(#c2SecSphere)" />
        <circle cx="0" cy="0" r="36" stroke="url(#c2CircleRim)" strokeWidth="2" fill="none" />
        <ellipse
          cx="-10"
          cy="-12"
          rx="15"
          ry="7.5"
          fill="#ffffff"
          opacity="0.9"
          transform="rotate(-28 -10 -12)"
          filter="url(#c2Bloom)"
        />
      </g>

      {/* ── 6. Brilliant 4-Point Starburst Caustic Sparkles ── */}
      <g transform="translate(195, 275)" filter="url(#c2Bloom)">
        <ellipse cx="0" cy="0" rx="26" ry="2" fill="#ffffff" opacity="1" />
        <ellipse cx="0" cy="0" rx="2" ry="26" fill="#ffffff" opacity="1" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
        <circle cx="0" cy="0" r="10" fill="#f43f5e" opacity="0.65" />
      </g>

      <g transform="translate(135, 355)" filter="url(#c2Bloom)">
        <ellipse cx="0" cy="0" rx="18" ry="1.5" fill="#ffffff" opacity="0.95" />
        <ellipse cx="0" cy="0" rx="1.5" ry="18" fill="#ffffff" opacity="0.95" />
        <circle cx="0" cy="0" r="3" fill="#ffffff" />
        <circle cx="0" cy="0" r="8" fill="#c084fc" opacity="0.6" />
      </g>

      <g transform="translate(335, 250)" filter="url(#c2Bloom)">
        <ellipse cx="0" cy="0" rx="16" ry="1.4" fill="#ffffff" opacity="0.95" />
        <ellipse cx="0" cy="0" rx="1.4" ry="16" fill="#ffffff" opacity="0.95" />
        <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
      </g>
    </svg>
  );
}

/**
 * Card 03 — Audit & Review:
 * Ultra-Glossy 3D Floating Translucent Glass Panels Sculpture (RECTANGLE ASSET - from user reference).
 * Features high-intensity specular softbox reflections, glowing violet-indigo internal caustics,
 * dual-layer tubular glass rims, and radiant optical bloom hotspots for a true "glassy shiny" wet finish.
 */
function AuditReviewGlass() {
  return (
    <svg
      viewBox="0 0 460 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[76%] object-contain object-bottom select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
    >
      <defs>
        {/* Radiant Violet/Indigo Ambient Caustic Underglow */}
        <radialGradient id="vCaustic" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#9333ea" stopOpacity="0.55" />
          <stop offset="30%" stopColor="#7c3aed" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#6366f1" stopOpacity="0.3" />
          <stop offset="85%" stopColor="#38bdf8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* Specular Bloom Filter for Luminous Shiny Reflections */}
        <filter id="glossBloom" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Studio Softbox Diagonal Glass Gloss Sheen (Mirror Reflection) */}
        <linearGradient id="vSoftboxSheen" x1="0%" y1="0%" x2="100%" y2="85%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="42%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="58%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="75%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Secondary Softbox Light Streak */}
        <linearGradient id="vSoftboxSheen2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="65%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Ultra-Glossy Polished Glass Rim (Pure White Glare + Violet Depth) */}
        <linearGradient id="vGlossyRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#e9d5ff" stopOpacity="0.75" />
          <stop offset="75%" stopColor="#a855f7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="1" />
        </linearGradient>

        {/* Foreground Hero Rim (Blinding White Specular to Electric Indigo) */}
        <linearGradient id="vHeroRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="65%" stopColor="#c084fc" stopOpacity="0.85" />
          <stop offset="85%" stopColor="#7c3aed" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#4338ca" stopOpacity="1" />
        </linearGradient>

        {/* Crystal-Clear Translucent Glass Body with Internal Caustic Gradients */}
        <linearGradient id="vCrystalBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.82" />
          <stop offset="30%" stopColor="#faf5ff" stopOpacity="0.45" />
          <stop offset="65%" stopColor="#f3e8ff" stopOpacity="0.3" />
          <stop offset="90%" stopColor="#ede9fe" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.12" />
        </linearGradient>

        {/* Radiant Caustic Violet Core */}
        <radialGradient id="vCausticCore" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="25%" stopColor="#f3e8ff" stopOpacity="0.6" />
          <stop offset="55%" stopColor="#c084fc" stopOpacity="0.55" />
          <stop offset="80%" stopColor="#7c3aed" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.15" />
        </radialGradient>

        {/* Deep Ray-Traced Ambient Shadow */}
        <filter id="vShadow" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="8" dy="22" stdDeviation="24" floodColor="#4f46e5" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* ── 1. Radiant Ambient Violet/Indigo Lighting Pool ── */}
      <circle cx="230" cy="350" r="185" fill="url(#vCaustic)" />

      {/* ── 3D Tilted Isometric Perspective Group (-26° like user reference) ── */}
      <g transform="rotate(-26 230 320)">

        {/* ── 2. Plate 3 (Background, Top-Right) ── */}
        <g filter="url(#vShadow)">
          <rect
            x="205"
            y="95"
            width="180"
            height="260"
            rx="42"
            fill="url(#vCrystalBody)"
            stroke="url(#vGlossyRim)"
            strokeWidth="3.5"
          />
          <rect
            x="212"
            y="102"
            width="166"
            height="246"
            rx="35"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <path
            d="M 230 96 L 360 96 C 378 96, 384 104, 384 125"
            stroke="#ffffff"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeOpacity="1"
            fill="none"
            filter="url(#glossBloom)"
          />
          <circle cx="300" cy="180" r="75" fill="#a855f7" opacity="0.25" />
        </g>

        {/* ── 3. Plate 2 (Midground, Center Overlapping) ── */}
        <g filter="url(#vShadow)">
          <rect
            x="145"
            y="165"
            width="195"
            height="275"
            rx="42"
            fill="url(#vCausticCore)"
            stroke="url(#vGlossyRim)"
            strokeWidth="4"
          />
          <rect
            x="153"
            y="173"
            width="179"
            height="259"
            rx="35"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeOpacity="0.65"
          />

          {/* Broad Shiny Studio Softbox Reflection Streak across Mid Plate */}
          <g opacity="0.75" style={{ mixBlendMode: "overlay" }}>
            <path
              d="M 180 168 L 225 168 L 165 435 L 148 415 Z"
              fill="url(#vSoftboxSheen)"
            />
            <path
              d="M 245 168 L 275 168 L 210 438 L 188 438 Z"
              fill="url(#vSoftboxSheen2)"
            />
          </g>

          <path
            d="M 170 166 L 310 166 C 328 166, 338 174, 338 196"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeOpacity="1"
            fill="none"
            filter="url(#glossBloom)"
          />

          <path
            d="M 160 410 C 180 438, 220 440, 260 440"
            stroke="#7c3aed"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeOpacity="0.85"
            fill="none"
          />
        </g>

        {/* ── 4. Plate 1 (Foreground Hero Plate, Left/Bottom — Super Shiny) ── */}
        <g filter="url(#vShadow)">
          <rect
            x="60"
            y="235"
            width="185"
            height="270"
            rx="40"
            fill="url(#vCrystalBody)"
            stroke="url(#vHeroRim)"
            strokeWidth="4.5"
          />

          <rect
            x="68"
            y="243"
            width="169"
            height="254"
            rx="32"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeOpacity="0.85"
          />

          <path
            d="M 230 270 L 230 470 C 230 495, 215 503, 190 503"
            stroke="#4338ca"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity="0.95"
            fill="none"
          />

          <ellipse
            cx="145"
            cy="370"
            rx="68"
            ry="98"
            fill="#818cf8"
            opacity="0.28"
          />

          {/* ── BROAD STUDIO SOFTBOX GLOSS SHEEN ON FRONT PANEL FACE ── */}
          <path
            d="M 85 238 L 130 238 L 78 500 L 62 485 Z"
            fill="url(#vSoftboxSheen)"
            opacity="0.85"
          />
          <path
            d="M 145 238 L 175 238 L 115 503 L 95 503 Z"
            fill="url(#vSoftboxSheen2)"
            opacity="0.65"
          />

          {/* ── INTENSE HIGH-GLOSS SPECULAR RIM HIGHLIGHT (TOP LEFT APEX) ── */}
          <path
            d="M 75 330 C 60 280, 75 237, 120 237 L 210 237"
            stroke="#ffffff"
            strokeWidth="8"
            strokeLinecap="round"
            strokeOpacity="0.6"
            fill="none"
            filter="url(#glossBloom)"
          />
          <path
            d="M 75 330 C 60 280, 75 237, 120 237 L 210 237"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeOpacity="1"
            fill="none"
          />

          <ellipse
            cx="88"
            cy="255"
            rx="16"
            ry="6"
            fill="#ffffff"
            opacity="0.95"
            transform="rotate(-40 88 255)"
            filter="url(#glossBloom)"
          />
        </g>

      </g>

      {/* ── 5. Brilliant 4-Point Starburst Caustic Sparkle (Front Apex) ── */}
      <g transform="translate(142, 280)" filter="url(#glossBloom)">
        <ellipse cx="0" cy="0" rx="26" ry="2" fill="#ffffff" opacity="1" />
        <ellipse cx="0" cy="0" rx="2" ry="26" fill="#ffffff" opacity="1" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
        <circle cx="0" cy="0" r="10" fill="#c084fc" opacity="0.6" />
      </g>

      {/* Secondary Brilliant Flare on Background Plate Corner */}
      <g transform="translate(320, 220)" filter="url(#glossBloom)">
        <ellipse cx="0" cy="0" rx="18" ry="1.5" fill="#ffffff" opacity="0.95" />
        <ellipse cx="0" cy="0" rx="1.5" ry="18" fill="#ffffff" opacity="0.95" />
        <circle cx="0" cy="0" r="3" fill="#ffffff" />
        <circle cx="0" cy="0" r="8" fill="#818cf8" opacity="0.5" />
      </g>

      {/* Third Starburst Flare on Lower Edge */}
      <g transform="translate(230, 440)" filter="url(#glossBloom)">
        <ellipse cx="0" cy="0" rx="14" ry="1.2" fill="#ffffff" opacity="0.9" />
        <ellipse cx="0" cy="0" rx="1.2" ry="14" fill="#ffffff" opacity="0.9" />
        <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
      </g>
    </svg>
  );
}
