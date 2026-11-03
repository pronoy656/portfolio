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
  Ship,
  Anchor,
  Compass,
  QrCode,
  Users,
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
  CreditCard,
  Building2,
  Sliders,
  Check,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Project } from "@/data/projects";

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

// 4 Target Personas
const PERSONAS = [
  {
    id: "travelers",
    title: "Tourists & Commuters",
    role: "Consumer Facing",
    badge: "Passengers",
    tagline: "Frictionless inter-island booking with instant QR boarding passes",
    desc: "Commuters and island tourists search point-to-point ferry corridors, compare catamaran vs high-speed craft options, complete multi-step checkouts, and manage self-service cancellations with instant inventory release.",
    features: [
      "Dynamic journey search with live seat inventory counters",
      "Cryptographic scannable mobile QR boarding passes",
      "Self-service trip lookup & automated cancellation refunds",
      "Luggage tier selection and passenger identity manifest input",
    ],
    accent: "#0284c7",
  },
  {
    id: "operators",
    title: "Ferry Operators",
    role: "Fleet ERP",
    badge: "Fleet Owners",
    tagline: "Total operational command over maritime fleet, routes & revenues",
    desc: "Ferry companies manage their multi-vessel fleet (Catamarans, Speedboats, Traditional Ferries), configure seasonal schedules, assign licensed captains, set tiered adult/child pricing, and track live occupancy load factors.",
    features: [
      "Vessel registry with cabin classes and maintenance drydock schedules",
      "Recurring departure engine with automated boarding gate assignments",
      "Fleet blackout calendar for adverse weather and typhoon alerts",
      "Real-time revenue telemetry and passenger occupancy analytics",
    ],
    accent: "#0ea5e9",
  },
  {
    id: "port_staff",
    title: "Terminal Staff & Captains",
    role: "Harbor Operations",
    badge: "Gate Officers",
    tagline: "Live digital manifests and instant gate QR barcode validation",
    desc: "Harbor officers and captains access live departure manifests, scan digital QR boarding passes on mobile browsers, update boarding states (PENDING ➔ CHECKED_IN ➔ BOARDED), and guarantee maritime safety limits.",
    features: [
      "Auto-generated compliant passenger manifests for harbor masters",
      "Sub-50ms cryptographic QR code validation on mobile web",
      "One-click trip status dispatching (ON_TIME, BOARDING, DEPARTED)",
      "Strict capacity limit enforcement preventing dangerous vessel overloading",
    ],
    accent: "#059669",
  },
  {
    id: "admins",
    title: "Platform Administrators",
    role: "System Governance",
    badge: "Super Admins",
    tagline: "Ecosystem oversight, operator vetting, and transaction settlement",
    desc: "Central platform administrators onboard vetted commercial ferry operators, configure harbor and port terminal coordinates, monitor platform take-rate commission, and audit cross-island transactions.",
    features: [
      "Operator KYC vetting and verification lifecycle controls",
      "Central harbor, terminal, and GPS island coordinate registry",
      "Multi-tenant Role-Based Access Control (RBAC: USER, OPERATOR, ADMIN)",
      "Financial settlement reconciliation and commission distribution",
    ],
    accent: "#6366f1",
  },
];

// Interactive Manifest Mockup Data
interface ManifestPassenger {
  id: string;
  name: string;
  passport: string;
  nationality: string;
  seat: string;
  status: "PENDING" | "CHECKED_IN" | "BOARDED";
}

const INITIAL_MANIFEST: ManifestPassenger[] = [
  {
    id: "P-101",
    name: "Alexander Wright",
    passport: "GB84920194",
    nationality: "United Kingdom",
    seat: "Deck A - 12",
    status: "BOARDED",
  },
  {
    id: "P-102",
    name: "Elena Rostova",
    passport: "ES92018471",
    nationality: "Spain",
    seat: "Deck A - 14",
    status: "CHECKED_IN",
  },
  {
    id: "P-103",
    name: "Liam O'Connor",
    passport: "IE19482011",
    nationality: "Ireland",
    seat: "Deck B - 04",
    status: "PENDING",
  },
  {
    id: "P-104",
    name: "Mei-Ling Chen",
    passport: "SG58291038",
    nationality: "Singapore",
    seat: "Deck B - 08",
    status: "PENDING",
  },
];

