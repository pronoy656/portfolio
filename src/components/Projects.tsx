"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const projects = [
  {
    title: "Aura AI",
    category: "AI Platform / 2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    desc: "Architecting a high-performance AI analytics dashboard with real-time data streaming and predictive modeling.",
    color: "#f8fafc"
  },
  {
    title: "Lumina Studio",
    category: "Creative Agency / 2023",
    image: "/hero-visual.png",
    desc: "Delivering a cinematic web experience for a global design studio with fluid transitions and immersive interactions.",
    color: "#f1f5f9"
  },
  {
    title: "Nexus Protocol",
    category: "Fintech & Web3 / 2024",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600&auto=format&fit=crop",
    desc: "Redesigning the future of decentralized finance with a focus on institutional-grade security and trustless architecture.",
    color: "#f8fafc"
  },
  {
    title: "EcoStack",
    category: "SaaS Solution / 2023",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1600&auto=format&fit=crop",
    desc: "Optimizing cloud infrastructure management through a minimalist and highly efficient user interface for enterprise teams.",
    color: "#f1f5f9"
  },
  {
    title: "Vanguard Analytics",
    category: "Data Viz / 2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    desc: "Building advanced enterprise dashboards with complex data visualization and real-time insight generation.",
    color: "#f8fafc"
  },
  {
    title: "Zenith Mobile",
    category: "Productivity / 2023",
    image: "/hero-visual.png",
    desc: "Developing high-end lifestyle applications focusing on productivity, wellness, and seamless mobile interactions.",
    color: "#f1f5f9"
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      
      // Pinning the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`, // Adjust length based on number of cards
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            // Update progress bar
            if (indicatorRef.current) {
              const progressBar = indicatorRef.current.querySelector(".progress-bar") as HTMLElement;
              if (progressBar) {
                progressBar.style.width = `${self.progress * 100}%`;
              }
              // Fade out indicator at the very end
              indicatorRef.current.style.opacity = self.progress > 0.9 ? `${(1 - self.progress) * 10}` : "1";
            }
          },
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return; // Skip the first card as it's the base

        tl.fromTo(
          card,
          {
            y: "200vh",
            scale: 1, // Start at native scale to keep text sharp
            opacity: 0,
          },
          {
            y: 0,
            scale: 1, // Keep native scale
            opacity: 1,
            ease: "none",
            duration: 1,
            force3D: true, // Standard for smooth movement
          },
          i * 1.2 // Stagger timing
        );

        // Previous card animation (scaling down ONLY for background cards)
        if (i > 0) {
          tl.to(
            cards[i - 1],
            {
              scale: 0.94 - (cards.length - i) * 0.02, // Clearer visual depth
              opacity: 0.3,
              duration: 0.6,
              force3D: true,
            },
            i * 1.2
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="projects" 
      className="relative min-h-screen bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gray-50/30 -z-10" />
      
      <div className="h-screen w-full flex flex-col items-center justify-center px-6">
        
        {/* Section Title (Fixed while cards scroll) */}
        <div className="absolute top-12 left-12 z-[150]">
           <div className="flex flex-col gap-2">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">Selected Portfolio</span>
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-gray-900">
               WORKS <span className="text-gray-300">&</span> <br/> 
               <span className="text-gray-300 italic">CREATIONS.</span>
             </h2>
           </div>
        </div>

        {/* Cards Container */}
        <div className="relative w-full max-w-7xl h-[75vh] flex items-center justify-center mt-48">
          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ 
                zIndex: i + 10,
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <div 
                className="relative w-full h-full bg-white rounded-[3rem] overflow-hidden border border-gray-100 pointer-events-auto flex flex-col lg:flex-row items-center"
                style={{
                  transform: "translate3d(0,0,0)",
                  backfaceVisibility: "hidden",
                }}
              >
                
                {/* Image Section */}
                <div className="relative w-full lg:w-3/5 h-full overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>

                {/* Info Section */}
                <div className="w-full lg:w-2/5 p-10 lg:p-16 flex flex-col gap-8" style={{ transform: "translateZ(0)" }}>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 antialiased">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter antialiased">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed antialiased">
                    {project.desc}
                  </p>

                  <div className="flex items-center gap-6 pt-6">
                    <a 
                      href="#" 
                      className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-900"
                    >
                      Case Study
                      <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-indigo-600 transition-all">
                        <ArrowUpRight size={16} />
                      </div>
                    </a>
                    <div className="flex gap-4">
                      <button className="p-3 rounded-full border border-gray-100 hover:border-indigo-600 hover:text-indigo-600 transition-all text-gray-400">
                        <GithubIcon />
                      </button>
                      <button className="p-3 rounded-full border border-gray-100 hover:border-indigo-600 hover:text-indigo-600 transition-all text-gray-400">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Side Number */}
                <div className="absolute top-10 right-10 hidden lg:block">
                  <span className="text-8xl font-black text-gray-50 select-none">
                    0{i + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Progress Indicator */}
        <div 
          ref={indicatorRef}
          className="absolute bottom-12 right-12 flex flex-col items-end gap-2 z-[160]"
        >
           <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Scroll to Explore</span>
           <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
             <div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-300" />
           </div>
        </div>

      </div>
    </section>
  );
}
