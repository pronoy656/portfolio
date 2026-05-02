"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

const experiences = [
  {
    company: "TechNova Solutions",
    role: "Senior Frontend Engineer",
    period: "2022 — Present",
    description: "Leading the frontend team in building scalable SaaS platforms with Next.js and GSAP. Optimized performance by 40%.",
  },
  {
    company: "Pixel Perfect Agency",
    role: "Frontend Developer",
    period: "2020 — 2022",
    description: "Developed high-end creative websites for luxury brands. Focused on immersive animations and smooth user interactions.",
  },
  {
    company: "Startup Hub",
    role: "Junior Web Developer",
    period: "2018 — 2020",
    description: "Built responsive web applications and collaborated with designers to implement pixel-perfect UI components.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            {/* Section Header */}
            <div className="flex flex-col gap-4 mb-20">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">Work Experience</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-gray-900">
                STORY <span className="text-gray-200">&</span> <br/>
                <span className="text-gray-200 italic">JOURNEY.</span>
              </h2>
            </div>
            
            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group border-t border-border-color py-12 grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-foreground/[0.02] transition-colors px-4 -mx-4 rounded-xl"
                >
                  <div className="md:col-span-3">
                    <p className="text-sm font-bold text-muted-text uppercase tracking-widest">
                      {exp.period}
                    </p>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-2xl font-bold tracking-tighter group-hover:text-brand transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-medium text-muted-text mt-1 italic">
                      {exp.role}
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-muted-text leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-border-color" />
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block sticky top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-border-color shadow-2xl rotate-2 group"
            >
              <Image
                src="/hero-visual.png"
                alt="Creative Visual"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-brand/10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
