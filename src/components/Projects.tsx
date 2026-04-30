"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Aura AI",
    category: "AI Platform",
    size: "col-span-2 row-span-2",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Lumina",
    category: "Agency",
    size: "col-span-2 row-span-1",
    image: "https://images.unsplash.com/photo-1635336113612-404323c21a97?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Crypto",
    category: "Fintech",
    size: "col-span-1 row-span-1",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Nexus",
    category: "Web3",
    size: "col-span-1 row-span-1",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            SELECTED <span className="opacity-30">WORKS</span>
          </h2>
          <p className="text-muted-text text-sm max-w-[200px] text-right hidden md:block">
            Exploring the boundaries of digital interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 min-h-[800px]">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl glass-card ${project.size}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
