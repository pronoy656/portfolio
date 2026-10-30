"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, MoveRight, Star, Sparkles } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
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
  SiSocketdotio,
  SiMongodb,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techIcons = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-6 h-6 sm:w-7 sm:h-7 text-black" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-6 h-6 sm:w-7 sm:h-7 text-[#3178C6]" />,
  },
  {
    name: "React",
    icon: <SiReact className="w-6 h-6 sm:w-7 sm:h-7 text-[#61DAFB]" />,
  },
  {
    name: "Redux",
    icon: <SiRedux className="w-6 h-6 sm:w-7 sm:h-7 text-[#764ABC]" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-6 h-6 sm:w-7 sm:h-7 text-[#F7DF1E]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-6 h-6 sm:w-7 sm:h-7 text-[#06B6D4]" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-6 h-6 sm:w-7 sm:h-7 text-[#5FA04E]" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="w-6 h-6 sm:w-7 sm:h-7 text-black" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-6 h-6 sm:w-7 sm:h-7 text-[#47A248]" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFCA28]" />,
  },
  {
    name: "AWS",
    icon: <FaAws className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF9900]" />,
  },
  {
    name: "Postman",
    icon: <SiPostman className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF6C37]" />,
  },
  {
    name: "Figma",
    icon: <SiFigma className="w-6 h-6 sm:w-7 sm:h-7 text-[#F24E1E]" />,
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1,
      });

      gsap.from(".hero-image-box", {
        scale: 0.95,
        opacity: 0,
        duration: 1.8,
        ease: "power4.out",
        delay: 0.4,
      });

      // Subtle float animation for the visual
      gsap.to(".hero-visual-float", {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    // Mouse parallax for the image box
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;
      
      gsap.to(visualRef.current, {
        x: x,
        y: y,
        duration: 1.2,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#fcfcfd] overflow-hidden"
    >
      {/* ── Background Mood Elements ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Luminous Glows */}
        {/* <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-indigo-100/60 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[50%] h-[50%] bg-purple-100/70 blur-[120px] rounded-full" /> */}
        
        {/* Subtle Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />
        
        {/* Elegant Watermark */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-indigo-900/[0.04] uppercase tracking-tighter select-none pointer-events-none">
          ENGINEER
        </div>
      </div>

      <div className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 items-center px-8 md:px-24 py-20 max-w-[1920px] mx-auto">
        
        {/* ── CENTERED CONTENT ── */}
        <div className="lg:col-span-12 flex flex-col items-center text-center gap-8">
          {/* Tech Stack Icons with Circular Border - Single Overlapping Line */}
          <div className="hero-reveal flex items-center justify-center flex-nowrap gap-3 sm:gap-4 mt-6 sm:mt-8 mb-4 py-2 px-2 max-w-full overflow-x-auto sm:overflow-visible">
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                title={tech.name}
                className="group relative flex items-center justify-center transition-all duration-300 hover:scale-125 hover:z-30 cursor-pointer select-none"
              >
                {/* Circle Border Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-200/90 ring-2 ring-white bg-white hover:border-gray-900/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center justify-center transition-all duration-300">
                  <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>
                </div>

                {/* Minimal Floating Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-md bg-gray-900/95 text-white text-[10px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md z-40">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 items-center">
            <h1 className="hero-reveal font-black tracking-tighter text-[#1a1c20] flex flex-col items-center gap-3 text-center">
              <span className="text-[8.5vw] sm:text-[7vw] lg:text-[5.8vw] leading-none whitespace-nowrap">
                I Build Fast &amp; Scalable
              </span>
              <span className="text-[8.5vw] sm:text-[7vw] lg:text-[5.8vw] leading-none text-indigo-600 whitespace-nowrap">
                Web Applications.
              </span>
            </h1>

            <p className="hero-reveal text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed font-medium text-center">
              I&apos;m <span className="text-gray-900 font-bold">Pronoy Pal</span> — a Frontend Engineer who turns ideas into
              production-ready products. I specialise in{" "}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-sm">
                React &amp; Next.js
              </span>{" "}
              ,{" "}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-sm">
                Performance
              </span>{" "}
              optimisation, and shipping clean,{" "}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-indigo-600 text-white font-semibold text-sm">
                Accessible UI
              </span>{" "}
              that users love.
            </p>
          </div>

          <div className="hero-reveal flex flex-wrap items-center justify-center gap-5 mt-2">
             <a href="#projects" className="group relative flex items-center gap-4 px-9 py-4 bg-[#1a1c20] text-white rounded-full font-bold overflow-hidden active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.3)] transition-all duration-500">
               {/* Left-to-right fill effect */}
               <div className="absolute inset-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
               <span className="relative z-10 text-sm">Explore Deployed Builds</span>
               <span className="relative z-10 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                 <MoveRight size={13} />
               </span>
             </a>
             {/* Premium ghost pill — secondary CTA */}
             <a
               href="#contact"
               className="group relative inline-flex items-center gap-3 px-6 py-4 rounded-full transition-all duration-300 active:scale-95 border border-gray-200/90 hover:border-indigo-600 bg-white shadow-sm"
             >
               <span className="relative z-10 text-sm font-bold text-[#1a1c20] group-hover:text-indigo-600 transition-colors">
                 Initialize Contact
               </span>
               <span className="relative z-10 flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 group-hover:bg-indigo-50 text-gray-700 group-hover:text-indigo-600 transition-colors">
                 <ArrowRight size={12} />
               </span>
             </a>
          </div>
        </div>


      </div>

      {/* ── FOOTER BAR ── */}
      <div className="absolute bottom-10 left-0 right-0 px-8 md:px-24 flex justify-between items-end">
      
        <div className="hidden md:flex gap-12">
           <div className="flex flex-col gap-1 items-end">
             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500">Based In</span>
             <span className="text-xs font-bold text-[#1a1c20]">Dhaka, Bangladesh</span>
           </div>
           
        </div>
        <div className="flex flex-col gap-4">
           <div className="flex gap-6 mb-2">
              <a href="https://github.com/pronoy656" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-indigo-600 transition-all duration-300 hover:scale-125 transform">
                <GithubIcon />
              </a>
              <a href="https://linkedin.com/in/pronoy-pal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-indigo-600 transition-all duration-300 hover:scale-125 transform">
                <LinkedinIcon />
              </a>
           </div>
           <div className="flex flex-col gap-1">
             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500">Current Focus</span>
             <span className="text-xs font-bold text-[#1a1c20]">System Design & Web Performance</span>
           </div>
        </div>
      </div>

    </section>
  );
}
