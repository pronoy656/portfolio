"use client";

import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ExternalLink, X, MoveRight } from "lucide-react";
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
  features: string[];
  contributions: string[];
  color: string;
}

const projectsData: Project[] = [
  {
    title: "Aura AI",
    category: "AI Platform / 2024",
    image: "/jbay-mockup(2).png",
    desc: "Architecting a high-performance AI analytics dashboard with real-time data streaming and predictive modeling. Built with Next.js 14, providing institutional-grade security and trustless architecture.",
    features: [
      "Real-time sentiment analysis using natural language processing",
      "Automated trade execution with low-latency engine",
      "Advanced risk management protocols for enterprise scaling",
      "Interactive data visualization with multi-dimensional filtering"
    ],
    contributions: [
      "Lead developer for the predictive modeling dashboard integration",
      "Optimized WebSocket connections for 40% faster data updates",
      "Designed the high-fidelity UI system for the entire platform"
    ],
    color: "#f8fafc"
  },
  {
    title: "Lumina Studio",
    category: "Creative Agency / 2023",
    image: "/football-mockup-2.png",
    desc: "Delivering a cinematic web experience for a global design studio with fluid transitions and immersive interactions. The project focused on high-end motion design and ultra-fast asset delivery.",
    features: [
      "Smooth scroll-triggered animations using GSAP and ScrollTrigger",
      "Headless CMS integration for dynamic project storytelling",
      "Responsive video streaming with adaptive bitrate switching",
      "Interactive 3D asset integration for product showcases"
    ],
    contributions: [
      "Developed the custom motion design system used across 20+ pages",
      "Engineered the zero-CLS asset loading strategy",
      "Implemented the complex multi-step navigation system"
    ],
    color: "#f1f5f9"
  },
  {
    title: "Nexus Protocol",
    category: "Fintech & Web3 / 2024",
    image: "/portfolio-mockup.png",
    desc: "Redesigning the future of decentralized finance with a focus on institutional-grade security and trustless architecture. This platform enables seamless asset swaps across multiple EVM chains.",
    features: [
      "Multi-chain wallet integration supporting all major EVM networks",
      "Smart contract interaction layer with high-level abstraction",
      "Real-time gas price monitoring and optimization tools",
      "Comprehensive audit logging for all on-chain transactions"
    ],
    contributions: [
      "Architected the cross-chain bridge interaction layer",
      "Built the responsive institutional-grade trading dashboard",
      "Developed the audit trail system for regulatory compliance"
    ],
    color: "#f8fafc"
  },
  {
    title: "EcoStack",
    category: "SaaS Solution / 2023",
    image: "/tutor-mockup-2.png",
    desc: "Optimizing cloud infrastructure management through a minimalist and highly efficient user interface for enterprise teams. Features a robust resource monitoring suite and automated deployment pipelines.",
    features: [
      "Unified cloud resource monitor with multi-provider support",
      "One-click deployment pipelines for Kubernetes clusters",
      "Cost optimization engine with automated scaling rules",
      "Customizable alerting system with Slack and PagerDuty integration"
    ],
    contributions: [
      "Designed the core information hierarchy for the DevOps dashboard",
      "Implemented the automated cluster visualization tool",
      "Developed the responsive sidebar and navigation system"
    ],
    color: "#f1f5f9"
  },
  {
    title: "Vanguard Analytics",
    category: "Data Viz / 2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    desc: "Building advanced enterprise dashboards with complex data visualization and real-time insight generation. Leveraging D3.js for custom charting and Tailwind CSS for a modern aesthetic.",
    features: [
      "Custom D3.js chart engine for high-density data sets",
      "Dynamic insight generation using statistical modeling",
      "Role-based access control for granular data visibility",
      "Exportable reporting suite with PDF and Excel support"
    ],
    contributions: [
      "Lead developer for the custom D3 visualization library",
      "Optimized data ingestion pipeline for high-concurrency users",
      "Ensured WCAG 2.1 accessibility compliance across all components"
    ],
    color: "#f8fafc"
  },
  {
    title: "Zenith Mobile",
    category: "Productivity / 2023",
    image: "/hero-visual.png",
    desc: "Developing high-end lifestyle applications focusing on productivity, wellness, and seamless mobile interactions. This mobile-first application utilizes React Native for a cross-platform experience.",
    features: [
      "Offline-first data synchronization with conflict resolution",
      "Biometric authentication for enhanced user security",
      "Intuitive habit tracking with gamification elements",
      "Rich push notifications with actionable interaction steps"
    ],
    contributions: [
      "Developed the React Native architecture for iOS and Android",
      "Implemented the offline-sync engine using WatermelonDB",
      "Lead the UI/UX design phase for the habit-tracking modules"
    ],
    color: "#f1f5f9"
  },
];

