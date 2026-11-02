"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "motion/react";
import { ANIMATION_CONFIG } from "./animationConfig";

export interface ScrollRevealParagraphProps {
  children: React.ReactNode;
  className?: string;
  mode?: "scrub" | "once";
  delay?: number;
  duration?: number;
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  shouldReduceMotion: boolean | null;
}

function Word({ word, progress, range, shouldReduceMotion }: WordProps) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const y = useTransform(progress, range, [2, 0]);

  if (shouldReduceMotion) {
    return <span className="inline-block mr-[0.28em]">{word}</span>;
  }

  return (
    <span className="inline-block mr-[0.28em] relative">
      <motion.span
        style={{ opacity, y }}
        className="inline-block will-change-[opacity,transform]"
      >
        {word}
      </motion.span>
    </span>
  );
}

export function ScrollRevealParagraph({
  children,
  className = "",
  mode = "scrub",
  delay = 0.15,
  duration = ANIMATION_CONFIG.durations.base,
}: ScrollRevealParagraphProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ANIMATION_CONFIG.scrollOffsets.standard,
  });

  // If text is a plain string and scrub mode is desired, split into words
  if (typeof children === "string" && mode === "scrub") {
    const words = children.split(/\s+/).filter(Boolean);

    return (
      <p ref={containerRef} className={className}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={`${word}-${i}`}
              word={word}
              progress={scrollYProgress}
              range={[start, end]}
              shouldReduceMotion={shouldReduceMotion}
            />
          );
        })}
      </p>
    );
  }

  // Fallback / Soft Fade-Up mode (also used when children is JSX with nested spans/strong tags)
  return (
    <motion.p
      ref={containerRef}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: ANIMATION_CONFIG.ease,
      }}
      className={className}
    >
      {children}
    </motion.p>
  );
}

export default ScrollRevealParagraph;

