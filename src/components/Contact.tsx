"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
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
    <section id="contact" className="py-48 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand/10 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="px-4 py-2 rounded-full border border-border-color text-xs font-bold tracking-widest uppercase text-muted-text">
                Let's collaborate
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12"
            >
              TELL ME ABOUT YOUR <br />
              <span className="text-transparent outline-text">PROJECT.</span>
            </motion.h2>

            <div className="space-y-8 mt-16">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand mb-2">Email</p>
                <a href="mailto:hello@pronoy.dev" className="text-2xl md:text-3xl font-bold tracking-tight hover:text-brand transition-colors">
                  hello@pronoy.dev
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand mb-2">Socials</p>
                <div className="flex gap-6">
                  {["Twitter", "LinkedIn", "GitHub", "Instagram"].map(social => (
                    <a key={social} href="#" className="text-sm font-bold hover:text-brand transition-colors uppercase tracking-widest">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] glass-card relative"
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
                  Thanks for reaching out. I'll get back to you within 24 hours.
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
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-text ml-1">What's your name?</label>
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
                
                <button 
                  disabled={formState === "submitting"}
                  className="w-full py-6 rounded-full bg-foreground text-background font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-brand hover:text-white transition-all disabled:opacity-50"
                >
                  {formState === "submitting" ? "Sending..." : "Start Project"}
                  <ArrowRight size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <footer className="mt-48 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-widest text-muted-text uppercase">
        <p>© {new Date().getFullYear()} PRONOY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <p>EST. 2024</p>
          <span className="opacity-20">/</span>
          <p>DHAKA, BD</p>
        </div>
      </footer>
    </section>
  );
}
