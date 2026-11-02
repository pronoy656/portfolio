"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ANIMATION_CONFIG } from "./animationConfig";

export interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  amount?: number;
  mode?: "once" | "scrub";
  as?: "div" | "section" | "article" | "aside" | "header" | "footer";
}

export function FadeUp({
  children,
  className = "",
  delay = 0,
  duration = ANIMATION_CONFIG.durations.base,
  distance = ANIMATION_CONFIG.distance.desktop,
  amount = 0.2,
  mode = "once",
  as: ComponentTag = "div",
}: FadeUpProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll scrub configuration
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ANIMATION_CONFIG.scrollOffsets.subtle,
  });

  const scrubY = useTransform(scrollYProgress, [0, 1], [distance, 0]);
  const scrubOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.6, 1]);

  if (shouldReduceMotion) {
    return <ComponentTag className={className}>{children}</ComponentTag>;
  }

  const MotionComponent = motion[ComponentTag as keyof typeof motion] as typeof motion.div;

  if (mode === "scrub") {
    return (
      <MotionComponent
        ref={containerRef}
        style={{ y: scrubY, opacity: scrubOpacity }}
        className={`${className} will-change-[transform,opacity]`}
      >
        {children}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      ref={containerRef}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: ANIMATION_CONFIG.ease,
      }}
      className={`${className} will-change-[transform,opacity]`}
    >
      {children}
    </MotionComponent>
  );
}

export default FadeUp;

