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
  Users,
  LayoutDashboard,
  Cpu,
  Layers,
  Sparkles,
  Trophy,
  Activity,
  CreditCard,
  FileText,
  Target,
  ChevronRight,
  Eye,
  Sliders,
  Award,
  Zap,
  Globe2,
  Lock,
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

// 6 Stakeholders Data
const STAKEHOLDERS = [
  {
    id: "players",
    title: "Grassroots Players",
    role: "Grassroots to Semi-Pro",
    tagline: "Build a verified digital CV and get discovered globally",
    desc: "Athletes manage interactive digital dossiers featuring physical metrics, tactical heatmaps, verified match statistics, and video highlights that are directly stamped by registered coaches.",
    features: [
      "Dynamic athletic profile & multi-sport stat tracking",
      "Official coach endorsement stamps combatting fake highlight reels",
      "Interactive 6-metric athletic radar visualization",
      "One-click automated PDF athletic CV dossier generation",
    ],
    accent: "#6366f1",
  },
  {
    id: "coaches",
    title: "Verified Coaches",
    role: "Licensed Academy & Club Coaches",
    tagline: "Dual-mode authority: Manage squads and mentor talent",
    desc: "Coaches seamlessly switch between their personal athletic history (Player Mode) and managerial duties (Coach Mode), reviewing tactics and stamping authenticity on athlete capabilities.",
    features: [
      "One-click toggle between Player Mode and Academy Coach Mode",
      "2D tactical whiteboard with custom draggable formations",
      "Player rating verification authority for technical skills",
      "Match day roster and tactical briefing dispatcher",
    ],
    accent: "#3b82f6",
  },
  {
    id: "academies",
    title: "Grassroots Academies",
    role: "Youth Academies & Sports Institutions",
    tagline: "Total operational digitization from tuition to pitch tactics",
    desc: "Complete enterprise ERP managing tuition collections, batch rosters, coach assignments, attendance logs, and high-level opponent tactical analytics.",
    features: [
      "Tuition fee billing tracker with instant payment status logs",
      "Comprehensive player and coach roster management (CRUD)",
      "Tactical pitch analysis with opponent scouting boards",
      "Direct talent pipeline to international scouts and partner clubs",
    ],
    accent: "#10b981",
  },
  {
    id: "agents",
    title: "FIFA Licensed Agents",
    role: "Verified Scouts & Talent Agents",
    tagline: "Objective pre-field talent intelligence before traveling",
    desc: "Scouts bypass geography and deception using multi-parameter queries (age, position, foot, sprint speed, coach endorsements) to discover certified talents worldwide.",
    features: [
      "Multi-dimensional scouting board with radar metric filtering",
      "Verified coach credentials and match-day performance logs",
      "Direct verified messaging channel to academy directors",
      "Saved talent watchlists with dynamic progress notifications",
    ],
    accent: "#f59e0b",
  },
  {
    id: "clubs",
    title: "Professional Clubs",
    role: "Domestic Leagues & International Clubs",
    tagline: "Streamline official trials and affiliate scouting pipelines",
    desc: "Clubs monitor grassroots academy feeds, dispatch official trial invitations, and evaluate prospective signings with verified pre-trial telemetry.",
    features: [
      "Formal trial invitation dispatcher and attendance tracker",
      "Affiliated academy development monitoring feeds",
      "Comprehensive transfer inquiry management",
      "Direct integration with club scouting departments",
    ],
    accent: "#ec4899",
  },
  {
    id: "admin",
    title: "Super Admins",
    role: "Platform Governance & Integrity Gatekeepers",
    tagline: "Enforcing trust, KYC, and security across the football ecosystem",
    desc: "Platform overseers review coach certifications, audit registered grassroots academies, monitor subscription revenues, and manage global system security.",
    features: [
      "Institutional KYC approval flow for coaches and academies",
      "Platform-wide audit logs and fraud detection rules",
      "Tiered membership revenue and subscription analytics",
      "Role-Based Access Control (RBAC) governance center",
    ],
    accent: "#8b5cf6",
  },
];

