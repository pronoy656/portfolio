"use client";

import React from "react";
import CurvedMarquee from "./CurvedMarquee";

export default function MarqueeSection() {
  return (
    <section className="relative w-full h-20 sm:h-24 md:h-28 lg:h-32 overflow-hidden bg-[#fcfcfd] flex items-center justify-center select-none">
      <CurvedMarquee
        text="Be ✦ Creative ✦ With ✦ Next.js ✦ React ✦"
        color="#6366f1"
        direction="right"
        baseVelocity={18}
        curveAmount={0}
        gap={0}
        draggable={true}
        dragIntensity={8}
        fade={true}
        fadePercent={20}
      />
    </section>
  );
}

