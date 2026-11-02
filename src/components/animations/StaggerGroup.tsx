"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ANIMATION_CONFIG } from "./animationConfig";

export interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  viewportAmount?: number;
}

export interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  scale?: number;
}

export function StaggerGroup({
  children,
  className = "",
  stagger = 0.09,
  delay = 0,
  viewportAmount = 0.15,
}: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: shouldReduceMotion ? 0 : delay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  distance = 20,
  scale = 0.98,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : distance,
      scale: shouldReduceMotion ? 1 : scale,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : ANIMATION_CONFIG.durations.base,
        ease: ANIMATION_CONFIG.ease,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`${className} will-change-[transform,opacity]`}
    >
      {children}
    </motion.div>
  );
}

export default StaggerGroup;

