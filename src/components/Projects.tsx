"use client";

import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ExternalLink, X, MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

interface Project {
  title: string;
  category: string;
  image: string;
  desc: string;
  techStack: string[];
  features: string[];
  contributions: string[];
  color: string;
  themeGradient: string;
  leftBgGradient: string;
  accentColor: string;
  liveLink?: string;
  githubLink?: string;
}

const projectsData: Project[] = [
  {
    title: "K10 Football",
    category: "Club Management / 2025",
    image: "/football-mockup-2.png",
    desc: "A responsive football club management platform built for managing players and coaches, with real-time statistics, performance tracking, and strategic game planning.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JWT",
      "React Hook Form",
      "shadcn/ui",
      "Socket.IO",
      "Redux Toolkit"
    ],
    features: [
      "Real-time match statistics, player tracking, and strategic game planning",
      "JWT-based authentication and role-based access control (RBAC)",
      "Scalable state management with Redux Toolkit and API-driven functionality",
      "Live updates and team notifications powered by Socket.IO",
      "Modular design system built with shadcn/ui and React Hook Form"
    ],
    contributions: [
      "Built a responsive football club management platform for managing players and coaches",
      "Implemented JWT-based authentication and role-based access control with reusable components",
      "Delivered a centralized platform that streamlined operations and real-time performance monitoring"
    ],
    color: "#f8fafc",
    themeGradient: "from-indigo-100 via-blue-50 to-indigo-100 border-indigo-200/60",
    leftBgGradient: "from-[#0c0f24] via-[#12183d] to-[#080a1c]",
    accentColor: "#6366f1",
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656"
  },
  {
    title: "Heaven Furniture",
    category: "E-Commerce / 2024",
    image: "/jbay-mockup(2).png",
    desc: "A modern furniture e-commerce platform with responsive product browsing, product details, and seamless shopping experiences across desktop and mobile devices.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX Implementation"
    ],
    features: [
      "Responsive product browsing with category filtering and real-time search",
      "Detailed product specifications, interactive gallery views, and options",
      "Optimized shopping cart, checkout flow, and state persistence",
      "High performance, mobile-first layouts with smooth transitions"
    ],
    contributions: [
      "Built modern furniture e-commerce platform with responsive browsing across desktop and mobile",
      "Turned Figma designs into functional, production-ready experiences with Tailwind CSS",
      "Engineered reusable components and optimized image delivery for fast load times"
    ],
    color: "#f1f5f9",
    themeGradient: "from-amber-100 via-orange-50 to-amber-100 border-amber-200/60",
    leftBgGradient: "from-[#1c130b] via-[#2d1e11] to-[#140d07]",
    accentColor: "#d97706",
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656"
  },
  {
    title: "Fixpair",
    category: "Consultant & Booking / 2024",
    image: "/tutor-mockup-2.png",
    desc: "A consultant platform where users can find and book consultants, join real-time audio/video calls, view live conversation transcriptions, receive summarized consultation reports, and make per-minute payments for consultations.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
      "Push Notifications",
      "Axios",
      "TanStack Query"
    ],
    features: [
      "Real-time audio/video consultation calling and instant booking system",
      "Live conversation transcriptions streamed during active calls",
      "Automated summarized consultation reports delivered after meetings",
      "Per-minute payment processing and instant session billing",
      "Push notifications for scheduled booking updates and call reminders"
    ],
    contributions: [
      "Implemented real-time communication using Socket.IO for calling and messaging",
      "Integrated REST APIs using Axios and managed server state with TanStack Query",
      "Implemented push notifications for real-time user updates and consultation alerts"
    ],
    color: "#f8fafc",
    themeGradient: "from-teal-100 via-emerald-50 to-teal-100 border-teal-200/60",
    leftBgGradient: "from-[#061c18] via-[#0d2e27] to-[#041411]",
    accentColor: "#0d9488",
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656"
  },
  {
    title: "DevPulse Analytics",
    category: "SaaS Platform / 2024",
    image: "/portfolio-mockup.png",
    desc: "An enterprise developer intelligence dashboard tracking sprint velocity, code review throughput, and release health with interactive visualizations and automated summaries.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "REST APIs",
      "TanStack Query"
    ],
    features: [
      "Interactive data visualization with real-time throughput metrics",
      "Automated sprint health reports and release monitoring",
      "Granular role-based access control and workspace management",
      "Customizable widgets with dark/light themes and export options"
    ],
    contributions: [
      "Architected the modular analytics component library with Tailwind CSS",
      "Integrated complex REST APIs and optimized chart rendering speeds",
      "Implemented responsive mobile and desktop dashboard layouts"
    ],
    color: "#f8fafc",
    themeGradient: "from-purple-100 via-violet-50 to-purple-100 border-purple-200/60",
    leftBgGradient: "from-[#140b24] via-[#23123d] to-[#0d0718]",
    accentColor: "#8b5cf6",
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656"
  },
  {
    title: "NovaPay Wallet",
    category: "Fintech Platform / 2024",
    image: "/hero-visual.png",
    desc: "A digital wallet and cross-border payment experience featuring instant transfers, multi-currency balances, biometric transaction authorization, and automated recurring billing.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Axios",
      "Framer Motion"
    ],
    features: [
      "Instant peer-to-peer transfers with real-time balance updates",
      "Multi-currency conversion calculator and dynamic exchange rates",
      "Two-factor authentication and encrypted transaction verification",
      "Detailed statement downloads and spend categorization"
    ],
    contributions: [
      "Built clean, responsive fintech user flows with strict input validation",
      "Implemented centralized state management with Redux Toolkit",
      "Added tactile micro-animations and feedback states with Framer Motion"
    ],
    color: "#f1f5f9",
    themeGradient: "from-sky-100 via-cyan-50 to-sky-100 border-sky-200/60",
    leftBgGradient: "from-[#07192b] via-[#0c2742] to-[#04111f]",
    accentColor: "#0284c7",
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656"
  },
  {
    title: "CloudNest Drive",
    category: "Cloud & Productivity / 2024",
    image: "/1782603260471.png",
    desc: "A collaborative cloud asset management platform enabling users to upload, preview, organize, and securely share documents with expiration links and real-time syncing.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
      "React Dropzone",
      "shadcn/ui"
    ],
    features: [
      "Drag-and-drop chunked uploads with live progress indicators",
      "Instant file previews for PDFs, audio, video, and high-res images",
      "Secure link sharing with password protection and expiry timers",
      "Real-time folder presence and activity feed powered by Socket.IO"
    ],
    contributions: [
      "Designed and developed the responsive file grid and tree navigation",
      "Integrated Socket.IO for live collaboration and concurrent updates",
      "Optimized list virtualization for rendering thousands of assets"
    ],
    color: "#f8fafc",
    themeGradient: "from-rose-100 via-pink-50 to-rose-100 border-rose-200/60",
    leftBgGradient: "from-[#210912] via-[#381020] to-[#17050b]",
    accentColor: "#e11d48",
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656"
  }
];

