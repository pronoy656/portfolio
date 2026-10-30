"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface Item {
  institution: string;
  title: string;
  period: string;
  location: string;
  status: string;
  description: string;
  highlights: string[];
}

const educationList: Item[] = [
  {
    institution: "University of Liberal Arts Bangladesh (ULAB)",
    title: "B.Sc. in Computer Science and Engineering",
    period: "2022 — Present",
    location: "Dhaka, Bangladesh",
    status: "Ongoing",
    description:
      "Focusing on core software engineering principles, algorithms, data structures, database systems, and web architecture.",
    highlights: [
      "Data Structures & Algorithms, Object-Oriented Programming (OOP)",
      "Database Management Systems, Software Engineering & System Design",
      "Building practical software and collaborative student projects",
    ],
  },
];

const certificationList: Item[] = [
  {
    institution: "Programming Hero",
    title: "Complete Web Development Course",
    period: "2024",
    location: "Verified Certificate",
    status: "Completed",
    description:
      "Intensive hands-on program covering modern full-stack web development, frontend architectures, REST APIs, authentication, and state management.",
    highlights: [
      "React.js, Next.js, TypeScript, Tailwind CSS & Responsive UI",
      "REST APIs, JWT Authentication, Express.js & MongoDB",
      "State management with Redux Toolkit and server state with TanStack Query",
      "Debugging, code optimization, and modern developer tooling",
    ],
  },
];

export default function Education() {
  const [activeTab, setActiveTab] = useState<"education" | "certification">("education");

  const currentItems = activeTab === "education" ? educationList : certificationList;

  return (
    <section id="education" className="py-32 px-6 bg-foreground/[0.01]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
              Academic & Credentials
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-gray-900">
              KNOWLEDGE <span className="text-gray-200">&</span> <br />
              <span className="text-gray-200 italic">GROWTH.</span>
            </h2>
          </div>

          {/* ── 2 Tabs: Education & Certification ── */}
          <div className="inline-flex p-1.5 rounded-full bg-gray-100/80 border border-gray-200/60 backdrop-blur-sm self-start md:self-end">
            <button
              onClick={() => setActiveTab("education")}
              className={`relative flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "education"
                  ? "text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {activeTab === "education" && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-[#1a1c20]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <GraduationCap size={15} className="relative z-10" />
              <span className="relative z-10">Education</span>
              <span
                className={`relative z-10 text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                  activeTab === "education" ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {educationList.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("certification")}
              className={`relative flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "certification"
                  ? "text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {activeTab === "certification" && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-[#1a1c20]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Award size={15} className="relative z-10" />
              <span className="relative z-10">Certifications</span>
              <span
                className={`relative z-10 text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                  activeTab === "certification" ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {certificationList.length}
              </span>
            </button>
          </div>
        </div>

        {/* ── Tab Content List ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-0"
          >
            {currentItems.map((item, i) => (
              <div
                key={item.institution + item.title}
                className="group border-t border-border-color py-12 grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-foreground/[0.02] transition-colors px-4 -mx-4 rounded-xl"
              >
                {/* Left: Period, Location, Status */}
                <div className="md:col-span-3 flex flex-col gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 w-fit">
                    <CheckCircle2 size={11} />
                    {item.status}
                  </span>
                  <div className="flex items-center gap-2 text-sm font-bold text-muted-text uppercase tracking-widest mt-1">
                    <Calendar size={13} className="text-gray-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <MapPin size={12} className="text-gray-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Middle: Title & Institution */}
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-bold tracking-tighter text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {item.institution}
                  </h3>
                  <p className="text-sm font-semibold text-gray-600 mt-1 italic">
                    {item.title}
                  </p>
                </div>

                {/* Right: Description & Highlights */}
                <div className="md:col-span-5 flex flex-col gap-4">
                  <p className="text-muted-text leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                  <ul className="space-y-2 mt-1">
                    {item.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="border-t border-border-color" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
