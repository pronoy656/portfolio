"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const handleHover = () => {
      gsap.to(followerRef.current, { scale: 2, backgroundColor: "rgba(255,255,255,0.1)", border: "none" });
    };

    const handleLeave = () => {
      gsap.to(followerRef.current, { scale: 1, backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.3)" });
    };

    const interactiveElements = document.querySelectorAll("a, button, .interactive");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={followerRef} className="cursor-follower hidden md:block -translate-x-1/2 -translate-y-1/2" />
    </>
  );
}
