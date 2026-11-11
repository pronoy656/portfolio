"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, AlertCircle, Mail, Check, Loader2 } from "lucide-react";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedSender, setSubmittedSender] = useState<{ name: string; email: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        setFormState("error");
        setErrorMessage(
          data?.error || "Could not send message right now. Please try emailing directly."
        );
        return;
      }

      setSubmittedSender({ name: name.trim(), email: email.trim() });
      setName("");
      setEmail("");
      setMessage("");
      setFormState("success");
    } catch {
      setFormState("error");
      setErrorMessage("Network error. Please check your connection or email directly.");
    }
  };

  const fallbackMailto = `mailto:pronoypaul56@gmail.com?subject=${encodeURIComponent(
    name ? `Portfolio Inquiry from ${name}` : "Portfolio Project Inquiry"
  )}&body=${encodeURIComponent(
    `${message || ""}${email ? `\n\nReply to: ${email}` : ""}`
  )}`;

  return (
    <section id="contact" className="scroll-mt-24 md:scroll-mt-28 py-20 sm:py-32 md:py-48 px-4 sm:px-6 relative overflow-hidden bg-white dark:bg-[#08090f] dark:bg-gradient-to-b dark:from-[#090a11] dark:via-[#0d1021] dark:to-[#08090f] transition-colors duration-300">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand/10 dark:bg-gradient-to-r dark:from-indigo-500/20 dark:via-violet-500/15 dark:to-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
      
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
                  <a href="tel:+8801843387800" className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-gray-800 dark:text-zinc-200 hover:text-brand transition-colors">
                    +880 1843-387800
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand mb-2">Location</p>
                  <p className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-gray-800 dark:text-zinc-200">
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
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease }}
                className="h-full flex flex-col items-center justify-center text-center py-8 sm:py-12 px-2"
              >
                {/* Centered Clean Check Icon */}
                <motion.div
                  initial={{ scale: 0.75, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.35, delay: 0.06, ease }}
                  className="w-14 h-14 rounded-2xl bg-indigo-600/10 dark:bg-indigo-500/15 border border-indigo-600/20 dark:border-indigo-400/25 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-5 shadow-xs"
                >
                  <Check size={26} strokeWidth={2.5} />
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-950 dark:text-white leading-tight">
                  Thank you{submittedSender?.name ? `, ${submittedSender.name}` : ""}!
                </h3>

                <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1.5">
                  Your message is sent.
                </p>

                <p className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed max-w-sm mt-3">
                  I appreciate you reaching out. Whether it&apos;s about a new opportunity, a project, or just saying hello, I&apos;ll get back to you soon.
                </p>

                <div className="mt-7 w-full max-w-sm border-t border-b border-border-color divide-y divide-border-color text-left">
                  <div className="py-3 flex items-center justify-between gap-4 text-xs sm:text-sm">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text shrink-0">Sent To</span>
                    <span className="font-medium text-gray-900 dark:text-zinc-100 truncate">pronoypaul56@gmail.com</span>
                  </div>
                  {submittedSender?.email && (
                    <div className="py-3 flex items-center justify-between gap-4 text-xs sm:text-sm">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text shrink-0">Reply To</span>
                      <span className="font-medium text-gray-900 dark:text-zinc-100 truncate">{submittedSender.email}</span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmittedSender(null);
                    setFormState("idle");
                  }}
                  className="mt-7 group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-border-color hover:border-indigo-600 dark:hover:border-indigo-400 bg-white/70 dark:bg-zinc-900/70 text-xs font-bold uppercase tracking-[0.18em] text-gray-900 dark:text-white transition-all duration-300 cursor-pointer"
                >
                  <span>Send Another Message</span>
                  <ArrowRight size={15} className="text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-text ml-1">What&apos;s your name?</label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={formState === "submitting"}
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-border-color py-4 outline-none focus:border-brand transition-colors text-xl font-medium text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600 disabled:opacity-60"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-text ml-1">Your email address</label>
                  <input
                    id="contact-email"
                    name="email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={formState === "submitting"}
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-border-color py-4 outline-none focus:border-brand transition-colors text-xl font-medium text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600 disabled:opacity-60"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-text ml-1">Tell me about your project</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={formState === "submitting"}
                    placeholder="I have an idea for..."
                    className="w-full bg-transparent border-b border-border-color py-4 outline-none focus:border-brand transition-colors text-xl font-medium text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600 resize-none disabled:opacity-60"
                  />
                </div>

                {formState === "error" && errorMessage && (
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/25 text-red-600 dark:text-red-400 text-xs sm:text-sm flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                    <a
                      href={fallbackMailto}
                      className="inline-flex items-center gap-1.5 font-bold text-indigo-600 dark:text-indigo-400 hover:underline w-fit ml-6"
                    >
                      <Mail size={14} />
                      <span>Send via Email App instead</span>
                    </a>
                  </div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={formState === "submitting"}
                  whileTap={{ scale: formState === "submitting" ? 1 : 0.98 }}
                  className={`relative w-full py-5 sm:py-6 rounded-full font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 overflow-hidden group transition-colors duration-300 ${
                    formState === "submitting"
                      ? "bg-brand text-white cursor-wait shadow-md"
                      : "bg-foreground text-background hover:text-white cursor-pointer"
                  }`}
                >
                  {/* Hover fill effect */}
                  {formState !== "submitting" && (
                    <div className="absolute inset-0 bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                  )}

                  {/* Subtle hairline progress bar at bottom during submission */}
                  {formState === "submitting" && (
                    <motion.span
                      aria-hidden="true"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
                      className="absolute bottom-0 inset-x-0 h-[2.5px] bg-white/70 pointer-events-none"
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2.5 text-xs sm:text-sm">
                    {formState === "submitting" ? (
                      <>
                        <Loader2 size={17} strokeWidth={2.4} className="animate-spin" />
                        <span>Sending</span>
                        <span className="inline-flex items-center gap-1 ml-0.5">
                          <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                            className="w-1 h-1 rounded-full bg-white"
                          />
                          <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                            className="w-1 h-1 rounded-full bg-white"
                          />
                          <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                            className="w-1 h-1 rounded-full bg-white"
                          />
                        </span>
                      </>
                    ) : (
                      <>
                        <span>Start Project</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-500 ease-out" />
                      </>
                    )}
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
