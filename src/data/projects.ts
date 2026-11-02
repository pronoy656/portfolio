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
    slug: "k10-football",
    number: "01",
    title: "K10 Football",
    tagline: "Smart Club Management & Live Match Tactics",
    category: "Club Management / 2025",
    role: "Lead Frontend Engineer",
    image: "/football-mockup-2.png",
    images: [
      "/football-mockup-2.png",
      "/demo-dashboard-analytics.jpg",
      "/demo-saas-dashboard.jpg",
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
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656",
  },
  {
    id: "02",
    slug: "heaven-furniture",
    number: "02",
    title: "Heaven Furniture",
    tagline: "Modern Luxury Furniture E-Commerce Experience",
    category: "E-Commerce / 2024",
    role: "Full-Stack Developer",
    image: "/jbay-mockup(2).png",
    images: [
      "/jbay-mockup(2).png",
      "/demo-landing-marketing.jpg",
      "/demo-web-design.jpg",
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
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656",
  },
  {
    id: "03",
    slug: "fixpair",
    number: "03",
    title: "Fixpair",
    tagline: "Real-Time Expert Consultation & Video Transcriptions",
    category: "Consultant & Booking / 2024",
    role: "Frontend Engineer",
    image: "/tutor-mockup-2.png",
    images: [
      "/tutor-mockup-2.png",
      "/demo-wireframe-ui.jpg",
      "/demo-saas-dashboard.jpg",
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
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656",
  },
  {
    id: "04",
    slug: "devpulse-analytics",
    number: "04",
    title: "DevPulse Analytics",
    tagline: "Enterprise Developer Intelligence & Velocity Platform",
    category: "SaaS Platform / 2024",
    role: "Lead UI/UX Architect",
    image: "/portfolio-mockup.png",
    images: [
      "/portfolio-mockup.png",
      "/demo-dashboard-analytics.jpg",
      "/demo-saas-dashboard.jpg",
    ],
    metrics: [
      { value: "45%", label: "Throughput Boost" },
      { value: "120+", label: "Dev Teams Active" },
    ],
    desc: "An enterprise developer intelligence dashboard tracking sprint velocity, code review throughput, and release health with interactive visualizations and automated summaries.",
    fullDesc:
      "Crafted an interactive engineering dashboard visualizing sprint cycle times, pull request bottlenecks, and deployment frequencies. Features customizable widgets, CSV exports, and granular RBAC workspace permissions.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "TanStack Query",
      "REST APIs",
    ],
    features: [
      "Interactive data visualizations with real-time sprint throughput metrics",
      "Automated release health checks and bottleneck anomaly alerts",
      "Granular role-based access control and workspace management",
      "Customizable widgets with dark/light mode and high-res export",
    ],
    contributions: [
      "Architected the modular analytics component library with Tailwind CSS",
      "Optimized large dataset chart rendering speeds using memoization",
      "Implemented responsive mobile and desktop dashboard layouts",
    ],
    accentColor: "#7c3aed",
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656",
  },
  {
    id: "05",
    slug: "novapay-wallet",
    number: "05",
    title: "NovaPay Wallet",
    tagline: "Cross-Border Digital Wallet & Instant Multi-Currency Transfers",
    category: "Fintech Platform / 2024",
    role: "Full-Stack Engineer",
    image: "/hero-visual.png",
    images: [
      "/hero-visual.png",
      "/demo-finance-app.jpg",
      "/demo-landing-marketing.jpg",
    ],
    metrics: [
      { value: "$2.5M+", label: "Monthly Volume" },
      { value: "0.4s", label: "Instant Settlement" },
    ],
    desc: "A digital wallet and cross-border payment experience featuring instant transfers, multi-currency balances, biometric transaction authorization, and automated recurring billing.",
    fullDesc:
      "Engineered secure fintech flows including two-factor verification, dynamic multi-currency exchange calculators, instant peer-to-peer ledger settlements, and recurring subscription automation.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "Axios",
    ],
    features: [
      "Instant peer-to-peer transfers with real-time ledger updates",
      "Multi-currency conversion calculator with dynamic live rates",
      "Encrypted biometric transaction approval and two-factor safety",
      "Detailed statement downloads and automated spend categorization",
    ],
    contributions: [
      "Built clean, responsive fintech user flows with strict validation",
      "Implemented centralized state management with Redux Toolkit",
      "Added tactile micro-animations and feedback states with Framer Motion",
    ],
    accentColor: "#0284c7",
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656",
  },
  {
    id: "06",
    slug: "cloudnest-drive",
    number: "06",
    title: "CloudNest Drive",
    tagline: "Collaborative Cloud Storage & Secure Asset Workspace",
    category: "Cloud & Productivity / 2024",
    role: "Lead Frontend Engineer",
    image: "/1782603260471.png",
    images: [
      "/1782603260471.png",
      "/demo-web-design.jpg",
      "/demo-saas-dashboard.jpg",
    ],
    metrics: [
      { value: "50GB", label: "Free Tier Quota" },
      { value: "100%", label: "End-to-End Encrypted" },
    ],
    desc: "A collaborative cloud asset management platform enabling users to upload, preview, organize, and securely share documents with expiration links and real-time syncing.",
    fullDesc:
      "Designed a Google Drive-tier file explorer with chunked multi-file drag-and-drop uploads, live document and media previews, password-protected temporary links, and active folder collaboration feeds.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
      "React Dropzone",
      "shadcn/ui",
    ],
    features: [
      "Chunked drag-and-drop file uploads with live percentage indicators",
      "Instant media previews for PDFs, audio, video, and high-res imagery",
      "Secure link sharing with custom passwords and automatic expiration",
      "Real-time folder presence and activity feed powered by Socket.IO",
    ],
    contributions: [
      "Designed responsive file grid, thumbnail generators, and folder trees",
      "Integrated Socket.IO for live collaboration and concurrent updates",
      "Optimized list virtualization for rendering thousands of assets cleanly",
    ],
    accentColor: "#e11d48",
    liveLink: "https://github.com/pronoy656",
    githubLink: "https://github.com/pronoy656",
  },
  {
    id: "07",
    slug: "apex-design-system",
    number: "07",
    title: "Apex Design System",
    tagline: "Accessible Multi-Brand Component Engine & UI Token Studio",
    category: "Design System & Tools / 2024",
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
    id: "08",
    slug: "zenith-marketing-studio",
    number: "08",
    title: "Zenith Marketing Studio",
    tagline: "High-Performance Growth Landing Suite & Visual CMS",
    category: "Marketing & CMS / 2023",
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

