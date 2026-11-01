"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isDashboard = pathname?.startsWith("/visitor-dashboard");

  useEffect(() => {
    // 1. Bail out on dashboard or non-browser environments
    if (isDashboard || typeof window === "undefined") {
      document.body.style.cursor = "auto";
      return;
    }

    // 2. Disable on touchscreens/mobile devices (saves battery and avoids ghost cursors)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      document.body.style.cursor = "auto";
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    document.body.style.cursor = "none";

    // 3. Center both cursor dot and ring on coordinates
    gsap.set([cursor, follower], {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    });

    // 4. Create high-performance quickTo setters (REUSES same tween, ZERO garbage collection overhead)
    const xCursor = gsap.quickTo(cursor, "x", { duration: 0.08, ease: "power3" });
    const yCursor = gsap.quickTo(cursor, "y", { duration: 0.08, ease: "power3" });
    const xFollower = gsap.quickTo(follower, "x", { duration: 0.32, ease: "power3.out" });
    const yFollower = gsap.quickTo(follower, "y", { duration: 0.32, ease: "power3.out" });

    let hasMoved = false;

    // 5. Ultra-lightweight mousemove listener with zero tween creation overhead
    const onMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        gsap.to([cursor, follower], { opacity: 1, duration: 0.2 });
      }
      xCursor(e.clientX);
      yCursor(e.clientY);
      xFollower(e.clientX);
      yFollower(e.clientY);
    };

    // 6. Delegated hover handler (Single event listener for the entire DOM, no polling or per-element listeners)
    let isHovering = false;
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest(
        "a, button, [role='button'], input, textarea, select, .interactive, [data-cursor-interactive]"
      );

      if (target && !isHovering) {
        isHovering = true;
        gsap.to(follower, {
          scale: 1.8,
          backgroundColor: "rgba(99, 102, 241, 0.12)",
          borderColor: "rgba(99, 102, 241, 0.5)",
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(cursor, {
          scale: 0.5,
          duration: 0.2,
        });
      } else if (!target && isHovering) {
        isHovering = false;
        gsap.to(follower, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(115, 115, 115, 0.35)",
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(cursor, {
          scale: 1,
          duration: 0.2,
        });
      }
    };

    const onMouseLeaveWindow = () => {
      gsap.to([cursor, follower], { opacity: 0, duration: 0.2 });
      hasMoved = false;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeaveWindow);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
    };
  }, [isDashboard]);

  if (isDashboard) return null;

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={followerRef} className="cursor-follower hidden md:block" />
    </>
  );
}
