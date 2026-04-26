"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Alexander Volkov",
    role: "Lead Engineer @ CyberCore",
    content: "Pronoy's ability to architect scalable frontend systems is world-class. He took our complex dashboard and made it performant and stunning.",
    size: "large",
    color: "bg-indigo-50"
  },
  {
    name: "Sarah Miller",
    role: "Product Owner @ Luminance",
    content: "The attention to detail in the micro-animations was beyond our expectations.",
    size: "small",
    color: "bg-purple-50"
  },
  {
    name: "Daniel Kwon",
    role: "Founder @ NeoStack",
    content: "We needed a developer who understood both high-end design and robust architecture. Pronoy delivered exactly that.",
    size: "medium",
    color: "bg-blue-50"
  },
  {
    name: "Emily Watson",
    role: "Creative Director",
    content: "His work with GSAP is pure magic. Our landing page now feels alive.",
    size: "medium",
    color: "bg-emerald-50"
  },
  {
    name: "Michael Ross",
    role: "Startup Mentor",
    content: "A rare talent who bridges the gap between vision and execution perfectly.",
    size: "small",
    color: "bg-orange-50"
  },
  {
    name: "Jessica Chen",
    role: "CTO @ FlowState",
    content: "Professionalism, speed, and absolute quality. Pronoy is our go-to for any premium web project.",
    size: "large",
    color: "bg-rose-50"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Animation
      gsap.from(".bento-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.1,
      });

      // 2. Mouse Parallax (Interactive Spotlight)
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 40;
        const y = (clientY / window.innerHeight - 0.5) * 40;

        gsap.to(".parallax-move", {
          x: (i) => x * (i + 1) * 0.2,
          y: (i) => y * (i + 1) * 0.2,
          duration: 2,
          ease: "power2.out"
        });

        // Spotlight update
        document.querySelectorAll(".bento-card").forEach((card: any) => {
          const rect = card.getBoundingClientRect();
          const localX = clientX - rect.left;
          const localY = clientY - rect.top;
          card.style.setProperty("--mouse-x", `${localX}px`);
          card.style.setProperty("--mouse-y", `${localY}px`);
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-40 bg-[#fcfcfd] overflow-hidden relative"
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-20">
        
        {/* Unique Heading Layout */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
           <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                    <Quote size={20} />
                 </div>
                 <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">Client Impact</span>
              </div>
              <h2 className="text-[10vw] md:text-7xl font-black tracking-tighter text-[#1a1c20] leading-[0.9]">
                WHAT THEY <span className="text-indigo-600 italic">SAY.</span>
              </h2>
           </div>
           <div className="flex flex-col items-end text-right pb-2">
              <p className="text-gray-400 text-sm font-medium mb-4 max-w-xs">
                I help companies across the globe build digital products that people love.
              </p>
              <div className="flex items-center gap-2 text-black font-bold group cursor-pointer">
                 <span>VIEW ALL REVIEWS</span>
                 <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
           </div>
        </div>

        {/* The Unique Bento Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
           {testimonials.map((t, i) => (
             <div 
               key={i}
               className={`bento-card group relative p-10 rounded-[2.5rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:border-indigo-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between ${
                 t.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                 t.size === 'medium' ? 'md:row-span-2' : ''
               } ${t.color}`}
               style={{
                 '--mouse-x': '50%',
                 '--mouse-y': '50%'
               } as any}
             >
                {/* Interactive Spotlight Overlay */}
                <div 
                  className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.08), transparent 40%)`
                  }}
                />

                <div className="relative z-10">
                   <div className="flex gap-1 mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                   </div>
                   <p className={`text-[#1a1c20] font-bold leading-tight tracking-tight mb-8 transition-transform duration-700 group-hover:scale-[1.02] origin-left ${
                     t.size === 'large' ? 'text-3xl md:text-5xl' : 
                     t.size === 'medium' ? 'text-2xl md:text-3xl' : 'text-lg'
                   }`}>
                      &ldquo;{t.content}&rdquo;
                   </p>
                </div>

                <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-black/5">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-black text-xs text-indigo-600 shadow-sm transition-transform duration-500 group-hover:rotate-[360deg]">
                      {t.name.split(' ').map((n: string) => n[0]).join('')}
                   </div>
                   <div className="flex flex-col">
                      <span className="text-sm font-black text-[#1a1c20] tracking-tight">{t.name}</span>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t.role}</span>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
