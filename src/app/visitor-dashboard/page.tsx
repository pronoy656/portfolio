"use client";

import React from "react";
import { 
  LayoutDashboard, FolderKanban, Sparkles, Briefcase, FileText, 
  Trophy, FileBadge, Mail, Download,
  Search, Sun, Moon, Bell, Code2, Users2, ArrowRight,
  MonitorPlay, PieChart, Star, Terminal, Zap
} from "lucide-react";
import Image from "next/image";

/* ─── CUSTOM ICONS ─── */
const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Twitter = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

/* ─── COMPONENTS ─── */
const NavItem = ({ icon: Icon, label, active }: any) => (
  <div className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all ${active ? 'bg-indigo-500/15 text-white font-medium shadow-sm' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
    <Icon size={16} className={active ? "text-indigo-400" : ""} />
    <span className="text-xs sm:text-sm">{label}</span>
  </div>
);

const StatItem = ({ icon: Icon, value, label, iconColor, iconBg }: any) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center gap-2.5">
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${iconBg}`}>
        <Icon size={14} className={iconColor} />
      </div>
      <span className="text-lg font-bold text-white">{value}</span>
    </div>
    <span className="text-[9px] text-gray-500 uppercase tracking-widest">{label}</span>
  </div>
);

const SkillBar = ({ icon: Icon, name, percent, color, textColor }: any) => (
  <div className="flex items-center gap-2">
    <div className={`w-5 h-5 rounded flex items-center justify-center bg-[#1a1d27] border border-white/5`}>
      {Icon ? <Icon size={10} className={textColor} /> : <span className={`text-[9px] font-bold ${textColor}`}>{name.charAt(0)}</span>}
    </div>
    <span className="text-[11px] text-gray-300 w-16 truncate">{name}</span>
    <div className="flex-1 h-1 bg-[#1a1d27] rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${percent}%` }} />
    </div>
    <span className="text-[10px] text-gray-400 w-6 text-right">{percent}%</span>
  </div>
);

const ProjectCard = ({ title, desc, tags, logo }: any) => (
  <div className="flex flex-col rounded-xl bg-[#1a1d27]/50 border border-white/5 overflow-hidden group hover:border-indigo-500/30 transition-colors h-full">
    <div className="h-[76px] bg-[#1a1d27] relative overflow-hidden flex items-center justify-center p-3">
      <div className="absolute inset-x-3 bottom-0 top-3 bg-[#0a0a0f] rounded-t-lg border border-white/10 shadow-xl overflow-hidden flex flex-col transition-transform duration-500 group-hover:translate-y-1">
         <div className="h-3 bg-white/5 border-b border-white/5 flex items-center px-2 gap-1">
           <span className="w-1 h-1 rounded-full bg-red-500/50" />
           <span className="w-1 h-1 rounded-full bg-yellow-500/50" />
           <span className="w-1 h-1 rounded-full bg-emerald-500/50" />
         </div>
         <div className="flex-1 p-2 flex flex-col gap-1.5 opacity-40">
           <div className="w-1/2 h-1 bg-white/10 rounded-full" />
           <div className="w-3/4 h-1 bg-white/5 rounded-full" />
         </div>
      </div>
      <div className="absolute top-2 left-2 w-5 h-5 rounded bg-[#0a0a0f] border border-white/10 flex items-center justify-center z-10 shadow-lg">
        {logo}
      </div>
    </div>
    <div className="p-3 flex-1 flex flex-col justify-between">
      <div>
        <h4 className="text-xs font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{title}</h4>
        <p className="text-[9px] text-gray-500 mb-2 line-clamp-2 leading-tight">{desc}</p>
      </div>
      <div className="flex items-center gap-1.5">
        {tags.map((t: string) => (
          <span key={t} className="px-1.5 py-0.5 rounded text-[8px] bg-white/5 text-gray-400 border border-white/5 truncate max-w-[50px]">{t}</span>
        ))}
        <ArrowRight size={10} className="text-gray-500 ml-auto group-hover:text-indigo-400 transition-colors shrink-0" />
      </div>
    </div>
  </div>
);

const ActivityItem = ({ icon, title, time, colorClass }: any) => (
  <div className="flex items-start gap-2.5">
    <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${colorClass}`}>
      {icon}
    </div>
    <div>
      <p className="text-[11px] text-white leading-tight">{title}</p>
      <p className="text-[9px] text-gray-500 mt-0.5">{time}</p>
    </div>
  </div>
);

const AchievementItem = ({ title, desc }: any) => (
  <div className="flex items-start gap-3 group">
    <div className="mt-0.5 w-7 h-7 rounded bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(245,158,11,0.1)]">
      <Trophy size={12} className="text-amber-400" />
    </div>
    <div>
      <p className="text-[11px] font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">{title}</p>
      <p className="text-[9px] text-gray-500 leading-tight mt-0.5">{desc}</p>
    </div>
  </div>
);

const ExperienceItem = ({ role, company, time }: any) => (
  <div className="flex items-start gap-3 group">
    <div className="flex flex-col items-center mt-1">
      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 ring-4 ring-[#151822] z-10 group-hover:bg-purple-400 transition-colors" />
      <div className="w-px h-7 bg-white/10 -mt-1 group-last:hidden" />
    </div>
    <div className="pb-3 w-full">
      <p className="text-[11px] font-bold text-white leading-tight">{role}</p>
      <div className="flex items-center justify-between w-full mt-0.5">
        <span className="text-[9px] text-indigo-400 font-medium">{company}</span>
        <span className="text-[8px] text-gray-500 font-mono">{time}</span>
      </div>
    </div>
  </div>
);

const GithubHeatmap = () => (
  <div className="flex flex-col h-full justify-between">
     <div className="flex items-center justify-between mb-3">
       <h3 className="text-xs font-bold text-white flex items-center gap-1.5"><Github size={12}/> Contributions</h3>
       <span className="text-[9px] text-emerald-400 font-bold bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded">1,204 in 2024</span>
     </div>
     <div className="flex-1 bg-[#0a0a0f] rounded-lg border border-white/5 p-3 flex flex-col justify-center gap-1.5 shadow-inner">
       {Array.from({ length: 5 }).map((_, r) => (
         <div key={r} className="flex items-center justify-between gap-1 w-full">
           {Array.from({ length: 15 }).map((_, c) => {
              const intensity = Math.random();
              const color = intensity > 0.85 ? 'bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.5)]' : intensity > 0.6 ? 'bg-emerald-500/80' : intensity > 0.3 ? 'bg-emerald-600/50' : 'bg-white/5';
              return <div key={c} className={`flex-1 aspect-square rounded-[2px] ${color}`} />
           })}
         </div>
       ))}
     </div>
  </div>
);

const CTACard = () => (
  <div className="h-full rounded-2xl p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-900 relative overflow-hidden flex flex-col justify-center group cursor-pointer border border-indigo-400/30">
     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
     <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 blur-[40px] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
     <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/20 blur-[30px] rounded-full pointer-events-none" />
     
     <div className="relative z-10 flex flex-col gap-3">
       <div>
         <h3 className="text-lg md:text-xl font-black text-white mb-0.5 tracking-tight">Let&apos;s build something.</h3>
         <p className="text-[10px] md:text-[11px] text-indigo-100 font-medium">Available for freelance opportunities</p>
       </div>
       <div className="inline-flex items-center gap-2 w-fit mt-1">
         <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold group-hover:bg-white group-hover:text-indigo-600 transition-colors flex items-center gap-1.5 shadow-lg shadow-black/10">
           Contact Me <ArrowRight size={10} />
         </div>
       </div>
     </div>
  </div>
);

const GlowingCubeGraphic = () => (
  <div className="absolute right-0 top-0 w-full h-full pointer-events-none overflow-hidden rounded-r-2xl flex items-center justify-end pr-6 opacity-80 mix-blend-screen">
    <div className="relative w-48 h-48">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-600/40 blur-[40px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/30 blur-[30px] rounded-full" />
      
      <div className="absolute top-4 left-6 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 shadow-[0_0_15px_rgba(99,102,241,0.6)] animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-10 right-2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 shadow-[0_0_10px_rgba(168,85,247,0.6)] animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
           <defs>
             <linearGradient id="cubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#1e1b4b" />
               <stop offset="100%" stopColor="#0f172a" />
             </linearGradient>
             <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#312e81" />
               <stop offset="100%" stopColor="#1e1b4b" />
             </linearGradient>
             <linearGradient id="cubeRight" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stopColor="#2e1065" />
               <stop offset="100%" stopColor="#0f172a" />
             </linearGradient>
           </defs>
           <g transform="translate(100, 100) scale(0.7)">
             <path d="M 0 20 L -70 -20 L -70 -100 L 0 -60 Z" fill="url(#cubeGrad)" stroke="#4f46e5" strokeWidth="1" strokeLinejoin="round"/>
             <path d="M 0 20 L 70 -20 L 70 -100 L 0 -60 Z" fill="url(#cubeRight)" stroke="#6366f1" strokeWidth="1" strokeLinejoin="round"/>
             <path d="M 0 -60 L -70 -100 L 0 -140 L 70 -100 Z" fill="url(#cubeTop)" stroke="#818cf8" strokeWidth="1" strokeLinejoin="round"/>
             <g transform="translate(35, -50) scale(0.6)">
                <text x="0" y="0" fontFamily="monospace" fontSize="40" fill="#a5b4fc" textAnchor="middle" dominantBaseline="middle" transform="skewY(30)">&lt; / &gt;</text>
             </g>
           </g>
        </svg>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-indigo-900/30 rounded-[100%] blur-[4px] border border-indigo-500/20" style={{ transform: 'perspective(100px) rotateX(60deg)' }}>
        <div className="absolute inset-1.5 rounded-[100%] border border-purple-500/30 shadow-[inset_0_0_15px_rgba(168,85,247,0.3)]" />
      </div>
    </div>
  </div>
);

export default function VisitorDashboard() {
  return (
    <div className="flex h-screen bg-[#0B0C10] text-gray-100 font-sans overflow-hidden fixed inset-0 z-[9999]">
      
      {/* ─── SIDEBAR ─── */}
      <aside className="relative w-[240px] h-full border-r border-white/5 bg-[#0a0a0f] flex-col py-6 hidden lg:flex shrink-0 overflow-hidden">
        
        {/* Mountain Image Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[550px] pointer-events-none z-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 100%)' }}>
          <div className="absolute inset-0 bg-[#0a0a0f]/40 z-10" />
          <div className="absolute inset-0 bg-indigo-900/20 mix-blend-color z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=100&w=1000&auto=format&fit=crop"
            alt="Dark Mountains"
            fill
            className="object-cover object-bottom opacity-70"
            unoptimized
          />
        </div>

        <div className="relative z-10 px-6 mb-8 flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(99,102,241,0.4)]">
            P
          </div>
          <div>
            <h2 className="font-bold text-white text-xs">Pronoy Dev</h2>
            <p className="text-[9px] text-gray-400">Full Stack Developer</p>
          </div>
        </div>

        <nav className="relative z-10 flex-1 px-3 space-y-0.5 overflow-y-auto [&::-webkit-scrollbar]:hidden min-h-0">
          <NavItem icon={LayoutDashboard} label="Overview" active />
          <NavItem icon={FolderKanban} label="Projects" />
          <NavItem icon={Sparkles} label="Skills" />
          <NavItem icon={Briefcase} label="Experience" />
          <NavItem icon={FileText} label="Blog" />
          <NavItem icon={Trophy} label="Achievements" />
          <NavItem icon={FileBadge} label="Resume" />
          <NavItem icon={Mail} label="Contact" />
        </nav>

        <div className="relative z-10 px-6 mt-auto pt-4 pb-6">
          <div className="w-8 h-px bg-white/10 mb-6" />
          <p className="text-[11px] text-gray-300 mb-6 leading-relaxed">Let&apos;s build something<br/>amazing together.</p>
          <div className="flex items-center gap-2.5 mb-6">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <div key={i} className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-gray-400 transition-colors cursor-pointer backdrop-blur-md">
                <Icon size={14} />
              </div>
            ))}
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-indigo-500/40 bg-transparent hover:bg-indigo-500/10 transition-colors text-[11px] font-medium text-indigo-100">
            <Download size={14} className="text-indigo-400" />
            Download Resume
          </button>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ─── */}
      <main className="flex-1 flex flex-col h-full min-h-0 overflow-hidden bg-[#0F111A]">
         
         {/* TOPBAR */}
         <header className="h-[60px] border-b border-white/5 flex items-center justify-between px-6 shrink-0 bg-[#0F111A]/80 backdrop-blur-md z-10">
           <div className="flex-1 max-w-[300px] relative group">
             <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
             <input 
               type="text" 
               placeholder="Search anything..." 
               className="w-full bg-[#161821] border border-white/5 rounded-lg py-1.5 pl-8 pr-10 text-[11px] text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-colors" 
             />
             <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
               <span className="text-[8px] font-mono text-gray-500 border border-gray-700 rounded px-1 py-0.5">⌘K</span>
             </div>
           </div>

           <div className="flex items-center gap-3">
             <div className="flex items-center gap-0.5 p-0.5 rounded-full bg-[#161821] border border-white/5">
               <button className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors"><Sun size={10} /></button>
               <button className="p-1.5 rounded-full bg-white/10 text-white shadow-sm"><Moon size={10} /></button>
             </div>
             <button className="p-1.5 rounded-full bg-[#161821] border border-white/5 text-gray-400 hover:text-white transition-colors relative">
               <Bell size={12} />
               <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-indigo-500 border-2 border-[#0F111A]" />
             </button>
             <div className="w-7 h-7 rounded-full overflow-hidden border border-white/10 relative">
               <Image src="/logo-2.png" alt="Avatar" fill className="object-cover" />
             </div>
           </div>
         </header>

         {/* ─── SCROLLABLE DENSE BENTO GRID ─── */}
         <div className="flex-1 overflow-y-auto min-h-0 p-4 md:p-5 [&::-webkit-scrollbar]:hidden">
           <div className="w-full mx-auto flex flex-col gap-4 h-full">

             {/* Header */}
             <div className="shrink-0 mb-1">
               <h1 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                 Hello, I&apos;m Pronoy <span className="animate-wave origin-bottom-right">👋</span>
               </h1>
               <p className="text-gray-400 mt-1 text-[11px]">I build scalable web applications and exceptional digital experiences.</p>
             </div>

             {/* ── 12-COLUMN BENTO GRID ── */}
             <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 auto-rows-min pb-4">
               
               {/* ── ROW 1 ── */}
               {/* 1. Main Featured Card (Span 6) */}
               <div className="md:col-span-12 lg:col-span-6 rounded-2xl p-5 md:p-6 relative overflow-hidden bg-gradient-to-br from-[#151822] to-[#0f111a] border border-white/5 min-h-[220px] flex flex-col justify-center">
                 <GlowingCubeGraphic />
                 <div className="relative z-10 max-w-[260px]">
                   <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-emerald-400 text-[9px] font-bold tracking-wide uppercase">Available for work</span>
                   </div>
                   <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                     Frontend Developer<br/>
                     <span className="text-gray-400 text-sm md:text-base font-normal">specializing in <span className="text-indigo-400">exceptional</span> digital experiences.</span>
                   </h2>
                   <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-[11px] font-bold mt-5 shadow-[0_0_15px_rgba(79,70,229,0.3)] w-fit">
                     View My Work <ArrowRight size={12} />
                   </button>
                 </div>
               </div>

               {/* 2. At a Glance (Span 3) */}
               <div className="md:col-span-6 lg:col-span-3 rounded-2xl p-4 md:p-5 bg-[#151822] border border-white/5 flex flex-col h-[220px]">
                 <div className="flex items-center justify-between mb-4">
                   <h3 className="text-xs font-bold text-white flex items-center gap-1.5"><Zap size={12} className="text-indigo-400"/> At a Glance</h3>
                 </div>
                 <div className="grid grid-cols-2 gap-y-5 gap-x-2 flex-1 content-center">
                   <StatItem icon={Code2} value="30+" label="Projects" iconBg="bg-indigo-500/10" iconColor="text-indigo-400" />
                   <StatItem icon={Briefcase} value="3+" label="Years" iconBg="bg-purple-500/10" iconColor="text-purple-400" />
                   <StatItem icon={Users2} value="15+" label="Clients" iconBg="bg-emerald-500/10" iconColor="text-emerald-400" />
                   <StatItem icon={Trophy} value="10+" label="Awards" iconBg="bg-amber-500/10" iconColor="text-amber-400" />
                 </div>
               </div>

               {/* 3. Github Heatmap (Span 3) */}
               <div className="md:col-span-6 lg:col-span-3 rounded-2xl p-4 md:p-5 bg-[#151822] border border-white/5 flex flex-col h-[220px]">
                 <GithubHeatmap />
               </div>


               {/* ── ROW 2 ── */}
               {/* 4. Skills (Span 3) */}
               <div className="md:col-span-4 lg:col-span-3 rounded-2xl p-4 md:p-5 bg-[#151822] border border-white/5 flex flex-col h-[230px]">
                 <div className="flex items-center justify-between mb-4">
                   <h3 className="text-xs font-bold text-white flex items-center gap-1.5"><Terminal size={12}/> Core Skills</h3>
                 </div>
                 <div className="space-y-3.5 mt-auto">
                   <SkillBar name="JavaScript" percent={90} color="bg-yellow-400" textColor="text-yellow-400" />
                   <SkillBar name="TypeScript" percent={85} color="bg-blue-400" textColor="text-blue-400" />
                   <SkillBar name="React" percent={90} color="bg-cyan-400" textColor="text-cyan-400" />
                   <SkillBar name="Next.js" percent={80} color="bg-white" textColor="text-white" />
                   <SkillBar name="Node.js" percent={75} color="bg-green-500" textColor="text-green-500" />
                 </div>
               </div>

               {/* 5. Projects (Span 5) */}
               <div className="md:col-span-8 lg:col-span-5 rounded-2xl p-4 md:p-5 bg-[#151822] border border-white/5 flex flex-col h-[230px]">
                 <div className="flex items-center justify-between mb-3">
                   <h3 className="text-xs font-bold text-white flex items-center gap-1.5"><FolderKanban size={12}/> Featured Projects</h3>
                   <span className="text-[9px] text-indigo-400 cursor-pointer font-medium hover:underline flex items-center gap-1">View all <ArrowRight size={8}/></span>
                 </div>
                 <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
                    <ProjectCard 
                      title="DevFlow App" 
                      desc="Project management & workflow." 
                      tags={["React", "Node.js"]}
                      logo={<MonitorPlay size={10} className="text-indigo-400" />}
                    />
                    <ProjectCard 
                      title="Nova Store" 
                      desc="Modern headless e-commerce." 
                      tags={["Next.js", "Stripe"]}
                      logo={<span className="text-[10px] font-bold text-white">N</span>}
                    />
                 </div>
               </div>

               {/* 6. Experience Timeline (Span 4) */}
               <div className="md:col-span-12 lg:col-span-4 rounded-2xl p-4 md:p-5 bg-[#151822] border border-white/5 flex flex-col h-[230px]">
                 <div className="flex items-center justify-between mb-4">
                   <h3 className="text-xs font-bold text-white flex items-center gap-1.5"><Briefcase size={12}/> Experience</h3>
                 </div>
                 <div className="flex-1 mt-1 pl-1 space-y-0">
                    <ExperienceItem role="Senior Frontend Engineer" company="TechNova Inc." time="2022 - Present" />
                    <ExperienceItem role="UI/UX Developer" company="Creative Studio" time="2020 - 2022" />
                    <ExperienceItem role="Frontend Intern" company="StartupX" time="2019 - 2020" />
                 </div>
               </div>


               {/* ── ROW 3 ── */}
               {/* 7. Achievements (Span 3) */}
               <div className="md:col-span-6 lg:col-span-3 rounded-2xl p-4 md:p-5 bg-[#151822] border border-white/5 flex flex-col h-[160px] relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[30px] rounded-full pointer-events-none" />
                 <div className="flex items-center justify-between mb-4 relative z-10">
                   <h3 className="text-xs font-bold text-white flex items-center gap-1.5"><Star size={12} className="text-amber-400 fill-amber-400/20"/> Achievements</h3>
                 </div>
                 <div className="space-y-4 relative z-10">
                    <AchievementItem title="Awwwards Winner" desc="Site of the Day 2024" />
                    <AchievementItem title="Top Contributor" desc="Open Source UI Community" />
                 </div>
               </div>

               {/* 8. Activity Feed (Span 5) */}
               <div className="md:col-span-6 lg:col-span-5 rounded-2xl p-4 md:p-5 bg-[#151822] border border-white/5 flex flex-col h-[160px]">
                 <div className="flex items-center justify-between mb-4">
                   <h3 className="text-xs font-bold text-white flex items-center gap-1.5"><Search size={12}/> Recent Activity</h3>
                 </div>
                 <div className="space-y-3.5">
                    <ActivityItem 
                      icon={<Github size={10} className="text-white" />} 
                      title="Pushed 5 commits to Nova Store repository" 
                      time="2 hours ago" 
                      colorClass="bg-white/10" 
                    />
                    <ActivityItem 
                      icon={<span className="text-white text-[8px] font-bold">d</span>} 
                      title="Uploaded new portfolio shot" 
                      time="1 day ago" 
                      colorClass="bg-[#ea4c89]" 
                    />
                 </div>
               </div>

               {/* 9. CTA/Quote Strip (Span 4) */}
               <div className="md:col-span-12 lg:col-span-4 h-[160px]">
                 <CTACard />
               </div>

             </div>
           </div>
         </div>
      </main>
    </div>
  );
}
