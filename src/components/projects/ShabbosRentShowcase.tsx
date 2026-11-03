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
  HeartHandshake,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Project, projectsData } from "@/data/projects";

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

// Comparison points between Traditional OTAs and ShabbosRent
const COMPARISON_POINTS = [
  {
    title: "Walking vs Driving Transit",
    traditional: "Calculates radius in driving minutes or radial km — useless on Shabbat when driving is prohibited.",
    shabbos: "Halakhic Pedestrian Engine: Calculates walking minutes to synagogues & landmarks using Haversine formula at 4.8 km/h.",
    icon: Compass,
  },
  {
    title: "Religious Amenities",
    traditional: "Filters only for generic amenities (pools, Wi-Fi, air conditioning, parking).",
    shabbos: "Kosher Kitchen (separate meat/dairy), Shabbos Plata, Hot Water Urn, Shabbos Timer, Shabbos Elevator, Sukkah Balcony.",
    icon: Flame,
  },
  {
    title: "Liturgical Calendar",
    traditional: "Bookings operate strictly on civil Gregorian calendar dates.",
    shabbos: "Torah Portion (Parshiyot) Integration: Availability syncs with liturgical weekends (e.g., Parshat Bereshit, Yom Tov).",
    icon: Calendar,
  },
  {
    title: "Holiday Lodging Costs",
    traditional: "Surge pricing causes prices to multiply 3x–5x during Jewish high holidays.",
    shabbos: "Reciprocal Apartment Swap: Verified homeowners exchange properties between cities (Jerusalem ↔ Bnei Brak) at zero lodging cost.",
    icon: Repeat,
  },
  {
    title: "Orthodox Digital Divide",
    traditional: "Assumes 100% smartphone and public internet app accessibility.",
    shabbos: "Omnichannel Bridge: IVR telephone hotline with AI speech transcription and 1-click printable PDF synagogue bulletin flyers.",
    icon: Printer,
  },
];

