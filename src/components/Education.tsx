"use client";

import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    institution: "University of Technology",
    degree: "B.Sc. in Computer Science",
    period: "2014 — 2018",
    description: "Specialized in Software Engineering and Human-Computer Interaction. Graduated with Honors.",
  },
  {
    institution: "Creative Design School",
    degree: "Diploma in UI/UX Design",
    period: "2018 — 2019",
    description: "Intensive program focusing on modern design principles, user research, and prototyping tools.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-foreground/[0.01]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs font-bold text-brand uppercase tracking-[0.4em] mb-16">
          Education
        </h2>
        
        <div className="space-y-0">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-t border-border-color py-12 grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-foreground/[0.02] transition-colors px-4 -mx-4 rounded-xl"
            >
              <div className="md:col-span-3">
                <p className="text-sm font-bold text-muted-text uppercase tracking-widest">
                  {edu.period}
                </p>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold tracking-tighter group-hover:text-brand transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-sm font-medium text-muted-text mt-1 italic">
                  {edu.degree}
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="text-muted-text leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border-color" />
        </div>
      </div>
    </section>
  );
}
