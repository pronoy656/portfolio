"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  type CSSProperties,
  type PointerEvent,
} from "react";

const MAX_SPEED = 800;

export interface CurvedMarqueeFont {
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: number | string;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: string;
}

export interface CurvedMarqueeProps {
  text?: string;
  font?: CurvedMarqueeFont;
  color?: string;
  direction?: "left" | "right";
  baseVelocity?: number;
  curveAmount?: number;
  gap?: number;
  draggable?: boolean;
  dragIntensity?: number;
  fade?: boolean;
  fadePercent?: number;
  style?: CSSProperties;
  className?: string;
}

export default function CurvedMarquee({
  text = "Be ✦ Creative ✦ With ✦ React ✦ Bytes ✦",
  font,
  color = "#6366f1",
  direction = "right",
  baseVelocity = 18,
  curveAmount = 0,
  gap = 0,
  draggable = true,
  dragIntensity = 8,
  fade = true,
  fadePercent = 15,
  style,
  className = "",
}: CurvedMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemMeasureRef = useRef<HTMLSpanElement>(null);

  const [itemWidth, setItemWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const processedText = useMemo(() => text.trim(), [text]);
  const gapPx = Math.max(16, (gap + 1) * 24);

  // Measure single item width and container width
  useEffect(() => {
    const updateMeasurements = () => {
      if (itemMeasureRef.current) {
        setItemWidth(itemMeasureRef.current.offsetWidth);
      }
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateMeasurements();
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(updateMeasurements);
    }

    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, [processedText, font]);

  // Determine repeats needed to fill screen seamlessly
  const repeatCount = useMemo(() => {
    const totalItem = itemWidth + gapPx;
    if (totalItem <= 0 || containerWidth <= 0) return 4;
    return Math.max(4, Math.ceil(containerWidth / totalItem) * 2 + 2);
  }, [itemWidth, gapPx, containerWidth]);

  // Physics & Animation state (Pure in-memory, ZERO layout thrashing)
  const isDragging = useRef(false);
  const dragVelocity = useRef(0);
  const lastPointerX = useRef(0);
  const offsetRef = useRef(0);

  const effectiveVelocity = (baseVelocity / 100) * MAX_SPEED;
  const baseSpeed = direction === "left" ? -effectiveVelocity : effectiveVelocity;
  const dragFactor = dragIntensity * 0.15;

  // 120 FPS / 60 FPS GPU-Accelerated Animation Loop (Paused when offscreen)
  useEffect(() => {
    if (itemWidth <= 0 || !containerRef.current) return;

    const singleItemWidth = itemWidth + gapPx;
    let isVisible = true;
    let rafId = 0;
    let lastTime = performance.now();

    const loop = (now: number) => {
      if (!isVisible) {
        rafId = 0;
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.032); // Clamp to avoid giant jumps
      lastTime = now;

      if (isDragging.current) {
        offsetRef.current += dragVelocity.current;
        dragVelocity.current *= 0.92;
        if (Math.abs(dragVelocity.current) < 0.01) {
          dragVelocity.current = 0;
        }
      } else {
        offsetRef.current += (baseSpeed + dragVelocity.current) * dt;
        if (Math.abs(dragVelocity.current) > 0.01) {
          dragVelocity.current *= 0.95;
        } else {
          dragVelocity.current = 0;
        }
      }

      // Seamless modular wrap
      if (offsetRef.current <= -singleItemWidth) {
        offsetRef.current += singleItemWidth;
      } else if (offsetRef.current >= 0) {
        offsetRef.current -= singleItemWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = Boolean(entry && entry.isIntersecting);
        if (isVisible && !rafId) {
          lastTime = performance.now();
          rafId = requestAnimationFrame(loop);
        } else if (!isVisible && rafId) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(containerRef.current);
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [itemWidth, gapPx, baseSpeed]);

  // Pointer Drag Handlers
  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggable) return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    isDragging.current = true;
    lastPointerX.current = e.clientX;
    dragVelocity.current = 0;
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggable || !isDragging.current) return;
    const deltaX = e.clientX - lastPointerX.current;
    dragVelocity.current = deltaX * dragFactor;
    lastPointerX.current = e.clientX;
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggable) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
    isDragging.current = false;
  };

  // Mask Gradient for Fade Edges
  const maskStyle: CSSProperties = fade
    ? {
        maskImage: `linear-gradient(to right, transparent 0%, black ${fadePercent}%, black ${
          100 - fadePercent
        }%, transparent 100%)`,
        WebkitMaskImage: `linear-gradient(to right, transparent 0%, black ${fadePercent}%, black ${
          100 - fadePercent
        }%, transparent 100%)`,
      }
    : {};

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full h-full flex items-center overflow-hidden select-none touch-pan-y ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      } ${className}`}
      style={{ ...maskStyle, ...style }}
    >
      {/* Hidden single-item measurement span */}
      <span
        ref={itemMeasureRef}
        aria-hidden="true"
        className="absolute invisible opacity-0 pointer-events-none whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tight"
        style={{
          fontFamily: font?.fontFamily || "inherit",
          letterSpacing: font?.letterSpacing || "2px",
        }}
      >
        {processedText}
      </span>

      {/* Hardware-accelerated GPU Track */}
      <div
        ref={trackRef}
        className="flex items-center shrink-0 will-change-transform [transform:translate3d(0,0,0)]"
      >
        {Array.from({ length: repeatCount }).map((_, idx) => (
          <div
            key={idx}
            className="flex items-center shrink-0 whitespace-nowrap"
            style={{ paddingRight: `${gapPx}px` }}
          >
            <span
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tight leading-none inline-flex items-center"
              style={{
                color,
                fontFamily: font?.fontFamily || "inherit",
                fontWeight: font?.fontWeight ?? 900,
                letterSpacing: font?.letterSpacing || "2px",
              }}
            >
              {processedText}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
