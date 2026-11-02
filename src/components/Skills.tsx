"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

const categories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "State & APIs",
    skills: ["Redux Toolkit", "TanStack Query", "Axios", "REST APIs", "CRUD Operations", "JWT Auth"],
  },
  {
    title: "Backend & DB",
    skills: ["MongoDB", "Socket.IO", "Postman", "REST Architecture", "API Integration"],
  },
  {
    title: "Tools & Core",
    skills: ["Git & GitHub", "AWS", "Figma", "Chrome DevTools", "Performance Tuning", "Responsive UI"],
  },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="skills" className="scroll-mt-24 md:scroll-mt-28 relative z-20 py-20 sm:py-28 md:py-40 px-4 sm:px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Scroll Reveal) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease }}
          className="flex flex-col gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-24"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">Technical Expertise</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none text-gray-900">
            CRAFT <span className="text-gray-200">&amp;</span> <br/>
            <span className="text-gray-200 italic">STACK.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.6,
                delay: shouldReduceMotion ? 0 : i * 0.1,
                ease,
              }}
            >
              <h3 className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-8 border-b border-indigo-500/20 pb-4">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <div key={skill} className="flex items-center justify-between group">
                    <span className="text-lg lg:text-xl font-bold tracking-tight text-gray-800 opacity-60 group-hover:opacity-100 group-hover:text-indigo-600 transition-all">
                      {skill}
                    </span>
                    <span className="h-px flex-1 mx-3 bg-gray-100 group-hover:bg-indigo-400/20 transition-colors" />
                    <span className="text-[10px] font-bold text-gray-400 group-hover:text-indigo-500 transition-colors">
                      0{i + 1}—0{j + 1}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