const ProjectCards = memo(({ onSelect }: { onSelect: (p: Project) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      if (!cards.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            if (indicatorRef.current) {
              const progressBar = indicatorRef.current.querySelector(".progress-bar") as HTMLElement;
              if (progressBar) {
                progressBar.style.width = `${self.progress * 100}%`;
              }
              indicatorRef.current.style.opacity = self.progress > 0.9 ? `${(1 - self.progress) * 10}` : "1";
            }
          },
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.fromTo(card, { y: "200vh", opacity: 0 }, { y: 0, opacity: 1, ease: "none", duration: 1, force3D: true }, i * 1.2);
        if (i > 0) {
          tl.to(cards[i - 1], { scale: 0.94 - (cards.length - i) * 0.02, opacity: 0.3, duration: 0.6, force3D: true }, i * 1.2);
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const truncateText = (text: string, length: number) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  return (
    <section ref={containerRef} id="projects" className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gray-50/30 -z-10" />
      <div className="h-screen w-full flex flex-col items-center justify-center px-6">
        <div className="absolute top-12 left-12 z-[150]">
           <div className="flex flex-col gap-2">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">Selected Portfolio</span>
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-gray-900">
               WORKS <span className="text-gray-300">&</span> <br/> 
               <span className="text-gray-300 italic">CREATIONS.</span>
             </h2>
           </div>
        </div>
        <div className="relative w-full max-w-7xl h-[85vh] flex items-center justify-center mt-48">
          {projectsData.map((project, i) => (
            <div key={i} ref={(el) => { cardsRef.current[i] = el; }} className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: i + 10, backfaceVisibility: "hidden" }}>
              <div className="relative w-full h-[75vh] bg-white rounded-[3rem] overflow-hidden border border-gray-100 pointer-events-auto flex flex-col lg:flex-row items-stretch">
                <div className="relative w-full lg:w-3/5 h-full overflow-hidden group bg-[#0f0f0f]">
                  <Image src={project.image} alt={project.title} fill className="object-contain" unoptimized />
                </div>
                <div className="w-full lg:w-2/5 p-10 lg:p-16 flex flex-col justify-between h-full bg-white">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">{project.category}</span>
                      <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter">{project.title}</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">{truncateText(project.desc, 120)}</p>
                      <button onClick={() => onSelect(project)} className="text-[10px] font-black uppercase tracking-widest text-indigo-600 flex items-center gap-2 hover:gap-3 transition-all">
                        View Details <MoveRight size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 pt-6 border-t border-gray-50">
                    <a href="#" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-900">
                      Live Preview <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-indigo-600 transition-all"><ArrowUpRight size={16} /></div>
                    </a>
                    <div className="flex gap-4">
                      <button className="p-3 rounded-full border border-gray-100 hover:border-indigo-600 hover:text-indigo-600 transition-all text-gray-400"><GithubIcon /></button>
                      <button className="p-3 rounded-full border border-gray-100 hover:border-indigo-600 hover:text-indigo-600 transition-all text-gray-400"><ExternalLink size={18} /></button>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-10 hidden lg:block pointer-events-none select-none">
                  <span className="text-[10vw] font-black text-gray-100/50 leading-none">0{i + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div ref={indicatorRef} className="absolute bottom-12 right-12 flex flex-col items-end gap-2 z-[160]">
           <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Scroll to Explore</span>
           <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
             <div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-300" />
           </div>
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-gray-900/60 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
              <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 z-50 p-3 rounded-full bg-gray-900/5 hover:bg-gray-900/10 transition-colors">
                <X size={20} className="text-gray-900" />
              </button>
              <div className="w-full md:w-1/2 relative bg-[#0f0f0f] min-h-[300px] md:min-h-0">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-contain p-8" unoptimized />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col gap-8 overflow-y-auto">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">{selectedProject.category}</span>
                  <h3 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none">{selectedProject.title}</h3>
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
                  <div className="pt-4">
                    <button className="w-full py-5 rounded-full bg-gray-900 text-white font-black uppercase tracking-widest text-xs hover:bg-indigo-600 transition-all flex items-center justify-center gap-3">
                      Visit Live Project <ArrowUpRight size={18} />
                    </button>
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
