"use client";

import React from "react";
import dynamic from "next/dynamic";
import { MoveRight, Download } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import ExplodeText from "@/components/ExplodeText";

const AsciiWave = dynamic(() => import("@/components/AsciiWave"), {
  ssr: false,
});

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiRedux,
  SiJavascript,
  SiFirebase,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techIcons = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black dark:text-white" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#3178C6]" />,
  },
  {
    name: "React",
    icon: <SiReact className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#61DAFB]" />,
  },
  {
    name: "Redux",
    icon: <SiRedux className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#764ABC]" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#F7DF1E]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#06B6D4]" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#5FA04E]" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black dark:text-white" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#47A248]" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#FFCA28]" />,
  },
  {
    name: "AWS",
    icon: <FaAws className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#FF9900]" />,
  },
  {
    name: "Postman",
    icon: <SiPostman className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#FF6C37]" />,
  },
  {
    name: "Figma",
    icon: <SiFigma className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#F24E1E]" />,
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  // Motion variants respecting prefers-reduced-motion
  const techContainerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.035,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const techItemVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      scale: shouldReduceMotion ? 1 : 0.85,
      y: shouldReduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.45,
        ease,
      },
    },
  };

  return (
    <section
      className="relative min-h-0 md:min-h-screen bg-[#fcfcfd] dark:bg-[#08090f] dark:bg-[radial-gradient(ellipse_at_top,#151936_0%,#090a11_55%,#07080d_100%)] overflow-hidden transition-colors duration-300"
    >
      {/* ── Interactive ASCII Wave Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 md:opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)]">
        <AsciiWave
          characters=" .:-+*=%@{}#<>"
          color="#d35af8"
          waveTension={1.5}
          waveTwist={0.83}
          invert={false}
          noiseScale={1.9}
          elementSize={23}
          speed={0.1}
          hasCursorInteraction={true}
          intensity={0.5}
          interactionIntensity={0.15}
          videoUrl=""
        />
      </div>

      {/* ── Background Mood Elements ── */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Spreading Central Aura for 100% Text Clarity */}
        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1100px] h-[680px] sm:h-[620px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.85)_40%,rgba(255,255,255,0.4)_65%,transparent_80%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(10,12,22,0.94)_0%,rgba(9,10,16,0.78)_45%,rgba(7,8,13,0.35)_68%,transparent_85%)] blur-2xl pointer-events-none" />

        {/* Soft Ambient Brand Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[35vw] bg-gradient-to-r from-indigo-100/25 via-purple-100/15 dark:from-indigo-500/22 dark:via-violet-500/14 dark:to-cyan-500/8 to-transparent blur-[140px] rounded-full" />
        
        {/* Elegant Watermark */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-indigo-900/[0.03] dark:text-indigo-400/[0.04] uppercase tracking-tighter select-none pointer-events-none">
          ENGINEER
        </div>
      </div>

      <div className="relative z-10 w-full min-h-0 md:min-h-screen grid grid-cols-1 lg:grid-cols-12 items-center px-4 sm:px-8 md:px-24 pt-24 pb-6 sm:pt-28 sm:pb-10 md:py-0 max-w-[1920px] mx-auto">
        
        {/* ── CENTERED CONTENT ── */}
        <div className="lg:col-span-12 flex flex-col items-center text-center gap-5 sm:gap-7">
          
          {/* 1. Tech Stack Icons: Sequential Staggered Entrance */}
          <motion.div
            variants={techContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap md:flex-nowrap items-center justify-center gap-1.5 sm:gap-3 md:gap-4 max-w-[300px] sm:max-w-[540px] md:max-w-none mt-1 sm:mt-6 mb-0 sm:mb-2 py-1 px-2"
          >
            {techIcons.map((tech) => (
              <motion.div
                key={tech.name}
                variants={techItemVariants}
                title={tech.name}
                className={`group relative items-center justify-center transition-all duration-300 hover:scale-125 hover:z-30 cursor-pointer select-none ${
                  tech.name === "Figma" ? "hidden md:flex" : "flex"
                }`}
              >
                {/* Circle Border Container */}
                <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-gray-200/90 dark:border-zinc-800 ring-1 sm:ring-2 ring-white dark:ring-zinc-950 bg-white dark:bg-zinc-900 hover:border-gray-900/60 dark:hover:border-indigo-500/70 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center justify-center transition-all duration-300">
                  <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>
                </div>

                {/* Minimal Floating Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-md bg-gray-900/95 dark:bg-zinc-100 text-white dark:text-zinc-950 text-[10px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md z-40">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="relative flex flex-col gap-4 sm:gap-5 items-center w-full">
            {/* Localized Aura Spread behind Headline & Subtitle for crystal-clear readability */}
            <div className="absolute -inset-x-8 sm:-inset-x-16 -inset-y-8 sm:-inset-y-12 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.7)_50%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(9,9,11,0.92)_0%,rgba(9,9,11,0.65)_50%,transparent_75%)] blur-xl pointer-events-none -z-10" />

            {/* 2 & 3. Main Headline & Full-Stack Developer Title (Explode / Blur Text Animation) */}
            <h1 className="font-black tracking-tighter text-[#1a1c20] dark:text-zinc-50 flex flex-col items-center gap-1 sm:gap-2 text-center px-1 sm:px-2 max-w-full">
              {/* Line 1: Frontend-Focused */}
              <div className="flex justify-center">
                <ExplodeText
                  text="Frontend-Focused"
                  animateBy="letter"
                  from="start"
                  scale={3}
                  blur={8}
                  duration={0.65}
                  charDelay={0.025}
                  delay={0.15}
                  color="currentColor"
                  fontSize="text-[clamp(30px,8.5vw,44px)] sm:text-[6.4vw] lg:text-[5.2vw] leading-[1.06] sm:leading-[1.05] font-black tracking-tighter"
                  className="justify-center text-[#1a1c20] dark:text-zinc-50"
                />
              </div>

              {/* Line 2: Full-Stack Developer. */}
              <div className="flex justify-center">
                <ExplodeText
                  text="Full-Stack Developer."
                  animateBy="letter"
                  from="start"
                  scale={3}
                  blur={8}
                  duration={0.65}
                  charDelay={0.025}
                  delay={0.45}
                  color="currentColor"
                  fontSize="text-[clamp(30px,8.5vw,44px)] sm:text-[6.4vw] lg:text-[5.2vw] leading-[1.06] sm:leading-[1.05] font-black tracking-tighter"
                  className="justify-center text-indigo-600 dark:text-indigo-400"
                />
              </div>
            </h1>

            {/* 4a. Concise Mobile Subtitle (2 clean lines, zero clutter) */}
            <div className="sm:hidden w-full max-w-sm text-center px-2">
              <ExplodeText
                animateBy="word"
                from="start"
                scale={1.6}
                blur={4}
                duration={0.4}
                wordDelay={0.035}
                delay={0.9}
                className="block text-center w-full"
              >
                <p className="text-[14.5px] text-gray-600 dark:text-zinc-400 leading-[1.65] font-medium text-center">
                  <span className="explode-word inline-block opacity-0">I&apos;m</span>{" "}
                  <span className="explode-word inline-block opacity-0 text-gray-900 dark:text-white font-bold">Pronoy</span>{" "}
                  <span className="explode-word inline-block opacity-0 text-gray-900 dark:text-white font-bold">Pal</span>{" "}
                  <span className="explode-word inline-block opacity-0">—</span>{" "}
                  <span className="explode-word inline-block opacity-0">Full-Stack</span>{" "}
                  <span className="explode-word inline-block opacity-0">Engineer</span>{" "}
                  <span className="explode-word inline-block opacity-0">crafting</span>{" "}
                  <span className="explode-word inline-block opacity-0">fast,</span>{" "}
                  <span className="explode-word inline-block opacity-0">scalable</span>{" "}
                  <span className="explode-word inline-block opacity-0">web</span>{" "}
                  <span className="explode-word inline-block opacity-0">applications.</span>
                </p>
              </ExplodeText>
            </div>

            {/* 4b. Full Desktop & Tablet Subtitle Paragraph */}
            <div className="hidden sm:block w-full max-w-2xl md:max-w-3xl lg:max-w-4xl text-center px-4">
              <ExplodeText
                animateBy="word"
                from="start"
                scale={2}
                blur={6}
                duration={0.45}
                wordDelay={0.032}
                delay={0.95}
                className="block text-center w-full"
              >
                <p className="text-base md:text-lg text-gray-600 dark:text-zinc-400 leading-relaxed font-medium text-center">
                  <span className="explode-word inline-block opacity-0">I&apos;m</span>{" "}
                  <span className="explode-word inline-block opacity-0 text-gray-900 dark:text-white font-bold">Pronoy</span>{" "}
                  <span className="explode-word inline-block opacity-0 text-gray-900 dark:text-white font-bold">Pal</span>{" "}
                  <span className="explode-word inline-block opacity-0">—</span>{" "}
                  <span className="explode-word inline-block opacity-0">a</span>{" "}
                  <span className="explode-word inline-block opacity-0">Full-Stack</span>{" "}
                  <span className="explode-word inline-block opacity-0">Engineer</span>{" "}
                  <span className="explode-word inline-block opacity-0">currently</span>{" "}
                  <span className="explode-word inline-block opacity-0">focused</span>{" "}
                  <span className="explode-word inline-block opacity-0">on</span>{" "}
                  <span className="explode-word inline-block opacity-0">architecting</span>{" "}
                  <span className="explode-word inline-block opacity-0">resilient</span>{" "}
                  <span className="explode-word inline-block opacity-0 px-2 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-[13px] sm:text-sm shadow-xs align-baseline">
                    System Design
                  </span>
                  <span className="explode-word inline-block opacity-0">,</span>{" "}
                  <span className="explode-word inline-block opacity-0">maximizing</span>{" "}
                  <span className="explode-word inline-block opacity-0 px-2 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-[13px] sm:text-sm shadow-xs align-baseline">
                    Web Performance
                  </span>{" "}
                  <span className="explode-word inline-block opacity-0">for</span>{" "}
                  <span className="explode-word inline-block opacity-0">sub-second</span>{" "}
                  <span className="explode-word inline-block opacity-0">speeds,</span>{" "}
                  <span className="explode-word inline-block opacity-0">and</span>{" "}
                  <span className="explode-word inline-block opacity-0">shipping</span>{" "}
                  <span className="explode-word inline-block opacity-0">mission-critical</span>{" "}
                  <span className="explode-word inline-block opacity-0 px-2 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-[13px] sm:text-sm shadow-xs align-baseline">
                    Scalable Architecture
                  </span>{" "}
                  <span className="explode-word inline-block opacity-0">that</span>{" "}
                  <span className="explode-word inline-block opacity-0">drives</span>{" "}
                  <span className="explode-word inline-block opacity-0">real</span>{" "}
                  <span className="explode-word inline-block opacity-0">business</span>{" "}
                  <span className="explode-word inline-block opacity-0">value.</span>
                </p>
              </ExplodeText>
            </div>
          </div>

          {/* 5. CTA Buttons (fade/slide in after subtitle) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.65,
              delay: shouldReduceMotion ? 0 : 1.75,
              ease,
            }}
            className="grid grid-cols-2 sm:flex sm:flex-row sm:items-center sm:justify-center gap-2.5 sm:gap-5 mt-1 w-full max-w-[370px] sm:max-w-none"
          >
            {/* Primary CTA: Explore Projects */}
            <a
              href="#projects"
              className="group relative flex items-center justify-center gap-1.5 sm:gap-3.5 h-11 sm:h-auto px-3 sm:px-9 sm:py-4 bg-[#1a1c20] dark:bg-zinc-100 text-white dark:text-zinc-950 hover:text-white dark:hover:text-white border border-transparent rounded-full font-bold overflow-hidden active:scale-95 shadow-[0_15px_35px_rgba(0,0,0,0.10)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.3)] transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-[11px] sm:text-sm whitespace-nowrap tracking-tight sm:tracking-normal">Explore Projects</span>
              <span className="relative z-10 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white/10 dark:bg-zinc-950/10 dark:group-hover:bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 shrink-0">
                <MoveRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </span>
            </a>

            {/* Secondary CTA: Download Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Pronoy_Pal_Resume.pdf"
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-3 h-11 sm:h-auto px-3 sm:px-7 sm:py-4 rounded-full transition-all duration-300 active:scale-95 border border-gray-200/90 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-400 bg-white dark:bg-zinc-900 shadow-xs hover:shadow-md cursor-pointer"
            >
              <span className="relative z-10 text-[11px] sm:text-sm font-bold text-[#1a1c20] dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors whitespace-nowrap tracking-tight sm:tracking-normal">
                Download Resume
              </span>
              <span className="relative z-10 flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gray-100 dark:bg-zinc-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/20 text-gray-700 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all group-hover:translate-y-0.5 shrink-0">
                <Download className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </span>
            </a>
          </motion.div>

          {/* 6. MOBILE-ONLY Social Profiles & Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.6,
              delay: shouldReduceMotion ? 0 : 1.85,
              ease,
            }}
            className="flex md:hidden items-center justify-center gap-3 mt-1 sm:mt-2 z-20 relative"
          >
            <a
              href="https://github.com/pronoy656"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-gray-200/90 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/10 text-gray-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-xs hover:shadow-md flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <GithubIcon />
            </a>

            <a
              href="https://linkedin.com/in/pronoy-pal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-gray-200/90 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/10 text-gray-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-xs hover:shadow-md flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <LinkedinIcon />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.6,
              delay: shouldReduceMotion ? 0 : 1.95,
              ease,
            }}
            className="flex md:hidden flex-col items-center gap-1 mt-1 text-center"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-gray-400 dark:text-zinc-500">
                Current Focus
              </span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#1a1c20] dark:text-zinc-100 tracking-tight">
              System Design &amp; Web Performance
            </span>
          </motion.div>
        </div>

      </div>

      {/* ── DESKTOP FOOTER BAR (Sequential Entrance & Guaranteed Clickable with Circle Hover Effect) ── */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0.01 : 0.65,
          delay: shouldReduceMotion ? 0 : 1.85,
          ease,
        }}
        className="hidden md:flex absolute bottom-8 sm:bottom-10 left-0 right-0 px-8 md:px-24 justify-between items-end pointer-events-none z-30"
      >
        <div className="flex gap-12 pointer-events-auto">
          <div className="flex flex-col gap-1 items-start">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 dark:text-zinc-400">Based In</span>
            <span className="text-xs font-bold text-[#1a1c20] dark:text-zinc-100">Dhaka, Bangladesh</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 pointer-events-auto items-end">
          <div className="flex gap-3 mb-1 justify-end">
            <a
              href="https://github.com/pronoy656"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-11 h-11 rounded-full border border-gray-200/90 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm hover:border-indigo-600 dark:hover:border-indigo-400 hover:bg-white dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-xs hover:shadow-md flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/pronoy-pal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-11 h-11 rounded-full border border-gray-200/90 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm hover:border-indigo-600 dark:hover:border-indigo-400 hover:bg-white dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-xs hover:shadow-md flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <LinkedinIcon />
            </a>
          </div>

          <div className="flex flex-col gap-1 items-end">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 dark:text-zinc-400">Current Focus</span>
            <span className="text-xs font-bold text-[#1a1c20] dark:text-zinc-100">System Design &amp; Web Performance</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
