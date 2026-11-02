"use client";

import { useEffect, useRef, useCallback, type CSSProperties } from "react";
import { gsap } from "gsap";

export type AnimateBy = "letter" | "word";
export type StaggerFrom =
  | number
  | "center"
  | "start"
  | "end"
  | "edges"
  | "random"
  | [number, number];

export interface ExplodeTextProps {
  text?: string;
  children?: React.ReactNode;
  animateBy?: AnimateBy;
  from?: StaggerFrom;
  scale?: number;
  blur?: number;
  yOffset?: number;
  duration?: number;
  charDelay?: number;
  wordDelay?: number;
  delay?: number;
  repeat?: boolean;
  color?: string;
  gradient?: string;
  fontSize?: string;
  className?: string;
  trigger?: boolean;
  replayKey?: any;
  initialVisible?: boolean;
}

export default function ExplodeText({
  text = "",
  children,
  animateBy = "letter",
  from = "start",
  scale = 2.5,
  blur = 6,
  yOffset = 0,
  duration = 0.55,
  charDelay = 0.02,
  wordDelay = 0.08,
  delay = 0,
  repeat = false,
  color = "inherit",
  gradient = "",
  fontSize = "text-xs sm:text-[13px] font-bold",
  className = "",
  trigger = true,
  replayKey,
  initialVisible = false,
}: ExplodeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const gradientStyle: CSSProperties = gradient
    ? {
        backgroundImage: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }
    : { color };

  const rawWords = text ? text.split(/\s+/).filter(Boolean) : [];

  const runAnimation = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const selector = animateBy === "word" ? ".explode-word" : ".explode-char";
    const els = container.querySelectorAll(selector);
    if (!els.length) return;

    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    if (!trigger) {
      if (initialVisible) {
        gsap.set(els, {
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
        });
      } else {
        gsap.set(els, {
          scaleX: scale,
          scaleY: scale,
          opacity: 0,
          filter: `blur(${blur}px)`,
          y: yOffset,
        });
      }
      return;
    }

    // Set initial exploded state
    gsap.set(els, {
      scaleX: scale,
      scaleY: scale,
      opacity: 0,
      filter: `blur(${blur}px)`,
      y: yOffset,
      transformOrigin: "50% 50%",
    });

    const staggerDelay = animateBy === "word" ? wordDelay : charDelay;

    const tl = gsap.timeline({
      delay,
      repeat: repeat ? -1 : 0,
      repeatDelay: 1.0,
      onRepeat() {
        gsap.set(els, {
          scaleX: scale,
          scaleY: scale,
          opacity: 0,
          filter: `blur(${blur}px)`,
          y: yOffset,
        });
      },
    });

    tl.to(els, {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      stagger: { each: staggerDelay, from },
      ease: "expo.out",
      duration,
    });

    tlRef.current = tl;
  }, [
    trigger,
    replayKey,
    initialVisible,
    delay,
    animateBy,
    from,
    scale,
    blur,
    yOffset,
    duration,
    charDelay,
    wordDelay,
    repeat,
  ]);

  useEffect(() => {
    runAnimation();
    return () => {
      tlRef.current?.kill();
      tlRef.current = null;
    };
  }, [runAnimation]);

  const defaultOpacity = initialVisible ? 1 : 0;

  if (children) {
    return (
      <div
        ref={containerRef}
        className={`inline-flex flex-wrap items-center leading-normal ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap items-center leading-normal ${className}`}
    >
      {animateBy === "word"
        ? rawWords.map((word, i) => (
            <span
              key={i}
              className={`explode-word inline-block tracking-tight select-none will-change-transform ${fontSize}`}
              style={{ opacity: defaultOpacity, ...gradientStyle }}
            >
              {word}
              {i < rawWords.length - 1 && (
                <span style={{ display: "inline-block", minWidth: "0.3em" }}>
                  {"\u00A0"}
                </span>
              )}
            </span>
          ))
        : rawWords.map((word, wIdx) => (
            <span key={wIdx} className="inline-block whitespace-nowrap">
              {[...word].map((char, cIdx) => (
                <span
                  key={cIdx}
                  className={`explode-char inline-block select-none will-change-transform ${fontSize}`}
                  style={{
                    opacity: defaultOpacity,
                    ...gradientStyle,
                  }}
                >
                  {char}
                </span>
              ))}
              {wIdx < rawWords.length - 1 && (
                <span
                  className={`explode-char inline-block select-none will-change-transform ${fontSize}`}
                  style={{
                    opacity: defaultOpacity,
                    minWidth: "0.28em",
                    ...gradientStyle,
                  }}
                >
                  {"\u00A0"}
                </span>
              )}
            </span>
          ))}
    </div>
  );
}
