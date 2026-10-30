"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

const experiences = [
  {
    company: "Sparktech Agency",
    role: "Frontend Developer",
    location: "Dhaka, Bangladesh (Onsite)",
    period: "Jul 2025 — Present",
    description:
      "Since joining Sparktech Agency, I have completed and delivered 16+ live client projects, with several more projects currently in progress. Working on diverse projects and communicating directly with clients has helped me master complex business logic and seamless user flows.",
    points: [
      "Delivered 16+ production projects from initial concept to launch",
      "Transformed complex Figma designs into responsive, production-ready interfaces",
      "Integrated REST APIs, Socket.IO real-time features, and secure authentication",
      "Collaborated closely with UI/UX designers and backend teams to ensure code quality"
    ]
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
                    <p className="text-xs text-indigo-600 font-semibold mt-1">
                      {exp.location}
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
                  <div className="md:col-span-5 flex flex-col gap-4">
                    <p className="text-muted-text leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-2 mt-2">
                      {exp.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
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
