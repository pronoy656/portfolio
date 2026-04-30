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
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-indigo-900/[0.05] uppercase tracking-tighter select-none pointer-events-none">
          CREATIVE
        </div>
      </div>

      <div className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 items-center px-8 md:px-24 py-20 max-w-[1920px] mx-auto">
        
        {/* ── CENTERED CONTENT ── */}
        <div className="lg:col-span-12 flex flex-col items-center text-center gap-10">
          <div className="flex flex-col gap-8 items-center">
            <h1 className="hero-reveal text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-[0.9] text-[#1a1c20] mt-12">
              Elevating Digital <br/> 
              <span className="text-indigo-600 italic font-medium">Standard.</span>
            </h1>
            <p className="hero-reveal text-base md:text-xl text-gray-500 max-w-2xl mt-8 leading-relaxed font-medium">
              I specialize in crafting high-performance, visually stunning 
              web applications that leave a lasting impression. Dedicated to 
              bridging the gap between engineering and art.
            </p>
          </div>

          <div className="hero-reveal flex flex-wrap items-center justify-center gap-8 mt-4">
             <button className="group flex items-center gap-4 px-10 py-5 bg-[#1a1c20] text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-indigo-500/20">
                Let&apos;s Build Together
               <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                 <MoveRight size={14} />
               </div>
             </button>
             <a href="#projects" className="group text-sm font-bold text-[#1a1c20] flex items-center gap-2">
               <span className="border-b-2 border-indigo-500/30 group-hover:border-indigo-500 transition-colors py-1">Browse Case Studies</span>
               <ArrowRight size={14} className="text-indigo-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
             </a>
          </div>

          {/* Experience Bar */}
          <div className="hero-reveal flex items-center gap-12 mt-12 bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-gray-100 shadow-sm">
             <div className="flex flex-col items-center">
               <span className="text-4xl font-black text-[#1a1c20] tracking-tighter">03+</span>
               <span className="text-[9px] uppercase tracking-widest font-black text-gray-500 mt-1 text-center">Years Expert</span>
             </div>
             <div className="w-px h-12 bg-gray-200" />
             <div className="flex flex-col items-center">
               <span className="text-4xl font-black text-[#1a1c20] tracking-tighter">24+</span>
               <span className="text-[9px] uppercase tracking-widest font-black text-gray-500 mt-1 text-center">Global Success</span>
             </div>
             <div className="w-px h-12 bg-gray-200" />
             <div className="flex flex-col items-center">
               <span className="text-4xl font-black text-[#1a1c20] tracking-tighter">100%</span>
               <span className="text-[9px] uppercase tracking-widest font-black text-gray-500 mt-1 text-center">Happy Clients</span>
             </div>
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
              {[GithubIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-indigo-600 transition-all duration-300 hover:scale-125 transform">
                  <Icon />
                </a>
              ))}
           </div>
           <div className="flex flex-col gap-1">
             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500">Current Focus</span>
             <span className="text-xs font-bold text-[#1a1c20]">Next.js / TypeScript / GSAP</span>
           </div>
        </div>
      </div>

    </section>
  );
}