// 5 Core Subsystems
const SUBSYSTEMS = [
  {
    id: "search",
    title: "Walking-Distance Search Engine",
    subtitle: "Pedestrian Geospatial Calculus & Halakhic Filtering",
    badge: "Guest Facing",
    icon: Search,
    color: "#4338ca",
    details: [
      {
        heading: "Haversine Pedestrian Transit Formula",
        text: "Calculates Great-Circle distance to key landmarks (Western Wall / Kotel, Great Synagogue, Geula, Rehavia, Nachlaot, Tzfat Old City) mapped to calibrated walking velocity: 4.8 km/h (1 km ≈ 12.5 mins). Allows strict filtering: 5, 10, 15, or 20-minute walking radii.",
      },
      {
        heading: "Specialized Halakhic & Architecture Filters",
        text: "Explicit filtering for Kosher Kitchen (Meat/Dairy separate sinks), Shabbos Plata (hot plate), Continuous Hot Water Urn, automated light timers, Shabbat elevator, and Sukkah Balcony (open to sky).",
      },
      {
        heading: "Direct WhatsApp & Phone Dispatch",
        text: "Features phone sanitization and 1-click WhatsApp/Call hotline dispatch with courtesy reminder: 'Please remind the host you found them via ShabbosRent so we can keep maintaining the site.'",
      },
    ],
  },
  {
    id: "swap",
    title: "Reciprocal Apartment Swap Engine",
    subtitle: "Zero-Cost Peer-to-Peer Vacation Exchange",
    badge: "C2C Matchmaking",
    icon: Repeat,
    color: "#059669",
    details: [
      {
        heading: "Mutual Swap Verification Gate",
        text: "Users can only initiate swaps if they hold an active, verified apartment listing of their own with swap availability toggled to true. Both participating hosts must be verified.",
      },
      {
        heading: "Side-by-Side Comparison UI",
        text: "Interactive modal allowing users to inspect 'Your Listing' alongside 'Target Listing' (Bedrooms, Capacity, Kosher status, Walking proximity) before dispatching a proposal.",
      },
      {
        heading: "Two-Way Confirmation & Unique Swap Codes",
        text: "Generates cryptographic swap codes (e.g. SWP-1042) once Host B approves Host A's proposal, securely unmasking private key-exchange contact details.",
      },
    ],
  },
  {
    id: "ambassador",
    title: "Affiliate & Dual Commission Engine",
    subtitle: "Per-Apartment Dual Models & Immutable Accounting Ledger",
    badge: "Growth Engine",
    icon: Coins,
    color: "#d97706",
    details: [
      {
        heading: "Model A vs. Model B (Configured Per Apartment)",
        text: "Commission models are assigned per apartment rather than per user. Model A offers ₪15 listing fee + ₪25/rental within a 12-month rolling window (up to ₪265+). Model B offers ₪25 upfront + ₪40 on the first confirmed rental with lifetime validity.",
      },
      {
        heading: "7-Day Decision Deadline & Rate Lock",
        text: "Ambassadors have a strict 7-day countdown on their dashboard to select between Model A and Model B before system auto-defaults. Commission rates are contractually locked for 12 months.",
      },
      {
        heading: "1-Level Sub-Ambassador & Reversal Ledgers",
        text: "Ambassador A earns a ₪5 bonus when referred Ambassador B attributes a property. Financial ledgers are strictly immutable, supporting negative reversal entries upon booking cancellations.",
      },
    ],
  },
  {
    id: "host",
    title: "Host Operations & Torah Portion Calendar",
    subtitle: "Parshiyot Availability & Automated SMS/Email Bot",
    badge: "Host Console",
    icon: Calendar,
    color: "#7c3aed",
    details: [
      {
        heading: "Torah Portion (Parshiyot) Selector",
        text: "Hosts check off upcoming Shabbatot by religious portion (e.g., Parshat Bereshit, Parshat Noach, Parshat Eikev) instead of selecting obscure Gregorian dates.",
      },
      {
        heading: "Automated Weekly Readiness Bot",
        text: "Configurable notification daemon messaging hosts every week (e.g., Thursday at 18:00) via SMS or Email prompting: 'Is your apartment ready for this Shabbat? Tap here to toggle availability.'",
      },
      {
        heading: "Report Rented & ₪50 Success Fee",
        text: "Hosts report off-platform or direct bookings via 1-click, automatically issuing a transparent ₪50 platform success fee record to support continuous site operations.",
      },
    ],
  },
  {
    id: "admin",
    title: "Admin ERP & Community Hotline Hub",
    subtitle: "AI Voice Hotline Ingestion & Printable Synagogue Bulletins",
    badge: "Back Office ERP",
    icon: Building2,
    color: "#dc2626",
    details: [
      {
        heading: "Voice Inbox with AI Speech-to-Text",
        text: "Ingests telephone voicemails from kosher phone users, generating audio players, full speech-to-text transcripts, AI summaries, and automated callback tasks.",
      },
      {
        heading: "Print-Ready PDF Synagogue Flyer Generator",
        text: "1-click generation of high-contrast printable PDF notices containing apartment specs, kosher amenities, and hotline tear-off tabs for community synagogue notice boards.",
      },
      {
        heading: "₪50 Debt Collection & Commission Audit",
        text: "Master ledger tracking open debts with automated reminder counters alongside approval interfaces for ambassador payouts and financial reversals.",
      },
    ],
  },
];

