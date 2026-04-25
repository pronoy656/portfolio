"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

/* ── Premium tech visual: animated code editor + floating UI chips ── */
const TechVisual = () => (
  <div className="tech-visual-root">
    {/* Radial glow backdrop */}
    <div className="glow-orb glow-orb--purple" />
    <div className="glow-orb glow-orb--blue" />

    {/* Perspective grid */}
    <svg className="persp-grid" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 55} y1="0" x2={i * 55 - 120} y2="400" stroke="#6366f1" strokeWidth="0.4" strokeOpacity="0.25" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50 + 30} stroke="#6366f1" strokeWidth="0.4" strokeOpacity="0.18" />
      ))}
    </svg>

    {/* Main code editor card */}
    <div className="code-card tech-float-1">
      <div className="code-card__header">
        <span className="dot dot--red" />
        <span className="dot dot--yellow" />
        <span className="dot dot--green" />
        <span className="code-card__title">App.tsx</span>
      </div>
      <div className="code-card__body">
        <div className="code-line"><span className="ct-kw">import</span> <span className="ct-id">React</span> <span className="ct-kw">from</span> <span className="ct-str">&apos;react&apos;</span><span className="ct-dim">;</span></div>
        <div className="code-line mt-1"><span className="ct-kw">const</span> <span className="ct-fn">Hero</span> <span className="ct-dim">=</span> <span className="ct-dim">()</span> <span className="ct-sym">=&gt;</span> <span className="ct-dim">{"{"}</span></div>
        <div className="code-line pl-4"><span className="ct-kw">return</span> <span className="ct-dim">(</span></div>
        <div className="code-line pl-8"><span className="ct-tag">&lt;</span><span className="ct-comp">section</span> <span className="ct-attr">className</span><span className="ct-dim">=</span><span className="ct-str">&quot;hero&quot;</span><span className="ct-tag">&gt;</span></div>
        <div className="code-line pl-12"><span className="ct-tag">&lt;</span><span className="ct-comp">h1</span><span className="ct-tag">&gt;</span><span className="ct-txt">Pronoy</span><span className="ct-tag">&lt;/</span><span className="ct-comp">h1</span><span className="ct-tag">&gt;</span></div>
        <div className="code-line pl-8"><span className="ct-tag">&lt;/</span><span className="ct-comp">section</span><span className="ct-tag">&gt;</span></div>
        <div className="code-line pl-4"><span className="ct-dim">);</span></div>
        <div className="code-line"><span className="ct-dim">{"}"}</span></div>
        <div className="code-line mt-2 flex items-center gap-1">
          <span className="ct-kw">export</span> <span className="ct-kw">default</span> <span className="ct-fn">Hero</span><span className="ct-dim">;</span>
          <span className="cursor-blink" />
        </div>
      </div>
    </div>

    {/* Floating chip: React */}
    <div className="tech-chip tech-chip--react tech-float-2">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#61dafb"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61dafb" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 12 12)"/></svg>
      React
    </div>

    {/* Floating chip: TypeScript */}
    <div className="tech-chip tech-chip--ts tech-float-3">
      <span className="ts-badge">TS</span>
      TypeScript
    </div>

    {/* Floating chip: Next.js */}
    <div className="tech-chip tech-chip--next tech-float-4">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.04.13-.044.5-.044z"/></svg>
      Next.js
    </div>

    {/* Small stats card */}
    <div className="stats-card tech-float-5">
      <div className="stats-card__row">
        <span className="stats-dot" />
        <span className="stats-label">Projects</span>
        <span className="stats-val">24+</span>
      </div>
      <div className="stats-card__row">
        <span className="stats-dot stats-dot--green" />
        <span className="stats-label">Commits</span>
        <span className="stats-val">1.2k</span>
      </div>
      <div className="stats-card__row">
        <span className="stats-dot stats-dot--cyan" />
        <span className="stats-label">Stars</span>
        <span className="stats-val">380</span>
      </div>
    </div>

    {/* Colour swatch mini card */}
    <div className="color-card tech-float-6">
      {["#6366f1","#8b5cf6","#06b6d4","#f59e0b","#10b981"].map((c) => (
        <span key={c} className="color-swatch" style={{ background: c }} />
      ))}
    </div>

    {/* Scatter particles */}
    {[
      { top: "12%", left: "15%", s: 3 },
      { top: "30%", left: "80%", s: 2 },
      { top: "65%", left: "10%", s: 4 },
      { top: "78%", left: "72%", s: 2 },
      { top: "50%", left: "50%", s: 3 },
      { top: "20%", left: "55%", s: 2 },
      { top: "88%", left: "40%", s: 3 },
    ].map((p, i) => (
      <span
        key={i}
        className="particle"
        style={{ top: p.top, left: p.left, width: p.s, height: p.s, animationDelay: `${i * 0.7}s` }}
      />
    ))}

    <style>{`
      .tech-visual-root {
        position: absolute;
        inset: 0;
        overflow: hidden;
      }
      /* Glowing orbs */
      .glow-orb {
        position: absolute;
        border-radius: 9999px;
        filter: blur(80px);
        opacity: 0.35;
        pointer-events: none;
      }
      .glow-orb--purple {
        width: 520px; height: 520px;
        background: radial-gradient(circle, #6366f1 0%, transparent 70%);
        top: -80px; left: 30%;
        animation: orbDrift 8s ease-in-out infinite alternate;
      }
      .glow-orb--blue {
        width: 400px; height: 400px;
        background: radial-gradient(circle, #06b6d4 0%, transparent 70%);
        bottom: 5%; right: 10%;
        animation: orbDrift 10s ease-in-out infinite alternate-reverse;
      }
      @keyframes orbDrift {
        from { transform: translate(0,0); }
        to   { transform: translate(30px, 40px); }
      }

      /* Perspective grid */
      .persp-grid {
        position: absolute;
        inset: 0;
        width: 100%; height: 100%;
        pointer-events: none;
      }

      /* Floating animations */
      @keyframes floatA {
        0%,100% { transform: translateY(0px) rotate(0deg); }
        50%      { transform: translateY(-14px) rotate(0.5deg); }
      }
      @keyframes floatB {
        0%,100% { transform: translateY(0px) rotate(0deg); }
        50%      { transform: translateY(-10px) rotate(-0.8deg); }
      }
      @keyframes floatC {
        0%,100% { transform: translateY(0px); }
        50%      { transform: translateY(-8px); }
      }
      .tech-float-1 { animation: floatA 6s ease-in-out infinite; }
      .tech-float-2 { animation: floatB 5s 0.5s ease-in-out infinite; }
      .tech-float-3 { animation: floatA 7s 1s ease-in-out infinite; }
      .tech-float-4 { animation: floatC 5.5s 0.3s ease-in-out infinite; }
      .tech-float-5 { animation: floatB 6.5s 0.8s ease-in-out infinite; }
      .tech-float-6 { animation: floatA 4.5s 1.2s ease-in-out infinite; }

      /* Code editor card */
      .code-card {
        position: absolute;
        top: 12%;
        left: 50%;
        transform: translateX(-52%);
        width: 320px;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(99,102,241,0.25);
        border-radius: 14px;
        backdrop-filter: blur(18px);
        box-shadow: 0 24px 80px rgba(99,102,241,0.18), 0 0 0 1px rgba(255,255,255,0.06);
        overflow: hidden;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
      }
      .code-card__header {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        background: rgba(255,255,255,0.04);
        border-bottom: 1px solid rgba(255,255,255,0.06);
      }
      .dot { width:10px;height:10px;border-radius:50%; }
      .dot--red    { background:#ff5f57; }
      .dot--yellow { background:#febc2e; }
      .dot--green  { background:#28c840; }
      .code-card__title {
        margin-left: auto;
        font-size: 11px;
        color: rgba(255,255,255,0.35);
        letter-spacing: 0.08em;
      }
      .code-card__body {
        padding: 14px 16px 16px;
        font-size: 12px;
        line-height: 1.7;
        color: rgba(255,255,255,0.5);
      }
      .code-line { display:flex; align-items:center; flex-wrap:wrap; gap:3px; white-space:nowrap; }
      .ct-kw  { color:#c792ea; font-weight:600; }
      .ct-fn  { color:#82aaff; }
      .ct-id  { color:#eeffff; }
      .ct-str { color:#c3e88d; }
      .ct-dim { color:#546e7a; }
      .ct-tag { color:#89ddff; }
      .ct-comp{ color:#ffcb6b; }
      .ct-attr{ color:#c792ea; }
      .ct-txt { color:#eeffff; }
      .ct-sym { color:#89ddff; }
      .pl-4   { padding-left:1rem; }
      .pl-8   { padding-left:2rem; }
      .pl-12  { padding-left:3rem; }
      .mt-1   { margin-top:2px; }
      .mt-2   { margin-top:8px; }

      /* Blinking cursor */
      .cursor-blink {
        display:inline-block;
        width:2px; height:14px;
        background:#6366f1;
        border-radius:1px;
        animation: blink 1s step-start infinite;
      }
      @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

      /* Tech chips */
      .tech-chip {
        position: absolute;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        border-radius: 99px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.04em;
        backdrop-filter: blur(12px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.25);
        border: 1px solid rgba(255,255,255,0.12);
        white-space: nowrap;
        color: rgba(255,255,255,0.9);
      }
      .tech-chip--react { background:rgba(97,218,251,0.12); top:58%; left:12%; border-color:rgba(97,218,251,0.3); }
      .tech-chip--ts    { background:rgba(49,120,198,0.15); top:22%; right:8%;  border-color:rgba(49,120,198,0.35); }
      .tech-chip--next  { background:rgba(255,255,255,0.07);bottom:28%;right:12%; border-color:rgba(255,255,255,0.18);}
      .ts-badge {
        display:inline-flex;align-items:center;justify-content:center;
        width:16px;height:16px;border-radius:3px;
        background:#3178c6;color:#fff;font-size:9px;font-weight:800;
      }

      /* Stats card */
      .stats-card {
        position: absolute;
        bottom: 22%;
        left: 8%;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 12px;
        padding: 12px 16px;
        backdrop-filter: blur(16px);
        box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        min-width: 140px;
      }
      .stats-card__row {
        display:flex;align-items:center;gap:8px;
        font-size:12px;color:rgba(255,255,255,0.7);
        padding: 3px 0;
      }
      .stats-dot {
        width:7px;height:7px;border-radius:50%;
        background:#6366f1;flex-shrink:0;
      }
      .stats-dot--green { background:#10b981; }
      .stats-dot--cyan  { background:#06b6d4; }
      .stats-label { flex:1; }
      .stats-val { font-weight:700;color:#fff; }

      /* Color swatch card */
      .color-card {
        position:absolute;
        top:70%; right:7%;
        display:flex;gap:5px;
        padding:8px 12px;
        background:rgba(255,255,255,0.05);
        border:1px solid rgba(255,255,255,0.1);
        border-radius:99px;
        backdrop-filter:blur(12px);
        box-shadow:0 8px 24px rgba(0,0,0,0.25);
      }
      .color-swatch {
        width:16px;height:16px;
        border-radius:50%;
        display:inline-block;
        box-shadow:0 0 8px rgba(0,0,0,0.3);
      }

      /* Particles */
      .particle {
        position:absolute;
        border-radius:50%;
        background:#6366f1;
        opacity:0.5;
        animation: particlePulse 3s ease-in-out infinite;
      }
      @keyframes particlePulse {
        0%,100%{opacity:0.3;transform:scale(1);}
        50%{opacity:0.8;transform:scale(1.6);}
      }
    `}</style>
  </div>
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  const name = "Pronoy";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        opacity: 0,
        y: 30,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
      });

      gsap.from(".code-card", {
        scale: 0.9,
        opacity: 0,
        y: 40,
        duration: 2,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".tech-chip, .stats-card, .color-card", {
        scale: 0.8,
        opacity: 0,
        duration: 1.4,
        ease: "back.out(1.4)",
        stagger: 0.15,
        delay: 0.8,
      });

      gsap.from(".char", {
        y: 120,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.06,
        delay: 0.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (!nameRef.current) return;
    const chars = nameRef.current.querySelectorAll<HTMLSpanElement>(".char");
    gsap.to(chars, {
      color: "#6366f1",
      duration: 0.35,
      stagger: { each: 0.07, from: "start" },
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handleMouseLeave = () => {
    if (!nameRef.current) return;
    const chars = nameRef.current.querySelectorAll<HTMLSpanElement>(".char");
    gsap.to(chars, {
      color: "var(--foreground)",
      duration: 0.25,
      stagger: { each: 0.05, from: "end" },
      ease: "power2.in",
      overwrite: true,
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between bg-[var(--background)] text-[var(--foreground)] overflow-hidden"
    >
      {/* ── Premium Tech Visual ── */}
      <div className="absolute inset-0 z-0">
        <TechVisual />
        {/* Edge vignette so text pops */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 90% at 50% 50%, transparent 40%, var(--background) 100%)",
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 py-60 md:px-14">

        {/* Badge + intro text */}
        <div className="flex flex-col gap-6 items-start mt-10">
          <div className="hero-content inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 backdrop-blur-md">
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-text">
              Available for work
            </span>
          </div>

          <div className="hero-content max-w-sm mt-6">
            <p className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight uppercase">
              Frontend Developer
              <br />
              <span className="text-muted-text font-normal normal-case text-base italic tracking-wide">
                crafting purposeful digital experiences
              </span>
            </p>
          </div>
        </div>

        {/* ── Big Heading ── */}
        <div className="mt-auto pb-10 pt-32">
          {/* Main title */}
          <h1 className="text-[7vw] md:text-[8.5vw] font-black tracking-tighter leading-[0.85] text-center cursor-default select-none uppercase">
            {"FRONTEND DEVELOPER".split("").map((char, i) => (
              <span
                key={i}
                className="char inline-block"
                style={{ willChange: "color" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* Ghost name subtext */}
          <h2
            ref={nameRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="text-[14vw] md:text-[16vw] font-black tracking-[-0.05em] leading-[0.8] text-center cursor-default select-none mt-2"
            style={{ color: "var(--foreground)", opacity: 0.1 }}
          >
            {name.split("").map((char, i) => (
              <span
                key={i}
                className="char inline-block"
                style={{ willChange: "color" }}
              >
                {char}
              </span>
            ))}
          </h2>
        </div>

        {/* ── CTA floating right ── */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-10">
          <div className="flex flex-col items-end mb-4">
            <p className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-bold tracking-widest text-muted-text">
              +880 1700 000000
            </p>
            <div className="w-px h-20 bg-black/10 mt-3" />
          </div>

          <button className="hero-content flex items-center gap-4 pl-6 pr-2 py-2 rounded-full bg-brand text-white font-bold group hover:scale-105 transition-all shadow-xl shadow-brand/25">
            <span className="text-sm">Let&apos;s Collaborate</span>
            <div className="w-10 h-10 rounded-full bg-white text-brand flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowRight size={20} />
            </div>
          </button>

          <div className="flex flex-col gap-5 mt-8">
            {[GithubIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
              <a key={i} href="#" className="hero-content text-black/35 hover:text-brand transition-colors duration-300">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Footer line */}
        <div className="hero-content w-full text-center mt-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-text">
            Trusted by brands across the globe
          </p>
        </div>
      </div>
    </section>
  );
}
