"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ANIMATION_CONFIG } from "./animationConfig";

export interface RevealTextProps {
  children?: React.ReactNode;
  lines?: string[];
  words?: string[];
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  mode?: "once" | "scrub" | "load";
  delay?: number;
  stagger?: number;
  duration?: number;
  className?: string;
  lineClassName?: string;
  viewportAmount?: number;
}

export function RevealText({
  children,
  lines,
  words,
  as: Component = "div",
  mode = "once",
  delay = 0,
  stagger = 0.12,
  duration = ANIMATION_CONFIG.durations.base,
  className = "",
  lineClassName = "",
  viewportAmount = 0.3,
}: RevealTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // If scrub mode is active, bind scroll progress to transform
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ANIMATION_CONFIG.scrollOffsets.standard,
  });

  const scrubY = useTransform(scrollYProgress, [0, 1], ["105%", "0%"]);
  const scrubOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.7, 1]);

  // Determine items to animate (explicit lines, explicit words, or string children)
  const items: string[] =
    lines ||
    words ||
    (typeof children === "string" ? [children] : []);

  if (items.length === 0) {
    // If complex JSX children passed, wrap directly
    if (shouldReduceMotion) {
      return <Component className={className}>{children}</Component>;
    }

    if (mode === "scrub") {
      return (
        <Component
          ref={containerRef as any}
          className={`${className} overflow-hidden`}
        >
          <motion.div
            style={{ y: scrubY, opacity: scrubOpacity }}
            className="will-change-transform inline-block w-full"
          >
            {children}
          </motion.div>
        </Component>
      );
    }

    return (
      <Component
        ref={containerRef as any}
        className={`${className} overflow-hidden`}
      >
        <motion.div
          initial={{ y: "105%", opacity: 0 }}
          animate={mode === "load" ? { y: "0%", opacity: 1 } : undefined}
          whileInView={mode === "once" ? { y: "0%", opacity: 1 } : undefined}
          viewport={mode === "once" ? { once: true, amount: viewportAmount } : undefined}
          transition={{
            duration,
            delay,
            ease: ANIMATION_CONFIG.ease,
          }}
          className="will-change-transform inline-block w-full"
        >
          {children}
        </motion.div>
      </Component>
    );
  }

  // Items are array of strings (e.g. lines or words)
  return (
    <Component
      ref={containerRef as any}
      className={className}
    >
      {items.map((item, idx) => (
        <span
          key={idx}
          className={`inline-block overflow-hidden align-top ${lineClassName}`}
        >
          <motion.span
            initial={shouldReduceMotion ? { y: "0%", opacity: 1 } : { y: "115%", opacity: 0 }}
            animate={
              mode === "load" && !shouldReduceMotion
                ? { y: "0%", opacity: 1 }
                : undefined
            }
            whileInView={
              mode === "once" && !shouldReduceMotion
                ? { y: "0%", opacity: 1 }
                : undefined
            }
            style={
              mode === "scrub" && !shouldReduceMotion
                ? { y: scrubY, opacity: scrubOpacity }
                : undefined
            }
            viewport={mode === "once" ? { once: true, amount: viewportAmount } : undefined}
            transition={{
              duration: shouldReduceMotion ? 0.01 : duration,
              delay: shouldReduceMotion ? 0 : delay + idx * stagger,
              ease: ANIMATION_CONFIG.ease,
            }}
            className="inline-block will-change-transform"
          >
            {item}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

export default RevealText;