export default function ShabbosRentShowcase({ project }: { project: Project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeSubsystem, setActiveSubsystem] = useState("search");

  // Find next project in catalog
  const currentIndex = projectsData.findIndex((p) => p.id === "05" || p.slug === "shabos-rent");
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length] || projectsData[0];

  const currentSub = SUBSYSTEMS.find((s) => s.id === activeSubsystem) || SUBSYSTEMS[0];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-gray-900 flex flex-col selection:bg-indigo-600 selection:text-white">
      {/* ── Top Navbar ── */}
      <Navbar />

      {/* ── Hero / Case Study Header ── */}
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
            <span className="text-indigo-600 font-mono font-bold">ShabbosRent</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400 font-medium">Enterprise Case Study</span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/pronoy656"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
            >
              <span>Explore Platform</span>
              <ExternalLink size={13} />
            </a>

            <a
              href="https://github.com/pronoy656"
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
              Prop-Tech &amp; Halakhic Hospitality
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-[11px] font-mono font-bold uppercase tracking-wider">
              Lead Full-Stack Engineer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-mono font-bold uppercase tracking-wider">
              Production Deployed
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-950 tracking-tight leading-[1.08]">
              ShabbosRent — Domain-Specialized Prop-Tech, Apartment Swap &amp; Affiliate ERP
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
              An enterprise-grade hospitality and accommodation ecosystem engineered specifically for the global Shabbat-observant community. Features walking-distance calculation via the Haversine formula (4.8 km/h), reciprocal home exchange, multi-tier dual commission affiliate modeling, and an omnichannel administrative ERP.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-black text-indigo-600 font-mono tracking-tight">
                1,520+
              </span>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">Verified Listings</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono tracking-tight">
                4.8 km/h
              </span>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">Pedestrian Transit Math</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-black text-amber-600 font-mono tracking-tight">
                ₪265+
              </span>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">Max Yield / Property</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-black text-blue-600 font-mono tracking-tight">
                100%
              </span>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">Halakhic &amp; Kosher Aware</p>
            </div>
          </div>
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
                  shabbosrent.co.il — {["Search & Walking Radius", "Admin ERP Command Center", "Ambassador Commission Portal"][activeImageIndex]}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[
                  "1. Search & Walking Distance",
                  "2. Admin ERP Dashboard",
                  "3. Ambassador Commission Portal",
                ].map((label, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      activeImageIndex === idx
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-gray-800 text-gray-400 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mt-3 bg-gray-950">
              <Image
                src={project.images[activeImageIndex] || project.image}
                alt={`ShabbosRent screen ${activeImageIndex + 1}`}
                fill
                priority
                className="object-cover object-top transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* ── Why Traditional Platforms Fail (Comparison Matrix) ── */}
        <section className="mb-24 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
              Domain Problem Analysis
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              Why Traditional Platforms (Airbnb, Booking) Fail in this Market
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              General hospitality software is fundamentally unaware of Halakhic (Jewish religious law) constraints. ShabbosRent was architected from the ground up to solve these specialized lifestyle requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMPARISON_POINTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-2xs flex flex-col justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-black text-gray-900 tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed">
                    <div className="p-3 rounded-xl bg-red-50/70 border border-red-100/80 text-red-950">
                      <span className="font-bold text-red-600 block text-[11px] font-mono uppercase tracking-wider mb-0.5">
                        Airbnb / Booking limitation:
                      </span>
                      {item.traditional}
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100/80 text-emerald-950">
                      <span className="font-bold text-emerald-600 block text-[11px] font-mono uppercase tracking-wider mb-0.5">
                        ShabbosRent Purpose-Built Engine:
                      </span>
                      {item.shabbos}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Subsystems Deep-Dive (Interactive Tabbed Architecture) ── */}
        <section className="mb-24 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
              System Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              Exhaustive Breakdown by Core Subsystems
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Explore the five architectural domains powering the search engine, reciprocal exchange, commission ledgers, host lifecycles, and administrative back office.
            </p>
          </div>

          {/* Subsystem Selectors */}
          <div className="flex flex-wrap gap-2 pb-2 border-b border-gray-200">
            {SUBSYSTEMS.map((sub) => {
              const Icon = sub.icon;
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
                  <Icon size={16} />
                  <span>{sub.title.split(" ")[0]} {sub.title.split(" ")[1]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Subsystem Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSub.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <currentSub.icon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600">
                      {currentSub.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                      {currentSub.title}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono font-semibold text-gray-500">
                  {currentSub.subtitle}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {currentSub.details.map((detail, idx) => (
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
        </section>

        {/* ── Affiliate Dual Commission Deep Dive (Model A vs Model B) ── */}
        <section className="mb-24 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
              Affiliate Business Logic
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              The Dual Commission Architecture (Model A vs. Model B)
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Unlike generic affiliate plugins that tie commissions to the promoter profile, ShabbosRent calculates commissions <strong>per property listing</strong>. An ambassador can have Property #1 on Model A and Property #2 on Model B.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Model A */}
            <div className="p-7 rounded-3xl bg-white border border-gray-200/90 shadow-xs flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-xs font-bold uppercase">
                    Model A — Recurring Yield
                  </span>
                  <span className="text-xs font-mono text-gray-400">12-Month Window</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 tracking-tight">
                  ₪15 Listing Fee + ₪25 per Completed Rental
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2.5">
                  Best suited for prime, high-frequency metropolitan properties in Jerusalem or Tzfat. The ambassador receives ₪15 upon approved listing, then ₪25 for every single rental completed within a 365-day rolling window.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-950 font-mono space-y-1.5">
                <p className="font-bold">Annual Yield Example:</p>
                <p>10 rentals in year one = ₪15 + (10 × ₪25) = <strong className="text-indigo-700 font-black">₪265.00 Total</strong></p>
              </div>
            </div>

            {/* Model B */}
            <div className="p-7 rounded-3xl bg-white border border-gray-200/90 shadow-xs flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold uppercase">
                    Model B — High Upfront Bounty
                  </span>
                  <span className="text-xs font-mono text-gray-400">Lifetime Validity</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 tracking-tight">
                  ₪25 Listing Fee + ₪40 on First Confirmed Rental
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2.5">
                  Best suited for occasional holiday accommodations. The promoter receives ₪25 on listing approval plus a guaranteed ₪40 bounty upon the very first booking, regardless of whether it happens in month 1 or month 24.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-950 font-mono space-y-1.5">
                <p className="font-bold">Total Payout Example:</p>
                <p>Immediate ₪25 + First rental ₪40 = <strong className="text-emerald-700 font-black">₪65.00 Guaranteed</strong></p>
              </div>
            </div>
          </div>

          {/* Business Rules Summary Banner */}
          <div className="p-6 rounded-2xl bg-gray-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400">
                Guaranteed Contract Rules
              </span>
              <p className="text-sm font-bold text-gray-100">
                Strict 7-Day Model Lock Countdown • 12-Month Rate Freeze • ₪5 Sub-Ambassador Listing Bonus • Immutable Ledger Reversals
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono font-semibold shrink-0">
              Anti-Fraud Verified
            </span>
          </div>
        </section>

        {/* ── Technical Stack & Architecture ── */}
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
            <div className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 mb-2">
                Core Framework
              </h4>
              <p className="text-base font-black text-gray-900">Next.js 16 (App Router)</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Utilizes route groups (admin) &amp; (main) with independent layouts, strict layout nesting, and sub-second SSG hydration.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 mb-2">
                UI &amp; Styling Engine
              </h4>
              <p className="text-base font-black text-gray-900">Tailwind CSS v4 &amp; Base UI</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Zero-runtime PostCSS architecture, headless accessible primitives from Base UI and Shadcn for total WCAG compliance.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 mb-2">
                Domain Business Logic
              </h4>
              <p className="text-base font-black text-gray-900">Geospatial &amp; Ledger Math</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Haversine walking math, automated weekly Torah portion availability scheduler, and immutable financial reversal ledgers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 mb-2">
                Internationalization
              </h4>
              <p className="text-base font-black text-gray-900">English &amp; Hebrew RTL</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Seamless bidirectional switching between English and Hebrew with native Right-to-Left (RTL) styling adaptations.
              </p>
            </div>
          </div>
        </section>

        {/* ── Key Engineering Contributions ── */}
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
            {[
              "Implemented geospatial walking-distance calculation using the Haversine formula assuming calibrated 4.8 km/h pedestrian velocity.",
              "Engineered reciprocal apartment exchange flow with side-by-side listing comparison and validation codes (e.g. SWP-1042).",
              "Built dual commission accounting ledger with 7-day model lock deadlines, 1-level sub-ambassador bonuses, and negative reversal entries.",
              "Created an embedded Developer Simulation Toolbar to test multi-party async platform events and automated deadlines.",
              "Designed AI-assisted telephone hotline voice inbox with speech-to-text transcriptions and print-ready synagogue notice board flyer generator.",
              "Implemented automated weekly Torah portion availability synchronization bots with SMS/Email readiness triggers.",
            ].map((contribution, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs flex items-start gap-3.5"
              >
                <div className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">
                  {contribution}
                </p>
              </div>
            ))}
          </div>
        </section>

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