const ProjectCards = memo(({ onSelect }: { onSelect: (p: Project) => void }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !pinRef.current) return;
      const cards = gsap.utils.toArray<HTMLDivElement>(".project-card", pinRef.current);
      if (!cards.length) return;

      // ── Initial setup ──
      // Card 0 is in the center, 100% visible and interactive.
      gsap.set(cards[0], {
        yPercent: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        transformOrigin: "top center",
        pointerEvents: "auto",
      });

      // Cards 1-5 start well below the viewport and completely hidden.
      cards.slice(1).forEach((card) => {
        gsap.set(card, {
          yPercent: 120,
          y: 0,
          opacity: 0,
          scale: 1,
          transformOrigin: "top center",
          pointerEvents: "none",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(cards.length - 1) * 700}px`,
          pin: pinRef.current,
          anticipatePin: 1,
          scrub: 0.15,
          fastScrollEnd: true,
          onUpdate: (self) => {
            if (indicatorRef.current) {
              const progressBar = indicatorRef.current.querySelector(".progress-bar") as HTMLElement;
              if (progressBar) {
                progressBar.style.width = `${self.progress * 100}%`;
              }
              const counterEl = indicatorRef.current.querySelector(".card-counter");
              if (counterEl) {
                const activeIndex = Math.min(
                  cards.length - 1,
                  Math.floor(self.progress * cards.length)
                );
                counterEl.textContent = `0${activeIndex + 1} / 0${cards.length}`;
              }
            }
          },
        },
      });

      scrollTriggerRef.current = tl.scrollTrigger || null;

      // Card 0 initial rest period
      tl.to({}, { duration: 0.3 });

      for (let i = 1; i < cards.length; i++) {
        // Slide incoming card[i] up from bottom into center
        tl.to(
          cards[i],
          {
            yPercent: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            force3D: true,
            pointerEvents: "auto",
            duration: 0.9,
            ease: "power2.out",
          }
        );

        // Stack all previous cards visibly behind it in a clean monochrome deck
        for (let j = 0; j < i; j++) {
          const step = i - j;
          tl.to(
            cards[j],
            {
              y: -step * 28,
              scale: Math.max(0.84, 1 - step * 0.032),
              opacity: 1, // 100% solid white
              force3D: true,
              pointerEvents: "none",
              duration: 0.9,
              ease: "power2.out",
            },
            "<"
          );
        }

        // Rest pause so the card is easily viewed
        tl.to({}, { duration: 0.3 });
      }
    }, sectionRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  const scrollCard = useCallback((direction: "next" | "prev") => {
    const st = scrollTriggerRef.current;
    if (!st) return;
    const total = projectsData.length;
    const currentStep = Math.round(st.progress * (total - 1));
    const nextStep = direction === "next"
      ? Math.min(total - 1, currentStep + 1)
      : Math.max(0, currentStep - 1);
    const targetScroll = st.start + (nextStep / (total - 1)) * (st.end - st.start);

    if (typeof window !== "undefined") {
      if ((window as any).__lenis) {
        (window as any).__lenis.scrollTo(targetScroll);
      } else {
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    }
  }, []);

  const truncateText = (text: string, length: number) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  return (
    <section ref={sectionRef} id="projects" className="relative min-h-screen bg-white">
      <div className="absolute inset-0 bg-gray-50/40 -z-10" />

      <div ref={pinRef} className="h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 relative overflow-hidden">
        {/* Section Title Header */}
        <div className="absolute top-6 md:top-8 left-6 md:left-12 z-[50]">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
              Selected Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none text-gray-900">
              WORKS <span className="text-gray-300">&</span> <br />
              <span className="text-gray-300 italic">CREATIONS.</span>
            </h2>
          </div>
        </div>

        {/* ── Cards Stack Container ── */}
        <div className="relative w-full max-w-6xl xl:max-w-7xl h-[64vh] md:h-[66vh] max-h-[580px] flex items-center justify-center mt-16 md:mt-24">
          {projectsData.map((project, i) => (
            <div
              key={project.title}
              className="project-card absolute inset-0 flex items-center justify-center will-change-transform [transform:translateZ(0)] [backface-visibility:hidden]"
              style={{
                zIndex: i + 1,
              }}
            >
              <div className="relative w-full h-full bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.08)] flex flex-col items-stretch">
                {/* ── Top Clean Monochrome Header (Solid White with safe buffer so black never peeks out) ── */}
                <div className="h-14 sm:h-16 w-full bg-white border-b border-gray-100 pl-12 sm:pl-16 md:pl-20 pr-6 pt-2.5 flex items-start shrink-0 select-none">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-gray-100 border border-gray-200/80 flex items-center justify-center text-[10px] font-mono font-bold text-gray-700 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-gray-900">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* ── Card Main Body (Split into Left Image & Right Content) ── */}
                <div className="w-full flex-1 flex flex-col lg:flex-row items-stretch overflow-hidden">
                  {/* Left: Project Image with Neutral Studio Dark Background */}
                  <div className="relative w-full h-[40%] sm:h-[45%] lg:h-full lg:w-3/5 overflow-hidden group bg-[#111318]">
                    {/* Subtle soft ambient light */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-4 md:p-8 transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                  </div>

                  {/* Right: Project Details */}
                  <div className="w-full h-[60%] sm:h-[55%] lg:h-full lg:w-2/5 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between bg-white overflow-hidden relative">
                    <div className="flex flex-col gap-4 lg:gap-6">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                          {project.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter">
                          {project.title}
                        </h3>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col gap-3">
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                          {truncateText(project.desc, 120)}
                        </p>
                        <button
                          onClick={() => onSelect(project)}
                          className="text-[10px] font-black uppercase tracking-widest text-indigo-600 flex items-center gap-2 hover:gap-3 transition-all self-start cursor-pointer"
                        >
                          View Details <MoveRight size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Card Bottom CTA Links */}
                    <div className="flex items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-gray-100">
                      <a
                        href={project.liveLink || "https://github.com/pronoy656"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-900"
                      >
                        Live Preview
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-indigo-600 transition-all">
                          <ArrowUpRight size={15} />
                        </div>
                      </a>
                      <div className="flex gap-2">
                        <a
                          href={project.githubLink || "https://github.com/pronoy656"}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          className="p-2.5 sm:p-3 rounded-full border border-gray-100 hover:border-indigo-600 hover:text-indigo-600 transition-all text-gray-400"
                        >
                          <GithubIcon />
                        </a>
                      </div>
                    </div>

                    {/* Large Background Card Number */}
                    <div className="absolute bottom-4 right-8 hidden lg:block pointer-events-none select-none">
                      <span className="text-[8vw] font-black text-gray-100/60 leading-none">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Interactive Progress & Counter Bar with Prev/Next Controls ── */}
        <div
          ref={indicatorRef}
          className="absolute bottom-6 md:bottom-8 right-6 md:right-12 flex items-center gap-3 z-[50] bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-gray-200/80 shadow-md"
        >
          <button
            onClick={() => scrollCard("prev")}
            aria-label="Previous Project"
            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-600 flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft size={14} />
          </button>

          <span className="card-counter text-xs font-mono font-bold text-gray-800 min-w-[50px] text-center select-none">
            01 / 0{projectsData.length}
          </span>

          <div className="w-14 sm:w-16 h-1.5 bg-gray-200/80 rounded-full overflow-hidden">
            <div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-150" />
          </div>

          <button
            onClick={() => scrollCard("next")}
            aria-label="Next Project"
            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-600 flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
});

ProjectCards.displayName = "ProjectCards";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  const handleSelect = useCallback((p: Project) => {
    setSelectedProject(p);
  }, []);

  return (
    <>
      <ProjectCards onSelect={handleSelect} />

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 md:p-12">
            <style>{`.modal-scroll::-webkit-scrollbar { display: none; }`}</style>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-gray-900/60 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
              <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 z-50 p-3 rounded-full bg-gray-900/5 hover:bg-gray-900/10 transition-colors">
                <X size={20} className="text-gray-900" />
              </button>
              {/* Left — image pane: stretches to full modal height via self-stretch */}
              <div className="w-full md:w-[45%] shrink-0 self-stretch relative bg-[#0f0f0f] rounded-t-[3rem] md:rounded-l-[3rem] md:rounded-tr-none overflow-hidden" style={{ minHeight: "320px" }}>
                {/* Premium blurred backdrop to fill empty space */}
                <Image src={selectedProject.image} alt="" fill className="object-cover opacity-50 scale-125 blur-3xl pointer-events-none" unoptimized />
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                
                {/* Foreground crisp image */}
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-contain p-6 md:p-10 drop-shadow-2xl z-10" unoptimized />
              </div>
              {/* Right — scrollable content; scrollbar hidden via inline style */}
              <div
                className="modal-scroll w-full md:w-[55%] p-8 md:p-14 flex flex-col gap-8 overflow-y-auto rounded-b-[3rem] md:rounded-r-[3rem] md:rounded-bl-none"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
              >
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">{selectedProject.category}</span>
                  <h3 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none">{selectedProject.title}</h3>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Overview</h4>
                    <p className="text-gray-600 text-base leading-relaxed">{selectedProject.desc}</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Key Features</h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-500">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Contributions</h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {selectedProject.contributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-500 italic">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-300 shrink-0" /> {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                    <div className="space-y-1"><span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Project Type</span><p className="font-bold text-gray-900">{selectedProject.category.split('/')[0]}</p></div>
                    <div className="space-y-1"><span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Year</span><p className="font-bold text-gray-900">{selectedProject.category.split('/')[1]}</p></div>
                  </div>
                  <div className="pt-4 flex gap-4">
                    <a
                      href={selectedProject.liveLink || "https://github.com/pronoy656"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-5 rounded-full bg-gray-900 text-white font-black uppercase tracking-widest text-xs hover:bg-indigo-600 transition-all flex items-center justify-center gap-3"
                    >
                      Visit Live Project <ArrowUpRight size={18} />
                    </a>
                    <a
                      href={selectedProject.githubLink || "https://github.com/pronoy656"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="px-6 py-5 rounded-full border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center justify-center text-gray-700"
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
    </>
  );
}
