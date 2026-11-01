"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Search,
  Sparkles,
  X,
  Code2,
  FolderGit2,
  SlidersHorizontal,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Project, projectsData } from "@/data/projects";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CATEGORIES = [
  "All",
  "Fintech & Payments",
  "SaaS & Analytics",
  "E-Commerce",
  "Productivity & Cloud",
  "Tools & Systems",
];

export default function AllProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" ||
        project.category.toLowerCase().includes(selectedCategory.toLowerCase().split(" ")[0]);

      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#fafbfc] text-gray-900 flex flex-col selection:bg-indigo-600 selection:text-white">
      {/* ── Fixed Universal Navbar ── */}
      <Navbar />

      {/* ── Main Content Container ── */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-32 sm:pt-36 md:pt-40 pb-24">
        
        {/* ── Back to Home Breadcrumb ── */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* ── Page Hero Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-gray-200/80">
          <div className="flex flex-col gap-2.5 max-w-3xl">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.35em] text-indigo-600 flex items-center gap-1.5">
              <Sparkles size={14} className="text-indigo-600" />
              Complete Engineering Archive
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-none">
              ALL PROJECTS <span className="text-gray-300 font-light">&amp;</span>{" "}
              <span className="text-gray-400 italic font-semibold">CREATIONS.</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed pt-1">
              A comprehensive archive of production web applications, SaaS dashboards,
              design systems, and interactive client platforms engineered with modern frontend architecture.
            </p>
          </div>

          {/* Total Projects Counter Badge */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <div className="px-4 py-2 rounded-2xl bg-white border border-gray-200/90 shadow-2xs flex items-center gap-2">
              <FolderGit2 size={16} className="text-indigo-600" />
              <span className="text-xs font-mono font-bold text-gray-700">
                <span className="text-indigo-600 font-black">{filteredProjects.length}</span> /{" "}
                {projectsData.length} Projects
              </span>
            </div>
          </div>
        </div>

        {/* ── Search & Filter Controls Bar ── */}
        <div className="py-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, technology, or keywords..."
              className="w-full pl-11 pr-10 py-2.5 sm:py-3 bg-white rounded-xl border border-gray-200/90 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-700 rounded-full"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all ${
                    active
                      ? "bg-gray-900 text-white shadow-xs"
                      : "bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 border border-gray-200/70"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Projects Grid ── */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
              <Search size={20} />
            </div>
            <h3 className="text-base font-bold text-gray-900">No projects found</h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-sm">
              We couldn&apos;t find any projects matching &ldquo;{searchQuery}&rdquo;. Try clearing your search or selecting another category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative bg-white rounded-[2rem] border border-gray-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* ── Top Header Bar with Project Number & Category ── */}
                <div className="px-6 sm:px-7 pt-5 pb-3 flex items-center justify-between border-b border-gray-100 bg-white">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[10px] font-mono font-bold text-gray-700 shrink-0">
                      {project.number}
                    </span>
                    <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {project.role}
                  </span>
                </div>

                {/* ── Mockup Preview Banner ── */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative h-56 sm:h-64 w-full bg-gray-100 overflow-hidden cursor-pointer group/img"
                >
                  <Image
                    src={project.image || project.images[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
                    className="object-cover object-top group-hover/img:scale-104 transition-transform duration-500 ease-out"
                    loading={idx < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="px-3.5 py-1.5 rounded-full bg-white text-gray-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>

                {/* ── Card Body Details ── */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-5">
                  <div className="space-y-3">
                    {/* Title & Tagline */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-gray-600 pt-1 leading-snug">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Metrics Pills Row */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.metrics.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200/80 text-xs font-mono"
                        >
                          <span className="font-black text-gray-900">{m.value}</span>
                          <span className="text-[10px] text-gray-500 uppercase tracking-wider">{m.label}</span>
                        </span>
                      ))}
                    </div>

                    {/* Brief description */}
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed pt-1">
                      {project.desc}
                    </p>
                  </div>

                  {/* ── Bottom Section: Tech Stack & Action Buttons ── */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Tech Pills */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-gray-100/90 text-gray-700 border border-gray-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-[10px] font-mono text-gray-400 font-bold">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowUpRight size={13} />
                      </button>

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold shadow-xs hover:shadow-md transition-all"
                        >
                          <span>Live</span>
                          <ExternalLink size={12} />
                        </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          className="w-9 h-9 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-indigo-600 hover:border-indigo-600 flex items-center justify-center transition-all shadow-2xs"
                        >
                          <GithubIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* ── Collaborative CTA Banner ── */}
        <section className="mt-20 p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-gray-900 via-gray-950 to-indigo-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
              Have a project in mind?
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Let&apos;s build high-performance digital experiences together.
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Available for full-time frontend roles, contract builds, and high-impact design engineering collaborations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/#contact"
              className="px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 text-center"
            >
              Get in Touch
            </Link>
            <Link
              href="/"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all text-center"
            >
              Explore Home
            </Link>
          </div>
        </section>

      </main>

      {/* ── Fullscreen Case Study Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="projects-page-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 md:p-12"
          >
            <div
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-gray-950/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl flex flex-col md:flex-row max-h-[92vh] sm:max-h-[90vh] overflow-hidden border border-gray-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 sm:p-2.5 rounded-full bg-gray-100/90 hover:bg-gray-200 text-gray-800 transition-all cursor-pointer shadow-xs"
              >
                <X size={18} />
              </button>

              {/* Left Column: Multi-Image Showcase */}
              <div className="md:w-1/2 bg-gray-50/50 p-6 sm:p-10 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-200/60 flex items-center justify-center text-xs font-mono font-bold text-indigo-600">
                      {selectedProject.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">
                      {selectedProject.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold pt-1">
                      {selectedProject.tagline}
                    </p>
                  </div>

                  {/* Gallery of screens */}
                  <div className="space-y-4 pt-2">
                    {selectedProject.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs group/modalimg"
                      >
                        <Image
                          src={img}
                          alt={`${selectedProject.title} preview ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 480px"
                          className="object-cover object-top group-hover/modalimg:scale-102 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Case Study Narrative */}
              <div className="md:w-1/2 p-6 sm:p-10 overflow-y-auto flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-indigo-600 mb-2">
                      Overview
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {selectedProject.fullDesc || selectedProject.desc}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-indigo-600">
                      Key Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-gray-400">
                        Role
                      </span>
                      <p className="text-sm font-bold text-gray-900">{selectedProject.role}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-gray-400">
                        Category
                      </span>
                      <p className="text-sm font-bold text-gray-900">{selectedProject.category.split('/')[0]}</p>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <a
                      href={selectedProject.liveLink || "https://github.com/pronoy656"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 rounded-full bg-gray-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Visit Live Project</span>
                      <ArrowUpRight size={15} />
                    </a>

                    <a
                      href={selectedProject.githubLink || "https://github.com/pronoy656"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="px-5 py-4 rounded-full border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center justify-center text-gray-700"
                    >
                      <GithubIcon />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Site Footer ── */}
      <Footer />
    </div>
  );
}

