"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, animate, useReducedMotion } from "motion/react";
import { ANIMATION_CONFIG } from "./animationConfig";

export interface CountUpProps {
  value: string | number;
  className?: string;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
}

export function CountUp({
  value,
  className = "",
  duration = ANIMATION_CONFIG.durations.counter,
  delay = 0.1,
  prefix = "",
  suffix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  // Parse string value (e.g. "16+", "98/100", "01+", "100%", "60fps")
  const rawString = String(value);
  const match = rawString.match(/^([^\d]*)(\d+)(.*)$/);

  const parsedPrefix = prefix || (match ? match[1] : "");
  const targetNumber = match ? parseInt(match[2], 10) : 0;
  const parsedSuffix = suffix || (match ? match[3] : "");
  const hasLeadingZero = match && match[2].length > 1 && match[2].startsWith("0");

  const [currentNumber, setCurrentNumber] = useState(
    shouldReduceMotion ? targetNumber : 0
  );

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      if (shouldReduceMotion) setCurrentNumber(targetNumber);
      return;
    }

    const controls = animate(0, targetNumber, {
      duration,
      delay,
      ease: ANIMATION_CONFIG.ease,
      onUpdate: (latest) => {
        setCurrentNumber(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, targetNumber, duration, delay, shouldReduceMotion]);

  const formattedNumber =
    hasLeadingZero && currentNumber < 10
      ? `0${currentNumber}`
      : `${currentNumber}`;

  return (
    <span ref={ref} className={className}>
      {parsedPrefix}
      {formattedNumber}
      {parsedSuffix}
    </span>
  );
}

export default CountUp;

