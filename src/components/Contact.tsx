"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  return (
    <section id="contact" className="scroll-mt-24 md:scroll-mt-28 py-20 sm:py-32 md:py-48 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand/10 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease }}
              className="mb-6 sm:mb-8"
            >
              <span className="px-4 py-2 rounded-full border border-border-color text-xs font-bold tracking-widest uppercase text-muted-text">
                Let&apos;s collaborate
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.65, delay: shouldReduceMotion ? 0 : 0.1, ease }}
              className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] sm:leading-[0.9] mb-8 sm:mb-12"
            >
              TELL ME ABOUT YOUR <br />
              <span className="text-transparent outline-text">PROJECT.</span>
            </motion.h2>

            <div className="space-y-6 sm:space-y-8 mt-10 sm:mt-16">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand mb-2">Email</p>
                <a href="mailto:pronoypaul56@gmail.com" className="text-xl sm:text-2xl md:text-3xl break-all sm:break-normal font-bold tracking-tight hover:text-brand transition-colors">
                  pronoypaul56@gmail.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand mb-2">Phone</p>
                  <a href="tel:+8801843387800" className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-gray-800 hover:text-brand transition-colors">
                    +880 1843-387800
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand mb-2">Location</p>
                  <p className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-gray-800">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand mb-2">Socials</p>
                <div className="flex gap-6">
                  <a href="https://linkedin.com/in/pronoy-pal" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-brand transition-colors uppercase tracking-widest">
                    LinkedIn
                  </a>
                  <a href="https://github.com/pronoy656" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-brand transition-colors uppercase tracking-widest">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] glass-card relative"
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Received!</h3>
                <p className="text-muted-text">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setFormState("idle")}
                  className="mt-8 text-sm font-bold uppercase tracking-widest text-brand border-b border-brand pb-1"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-text ml-1">What&apos;s your name?</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-border-color py-4 outline-none focus:border-brand transition-colors text-xl font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-text ml-1">Your email address</label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-border-color py-4 outline-none focus:border-brand transition-colors text-xl font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-text ml-1">Tell me about your project</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="I have an idea for..."
                    className="w-full bg-transparent border-b border-border-color py-4 outline-none focus:border-brand transition-colors text-xl font-medium resize-none"
                  />
                </div>
                
                <motion.button 
                  disabled={formState === "submitting"}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full py-6 rounded-full bg-foreground text-background font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 overflow-hidden group transition-colors duration-500 hover:text-white disabled:opacity-50"
                >
                  {/* Left-to-right fill effect */}
                  <div className="absolute inset-0 bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    {formState === "submitting" ? "Sending..." : "Start Project"}
                    <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-500 ease-out" />
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
