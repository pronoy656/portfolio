"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";
import ExplodeText from "@/components/ExplodeText";

const categories = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 & CSS3",
    ],
  },
  {
    title: "State & APIs",
    skills: [
      "Redux Toolkit",
      "TanStack Query",
      "Axios",
      "REST APIs",
      "CRUD Operations",
      "JWT Auth",
    ],
  },
  {
    title: "Backend & DB",
    skills: [
      "MongoDB",
      "Socket.IO",
      "Postman",
      "REST Architecture",
      "API Integration",
    ],
  },
  {
    title: "Tools & Core",
    skills: [
      "Git & GitHub",
      "AWS",
      "Figma",
      "Chrome DevTools",
      "Performance Tuning",
      "Responsive UI",
    ],
  },
];

interface SkillItemProps {
  skill: string;
  catIndex: number;
  skillIndex: number;
  sectionInView: boolean;
}

function SkillItem({
  skill,
  catIndex,
  skillIndex,
  sectionInView,
}: SkillItemProps) {
  const [hoverCount, setHoverCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        setHoverCount((prev) => prev + 1);
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center justify-between group cursor-pointer select-none py-1 transition-all"
    >
      <div className="relative flex items-center">
        <ExplodeText
          text={skill}
          trigger={sectionInView}
          replayKey={hoverCount}
          initialVisible={true}
          delay={hoverCount > 0 ? 0 : catIndex * 0.1 + skillIndex * 0.04}
          animateBy="letter"
          from="start"
          scale={2.2}
          blur={6}
          duration={0.45}
          charDelay={0.016}
          color={isHovered ? "#4f46e5" : "rgba(31, 41, 55, 0.72)"}
          fontSize="text-lg lg:text-xl font-bold tracking-tight"
          className="transition-colors duration-200"
        />
      </div>
      <span
        className={`h-px flex-1 mx-3 transition-colors duration-300 ${
          isHovered ? "bg-indigo-500/40" : "bg-gray-100"
        }`}
      />
      <span
        className={`text-[10px] font-mono font-bold tracking-wider transition-colors duration-200 ${
          isHovered ? "text-indigo-600 font-black" : "text-gray-400"
        }`}
      >
        0{catIndex + 1}—0{skillIndex + 1}
      </span>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="scroll-mt-24 md:scroll-mt-28 relative z-20 py-20 sm:py-28 md:py-40 px-4 sm:px-6 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header (Scroll Reveal) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease }}
          className="flex flex-col gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-24"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
            Technical Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none text-gray-900">
            CRAFT <span className="text-gray-200">&amp;</span> <br />
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
                  <SkillItem
                    key={skill}
                    skill={skill}
                    catIndex={i}
                    skillIndex={j}
                    sectionInView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
