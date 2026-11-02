"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ChevronsRight } from "lucide-react";
import AuditReviewGlass from "@/components/AuditReviewGlass";

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
    <section id="services" className="scroll-mt-24 md:scroll-mt-28 pt-20 pb-16 sm:pt-24 sm:pb-24 lg:py-28 px-4 sm:px-10 lg:px-14 bg-[#fafbfc] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[35vw] bg-gradient-to-r from-emerald-100/30 via-indigo-100/30 to-purple-100/30 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight text-gray-900">
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
                onClick={() => setActiveCard(activeCard === service.id ? "" : service.id)}
                onMouseEnter={() => setActiveCard(service.id)}
                onFocus={() => setActiveCard(service.id)}
                className={`group relative rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-9 flex flex-col justify-between overflow-hidden transition-all duration-700 ease-out border min-h-[500px] sm:min-h-[620px] cursor-pointer ${
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
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