// 7 Dashboards Data
const DASHBOARDS = [
  {
    id: "player",
    route: "/dashboard/player",
    title: "Player Dashboard",
    badge: "Athlete Portal",
    summary:
      "Interactive athletic resume featuring physical telemetry, video highlights, coach verification stamps, and real-time trial alerts.",
    capabilities: [
      "Editable athletic biometric profile (Height, Weight, Preferred Foot)",
      "6-axis athletic radar visualization (Pace, Shooting, Passing, Dribbling, Defending, Physicality)",
      "Official coach endorsement stamps with digital verification badges",
      "Client-side AI background cutout for professional player card export",
    ],
  },
  {
    id: "coach",
    route: "/dashboard/coach",
    title: "Coach Dashboard (Dual-Mode)",
    badge: "Tactics & Verification",
    summary:
      "Dual-mode command center letting coaches toggle between personal player records and academy squad coaching duties.",
    capabilities: [
      "Instant 1-click toggle between Coach Mode and Player Mode",
      "Interactive 2D tactical whiteboard with draggable team formations (4-3-3, 4-2-3-1, 3-5-2)",
      "Player performance scoring and match rating endorsement interface",
      "Squad fitness tracking and training attendance registers",
    ],
  },
  {
    id: "analysis",
    route: "/dashboard/academy/analysis",
    title: "Academy Tactical Intelligence",
    badge: "Analytics Suite",
    summary:
      "Tactical analysis suite for match preparation, tactical shape simulation, shooting zone heatmaps, and opponent scouting.",
    capabilities: [
      "Interactive 2D pitch canvas with draggable player coordinates and passing vectors",
      "Shooting zone conversion heatmaps and set-piece routine planner",
      "Comparative radar overlays for squad benchmarking against league standards",
      "Post-match tactical evaluation and visual debrief reports",
    ],
  },
  {
    id: "management",
    route: "/dashboard/academy/management",
    title: "Academy Administration & ERP",
    badge: "Academy Operations",
    summary:
      "Operational engine managing academy rosters, coach contracts, tuition fee collections, and seasonal match fixtures.",
    capabilities: [
      "Player & coach directory with automated roster assignment by age group",
      "Tuition payment ledger tracking pending, overdue, and completed club fees",
      "Match fixture scheduler with venue location and referee coordination",
      "Automated SMS/Email broadcast notifications for training changes",
    ],
  },
  {
    id: "agent",
    route: "/dashboard/agent",
    title: "FIFA Agent & Scout Intelligence",
    badge: "Scouting Portal",
    summary:
      "Filterable discovery board connecting licensed scouts to verified grassroots footballers with certified metric dossiers.",
    capabilities: [
      "Multi-parameter talent search filtering by age, position, foot, and coach rating",
      "Deep player dossier inspect with verified coach stamps and match reports",
      "Private saved watchlists with automatic milestone notifications",
      "Secure messaging pipeline directly to player representatives and academies",
    ],
  },
  {
    id: "club",
    route: "/dashboard/club",
    title: "Professional Club Pipeline",
    badge: "Club Scouting",
    summary:
      "Dedicated recruitment pipeline for domestic and international clubs to scout grassroots talent and issue trial invitations.",
    capabilities: [
      "Formal trial invitation management workflow with digital acceptance logs",
      "Affiliated academy development monitoring feeds and scouting reports",
      "Contract negotiation hub and transfer inquiry pipeline",
      "Pre-field athletic telemetry verification before investing in physical trials",
    ],
  },
  {
    id: "admin",
    route: "/dashboard/admin",
    title: "Platform Super Admin",
    badge: "Platform Governance",
    summary:
      "Institutional governance center managing academy accreditations, coach license approvals, and revenue telemetry.",
    capabilities: [
      "Coach license and academy credential KYC verification queue",
      "Platform subscription and monetization telemetry with MRR analytics",
      "User role governance and granular RBAC permission matrix",
      "System audit logs, automated security alerts, and dispute resolution",
    ],
  },
];

