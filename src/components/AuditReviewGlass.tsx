import React from "react";

/**
 * Card 03 — Audit & Review:
 * Ultra-Glossy 3D Floating Translucent Glass Panels Sculpture (RECTANGLE ASSET).
 * Features high-intensity specular softbox reflections, glowing violet-indigo internal caustics,
 * dual-layer tubular glass rims, and radiant optical bloom hotspots for a true "glassy shiny" wet finish.
 */
export default function AuditReviewGlass() {
  return (
    <svg
      viewBox="0 0 460 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[76%] object-contain object-bottom select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
    >
      <defs>
        {/* Radiant Violet/Indigo Ambient Caustic Underglow */}
        <radialGradient id="vCaustic" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#9333ea" stopOpacity="0.55" />
          <stop offset="30%" stopColor="#7c3aed" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#6366f1" stopOpacity="0.3" />
          <stop offset="85%" stopColor="#38bdf8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* Specular Bloom Filter for Luminous Shiny Reflections */}
        <filter id="glossBloom" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Studio Softbox Diagonal Glass Gloss Sheen (Mirror Reflection) */}
        <linearGradient id="vSoftboxSheen" x1="0%" y1="0%" x2="100%" y2="85%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="42%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="58%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="75%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Secondary Softbox Light Streak */}
        <linearGradient id="vSoftboxSheen2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="65%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Ultra-Glossy Polished Glass Rim (Pure White Glare + Violet Depth) */}
        <linearGradient id="vGlossyRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#e9d5ff" stopOpacity="0.75" />
          <stop offset="75%" stopColor="#a855f7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="1" />
        </linearGradient>

        {/* Foreground Hero Rim (Blinding White Specular to Electric Indigo) */}
        <linearGradient id="vHeroRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="65%" stopColor="#c084fc" stopOpacity="0.85" />
          <stop offset="85%" stopColor="#7c3aed" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#4338ca" stopOpacity="1" />
        </linearGradient>

        {/* Crystal-Clear Translucent Glass Body with Internal Caustic Gradients */}
        <linearGradient id="vCrystalBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.82" />
          <stop offset="30%" stopColor="#faf5ff" stopOpacity="0.45" />
          <stop offset="65%" stopColor="#f3e8ff" stopOpacity="0.3" />
          <stop offset="90%" stopColor="#ede9fe" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.12" />
        </linearGradient>

        {/* Radiant Caustic Violet Core */}
        <radialGradient id="vCausticCore" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="25%" stopColor="#f3e8ff" stopOpacity="0.6" />
          <stop offset="55%" stopColor="#c084fc" stopOpacity="0.55" />
          <stop offset="80%" stopColor="#7c3aed" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.15" />
        </radialGradient>

        {/* Deep Ray-Traced Ambient Shadow */}
        <filter id="vShadow" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="8" dy="22" stdDeviation="24" floodColor="#4f46e5" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* ── 1. Radiant Ambient Violet/Indigo Lighting Pool ── */}
      <circle cx="230" cy="350" r="185" fill="url(#vCaustic)" />

      {/* ── 3D Tilted Isometric Perspective Group (-26° like user reference) ── */}
      <g transform="rotate(-26 230 320)">

        {/* ── 2. Plate 3 (Background, Top-Right) ── */}
        <g filter="url(#vShadow)">
          <rect
            x="205"
            y="95"
            width="180"
            height="260"
            rx="42"
            fill="url(#vCrystalBody)"
            stroke="url(#vGlossyRim)"
            strokeWidth="3.5"
          />
          <rect
            x="212"
            y="102"
            width="166"
            height="246"
            rx="35"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <path
            d="M 230 96 L 360 96 C 378 96, 384 104, 384 125"
            stroke="#ffffff"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeOpacity="1"
            fill="none"
            filter="url(#glossBloom)"
          />
          <circle cx="300" cy="180" r="75" fill="#a855f7" opacity="0.25" />
        </g>

        {/* ── 3. Plate 2 (Midground, Center Overlapping) ── */}
        <g filter="url(#vShadow)">
          <rect
            x="145"
            y="165"
            width="195"
            height="275"
            rx="42"
            fill="url(#vCausticCore)"
            stroke="url(#vGlossyRim)"
            strokeWidth="4"
          />
          <rect
            x="153"
            y="173"
            width="179"
            height="259"
            rx="35"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeOpacity="0.65"
          />

          {/* Broad Shiny Studio Softbox Reflection Streak across Mid Plate */}
          <g opacity="0.75" style={{ mixBlendMode: "overlay" }}>
            <path
              d="M 180 168 L 225 168 L 165 435 L 148 415 Z"
              fill="url(#vSoftboxSheen)"
            />
            <path
              d="M 245 168 L 275 168 L 210 438 L 188 438 Z"
              fill="url(#vSoftboxSheen2)"
            />
          </g>

          <path
            d="M 170 166 L 310 166 C 328 166, 338 174, 338 196"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeOpacity="1"
            fill="none"
            filter="url(#glossBloom)"
          />

          <path
            d="M 160 410 C 180 438, 220 440, 260 440"
            stroke="#7c3aed"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeOpacity="0.85"
            fill="none"
          />
        </g>

        {/* ── 4. Plate 1 (Foreground Hero Plate, Left/Bottom — Super Shiny) ── */}
        <g filter="url(#vShadow)">
          <rect
            x="60"
            y="235"
            width="185"
            height="270"
            rx="40"
            fill="url(#vCrystalBody)"
            stroke="url(#vHeroRim)"
            strokeWidth="4.5"
          />

          <rect
            x="68"
            y="243"
            width="169"
            height="254"
            rx="32"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeOpacity="0.85"
          />

          <path
            d="M 230 270 L 230 470 C 230 495, 215 503, 190 503"
            stroke="#4338ca"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity="0.95"
            fill="none"
          />

          <ellipse
            cx="145"
            cy="370"
            rx="68"
            ry="98"
            fill="#818cf8"
            opacity="0.28"
          />

          {/* ── BROAD STUDIO SOFTBOX GLOSS SHEEN ON FRONT PANEL FACE ── */}
          <path
            d="M 85 238 L 130 238 L 78 500 L 62 485 Z"
            fill="url(#vSoftboxSheen)"
            opacity="0.85"
          />
          <path
            d="M 145 238 L 175 238 L 115 503 L 95 503 Z"
            fill="url(#vSoftboxSheen2)"
            opacity="0.65"
          />

          {/* ── INTENSE HIGH-GLOSS SPECULAR RIM HIGHLIGHT (TOP LEFT APEX) ── */}
          <path
            d="M 75 330 C 60 280, 75 237, 120 237 L 210 237"
            stroke="#ffffff"
            strokeWidth="8"
            strokeLinecap="round"
            strokeOpacity="0.6"
            fill="none"
            filter="url(#glossBloom)"
          />
          <path
            d="M 75 330 C 60 280, 75 237, 120 237 L 210 237"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeOpacity="1"
            fill="none"
          />

          <ellipse
            cx="88"
            cy="255"
            rx="16"
            ry="6"
            fill="#ffffff"
            opacity="0.95"
            transform="rotate(-40 88 255)"
            filter="url(#glossBloom)"
          />
        </g>

      </g>

      {/* ── 5. Brilliant 4-Point Starburst Caustic Sparkle (Front Apex) ── */}
      <g transform="translate(142, 280)" filter="url(#glossBloom)">
        <ellipse cx="0" cy="0" rx="26" ry="2" fill="#ffffff" opacity="1" />
        <ellipse cx="0" cy="0" rx="2" ry="26" fill="#ffffff" opacity="1" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
        <circle cx="0" cy="0" r="10" fill="#c084fc" opacity="0.6" />
      </g>

      {/* Secondary Brilliant Flare on Background Plate Corner */}
      <g transform="translate(320, 220)" filter="url(#glossBloom)">
        <ellipse cx="0" cy="0" rx="18" ry="1.5" fill="#ffffff" opacity="0.95" />
        <ellipse cx="0" cy="0" rx="1.5" ry="18" fill="#ffffff" opacity="0.95" />
        <circle cx="0" cy="0" r="3" fill="#ffffff" />
        <circle cx="0" cy="0" r="8" fill="#818cf8" opacity="0.5" />
      </g>

      {/* Third Starburst Flare on Lower Edge */}
      <g transform="translate(230, 440)" filter="url(#glossBloom)">
        <ellipse cx="0" cy="0" rx="14" ry="1.2" fill="#ffffff" opacity="0.9" />
        <ellipse cx="0" cy="0" rx="1.2" ry="14" fill="#ffffff" opacity="0.9" />
        <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
      </g>
    </svg>
  );
}

