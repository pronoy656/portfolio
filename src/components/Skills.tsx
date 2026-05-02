"use client";

import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "GSAP", "Tailwind"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "PostgreSQL", "Prisma", "Supabase", "Redis"],
  },
  {
    title: "Tools",
    skills: ["Figma", "Git", "Docker", "Vercel", "Stripe"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 py-40 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-24">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">Technical Expertise</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-gray-900">
            CRAFT <span className="text-gray-200">&</span> <br/>
            <span className="text-gray-200 italic">STACK.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-8 border-b border-indigo-400/20 pb-4">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <div key={skill} className="flex items-center justify-between group">
                    <span className="text-2xl font-bold tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity">
                      {skill}
                    </span>
                    <span className="h-px flex-1 mx-4 bg-white/5 group-hover:bg-indigo-400/20 transition-colors" />
                    <span className="text-[10px] font-bold opacity-20 group-hover:opacity-100 group-hover:text-indigo-400">
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