// Tactical Formations for interactive pitch demo
const FORMATIONS = {
  "4-3-3": [
    { num: 1, pos: "GK", x: 50, y: 88, name: "Goalkeeper" },
    { num: 2, pos: "RB", x: 84, y: 72, name: "Right Back" },
    { num: 4, pos: "CB", x: 62, y: 74, name: "Center Back" },
    { num: 5, pos: "CB", x: 38, y: 74, name: "Center Back" },
    { num: 3, pos: "LB", x: 16, y: 72, name: "Left Back" },
    { num: 6, pos: "DM", x: 50, y: 56, name: "Defensive Mid" },
    { num: 8, pos: "CM", x: 68, y: 44, name: "Central Mid" },
    { num: 10, pos: "AM", x: 32, y: 44, name: "Attacking Mid" },
    { num: 7, pos: "RW", x: 82, y: 24, name: "Right Wing" },
    { num: 9, pos: "ST", x: 50, y: 16, name: "Striker" },
    { num: 11, pos: "LW", x: 18, y: 24, name: "Left Wing" },
  ],
  "4-2-3-1": [
    { num: 1, pos: "GK", x: 50, y: 88, name: "Goalkeeper" },
    { num: 2, pos: "RB", x: 84, y: 72, name: "Right Back" },
    { num: 4, pos: "CB", x: 62, y: 75, name: "Center Back" },
    { num: 5, pos: "CB", x: 38, y: 75, name: "Center Back" },
    { num: 3, pos: "LB", x: 16, y: 72, name: "Left Back" },
    { num: 6, pos: "DM", x: 62, y: 58, name: "Defensive Mid" },
    { num: 8, pos: "DM", x: 38, y: 58, name: "Defensive Mid" },
    { num: 7, pos: "RM", x: 78, y: 38, name: "Right Mid" },
    { num: 10, pos: "AM", x: 50, y: 36, name: "Playmaker" },
    { num: 11, pos: "LM", x: 22, y: 38, name: "Left Mid" },
    { num: 9, pos: "ST", x: 50, y: 16, name: "Striker" },
  ],
  "3-5-2": [
    { num: 1, pos: "GK", x: 50, y: 88, name: "Goalkeeper" },
    { num: 4, pos: "CB", x: 74, y: 74, name: "Right CB" },
    { num: 5, pos: "CB", x: 50, y: 76, name: "Sweeper CB" },
    { num: 3, pos: "CB", x: 26, y: 74, name: "Left CB" },
    { num: 2, pos: "RWB", x: 88, y: 46, name: "Right Wingback" },
    { num: 6, pos: "CM", x: 62, y: 52, name: "Central Mid" },
    { num: 8, pos: "DM", x: 50, y: 60, name: "Defensive Mid" },
    { num: 10, pos: "CM", x: 38, y: 52, name: "Central Mid" },
    { num: 7, pos: "LWB", x: 12, y: 46, name: "Left Wingback" },
    { num: 9, pos: "ST", x: 62, y: 18, name: "Right Striker" },
    { num: 11, pos: "ST", x: 38, y: 18, name: "Left Striker" },
  ],
};

// Radar chart metrics for K10 player showcase
const RADAR_METRICS = [
  { label: "Pace", val: 89, angle: 0 },
  { label: "Shooting", val: 84, angle: 60 },
  { label: "Passing", val: 92, angle: 120 },
  { label: "Dribbling", val: 88, angle: 180 },
  { label: "Defending", val: 68, angle: 240 },
  { label: "Physicality", val: 82, angle: 300 },
];

