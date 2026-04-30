"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star, ArrowRight, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    name: "Alexander Volkov",
    role: "Lead Engineer @ CyberCore",
    content: "Pronoy's ability to architect scalable frontend systems is world-class. He took our complex dashboard and made it performant and stunning.",
    avatar: "AV",
    color: "#6366f1",
  },
  {
    name: "Sarah Miller",
    role: "Product Owner @ Luminance",
    content: "The attention to detail in the micro-animations was beyond our expectations. Every interaction feels deliberate and smooth.",
    avatar: "SM",
    color: "#8b5cf6",
  },
  {
    name: "Daniel Kwon",
    role: "Founder @ NeoStack",
    content: "We needed a developer who understood both high-end design and robust architecture. Pronoy delivered exactly that and more.",
    avatar: "DK",
    color: "#0ea5e9",
  },
  {
    name: "Emily Watson",
    role: "Creative Director",
    content: "His work with GSAP is pure magic. Our landing page now feels alive and tells a compelling story through motion.",
    avatar: "EW",
    color: "#10b981",
  },
  {
    name: "Michael Ross",
    role: "Startup Mentor",
    content: "A rare talent who bridges the gap between vision and execution perfectly. He's not just a developer; he's a product thinker.",
    avatar: "MR",
    color: "#f59e0b",
  },
  {
    name: "Jessica Chen",
    role: "CTO @ FlowState",
    content: "Professionalism, speed, and absolute quality. Pronoy is our go-to for any premium web project that requires perfection.",
    avatar: "JC",
    color: "#ef4444",
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xOffset = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading Reveal
      gsap.from(".testimonial-head", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".testimonial-head",
          start: "top 85%",
        }
      });

      // Cards Reveal
      gsap.from(".testimonial-card", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 0.6,
          grid: "auto",
          from: "start"
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-grid",
          start: "top 80%",
        }
      });

      // Floating Shapes
      gsap.to(".bg-shape", {
        y: "random(-40, 40)",
        x: "random(-40, 40)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-48 bg-white overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="bg-shape absolute top-[10%] left-[5%] w-64 h-64 bg-indigo-50 rounded-full blur-[100px] opacity-60" />
        <div className="bg-shape absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-24 lg:mb-32">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Testimonials
            </motion.div>
            <h2 className="testimonial-head text-6xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tight">
              VOICES OF <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] animate-gradient">PARTNERSHIP.</span>
            </h2>
          </div>
          <p className="testimonial-head max-w-xs text-gray-500 font-medium leading-relaxed lg:text-right">
            Collaborating with forward-thinking teams to build the future of the web.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonial-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="testimonial-card group relative p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 flex flex-col"
            >
              {/* Quote Icon Overlay */}
              <div className="absolute top-8 right-8 text-indigo-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Quote size={120} strokeWidth={4} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight tracking-tight mb-12 flex-grow">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-8 border-t border-gray-50">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-lg group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base font-black text-gray-900 tracking-tight">{t.name}</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-1.5">{t.role}</p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <ExternalLink size={12} className="text-gray-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div 
          style={{ x: xOffset }}
          className="mt-32 flex items-center gap-8 whitespace-nowrap opacity-[0.05] select-none pointer-events-none"
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} className="text-8xl lg:text-[12rem] font-black tracking-tighter">
              TRUSTED BY INNOVATORS WORLDWIDE • 
            </span>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