export default function IslandHopShowcase({ project }: { project: Project }) {
  const [activePersona, setActivePersona] = useState(0);
  const [manifestData, setManifestData] =
    useState<ManifestPassenger[]>(INITIAL_MANIFEST);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // Toggle passenger status in interactive manifest
  const togglePassengerStatus = (id: string) => {
    setManifestData((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        if (p.status === "PENDING") return { ...p, status: "CHECKED_IN" };
        if (p.status === "CHECKED_IN") return { ...p, status: "BOARDED" };
        return { ...p, status: "PENDING" };
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-gray-900 flex flex-col selection:bg-sky-600 selection:text-white">
      {/* ── Top Navbar ── */}
      <Navbar />

      {/* ── Main Case Study Article ── */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-32 sm:pt-36 md:pt-40 pb-28">
        {/* ── Breadcrumb & Top Bar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200/80">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500">
            <Link
              href="/projects"
              className="hover:text-sky-600 transition-colors flex items-center gap-1.5 group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span>Projects</span>
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-sky-600 font-mono font-bold">IslandHop</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400 font-medium">Enterprise Maritime ERP</span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={project.liveLink || "https://github.com/pronoy656"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
            >
              <span>Live Platform</span>
              <ExternalLink size={13} />
            </a>

            <a
              href={project.githubLink || "https://github.com/pronoy656"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-sky-600 hover:border-sky-600 text-xs font-bold shadow-2xs active:scale-95 transition-all"
            >
              <GithubIcon />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* ── Hero Section ── */}
        <div className="space-y-6 mb-16">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-[11px] font-mono font-bold uppercase tracking-wider">
              <Ship size={13} className="text-sky-600" />
              Enterprise Maritime Transit & Fleet ERP
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-mono font-bold uppercase tracking-wider">
              <Zap size={13} className="text-emerald-600" />
              Next.js 16 · React 19 · TanStack Query v5
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-[11px] font-mono font-bold uppercase tracking-wider">
              Lead Frontend Engineer
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.08]">
              IslandHop: Multi-Tenant Inter-Island Ferry Booking & Fleet ERP
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
              A high-performance maritime transport and fleet operations platform built to modernize passenger ferry travel across island chains. It bridges consumer e-commerce booking flows with mission-critical fleet management, automated harbor manifests, and instant QR boarding pass validation.
            </p>
          </div>

          {/* Key Impact Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-black text-sky-600 font-mono tracking-tight">
                100%
              </span>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">
                Real-Time Inventory Lock
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono tracking-tight">
                &lt; 50ms
              </span>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">
                QR Pass Gate Validation
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-black text-gray-900 font-mono tracking-tight">
                0 Delays
              </span>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">
                Digital Manifest Inspection
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-black text-sky-600 font-mono tracking-tight">
                3 Portals
              </span>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">
                Passenger, Operator & Admin
              </p>
            </div>
          </div>
        </div>

        {/* ── Mockup Showcase Window ── */}
        <div className="mb-20">
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-black p-3 sm:p-5 md:p-6 shadow-2xl border border-slate-800 overflow-hidden">
            {/* Top Mac Bar */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-[11px] font-mono text-slate-400 hidden sm:inline">
                  {activeScreenIndex === 0
                    ? "https://islandhop.maritime/book"
                    : activeScreenIndex === 1
                    ? "https://islandhop.maritime/dashboard/operator"
                    : "https://islandhop.maritime/dashboard/admin"}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`px-3 py-1 rounded-md text-[11px] font-mono font-bold transition-all cursor-pointer ${
                      activeScreenIndex === idx
                        ? "bg-sky-600 text-white shadow-xs"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {idx === 0
                      ? "Passenger Portal"
                      : idx === 1
                      ? "Operator Portal"
                      : "Admin Console"}
                  </button>
                ))}
              </div>
            </div>

            {/* Mockup Preview Area */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden mt-3 bg-slate-950">
              <Image
                src={project.images[activeScreenIndex] || project.image}
                alt="IslandHop Platform Showcase"
                fill
                priority
                className="object-cover object-top transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* ── Section 1: The Problem & The IslandHop Solution ── */}
        <section className="mb-20 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-sky-600">
              01 · Problem Space & Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              Overcoming Maritime Bottlenecks Across Island Chains
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              Ferry transit in coastal archipelagos has historically suffered from manual clipboard manifests, fragmented ticketing, and high double-booking rates. IslandHop replaces this fragile paper infrastructure with synchronized real-time state, cryptographic boarding passes, and multi-tenant fleet ERPs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {[
              {
                challenge: "Manual Paper-Based Ticketing & Queues",
                challengeSub:
                  "Physical ticket booths generate massive congestion, inaccurate passenger counts, and frequent double-booking during peak travel seasons.",
                solution: "Real-Time Inventory Lock & Instant Sync",
                solutionSub:
                  "Centralized departure schedules with atomic seat counters eliminate overbooking and instantly replenish inventory upon cancellations.",
              },
              {
                challenge: "Lack of Route & Schedule Transparency",
                challengeSub:
                  "Commuters and tourists lack real-time visibility into vessel types (Catamarans vs. high-speed craft), delays, or sudden weather cancellations.",
                solution: "Transparent Maritime Corridors & Status Feeds",
                solutionSub:
                  "Live multi-parameter search displaying catamaran specs, onboard amenities, trip duration, and active trip status lifecycle updates.",
              },
              {
                challenge: "Safety & Regulatory Compliance Delays",
                challengeSub:
                  "Port authorities require certified passenger identity and luggage manifests before departure; manual clipboards delay boat launches.",
                solution: "Automated Maritime Manifest Engine",
                solutionSub:
                  "Auto-compiles compliant passenger manifests ready for harbor master inspection and terminal check-in in one click.",
              },
              {
                challenge: "Fragmented Operations for Fleet Owners",
                challengeSub:
                  "Ferry companies lack software to manage seat tier inventories, captain assignments, drydock maintenance, and financial reconciliation.",
                solution: "Multi-Tenant Operator ERP Suite",
                solutionSub:
                  "Empowers ferry companies to digitize their fleet, routes, blackout off-days, and departure statuses without third-party brokers.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl border border-gray-200/90 bg-white overflow-hidden shadow-2xs hover:shadow-xs transition-shadow"
              >
                {/* Challenge */}
                <div className="p-5 sm:p-6 bg-red-50/25 border-b lg:border-b-0 lg:border-r border-gray-200/70 flex items-start gap-3.5">
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-gray-900">
                      {item.challenge}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {item.challengeSub}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="p-5 sm:p-6 bg-emerald-50/25 flex items-start gap-3.5">
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-gray-900">
                      {item.solution}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {item.solutionSub}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 2: Target Audience & Core Personas ── */}
        <section className="mb-20 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-sky-600">
              02 · Stakeholder Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              4 Specialized Maritime Personas
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Segregated authorization layers designed to serve passengers, fleet owners, gate officers, and central platform overseers.
            </p>
          </div>

          {/* Persona Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-gray-100 border border-gray-200">
            {PERSONAS.map((persona, idx) => (
              <button
                key={persona.id}
                onClick={() => setActivePersona(idx)}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                  activePersona === idx
                    ? "bg-white text-gray-950 shadow-sm border border-gray-200/80"
                    : "text-gray-600 hover:text-gray-950 hover:bg-white/50"
                }`}
              >
                {persona.title.split("&")[0]}
              </button>
            ))}
          </div>

          {/* Active Persona Detailed Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-600">
                  {PERSONAS[activePersona].role} · {PERSONAS[activePersona].badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-950 mt-1">
                  {PERSONAS[activePersona].title}
                </h3>
                <p className="text-sm font-semibold text-gray-500 mt-1">
                  {PERSONAS[activePersona].tagline}
                </p>
              </div>

              <span className="px-3.5 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold self-start sm:self-auto">
                Persona {activePersona + 1} of 4
              </span>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {PERSONAS[activePersona].desc}
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                Core Tooling & Operational Capabilities:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PERSONAS[activePersona].features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50/80 border border-gray-100"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-sky-600 shrink-0 mt-0.5"
                    />
                    <span className="text-xs font-medium text-gray-800">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Comprehensive Feature Breakdown ── */}
        <section className="mb-20 space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-sky-600">
              03 · Feature Surfaces
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              Comprehensive Feature Breakdown
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              A dual-sided ecosystem uniting passenger e-commerce booking flows with enterprise fleet management.
            </p>
          </div>

          {/* Surface 1: Consumer & Passenger Experience */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                <Compass size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-sky-600 tracking-wider">
                  Surface 01 · Passenger Experience
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-950">
                  Consumer Journey & Self-Service Portal
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <Search size={15} className="text-sky-600" />
                  Dynamic Journey Search & Discovery
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Multi-filter port search with calendar selectors, passenger tier segregation (Adult, Child, Infant), and live seat inventory indicators mapped via URL state.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <Ship size={15} className="text-sky-600" />
                  Curated Popular Routes & Vessels
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Highlights trending island destinations, categorization by vessel type (Catamaran vs. scenic cruise), journey duration, and verified passenger feedback.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <QrCode size={15} className="text-sky-600" />
                  Digital Scannable QR Boarding Pass
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  High-contrast, mobile-first boarding pass generated via <code>qrcode.react</code> at <code>/tickets/:bookingRef</code> for instant sub-50ms terminal gate scanning.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <RefreshCw size={15} className="text-sky-600" />
                  Self-Service Traveler Portal
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Passengers independently inspect itineraries at <code>/manage-booking/:ref</code>, re-download passes, or trigger self-cancellations with automated inventory replenishment.
                </p>
              </div>
            </div>
          </div>

          {/* Surface 2: Ferry Operator Dashboard */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Anchor size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-emerald-600 tracking-wider">
                  Surface 02 · Ferry Operator ERP
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-950">
                  Fleet Command & Departure Dispatcher (/dashboard/operator)
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1.5">
                <h4 className="text-sm font-bold text-gray-900">
                  Fleet Registry & Specs
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  CRUD operations for Catamarans, Speedboats, and Ferries, managing seat capacities, maintenance drydock logs, and onboard amenities (WiFi, AC, sun deck).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1.5">
                <h4 className="text-sm font-bold text-gray-900">
                  Departure Scheduler
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Configurable recurring schedules, boarding gate assignments, captain allocations, and tiered adult/child pricing matrices.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1.5">
                <h4 className="text-sm font-bold text-gray-900">
                  Live Trip Status Lifecycle
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  One-click operational dispatch toggles (<code>ON_TIME</code>, <code>BOARDING</code>, <code>DEPARTED</code>, <code>DELAYED</code>, <code>CANCELLED</code>) syncing to travelers in real-time.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1.5">
                <h4 className="text-sm font-bold text-gray-900">
                  Maritime Passenger Manifest
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Formal printable terminal manifest interface at <code>/manifest/:scheduleId</code> with inline boarding toggles (<code>PENDING</code> ➔ <code>CHECKED_IN</code> ➔ <code>BOARDED</code>).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1.5">
                <h4 className="text-sm font-bold text-gray-900">
                  Fleet Blackout Scheduling
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Calendar-based route suspension tool for adverse weather warnings, typhoon alerts, and scheduled drydock overhauls.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1.5">
                <h4 className="text-sm font-bold text-gray-900">
                  Executive Operational KPIs
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Real-time tracking of daily passenger numbers, active-to-total fleet ratios, gross revenue, and period-over-period growth trends.
                </p>
              </div>
            </div>
          </div>

          {/* Surface 3: Central Administration */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                <Building2 size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-purple-600 tracking-wider">
                  Surface 03 · Governance Center
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-950">
                  Central Administration & Governance (/dashboard/admin)
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1.5">
                <h4 className="text-sm font-bold text-gray-900">
                  Platform Financial Analytics
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Macro-level telemetry tracking gross ticket sales volume, platform take-rate commission, and net operator payout settlement batches.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1.5">
                <h4 className="text-sm font-bold text-gray-900">
                  Operator Vetting & Lifecycle
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Strict vetting workflow to review maritime licenses and toggle operator status (<code>ACTIVE</code> / <code>SUSPENDED</code>).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1.5">
                <h4 className="text-sm font-bold text-gray-900">
                  Harbor & Port Registry
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Master database configuring official ports, island terminals, pier gate numbers, and geographical GPS coordinates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 4: Interactive Demos & Innovations ── */}
        <section className="mb-20 space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-sky-600">
              04 · Interactive Demos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              Live Checkout Funnel & Passenger Manifest Simulator
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Experience the core interactions engineered for IslandHop&apos;s travelers and terminal gate personnel.
            </p>
          </div>

          {/* Interactive Demo 1: Guided Checkout Funnel (@stepperize/react) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-sky-600 tracking-wider">
                  Innovation 01 · @stepperize/react
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-950 mt-0.5">
                  Guided 4-Step Checkout Funnel Simulation
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200/80 self-start sm:self-auto">
                Step {checkoutStep} of 4
              </span>
            </div>

            {/* Stepper Progress Bar */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { step: 1, title: "1. Manifest" },
                { step: 2, title: "2. Itinerary" },
                { step: 3, title: "3. Payment" },
                { step: 4, title: "4. QR Ticket" },
              ].map((s) => (
                <button
                  key={s.step}
                  onClick={() => setCheckoutStep(s.step)}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-mono font-bold transition-all ${
                    checkoutStep === s.step
                      ? "bg-sky-600 text-white shadow-xs"
                      : checkoutStep > s.step
                      ? "bg-sky-100 text-sky-800"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>

            {/* Step Body */}
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              {checkoutStep === 1 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-gray-900">
                    Step 1: Passenger Manifest & Identity Verification
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Lead traveler enters legal passport details, nationality, and luggage requirements required by maritime harbor law.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                    <input
                      readOnly
                      value="Alexander Wright"
                      className="px-3 py-2 text-xs rounded-xl border border-gray-200 bg-white font-medium text-gray-700"
                    />
                    <input
                      readOnly
                      value="Passport: GB84920194"
                      className="px-3 py-2 text-xs rounded-xl border border-gray-200 bg-white font-mono text-gray-700"
                    />
                    <input
                      readOnly
                      value="1x Checked (20kg)"
                      className="px-3 py-2 text-xs rounded-xl border border-gray-200 bg-white font-medium text-gray-700"
                    />
                  </div>
                </div>
              )}

              {checkoutStep === 2 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-gray-900">
                    Step 2: Maritime Itinerary & Vessel Specifications
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Clear transparent breakdown of vessel type (High-Speed Catamaran), onboard amenities (Air Conditioning, Ocean Deck, WiFi), and departure pier.
                  </p>
                  <div className="p-3 rounded-xl bg-white border border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div>
                      <p className="font-bold text-gray-900">Port Coral ➔ Isla Serena</p>
                      <p className="text-gray-500 font-mono text-[11px]">Vessel: Nautilus Express · Duration: 45 min</p>
                    </div>
                    <span className="font-mono font-bold text-sky-600 text-sm">$48.00 USD</span>
                  </div>
                </div>
              )}

              {checkoutStep === 3 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-gray-900">
                    Step 3: Integrated Payment Gateway
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Frictionless checkout with atomic inventory reservation. If the user cancels or payment drops, seat inventory is immediately released.
                  </p>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
                    <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                    <span>Seat 12A temporarily locked with synchronized server countdown.</span>
                  </div>
                </div>
              )}

              {checkoutStep === 4 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-gray-900">
                    Step 4: Instant Confirmation & Scannable QR Boarding Pass
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Automated booking reference generated (<code>#IH-94820</code>). Passengers receive a mobile-friendly boarding pass for direct pier gate boarding.
                  </p>
                  <div className="p-4 rounded-xl bg-white border border-gray-200 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono font-bold text-xs text-sky-600">REF: #IH-94820</p>
                      <p className="text-sm font-black text-gray-900">BOARDING PASS READY</p>
                      <p className="text-[11px] text-gray-500 font-mono">Gate 3B · Terminal North</p>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono text-[9px] text-center p-1 border border-slate-700">
                      [QR CODE]
                    </div>
                  </div>
                </div>
              )}

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-200/80">
                <button
                  disabled={checkoutStep === 1}
                  onClick={() => setCheckoutStep((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-bold text-gray-700 disabled:opacity-40 cursor-pointer"
                >
                  Previous Step
                </button>
                <button
                  onClick={() => setCheckoutStep((prev) => (prev % 4) + 1)}
                  className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  {checkoutStep === 4 ? "Restart Funnel" : "Next Step"}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Demo 2: Interactive Terminal Manifest Table */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-emerald-600 tracking-wider">
                  Innovation 02 · TanStack Table v8
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-950 mt-0.5">
                  Live Maritime Terminal Manifest (/manifest/:scheduleId)
                </h3>
              </div>
              <span className="text-xs text-gray-500 font-mono">
                Click status pill to cycle boarding state
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-mono uppercase text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Pass ID</th>
                    <th className="py-3 px-4">Passenger Name</th>
                    <th className="py-3 px-4">Passport / ID</th>
                    <th className="py-3 px-4">Nationality</th>
                    <th className="py-3 px-4">Assigned Seat</th>
                    <th className="py-3 px-4 text-right">Boarding State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {manifestData.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50/60 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-sky-600">
                        {p.id}
                      </td>
                      <td className="py-3 px-4 font-bold text-gray-900">
                        {p.name}
                      </td>
                      <td className="py-3 px-4 font-mono text-gray-500">
                        {p.passport}
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {p.nationality}
                      </td>
                      <td className="py-3 px-4 font-mono font-medium text-gray-700">
                        {p.seat}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => togglePassengerStatus(p.id)}
                          className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                            p.status === "BOARDED"
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : p.status === "CHECKED_IN"
                              ? "bg-sky-100 text-sky-800 border border-sky-300"
                              : "bg-amber-100 text-amber-800 border border-amber-300"
                          }`}
                        >
                          {p.status} ↻
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
              <span className="font-mono">
                Total Capacity: 120 · Checked-In:{" "}
                {manifestData.filter((p) => p.status !== "PENDING").length} · Boarded:{" "}
                {manifestData.filter((p) => p.status === "BOARDED").length}
              </span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 size={13} />
                Compliant with Port Authority Inspection Standards
              </span>
            </div>
          </div>
        </section>

        {/* ── Section 5: Architectural & Technical Highlights ── */}
        <section className="mb-20 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-sky-600">
              05 · Engineering Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              Architectural & Technical Highlights
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              High-performance engineering patterns delivering zero double-bookings, rapid search synchronization, and full contract stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-sky-600">
                01 · Modern Stack
              </span>
              <h3 className="text-base font-bold text-gray-900">
                Next.js 16 & React 19 Boundaries
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Utilizes Next.js 16 App Router and Turbopack for rapid compilation. Strict Server and Client component boundaries ensure fast initial render times with client interactivity only where necessary.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-emerald-600">
                02 · State & Declarative Caching
              </span>
              <h3 className="text-base font-bold text-gray-900">
                TanStack Query v5 Key Factories
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Manages maritime server state with structured query key factories, preventing cache stale bugs and enabling background synchronization when ferry departure statuses change.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-purple-600">
                03 · URL State Synchronization
              </span>
              <h3 className="text-base font-bold text-gray-900">
                Deep URL State with nuqs
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every departure filter, passenger tier selector, and date picker synchronizes directly with URL search params using <code>nuqs</code>, making all journey states shareable and reload-resilient.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-blue-600">
                04 · Contract Safety
              </span>
              <h3 className="text-base font-bold text-gray-900">
                Zero-Assumption TypeScript 5
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Guarantees 100% end-to-end type safety across schemas, models, and API responses (<code>ApiResponse&lt;T&gt;</code>), eliminating runtime schema mismatches.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-amber-600">
                05 · High-Density Data
              </span>
              <h3 className="text-base font-bold text-gray-900">
                TanStack Table v8 Operations
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Powering dense fleet registries and thousands of passenger rows with fast client-side filtering, multi-column sorting, and frictionless pagination.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-rose-600">
                06 · Automated Validation
              </span>
              <h3 className="text-base font-bold text-gray-900">
                Deterministic Audit Engine
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Custom deterministic validation scripts (<code>scripts/audit-frontend.js</code>) that verify API contract adherence, link integrity, and component stability in seconds.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 6: Engineering Reflections ── */}
        <section className="mb-20 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Engineering Reflections · Pronoy Pal
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
            Building High-Reliability Maritime Systems for Edge Island Connectivity
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            Designing IslandHop required solving the challenges of intermittent coastal cellular connectivity and strict regulatory harbor compliance. By leveraging TanStack Query v5 with optimistic updates and URL-persisted state through nuqs, passengers can book reliably even on weak 3G signals. Furthermore, gate officers can validate cryptographic QR boarding passes and update manifests in under 50 milliseconds, creating a frictionless transit experience for island nations worldwide.
          </p>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center font-black text-sm text-white">
                PP
              </div>
              <div>
                <p className="text-xs font-bold text-white">Pronoy Pal</p>
                <p className="text-[11px] text-slate-400">Lead Frontend Engineer</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.liveLink || "https://github.com/pronoy656"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all"
              >
                <span>Live Platform</span>
                <ArrowUpRight size={13} />
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all"
              >
                <span>All Projects</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Bottom Navigation ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-600 hover:text-sky-600 transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to All Projects</span>
          </Link>

          <Link
            href="/projects/novapay-wallet"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-900 hover:text-sky-600 transition-colors group"
          >
            <span>Next Project: NovaPay Wallet</span>
            <ChevronRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </main>

      {/* ── Global Footer ── */}
      <Footer />
    </div>
  );
}

function ArrowRight({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