export default function K10FootballShowcase({ project }: { project: Project }) {
  const [activeStakeholder, setActiveStakeholder] = useState(0);
  const [activeDashboard, setActiveDashboard] = useState(0);
  const [selectedFormation, setSelectedFormation] =
    useState<keyof typeof FORMATIONS>("4-3-3");
  const [aiCutoutActive, setAiCutoutActive] = useState(true);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // Calculate radar polygon points
  const centerX = 120;
  const centerY = 120;
  const radius = 80;

  const getCoordinates = (index: number, value: number) => {
    const angle = (index * 60 - 90) * (Math.PI / 180);
    const r = (value / 100) * radius;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
    };
  };

  const radarPolygonPoints = RADAR_METRICS.map((m, i) => {
    const coords = getCoordinates(i, m.val);
    return `${coords.x},${coords.y}`;
  }).join(" ");

  return (
    <div className="min-h-screen bg-[#fafbfc] text-gray-900 flex flex-col selection:bg-indigo-600 selection:text-white">
      {/* ── Top Navbar ── */}
      <Navbar />

      {/* ── Main Case Study Article ── */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-32 sm:pt-36 md:pt-40 pb-28">
        {/* ── Breadcrumb & Top Bar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200/80">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500">
            <Link
              href="/projects"
              className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span>Projects</span>
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-indigo-600 font-mono font-bold">K10 Football</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400 font-medium">Enterprise Case Study</span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={project.liveLink || "https://github.com/pronoy656"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
            >
              <span>Live Platform</span>
              <ExternalLink size={13} />
            </a>

            <a
              href={project.githubLink || "https://github.com/pronoy656"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-indigo-600 hover:border-indigo-600 text-xs font-bold shadow-2xs active:scale-95 transition-all"
            >
              <GithubIcon />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* ── Hero Section ── */}
        <div className="space-y-6 mb-16">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-[11px] font-mono font-bold uppercase tracking-wider">
              <Sparkles size={13} className="text-indigo-600" />
              World&apos;s First Validated Football Platform
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-mono font-bold uppercase tracking-wider">
              <ShieldCheck size={13} className="text-emerald-600" />
              Coach-Certified Authenticity
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-[11px] font-mono font-bold uppercase tracking-wider">
              Lead Frontend Engineer
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.08]">
              K10 Football: Enterprise AI Talent & Grassroots Management Ecosystem
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
              A certified football intelligence platform bridging the deep disconnect between undiscovered grassroots athletes, coaches, academies, FIFA-licensed agents, and professional clubs worldwide through verified ratings, 2D tactical modeling, and end-to-end academy ERP.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-black text-indigo-600 font-mono tracking-tight">
                98/100
              </span>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">
                Lighthouse Score
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono tracking-tight">
                40%
              </span>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">
                Faster Academy Operations
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-black text-gray-900 font-mono tracking-tight">
                6 Roles
              </span>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">
                Interconnected Stakeholders
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-black text-indigo-600 font-mono tracking-tight">
                7 Portals
              </span>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">
                Tailored Real-Time Dashboards
              </p>
            </div>
          </div>
        </div>

        {/* ── Hero Mockup Showcase with Interactive Selector ── */}
        <div className="mb-20">
          <div className="relative rounded-3xl bg-gradient-to-b from-gray-900 via-gray-950 to-black p-3 sm:p-5 md:p-6 shadow-2xl border border-gray-800 overflow-hidden">
            {/* Top Mac Bar */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-gray-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-[11px] font-mono text-gray-400 hidden sm:inline">
                  https://k10football.com/dashboard
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold transition-all ${
                      activeScreenIndex === idx
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-800 text-gray-400 hover:text-white"
                    }`}
                  >
                    View {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Mockup Preview Area */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden mt-3 bg-gray-950">
              <Image
                src={project.images[activeScreenIndex] || project.image}
                alt="K10 Football Platform Showcase"
                fill
                priority
                className="object-cover object-top transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* ── Section 1: Executive Summary & Vision ── */}
        <section className="mb-20 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
              01 · Problem Space & Vision
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              Tackling Grassroots Football&apos;s Deep Disconnect
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              Standard social networks and recruiting boards fail grassroots sports: they allow unverified highlight clips, manipulated stats, and lack operational backing. K10 Football enforces <strong>certified verification</strong> — athletic telemetry, performance ratings, and tactical capabilities are stamped by licensed coaches and registered academies, providing high-integrity actionable intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/60 flex items-center justify-center text-indigo-600">
                <Globe2 size={20} />
              </div>
              <h3 className="text-base font-bold text-gray-900">
                Global Talent Discovery
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Eliminates geographical boundaries, giving remote amateur and youth players direct exposure to scouts and clubs worldwide.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-gray-900">
                Data Verifiability & Integrity
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Combats deceptive video highlights through official coach validations and institutional stamps of authenticity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600">
                <Zap size={20} />
              </div>
              <h3 className="text-base font-bold text-gray-900">
                Complete Operational Digitization
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Empowers grassroots academies with automated tools for fee collections, squad rosters, session schedules, and fixtures.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 2: Real-World Problems Solved (Comparison Matrix) ── */}
        <section className="mb-20 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
              02 · Solution Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              Traditional Football Bottlenecks vs K10 Football
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              How the platform replaces fragmented manual workflows with a single source of verified truth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {[
              {
                bottleneck: "Grassroots Talents Go Unnoticed",
                bottleneckSub: "Athletes in remote locations rarely get scouted by international scouts due to lack of travel reach.",
                solution: "Centralized Global Scouting Board",
                solutionSub: "Verified player profiles are immediately discoverable by FIFA agents and clubs with multi-metric query filters.",
              },
              {
                bottleneck: "Deceptive Highlight Reels & Fake Stats",
                bottleneckSub: "Exaggerated self-reported stats and cherry-picked video reels mislead recruitment departments.",
                solution: "Certified Coach Validation & Endorsements",
                solutionSub: "Every match rating, tactical stat, and physical benchmark must be stamped by a verified licensed coach.",
              },
              {
                bottleneck: "Chaotic Manual Academy Management",
                bottleneckSub: "Grassroots clubs struggle with paper-based fee collections, missing attendance logs, and manual scheduling.",
                solution: "All-in-One Academy Operations ERP",
                solutionSub: "Automated tuition tracking, squad roster management, batch attendance, and opponent match analysis.",
              },
              {
                bottleneck: "Prohibitive Scouting Travel Costs",
                bottleneckSub: "Clubs spend thousands sending scouts to trials only to find players lack fundamental tactical stamina.",
                solution: "Pre-Field Radar Visuals & Verified Dossiers",
                solutionSub: "Review objective athletic radars, video logs, and match metrics before committing trial investment.",
              },
              {
                bottleneck: "Lack of Standardized Resumes",
                bottleneckSub: "No standard format exists for young athletes to present their achievements to pro leagues.",
                solution: "Interactive CVs & 1-Click PDF Dossiers",
                solutionSub: "Standardized digital dossiers with client-side PDF export for trials, trials, and club presentations.",
              },
            ].map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl border border-gray-200/90 bg-white overflow-hidden shadow-2xs hover:shadow-xs transition-shadow"
              >
                {/* Traditional Bottleneck */}
                <div className="p-5 sm:p-6 bg-red-50/20 border-b lg:border-b-0 lg:border-r border-gray-200/70 flex items-start gap-3.5">
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-gray-900">
                      {row.bottleneck}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {row.bottleneckSub}
                    </p>
                  </div>
                </div>

                {/* K10 Football Solution */}
                <div className="p-5 sm:p-6 bg-emerald-50/20 flex items-start gap-3.5">
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-gray-900">
                      {row.solution}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {row.solutionSub}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: The 6 Stakeholder User Ecosystem ── */}
        <section className="mb-20 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
              03 · Ecosystem Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              6 Interconnected Stakeholders
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Every participant in the football ecosystem is integrated with tailored permissions, workflows, and tools.
            </p>
          </div>

          {/* Stakeholder Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-1.5 rounded-2xl bg-gray-100 border border-gray-200">
            {STAKEHOLDERS.map((stk, idx) => (
              <button
                key={stk.id}
                onClick={() => setActiveStakeholder(idx)}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                  activeStakeholder === idx
                    ? "bg-white text-gray-950 shadow-sm border border-gray-200/80"
                    : "text-gray-600 hover:text-gray-950 hover:bg-white/50"
                }`}
              >
                {stk.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Active Stakeholder Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-600">
                  {STAKEHOLDERS[activeStakeholder].role}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-950 mt-1">
                  {STAKEHOLDERS[activeStakeholder].title}
                </h3>
                <p className="text-sm font-semibold text-gray-500 mt-1">
                  {STAKEHOLDERS[activeStakeholder].tagline}
                </p>
              </div>

              <span className="px-3.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold self-start sm:self-auto">
                Role {activeStakeholder + 1} of 6
              </span>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {STAKEHOLDERS[activeStakeholder].desc}
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                Core Capabilities & Tooling:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {STAKEHOLDERS[activeStakeholder].features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50/80 border border-gray-100"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-indigo-600 shrink-0 mt-0.5"
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

        {/* ── Section 4: 7 Comprehensive Dashboards ── */}
        <section className="mb-20 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
              04 · Application Surfaces
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              7 Dedicated Role-Based Dashboards
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Engineered with granular RBAC, dedicated views, and real-time state synchronization via Redux Toolkit and Socket.IO.
            </p>
          </div>

          {/* Dashboard Selector */}
          <div className="flex flex-wrap items-center gap-2">
            {DASHBOARDS.map((dash, dIdx) => (
              <button
                key={dash.id}
                onClick={() => setActiveDashboard(dIdx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeDashboard === dIdx
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white border border-gray-200/80 text-gray-700 hover:border-indigo-400"
                }`}
              >
                {dash.badge}
              </button>
            ))}
          </div>

          {/* Active Dashboard Detailed Card */}
          <div className="rounded-3xl bg-white border border-gray-200/90 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-gray-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-indigo-600 px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-200/80">
                    {DASHBOARDS[activeDashboard].route}
                  </span>
                  <span className="text-xs font-bold text-gray-400">
                    {DASHBOARDS[activeDashboard].badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-950 mt-2">
                  {DASHBOARDS[activeDashboard].title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {DASHBOARDS[activeDashboard].summary}
            </p>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                Engineered Capabilities:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {DASHBOARDS[activeDashboard].capabilities.map((cap, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                      {cIdx + 1}
                    </span>
                    <span className="text-xs font-medium text-gray-800">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 5: Advanced Technical Innovations & Interactive Demos ── */}
        <section className="mb-20 space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
              05 · Deep Engineering Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              Client-Side AI, 2D Pitch Canvas & Radar Telemetry
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Deep dive into the frontend architecture, performance optimizations, and mathematical computations implemented for K10 Football.
            </p>
          </div>

          {/* Interactive Feature 1: Client-Side AI Background Removal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center">
                  <Cpu size={16} />
                </span>
                <span className="text-xs font-mono font-bold uppercase text-indigo-600 tracking-wider">
                  Innovation 01 · Zero-Server GPU Overhead
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-gray-950">
                In-Browser AI Background Removal (@imgly/background-removal)
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Rather than burdening server infrastructure with expensive Python/GPU background-removal microservices, we integrated <code>@imgly/background-removal</code> using <strong>WebAssembly (WASM)</strong> and an <strong>ONNX runtime</strong> executing directly on the user&apos;s machine.
              </p>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-gray-700">
                  <span>Server GPU Cost Reduction</span>
                  <span className="font-mono text-emerald-600">100% Client-Side</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-700">
                  <span>Processing Latency</span>
                  <span className="font-mono text-indigo-600">&lt; 850ms in Wasm</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-700">
                  <span>Output Fidelity</span>
                  <span className="font-mono text-gray-900">Alpha-Masked PNG</span>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                Players snap a training photo with a phone, the WASM engine strips the busy pitch background instantly, and composites an official FIFA-grade player card ready for PDF dossier export.
              </p>
            </div>

            {/* Interactive Demo Cutout Widget */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-950 border border-gray-800 text-white space-y-4">
              <div className="flex items-center gap-2 w-full justify-between">
                <span className="text-[10px] font-mono uppercase text-gray-400">
                  Live Cutout Simulation
                </span>
                <button
                  onClick={() => setAiCutoutActive(!aiCutoutActive)}
                  className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-mono font-bold transition-all cursor-pointer"
                >
                  Toggle: {aiCutoutActive ? "AI Cutout" : "Original Background"}
                </button>
              </div>

              {/* Visual Card */}
              <div className="relative w-56 h-72 rounded-2xl overflow-hidden border border-white/20 shadow-xl flex flex-col justify-end p-4">
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    aiCutoutActive
                      ? "bg-gradient-to-t from-indigo-950 via-gray-900 to-indigo-900"
                      : "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900 via-stone-800 to-stone-950"
                  }`}
                />
                
                {/* Silhouette / Mock Cutout Player */}
                <div className="relative z-10 text-center space-y-1">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center font-black text-2xl text-white shadow-lg border-2 border-white/30">
                    K10
                  </div>
                  <span className="inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/20 backdrop-blur-md">
                    VERIFIED #10
                  </span>
                  <h4 className="font-bold text-sm text-white">Mateo Silva</h4>
                  <p className="text-[10px] text-gray-300 font-mono">
                    Midfielder · U19 Elite Academy
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono text-gray-400 text-center">
                {aiCutoutActive
                  ? "✓ AI background transparent layer applied"
                  : "Original noisy camera background active"}
              </span>
            </div>
          </div>

          {/* Interactive Feature 2: 2D Interactive Pitch & Tactical Whiteboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                  <Target size={16} />
                </span>
                <span className="text-xs font-mono font-bold uppercase text-emerald-600 tracking-wider">
                  Innovation 02 · Tactical Canvas Engine
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-gray-950">
                2D Interactive Pitch & Tactical Formation Modeling
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Coaches utilize a responsive HTML5 Canvas and SVG 2D pitch board for match preparation. Drag-and-drop formation modeling allows tactical shifts with automated coordinate snapping and position spacing.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-mono font-bold text-gray-400">
                  Switch Formation:
                </span>
                {(["4-3-3", "4-2-3-1", "3-5-2"] as const).map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormation(fmt)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      selectedFormation === fmt
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>

              <ul className="text-xs text-gray-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Real-time tactical pitch coordinates mapped across responsive viewports.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Integrated opponent scouting reports & tactical briefing dispatcher.</span>
                </li>
              </ul>
            </div>

            {/* Pitch Visual Widget */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-950 border border-emerald-900 text-white">
              <div className="w-full flex items-center justify-between px-2 pb-2 text-[10px] font-mono text-emerald-300">
                <span>Tactical Whiteboard</span>
                <span className="font-bold uppercase text-white bg-emerald-800 px-2 py-0.5 rounded">
                  {selectedFormation}
                </span>
              </div>

              {/* The Football Pitch SVG */}
              <div className="relative w-full aspect-[3/4] max-w-[280px] bg-emerald-900/90 rounded-xl border-2 border-emerald-600/50 overflow-hidden shadow-inner p-2">
                {/* Pitch Markings */}
                <div className="absolute inset-2 border border-emerald-500/40 rounded-lg pointer-events-none" />
                {/* Halfway line */}
                <div className="absolute top-1/2 left-2 right-2 h-0.5 bg-emerald-500/40 pointer-events-none" />
                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-emerald-500/40 pointer-events-none" />
                {/* Top Penalty Box */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-12 border-b border-x border-emerald-500/40 pointer-events-none" />
                {/* Bottom Penalty Box */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 border-t border-x border-emerald-500/40 pointer-events-none" />

                {/* Tactical Players in Formation */}
                {FORMATIONS[selectedFormation].map((player) => (
                  <motion.div
                    key={`${selectedFormation}-${player.num}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      left: `${player.x}%`,
                      top: `${player.y}%`,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer"
                  >
                    <div className="w-5 h-5 rounded-full bg-white text-emerald-950 font-black text-[9px] flex items-center justify-center shadow-md border border-emerald-300 group-hover:scale-125 transition-transform">
                      {player.num}
                    </div>
                    <span className="text-[8px] font-mono font-bold text-white drop-shadow-md">
                      {player.pos}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Feature 3: Radar Chart & PDF Dossiers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center">
                  <Activity size={16} />
                </span>
                <span className="text-xs font-mono font-bold uppercase text-purple-600 tracking-wider">
                  Innovation 03 · Telemetry & Offline Dossiers
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-gray-950">
                Visual Radar Telemetry & Automated PDF Dossier Export
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Talent evaluators need rapid, objective metric scanning. We engineered a 6-axis athletic radar visualization mapping Pace, Shooting, Passing, Dribbling, Defending, and Physicality.
              </p>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <h4 className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                  <FileText size={14} className="text-indigo-600" />
                  Client-Side PDF Generation (jsPDF + html2canvas)
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Athletes can generate a high-resolution, multi-page branded PDF athletic dossier with 1 click. The system compiles player biometric history, radar polygon geometry, coach validation signatures, and match logs directly in-browser for immediate offline presentation to trial scouts.
                </p>
              </div>
            </div>

            {/* Interactive Radar SVG */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-950 border border-gray-800 text-white space-y-3">
              <div className="w-full flex items-center justify-between text-[10px] font-mono text-gray-400">
                <span>Athletic Radar Telemetry</span>
                <span className="text-indigo-400 font-bold">Overall: 84 OVR</span>
              </div>

              <div className="relative w-60 h-60 flex items-center justify-center">
                <svg width="240" height="240" className="overflow-visible">
                  {/* Concentric Hexagons */}
                  {[0.25, 0.5, 0.75, 1.0].map((level, lIdx) => {
                    const r = radius * level;
                    const points = RADAR_METRICS.map((_, i) => {
                      const angle = (i * 60 - 90) * (Math.PI / 180);
                      return `${centerX + r * Math.cos(angle)},${
                        centerY + r * Math.sin(angle)
                      }`;
                    }).join(" ");
                    return (
                      <polygon
                        key={lIdx}
                        points={points}
                        fill="none"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Axis lines */}
                  {RADAR_METRICS.map((_, i) => {
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    return (
                      <line
                        key={i}
                        x1={centerX}
                        y1={centerY}
                        x2={centerX + radius * Math.cos(angle)}
                        y2={centerY + radius * Math.sin(angle)}
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Filled Data Polygon */}
                  <polygon
                    points={radarPolygonPoints}
                    fill="rgba(99, 102, 241, 0.45)"
                    stroke="#818cf8"
                    strokeWidth="2"
                  />

                  {/* Data Points */}
                  {RADAR_METRICS.map((m, i) => {
                    const coords = getCoordinates(i, m.val);
                    const labelAngle = (i * 60 - 90) * (Math.PI / 180);
                    const labelRadius = radius + 22;
                    const labelX = centerX + labelRadius * Math.cos(labelAngle);
                    const labelY = centerY + labelRadius * Math.sin(labelAngle);

                    return (
                      <g key={i}>
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r="4"
                          fill="#818cf8"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                        />
                        <text
                          x={labelX}
                          y={labelY}
                          fill="#e0e7ff"
                          fontSize="9"
                          fontFamily="monospace"
                          fontWeight="bold"
                          textAnchor="middle"
                          dominantBaseline="central"
                        >
                          {m.label} ({m.val})
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <span className="text-[10px] font-mono text-gray-400">
                Verified Benchmark Stamped by UEFA Pro Coach
              </span>
            </div>
          </div>
        </section>

        {/* ── Section 6: Tech Stack & System Architecture ── */}
        <section className="mb-20 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-600">
              06 · System Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight mt-1.5">
              Enterprise Technology Stack
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Built on modern Next.js 16 and React 19 primitives with zero-latency client-side optimizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-indigo-600">
                Core & Framework
              </span>
              <ul className="text-xs font-medium text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  <span>Next.js 16 (App Router)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  <span>React 19 & TypeScript 5</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  <span>Tailwind CSS 4</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-emerald-600">
                State & Networking
              </span>
              <ul className="text-xs font-medium text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Redux Toolkit & RTK Query</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Socket.IO Real-Time Feeds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Axios Interceptors</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-purple-600">
                AI & Visual Canvas
              </span>
              <ul className="text-xs font-medium text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  <span>@imgly/background-removal</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  <span>WebAssembly & ONNX Runtime</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  <span>HTML5 Canvas & SVG Math</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-blue-600">
                Auth & Documents
              </span>
              <ul className="text-xs font-medium text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>JWT & Role-Based Access Control</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>jsPDF & html2canvas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Framer Motion Transitions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Section 07: Lead Frontend Engineer Role & Takeaways ── */}
        <section className="mb-20 p-8 sm:p-10 rounded-3xl bg-gray-900 text-white space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
              Engineering Reflections · Pronoy Pal
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
            Architecting High-Trust SportsTech with Zero Server Waste
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed max-w-4xl">
            As Lead Frontend Engineer on K10 Football, the primary technical challenge was delivering desktop-grade tactical and visual tools (2D pitch formations, radar metrics, background removal) without introducing immense backend compute costs or sluggish roundtrips. By moving the AI background removal to WebAssembly, calculating tactical coordinates via client SVG, and securing role transitions with clean JWT state guards, we achieved a lightning-fast <strong>98/100 Lighthouse score</strong> and a truly resilient web platform.
          </p>

          <div className="pt-4 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-black text-sm text-white">
                PP
              </div>
              <div>
                <p className="text-xs font-bold text-white">Pronoy Pal</p>
                <p className="text-[11px] text-gray-400">Lead Frontend Engineer</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.liveLink || "https://github.com/pronoy656"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={13} />
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-bold transition-all"
              >
                <span>All Projects</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Bottom Project Navigation ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to All Projects</span>
          </Link>

          <Link
            href="/projects/heaven-furniture"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-900 hover:text-indigo-600 transition-colors group"
          >
            <span>Next Project: Heaven Furniture</span>
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

