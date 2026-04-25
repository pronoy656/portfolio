"use client";

import React from "react";
import { 
  LayoutDashboard, FolderKanban, Sparkles, Briefcase, FileText, 
  Trophy, FileBadge, Mail, Download,
  Search, Sun, Moon, Bell, Code2, Users2, ArrowRight,
  MonitorPlay, PieChart, Star, Terminal, Zap, Quote
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

const JsIcon = () => (
  <span className="text-[10px] font-black text-yellow-400">JS</span>
);

const TsIcon = () => (
  <span className="text-[10px] font-black text-blue-400">TS</span>
);

const ReactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-3.5 h-3.5 text-cyan-400">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

/* ─── COMPONENTS ─── */
const NavItem = ({ icon: Icon, label, active }: any) => (
  <div className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all ${active ? 'bg-indigo-500/15 text-white font-medium shadow-sm' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
    <Icon size={16} className={active ? "text-indigo-400" : ""} />
    <span className="text-xs sm:text-sm">{label}</span>
  </div>
);

const StatItem = ({ icon: Icon, value, label, iconColor, iconBg }: any) => (
  <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconBg}`}>
        <Icon size={14} className={iconColor} />
      </div>
      <span className="text-lg font-bold text-white leading-none">{value}</span>
    </div>
    <span className="text-[10px] text-gray-500 ml-[44px] -mt-1 leading-none">{label}</span>
  </div>
);

const SkillBar = ({ icon: Icon, name, percent }: any) => (
  <div className="flex items-center gap-3">
    <div className="w-6 h-6 rounded bg-[#1a1d27] border border-white/5 flex items-center justify-center shrink-0 shadow-inner">
      <Icon />
    </div>
    <span className="text-[11px] text-gray-300 w-20 font-medium">{name}</span>
    <div className="flex-1 h-[3px] bg-white/5 rounded-full overflow-hidden">
      <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${percent}%` }} />
    </div>
    <span className="text-[10px] text-gray-400 w-8 text-right">{percent}%</span>
  </div>
);

const ProjectCard = ({ title, desc, tags, logo, mockColors }: any) => (
  <div className="flex flex-col rounded-xl bg-[#13151c] border border-white/5 overflow-hidden group hover:border-white/10 transition-colors h-full">
    <div className="h-36 bg-[#1a1d27]/40 relative overflow-hidden flex items-center justify-center p-4">
      {/* Browser Mockup */}
      <div className="absolute inset-x-5 bottom-0 top-5 bg-[#0a0a0f] rounded-t-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col group-hover:translate-y-1 transition-transform duration-500">
         <div className="h-4 bg-white/5 border-b border-white/5 flex items-center px-2.5 gap-1.5 shrink-0">
           <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
           <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
         </div>
         <div className="flex-1 p-3 flex flex-col gap-2.5 opacity-60">
           <div className={`w-1/3 h-1.5 rounded-full ${mockColors[0]}`} />
           <div className={`w-3/4 h-1.5 rounded-full ${mockColors[1]}`} />
           <div className="flex gap-2 mt-2">
             <div className={`w-1/2 h-8 rounded ${mockColors[0]} opacity-20`} />
             <div className={`w-1/2 h-8 rounded ${mockColors[1]} opacity-20`} />
           </div>
         </div>
      </div>
      {/* Floating Logo */}
      <div className="absolute top-3 left-3 w-6 h-6 rounded bg-[#0a0a0f] border border-white/10 flex items-center justify-center z-10 shadow-lg">
        {logo}
      </div>
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <h4 className="text-sm font-bold text-white mb-1.5">{title}</h4>
      <p className="text-[11px] text-gray-500 mb-4 line-clamp-2 leading-relaxed">{desc}</p>
      <div className="flex items-center gap-2 mt-auto">
        {tags.map((t: string) => (
          <span key={t} className="px-2 py-1 rounded text-[9px] bg-white/5 text-gray-400 border border-white/5">{t}</span>
        ))}
        <ArrowRight size={12} className="text-gray-500 ml-auto group-hover:text-white transition-colors shrink-0" />
      </div>
    </div>
  </div>
);

