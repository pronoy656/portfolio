"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-fade", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-fade",
          start: "top 85%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="py-32 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-20">
          <h2 className="about-fade text-5xl md:text-8xl font-black tracking-tighter leading-none">
            DRIVEN BY <br/>
            <span className="text-gray-200">PASSION.</span>
          </h2>
          <div className="about-fade hidden md:block max-w-[200px] text-right">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 mb-2">Philosophy</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering excellence through the lens of aesthetic perfection.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-100 shadow-2xl"
            >
              <Image
                src="/logo-2.png"
                alt="Pronoy"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="about-fade space-y-10">
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                Engineering high-performance solutions with <span className="text-indigo-600">precision.</span>
              </h3>
              
              <div className="space-y-6 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                <p>
                  I&apos;m <span className="text-gray-900 font-bold">Pronoy</span>, a Frontend Architect focused on building scalable, high-integrity web systems. I specialize in deep <span className="text-gray-900 font-bold underline decoration-indigo-500/30 decoration-4 underline-offset-4">understanding of project structure</span>, ensuring every codebase I architect is maintainable, modular, and optimized for growth.
                </p>
                <p>
                  Beyond aesthetics, I prioritize <span className="text-gray-900 font-bold underline decoration-indigo-500/30 decoration-4 underline-offset-4">performance optimization</span> and the ability to <span className="text-gray-900 font-bold underline decoration-indigo-500/30 decoration-4 underline-offset-4">handle projects smoothly</span> from initial logic to deployment. My approach is defined by a relentless drive to <span className="text-gray-900 font-bold underline decoration-indigo-500/30 decoration-4 underline-offset-4">problem solve</span> complex technical challenges.
                </p>
                <p>
                  I ensure <span className="text-gray-900 font-bold underline decoration-indigo-500/30 decoration-4 underline-offset-4">smooth API integration</span> while maintaining <span className="text-indigo-600 font-bold underline decoration-indigo-500/30 decoration-4 underline-offset-4">clear client communication</span> to translate high-level engineering into real-world business value.
                </p>
              </div>

              {/* Service List */}
              <div className="pt-12 border-t border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8 text-center lg:text-left">Selected Expertise</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    "UI Engineering",
                    "Motion Design",
                    "Performance Audit",
                    "Design Systems"
                  ].map((svc, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-default">
                      <div className="w-2 h-2 rounded-full bg-indigo-600 group-hover:scale-150 transition-transform" />
                      <span className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{svc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
