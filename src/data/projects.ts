export interface Project {
  id: string;
  slug?: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  role: string;
  image: string;
  images: string[];
  metrics: { value: string; label: string }[];
  desc: string;
  fullDesc: string;
  techStack: string[];
  features: string[];
  contributions: string[];
  accentColor: string;
  liveLink?: string;
  githubLink?: string;
}

export const projectsData: Project[] = [
  {
    id: "01",
    slug: "shabos-rent",
    number: "01",
    title: "ShabbosRent",
    tagline: "Halakhic Prop-Tech, Reciprocal Apartment Swap & Affiliate ERP",
    category: "Prop-Tech & Community Hospitality",
    role: "Lead Full-Stack Engineer",
    image: "/shabosrent-mockup-1.jpg",
    images: [
      "/shabosrent-mockup-1.jpg",
      "/shabosrent-mockup-2.jpg",
      "/shabosrent-mockup-3.jpg",
    ],
    metrics: [
      { value: "1,520+", label: "Verified Listings" },
      { value: "4.8 km/h", label: "Walking Speed Engine" },
      { value: "₪50", label: "Fixed Success Fee" },
      { value: "100%", label: "Halakhic Kosher Aware" },
    ],
    desc: "An enterprise-grade hospitality and accommodation platform engineered for the global Shabbat-observant community, featuring pedestrian walking-distance calculation to synagogues, zero-cost apartment swaps, and dual-model affiliate management.",
    fullDesc:
      "Architected a domain-specialized accommodation platform resolving strict Halakhic requirements where traditional OTAs fail. Engineered a pedestrian walking-distance calculation engine based on the Haversine formula (4.8 km/h), reciprocal home-exchange swap engine, per-listing dual commission affiliate hierarchy (Model A vs B), automated weekly Torah portion (Parshiyot) availability bots, and an administrative ERP featuring voice hotline transcription and printable PDF synagogue bulletins.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Base UI",
      "Shadcn UI",
      "Recharts",
      "Lucide React",
      "i18n (Hebrew RTL)",
    ],
    features: [
      "Halakhic Walking-Distance Engine calculating pedestrian transit minutes (4.8 km/h) to synagogues & holy landmarks",
      "Zero-cost reciprocal Apartment Swap matchmaker between verified homeowners across cities",
      "Multi-tier Ambassador Affiliate system with per-apartment dual commission models (Model A vs Model B) & 7-day locks",
      "Automated weekly Torah portion (Parshiyot) calendar availability synchronization and notification triggers",
      "Administrative ERP with ₪50 debt collection ledger, voice hotline AI transcription, and print-ready PDF flyers",
      "Full bidirectional internationalization (i18n) supporting English and native Hebrew Right-to-Left (RTL)",
    ],
    contributions: [
      "Implemented geospatial walking-distance calculation using the Haversine formula assuming 4.8 km/h pedestrian velocity",
      "Engineered reciprocal apartment exchange flow with side-by-side listing comparison and validation codes",
      "Built dual commission accounting ledger with 7-day model lock deadlines, 1-level sub-ambassador bonuses, and reversal entries",
      "Created an embedded Developer Simulation Toolbar to test multi-party async platform events and deadlines",
      "Designed AI-assisted telephone hotline voice inbox and automated print-ready synagogue notice board flyer generator",
    ],
    accentColor: "#4338ca",
    liveLink: "https://shabbos-rent-website.vercel.app/",
    githubLink: "https://github.com/pronoy656/Shabbos-rent-Website-",
  },
  {
    id: "02",
    slug: "fixpair",
    number: "02",
    title: "Fixpair",
    tagline: "Real-Time Expert Consultation & Video Transcriptions",
    category: "Consultant & Booking",
    role: "Frontend Engineer",
    image: "/fixpair-mockup-1.jpg",
    images: [
      "/fixpair-mockup-1.jpg",
      "/fixpair-mockup-2.jpg",
      "/fixpair-mockup-3.jpg",
    ],
    metrics: [
      { value: "10k+", label: "Completed Calls" },
      { value: "99.9%", label: "Signaling Uptime" },
    ],
    desc: "A consultant platform where users find and book consultants, join real-time audio/video calls, view live conversation transcriptions, and make per-minute payments.",
    fullDesc:
      "Engineered real-time WebRTC and Socket.IO video/audio consultation rooms with live speech transcription streaming, automated meeting summary generation, and precision per-minute billing integrations.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
      "WebRTC",
      "TanStack Query",
      "Axios",
    ],
    features: [
      "Real-time audio/video consultation calling and instant slot reservation",
      "Live speech transcriptions streamed during active consultation calls",
      "Automated meeting summary generation delivered post-call",
      "Real-time per-minute billing and secure payment settlement",
    ],
    contributions: [
      "Implemented real-time signaling with Socket.IO for calling and instant messaging",
      "Integrated TanStack Query for optimistic updates and caching",
      "Engineered Web Push notifications for scheduled booking reminders",
    ],
    accentColor: "#059669",
    liveLink: "https://ereabook-updated-work.vercel.app/",
    githubLink: "https://github.com/pronoy656/ereabook-updated-work-",
  },
  {
    id: "03",
    slug: "k10-football",
    number: "03",
    title: "K10 Football",
    tagline: "Smart Club Management & Live Match Tactics",
    category: "Club Management",
    role: "Lead Frontend Engineer",
    image: "/k10-mockup-1.jpg",
    images: [
      "/k10-mockup-1.jpg",
      "/k10-mockup-2.jpg",
      "/k10-mockup-3.jpg",
    ],
    metrics: [
      { value: "98/100", label: "Lighthouse Score" },
      { value: "40%", label: "Faster Operations" },
    ],
    desc: "A responsive football club management platform built for managing players and coaches, with real-time statistics, performance tracking, and strategic game planning.",
    fullDesc:
      "Engineered an enterprise-grade club operations suite with JWT-based authentication, role-based dashboards, and live match updates via Socket.IO. Enables coaches to run tactical lineups and monitor athletic benchmarks in real time.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
      "Redux Toolkit",
      "shadcn/ui",
      "React Hook Form",
    ],
    features: [
      "Real-time match statistics, player tracking, and strategic game planning",
      "JWT-based authentication and role-based access control (RBAC)",
      "Scalable state management with Redux Toolkit and API-driven workflows",
      "Live updates and team notifications powered by Socket.IO",
    ],
    contributions: [
      "Built responsive football club management platform for managing players and coaches",
      "Implemented JWT authentication and RBAC with reusable UI components",
      "Delivered centralized platform that streamlined operations and live performance monitoring",
    ],
    accentColor: "#6366f1",
    liveLink: "https://k10-eta.vercel.app/",
    githubLink: "https://github.com/pronoy656",
  },
  {
    id: "04",
    slug: "heaven-furniture",
    number: "04",
    title: "Heaven Furniture",
    tagline: "Modern Luxury Furniture E-Commerce Experience",
    category: "E-Commerce",
    role: "Full-Stack Developer",
    image: "/heaven-mockup-1.jpg",
    images: [
      "/heaven-mockup-1.jpg",
      "/heaven-mockup-2.jpg",
      "/heaven-mockup-3.jpg",
    ],
    metrics: [
      { value: "2.4x", label: "Conversion Lift" },
      { value: "65ms", label: "Avg Page Response" },
    ],
    desc: "A modern furniture e-commerce platform with responsive product browsing, product details, and seamless shopping experiences across desktop and mobile devices.",
    fullDesc:
      "Delivered a fluid shopping experience featuring real-time category filtering, optimized image delivery, persistent cart state, and high-converting checkout flows tailored for luxury home furnishings.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "Zustand",
      "Stripe Integration",
    ],
    features: [
      "Responsive product browsing with category filtering and instant search",
      "Interactive 360-degree image view and detailed material specs",
      "Optimized shopping cart with state persistence and guest checkout",
      "Mobile-first responsive layouts with butter-smooth micro-animations",
    ],
    contributions: [
      "Turned complex Figma designs into pixel-perfect production code",
      "Built reusable component library and optimized responsive image pipelines",
      "Engineered friction-free checkout flows boosting user retention",
    ],
    accentColor: "#d97706",
    liveLink: "https://heaven-furniture-alpha.vercel.app/",
    githubLink: "https://github.com/pronoy656/heaven-furniture",
  },
  {
    id: "05",
    slug: "islandhop",
    number: "05",
    title: "IslandHop",
    tagline: "Enterprise Maritime Transit & Fleet Management Platform",
    category: "Maritime & Transit ERP",
    role: "Lead Frontend Engineer",
    image: "/islandhop-mockup-1.jpg",
    images: [
      "/islandhop-mockup-1.jpg",
      "/islandhop-mockup-2.jpg",
      "/islandhop-mockup-3.jpg",
    ],
    metrics: [
      { value: "100%", label: "Real-Time Inventory Lock" },
      { value: "<50ms", label: "QR Pass Gate Validation" },
      { value: "0", label: "Paper Manifest Delays" },
      { value: "99.9%", label: "Schedule Sync Uptime" },
    ],
    desc: "A high-performance, multi-tenant inter-island ferry booking and maritime operations ERP connecting passengers, ferry operators, and port authorities.",
    fullDesc:
      "A high-performance, multi-tenant inter-island ferry booking and maritime operations ERP engineered with Next.js 16, React 19, TypeScript, and TanStack Query v5. Bridges consumer booking flows with mission-critical fleet management, passenger manifests, and cryptographic QR boarding passes.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "TanStack Query v5",
      "TanStack Table v8",
      "Tailwind CSS",
      "nuqs",
      "qrcode.react",
      "@stepperize/react",
    ],
    features: [
      "Real-time synchronized inventory lock eliminating double-bookings",
      "Dynamic cryptographic QR boarding pass generation with gate scanner integration",
      "Automated maritime passenger manifest engine compliant with harbor regulations",
      "Multi-tenant ferry operator ERP with fleet registry and schedule lifecycle controls",
    ],
    contributions: [
      "Architected multi-tenant frontend architecture using Next.js 16 App Router and React 19",
      "Engineered declarative server-state synchronization with TanStack Query v5 and query key factories",
      "Built multi-step checkout funnel with URL state persistence using nuqs and @stepperize/react",
      "Implemented high-density data tables using TanStack Table v8 for fleet manifests and dispatchers",
    ],
    accentColor: "#0284c7",
    liveLink: "https://island-hop-web-pi.vercel.app/",
    githubLink: "https://github.com/pronoy656/island-hop",
  },
  {
    id: "06",
    slug: "bytespace",
    number: "06",
    title: "ByteSpace",
    tagline: "Creator Course & Digital Learning Platform",
    category: "EdTech & Creator Economy",
    role: "Lead Frontend Engineer & UI Designer",
    image: "/bytespace-mockup-1.jpg",
    images: [
      "/bytespace-mockup-1.jpg",
      "/bytespace-mockup-2.jpg",
      "/bytespace-mockup-3.jpg",
    ],
    metrics: [
      { value: "100+", label: "Interactive Courses" },
      { value: "10k+", label: "Active Students" },
    ],
    desc: "A modern creator-led education platform enabling instructors to publish courses, track student engagement, and monetize digital content with an intuitive learning experience.",
    fullDesc:
      "Architected a full-featured online learning hub where creators design courses and students track progress. Built dynamic course discovery, video lessons, interactive progress tracking, creator profiles, and community review systems.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Framer Motion",
      "Node.js",
    ],
    features: [
      "Course catalog with real-time topic search, filtering, and difficulty levels",
      "Creator studio for publishing courses, managing lessons, and monitoring student feedback",
      "Interactive student dashboard with lesson progress, completion metrics, and certificates",
      "Modern high-contrast aesthetic with responsive layout and fluid micro-interactions",
    ],
    contributions: [
      "Designed and engineered responsive student and creator interfaces",
      "Built dynamic course filtering, search, and detailed lesson viewports",
      "Implemented testimonial showcases and creator profile discovery systems",
    ],
    accentColor: "#2563eb",
    liveLink: "https://byte-space-silk.vercel.app/",
    githubLink: "https://github.com/pronoy656/ByteSpace",
  },
  {
    id: "07",
    slug: "alfa-bk-university",
    number: "07",
    title: "Alfa BK University",
    tagline: "International University Portal & Academic Administration ERP",
    category: "Higher Education & Academic ERP",
    role: "Lead Frontend Engineer",
    image: "/alfabk-mockup-1.jpg",
    images: [
      "/alfabk-mockup-1.jpg",
      "/alfabk-mockup-2.jpg",
      "/alfabk-mockup-3.jpg",
    ],
    metrics: [
      { value: "138+", label: "Academic Programs" },
      { value: "1,313", label: "Active Portal Users" },
      { value: "60+", label: "Countries Represented" },
    ],
    desc: "A comprehensive international university platform pairing a high-converting academic discovery portal with an enterprise-grade Administration Control Panel managing 1,245+ students, 68 faculty members, and real-time academic telemetry.",
    fullDesc:
      "Architected a dual-experience higher education ecosystem for Alfa BK University. The public portal delivers instant search across 138 accredited academic programs, multi-faculty navigation, and global admissions workflows, while the ABK Administration ERP empowers registrars with live student/teacher oversight, course scheduling, attendance alerts, and exam results publishing.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Role-Based Access Control",
      "Academic ERP",
    ],
    features: [
      "Real-time search engine filtering across 138+ accredited international degree programs",
      "ABK Administration Control Panel managing 1,245+ students, 68 teachers, and 156 active courses",
      "Live system telemetry monitoring server load (14%), attendance flags, and pending exam approvals",
      "Comprehensive academic suite covering routine scheduling, exams, results, and document verification",
    ],
    contributions: [
      "Engineered responsive multi-lingual university portal with Fall 2026 admissions and program discovery",
      "Built modular Administration ERP dashboard with real-time system activity logs and quick-action workflows",
      "Implemented structured academic entity modules for faculties, departments, semesters, and attendance tracking",
    ],
    accentColor: "#0f2b5b",
    liveLink: "https://alfa-bk-university.vercel.app/",
    githubLink: "https://github.com/pronoy656/Alfa-Bk-University",
  },
  {
    id: "08",
    slug: "apex-design-system",
    number: "08",
    title: "Apex Design System",
    tagline: "Accessible Multi-Brand Component Engine & UI Token Studio",
    category: "Design System & Tools",
    role: "UI Engineer & Maintainer",
    image: "/demo-web-design.jpg",
    images: [
      "/demo-web-design.jpg",
      "/demo-wireframe-ui.jpg",
      "/demo-landing-marketing.jpg",
    ],
    metrics: [
      { value: "100%", label: "WAI-ARIA Compliant" },
      { value: "45+", label: "Production Components" },
    ],
    desc: "An enterprise design system with headless accessible primitives, dynamic token generators, dark/light theme switching, and Storybook documentation.",
    fullDesc:
      "Architected a scalable UI system powered by Radix UI primitives and Tailwind CSS. Features automated Figma token synchronization, multi-theme presets, and automated visual regression testing.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Storybook",
      "Figma API",
    ],
    features: [
      "Headless WAI-ARIA compliant accessible UI components",
      "Dynamic color token generator and dark mode synchronization",
      "Live interactive Storybook sandbox with automated snapshot tests",
      "Zero-runtime CSS token compilation with tree-shaking support",
    ],
    contributions: [
      "Created token schema mapping Figma design variables to Tailwind utilities",
      "Built documentation site with live interactive component preview and copy-paste code",
      "Achieved 100% keyboard accessibility and screen-reader compliance",
    ],
    accentColor: "#8b5cf6",
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656",
  },
  {
    id: "09",
    slug: "zenith-marketing-studio",
    number: "09",
    title: "Zenith Marketing Studio",
    tagline: "High-Performance Growth Landing Suite & Visual CMS",
    category: "Marketing & CMS",
    role: "Frontend Engineer",
    image: "/demo-landing-marketing.jpg",
    images: [
      "/demo-landing-marketing.jpg",
      "/demo-finance-app.jpg",
      "/demo-dashboard-analytics.jpg",
    ],
    metrics: [
      { value: "99/100", label: "Mobile Performance" },
      { value: "3.1s", label: "Average Session" },
    ],
    desc: "A high-conversion landing page builder with interactive 3D hero moments, dynamic testimonial carousels, and automated lead capture pipelines.",
    fullDesc:
      "Crafted award-worthy marketing experiences with GSAP scroll-triggered animations, lightweight SVG physics, integrated email capture webhooks, and A/B test analytics tracking.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Node.js",
    ],
    features: [
      "Scroll-triggered interactive timelines with buttery 60fps rendering",
      "Dynamic customer testimonials carousel and live social proof metrics",
      "Direct integration with CRM and newsletter APIs with instant validation",
      "Sub-second page load times with aggressive image optimization",
    ],
    contributions: [
      "Implemented high-performance canvas animations and SVG micro-interactions",
      "Integrated email collection webhooks with rate limiting and honeypot protection",
      "Built responsive layouts tested across 15+ real desktop and mobile devices",
    ],
    accentColor: "#06b6d4",
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656",
  },
];

