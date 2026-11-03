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
  categoryInView: boolean;
}

function SkillItem({
  skill,
  catIndex,
  skillIndex,
  categoryInView,
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
          trigger={categoryInView}
          replayKey={hoverCount}
          initialVisible={false}
          delay={hoverCount > 0 ? 0 : catIndex * 0.08 + skillIndex * 0.05}
          animateBy="letter"
          from="start"
          scale={2.2}
          blur={6}
          duration={0.45}
          charDelay={0.016}
          color={isHovered ? "#4f46e5" : "rgba(31, 41, 55, 0.75)"}
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

function SkillCategory({
  cat,
  catIndex,
}: {
  cat: (typeof categories)[0];
  catIndex: number;
}) {
  const catRef = useRef<HTMLDivElement>(null);
  // Trigger ONLY when this specific category actually scrolls into view (with a 50px offset into the screen)
  const isInView = useInView(catRef, {
    once: true,
    amount: 0.25,
    margin: "0px 0px -50px 0px",
  });
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div
      ref={catRef}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: shouldReduceMotion ? 0 : catIndex * 0.08,
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
            catIndex={catIndex}
            skillIndex={j}
            categoryInView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="scroll-mt-24 md:scroll-mt-28 relative z-20 pt-10 sm:pt-14 md:pt-16 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-8 md:px-12 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header (Scroll Reveal) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease }}
          className="flex flex-col gap-2.5 sm:gap-3 mb-8 sm:mb-10 md:mb-12"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter leading-none text-gray-900">
            CRAFT <span className="text-gray-200">&amp;</span>{" "}
            <span className="text-gray-200 italic">STACK.</span>
          </h2>
        </motion.div>

        {/* Categories Grid - Each column triggers its own text effect when in view */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {categories.map((cat, i) => (
            <SkillCategory key={cat.title} cat={cat} catIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