const ActivityItem = ({ icon, title, time, colorClass }: any) => (
  <div className="flex items-start gap-3">
    <div className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${colorClass}`}>
      {icon}
    </div>
    <div>
      <p className="text-[11px] text-white leading-tight font-medium">{title}</p>
      <p className="text-[9px] text-gray-500 mt-1">{time}</p>
    </div>
  </div>
);

const GlowingCubeGraphic = () => (
  <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden flex items-center justify-end pr-10 mix-blend-screen opacity-90">
    <div className="relative w-64 h-64">
      {/* Deep Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-600/30 blur-[50px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 blur-[40px] rounded-full" />
      
      {/* Floating Orbs */}
      <div className="absolute top-10 left-10 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-300 to-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.5)] animate-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-16 right-4 w-3 h-3 rounded-full bg-gradient-to-br from-purple-300 to-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.5)] animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }} />
      <div className="absolute top-1/4 right-8 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      
      {/* 3D Cube */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-36 h-36 drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
           <defs>
             <linearGradient id="cubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#1e1b4b" />
               <stop offset="100%" stopColor="#020617" />
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
           <g transform="translate(100, 100) scale(0.8)">
             <path d="M 0 20 L -70 -20 L -70 -100 L 0 -60 Z" fill="url(#cubeGrad)" stroke="#4f46e5" strokeWidth="0.5" strokeLinejoin="round"/>
             <path d="M 0 20 L 70 -20 L 70 -100 L 0 -60 Z" fill="url(#cubeRight)" stroke="#6366f1" strokeWidth="0.5" strokeLinejoin="round"/>
             <path d="M 0 -60 L -70 -100 L 0 -140 L 70 -100 Z" fill="url(#cubeTop)" stroke="#818cf8" strokeWidth="0.5" strokeLinejoin="round"/>
             <g transform="translate(35, -50) scale(0.7)">
                <text x="0" y="0" fontFamily="monospace" fontSize="40" fill="#a5b4fc" textAnchor="middle" dominantBaseline="middle" transform="skewY(30)" style={{textShadow: '0 0 20px rgba(165,180,252,0.8)'}}>&lt; / &gt;</text>
             </g>
           </g>
        </svg>
      </div>

      {/* Futuristic Floating Base */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-12 bg-indigo-950/40 rounded-[100%] blur-[2px] border border-indigo-500/30" style={{ transform: 'perspective(150px) rotateX(65deg)' }}>
        <div className="absolute inset-2 rounded-[100%] border border-purple-500/40 shadow-[inset_0_0_20px_rgba(168,85,247,0.4)]" />
        <div className="absolute inset-4 rounded-[100%] bg-indigo-500/20 blur-[10px]" />
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

        <nav className="relative z-10 flex-1 px-3 space-y-1 overflow-y-auto [&::-webkit-scrollbar]:hidden min-h-0">
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
      <main className="flex-1 relative overflow-hidden bg-[#0a0a0f]">
         
         {/* TOPBAR */}
         <header className="absolute top-0 left-0 right-0 h-[70px] border-b border-white/5 flex items-center justify-between px-8 bg-[#0a0a0f]/80 backdrop-blur-md z-20">
           <div className="flex-1 max-w-[350px] relative group">
             <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
             <input 
               type="text" 
               placeholder="Search anything..." 
               className="w-full bg-[#13151c] border border-white/5 rounded-xl py-2 pl-9 pr-10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-colors" 
             />
             <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
               <span className="text-[9px] font-mono text-gray-500 border border-gray-700 rounded px-1.5 py-0.5">⌘K</span>
             </div>
           </div>

           <div className="flex items-center gap-4">
             <div className="flex items-center gap-1 p-1 rounded-full bg-[#13151c] border border-white/5">
               <button className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors"><Sun size={12} /></button>
               <button className="p-1.5 rounded-full bg-white/10 text-white shadow-sm"><Moon size={12} /></button>
             </div>
             <button className="p-2 rounded-full bg-[#13151c] border border-white/5 text-gray-400 hover:text-white transition-colors relative">
               <Bell size={14} />
               <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500 border-2 border-[#0a0a0f]" />
             </button>
             <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 relative">
               <Image src="/logo-2.png" alt="Avatar" fill className="object-cover" />
             </div>
           </div>
         </header>

         {/* ─── SCROLLABLE CONTENT ─── */}
         <div className="absolute top-[70px] bottom-0 left-0 right-0 overflow-y-auto p-6 md:p-8 [&::-webkit-scrollbar]:hidden">
           <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-6">

             {/* Header */}
             <div className="shrink-0 mb-2">
               <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                 Hello, I&apos;m Pronoy <span className="animate-wave origin-bottom-right">👋</span>
               </h1>
               <p className="text-gray-400 mt-2 text-xs">I build scalable web applications and exceptional digital experiences.</p>
             </div>

             {/* ── REPLICATED GRID ── */}
             <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 auto-rows-min pb-8">
               
               {/* ── LEFT COLUMN (Spans 2) ── */}
               <div className="xl:col-span-2 flex flex-col gap-6">
                 
                 {/* 1. Featured Premium Card */}
                 <div className="rounded-2xl p-8 md:p-10 relative overflow-hidden bg-gradient-to-br from-[#12132e] to-[#0a0a0f] border border-white/5 min-h-[320px] flex flex-col justify-center">
                   <GlowingCubeGraphic />
                   <div className="relative z-10 max-w-[340px]">
                     <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1a2e25] border border-emerald-500/20 mb-6 shadow-inner">
                       <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-emerald-400 text-[10px] font-medium">Available for work</span>
                     </div>
                     <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                       Full Stack Developer<br/>
                     </h2>
                     <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-[280px]">
                       specializing in building <span className="text-indigo-400 font-medium">exceptional</span> digital experiences.
                     </p>
                     <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-xs font-medium shadow-[0_0_20px_rgba(79,70,229,0.4)] w-fit">
                       View My Work <ArrowRight size={14} />
                     </button>
                   </div>
                 </div>

                 {/* 2. Featured Projects row */}
                 <div className="flex flex-col gap-4 mt-2">
                   <div className="flex items-center justify-between mb-1">
                     <h3 className="text-[13px] font-bold text-white">Featured Projects</h3>
                     <span className="text-[11px] text-indigo-400 cursor-pointer font-medium hover:underline flex items-center gap-1">View all projects <ArrowRight size={10}/></span>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <ProjectCard 
                        title="DevFlow" 
                        desc="Project management tool for developers and teams." 
                        tags={["React", "Node.js", "MongoDB"]}
                        logo={<MonitorPlay size={12} className="text-indigo-400" />}
                        mockColors={["bg-indigo-500", "bg-purple-500"]}
                      />
                      <ProjectCard 
                        title="Nova Store" 
                        desc="Modern e-commerce platform with seamless UX." 
                        tags={["Next.js", "Tailwind", "Stripe"]}
                        logo={<span className="text-xs font-bold text-white">N</span>}
                        mockColors={["bg-blue-500", "bg-cyan-500"]}
                      />
                      <ProjectCard 
                        title="InsightHub" 
                        desc="Analytics dashboard for business intelligence." 
                        tags={["Node.js", "Express", "PostgreSQL"]}
                        logo={<PieChart size={12} className="text-emerald-400" />}
                        mockColors={["bg-emerald-500", "bg-teal-500"]}
                      />
                   </div>
                 </div>

                 {/* 3. Quote Strip */}
                 <div className="rounded-2xl p-6 md:p-8 bg-[#0f111a] border border-white/5 relative overflow-hidden flex items-center min-h-[120px] mt-2 group">
                   {/* Sweeping purple gradient on right */}
                   <div className="absolute right-0 top-0 bottom-0 w-3/4 bg-gradient-to-l from-purple-500/10 via-purple-500/5 to-transparent pointer-events-none" />
                   <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-purple-600/30 transition-colors duration-700" />
                   
                   <div className="relative z-10 flex gap-5 w-full items-start">
                     <Quote size={24} className="text-white/20 shrink-0 rotate-180 mt-1" />
                     <div className="flex flex-col gap-3">
                       <p className="text-sm md:text-base text-gray-200 font-medium tracking-wide leading-relaxed">
                         Code is like humor. When you have to explain it, it&apos;s bad.
                       </p>
                       <p className="text-xs text-gray-500 font-medium">— Cory House</p>
                     </div>
                   </div>
                 </div>

               </div>

               {/* ── RIGHT COLUMN (Spans 1) ── */}
               <div className="flex flex-col gap-6">
                 
                 {/* At a Glance */}
                 <div className="rounded-2xl p-6 bg-[#13151c] border border-white/5 flex flex-col">
                   <div className="flex items-center justify-between mb-6">
                     <h3 className="text-[13px] font-bold text-white">At a Glance</h3>
                     <span className="text-[10px] text-indigo-400 cursor-pointer font-medium hover:underline">View all</span>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                     <StatItem icon={Code2} value="30+" label="Projects Completed" iconBg="bg-blue-500/10" iconColor="text-blue-400" />
                     <StatItem icon={Briefcase} value="3+" label="Years Experience" iconBg="bg-purple-500/10" iconColor="text-purple-400" />
                     <StatItem icon={Users2} value="15+" label="Happy Clients" iconBg="bg-emerald-500/10" iconColor="text-emerald-400" />
                     <StatItem icon={Trophy} value="10+" label="Achievements" iconBg="bg-amber-500/10" iconColor="text-amber-400" />
                   </div>
                 </div>

                 {/* Skills */}
                 <div className="rounded-2xl p-6 bg-[#13151c] border border-white/5 flex flex-col">
                   <div className="flex items-center justify-between mb-6">
                     <h3 className="text-[13px] font-bold text-white">Skills</h3>
                     <span className="text-[10px] text-indigo-400 cursor-pointer font-medium hover:underline">View all</span>
                   </div>
                   <div className="space-y-4">
                     <SkillBar icon={JsIcon} name="JavaScript" percent={90} />
                     <SkillBar icon={TsIcon} name="TypeScript" percent={85} />
                     <SkillBar icon={ReactIcon} name="React" percent={90} />
                     <SkillBar icon={() => <span className="text-[10px] font-black text-green-500">N</span>} name="Node.js" percent={85} />
                     <SkillBar icon={() => <span className="text-[10px] font-black text-white">N</span>} name="Next.js" percent={80} />
                   </div>
                 </div>

                 {/* Activity */}
                 <div className="rounded-2xl p-6 bg-[#13151c] border border-white/5 flex flex-col flex-1">
                   <div className="flex items-center justify-between mb-6">
                     <h3 className="text-[13px] font-bold text-white">Activity</h3>
                     <span className="text-[10px] text-indigo-400 cursor-pointer font-medium hover:underline">View all</span>
                   </div>
                   <div className="space-y-5">
                      <ActivityItem 
                        icon={<Github size={12} className="text-[#0a0a0f]" />} 
                        title="Pushed 3 commits to DevFlow" 
                        time="2 hours ago" 
                        colorClass="bg-white" 
                      />
                      <ActivityItem 
                        icon={<span className="text-white text-[10px] font-bold">d</span>} 
                        title="Added 4 new shots to portfolio" 
                        time="5 hours ago" 
                        colorClass="bg-[#ea4c89]" 
                      />
                      <ActivityItem 
                        icon={<FileText size={12} className="text-white" />} 
                        title="Published a new blog post" 
                        time="1 day ago" 
                        colorClass="bg-blue-500" 
                      />
                   </div>
                 </div>

               </div>

             </div>
           </div>
         </div>
      </main>
    </div>
  );
}
