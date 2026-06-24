export const personalInfo = {
  name: "Habib Ur Rehman",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications with modern technologies & AI",
  location: "Islamabad, Pakistan",
  email: "idrhabib5@gmail.com",
  phone: "+92 348 5148387",
  github: "https://github.com/idevhabib5",
  linkedin: "https://linkedin.com/in/habiburrehmannn",
  availability: "Open to opportunities",
  avatar: "/avatar.jpg",
  resumeUrl: "/resume.pdf",
};

export const heroContent = {
  greeting: "Hi, I am",
  headline: "I craft production-ready web experiences that scale.",
  summary:
    "Junior Full Stack Developer specializing in React, TypeScript, and cloud-native backends. I build responsive interfaces, secure authentication systems, and AI-powered SaaS products — with a track record of shipping features in remote, agile teams.",
  ctas: [
    { label: "View My Work", href: "#projects", variant: "primary" as const },
    { label: "Get In Touch", href: "#contact", variant: "secondary" as const },
  ],
};

export const aboutContent = {
  journey:
    "From competing nationally in full-stack development to shipping production software at MicroKosm, my journey has been defined by a relentless focus on clean code, user-centric design, and leveraging modern tools — including AI — to deliver faster and smarter.",
  strengths: [
    {
      title: "Full Stack Engineering",
      description:
        "End-to-end development across React, Next.js, Node.js, and PostgreSQL with production-grade authentication and API design.",
    },
    {
      title: "AI-Powered Products",
      description:
        "Experience integrating OpenAI APIs, streaming responses, and AI-assisted workflows into real SaaS applications.",
    },
    {
      title: "Remote Collaboration",
      description:
        "Proven ability to deliver in distributed teams through code reviews, agile sprints, and clear async communication.",
    },
    {
      title: "Database Architecture",
      description:
        "Strong SQL foundation with PostgreSQL, Supabase, and MongoDB — designing schemas, queries, and RBAC systems.",
    },
  ],
  highlights: [
  "Ranked 1st among 120+ teams in a nationwide Full-Stack Development Competition",
    "Magna cum laude in Computer Science at COMSATS University Islamabad",
    "Shipped 4+ production-grade projects spanning marketplaces, SaaS, and social platforms",
    "7 professional certifications from DataCamp, Duke, Vanderbilt & Microsoft",
  ],
};

export const skillCategories = [
  {
    name: "Frontend",
    icon: "layout",
    skills: [
      { name: "React", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "HTML5 / CSS3", level: 88 },
      { name: "shadcn/ui", level: 85 },
    ],
  },
  {
    name: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "JWT Auth", level: 88 },
      { name: "RBAC Systems", level: 85 },
    ],
  },
  {
    name: "Databases",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "SQL", level: 92 },
      { name: "Supabase", level: 90 },
      { name: "MongoDB", level: 82 },
    ],
  },
  {
    name: "Cloud & Tools",
    icon: "cloud",
    skills: [
      { name: "Supabase", level: 90 },
      { name: "Firebase", level: 78 },
      { name: "Vercel", level: 85 },
      { name: "Git / GitHub", level: 92 },
    ],
  },
  {
    name: "AI & Methods",
    icon: "sparkles",
    skills: [
      { name: "OpenAI API", level: 85 },
      { name: "Prompt Engineering", level: 82 },
      { name: "AI-Assisted Dev", level: 88 },
      { name: "Agile / Scrum", level: 85 },
    ],
  },
];

export const experience = [
  {
    id: "microkosm",
    role: "Associate Software Engineer",
    company: "MicroKosm",
    location: "Remote",
    period: "Apr 2025 — Dec 2025",
    type: "Full-time",
    achievements: [
      "Developed and maintained React + TypeScript applications serving business users in production",
      "Built reusable UI component libraries and integrated Supabase auth with PostgreSQL-backed services",
      "Collaborated with distributed engineering teams to ship production-ready features on schedule",
      "Drove debugging, code reviews, and performance optimization across the codebase",
    ],
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    id: "developer-tag",
    role: "MERN Stack Developer Intern",
    company: "Developer Tag",
    location: "On-site",
    period: "Jul 2025 — Sept 2025",
    type: "Internship",
    achievements: [
      "Built full-stack web applications using MongoDB, Express.js, React, and Node.js",
      "Developed RESTful APIs and integrated third-party services for scalable features",
      "Designed responsive frontend interfaces with modern UX patterns",
      "Collaborated in Git-based agile workflows with sprint planning and peer reviews",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
  },
];

export const education = {
  institution: "COMSATS University Islamabad",
  degree: "Bachelor of Science in Computer Science",
  honors: "Magna cum laude",
  coursework: [
    "Data Structures",
    "Algorithms",
    "Database Systems",
    "Software Engineering",
    "Web Development",
  ],
};

export const projects = [
  {
    id: "universe",
    title: "UniVerse",
    tagline: "Cross-university collaboration · MicroKosm",
    description:
      "A web platform designed to break down academic silos by enabling students from different universities to connect, collaborate, and share resources in one unified space — fostering global collaboration, peer learning, and project-based engagement beyond institutional boundaries.",
    impact: [
      "Cross-university student networking and collaboration",
      "Secure authentication with Google OAuth and role-based access with data isolation between institutions",
      "Scalable, real-time-ready backend with a responsive, modern user interface",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Google OAuth",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    github: "https://github.com/idevhabib5",
    live: "https://uni-verse-livid.vercel.app/",
    featured: true,
    period: "Sep 2025 — Present",
    gradient: "from-indigo-500/20 to-violet-600/20",
    accent: "#6366f1",
  },
  {
    title: "Housify",
    tagline: "Property marketplace platform",
    description:
      "A full-featured property marketplace connecting tenants with landlords and agents — featuring multi-portal architecture, real-time messaging, and map-based discovery.",
    impact: [
      "3 distinct user portals: Tenant, Agent, and Admin with role-based workflows",
      "Advanced search, favorites, messaging, and notification systems",
      "Supabase Auth + PostgreSQL powering secure, database-driven operations",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vite",
    ],
    github: "https://github.com/idevhabib5",
    live: "https://housify-eta.vercel.app/",
    featured: true,
    gradient: "from-violet-500/20 to-purple-600/20",
    accent: "#8b5cf6",
  },
  {
    id: "terzo",
    title: "Terzo.ai",
    tagline: "AI-powered SaaS platform",
    description:
      "An intelligent SaaS product leveraging OpenAI for content generation, with subscription billing and a modern App Router architecture.",
    impact: [
      "Streaming OpenAI API responses for real-time intelligent content generation",
      "Stripe-integrated subscription management and payment workflows",
      "Production-ready auth and responsive UI built with Next.js 14 App Router",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "OpenAI API",
      "Stripe",
      "Tailwind CSS",
    ],
    github: "https://github.com/idevhabib5",
    live: "https://terzo.ai/",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-600/20",
    accent: "#06b6d4",
  },
  {
    id: "yaaran-thread",
    title: "Yaaran-Thread",
    tagline: "Social platform",
    description:
      "A modern social platform with authentication, real-time data, and polished UI components — built for engaging user experiences.",
    impact: [
      "Reusable component architecture with shadcn/ui and Tailwind CSS",
      "Full Supabase integration for auth and database operations",
      "Responsive, mobile-first design across all screen sizes",
    ],
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/idevhabib5",
    live: "https://yaaran-thread.vercel.app/",
    featured: true,
    gradient: "from-emerald-500/20 to-teal-600/20",
    accent: "#10b981",
  },
];

export const certifications = [
  {
    title: "Introduction to SQL",
    issuer: "DataCamp",
    year: "2024",
    url: "https://www.datacamp.com",
    icon: "database",
  },
  {
    title: "Understanding Cloud Computing",
    issuer: "DataCamp",
    year: "2024",
    url: "https://www.datacamp.com",
    icon: "cloud",
  },
  {
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University",
    year: "2024",
    url: "https://www.coursera.org",
    icon: "sparkles",
  },
  {
    title: "Programming Foundations with JavaScript, HTML & CSS",
    issuer: "Duke University",
    year: "2023",
    url: "https://www.coursera.org",
    icon: "code",
  },
  {
    title: "Foundations of Git",
    issuer: "DataCamp",
    year: "2024",
    url: "https://www.datacamp.com",
    icon: "git",
  },
  {
    title: "Team Building & Leadership in Program Management",
    issuer: "Microsoft",
    year: "2024",
    url: "https://www.microsoft.com",
    icon: "users",
  },
  {
    title: "ALP 24",
    issuer: "Aspire Institute",
    year: "2024",
    url: "https://www.aspireleaders.org",
    icon: "award",
  },
];

export const achievements = [
  {
    value: "1st",
    label: "Nationwide Competition",
    description: "Ranked 1st among 120+ teams in Full-Stack Development",
  },
  {
    value: "Magna",
    label: "Cum Laude",
    description: "Bachelor of Science in Computer Science",
  },
  {
    value: "4+",
    label: "Production Projects",
    description: "Marketplaces, SaaS platforms & social apps shipped",
  },
  {
    value: "7",
    label: "Certifications",
    description: "From DataCamp, Duke, Vanderbilt & Microsoft",
  },
  {
    value: "2",
    label: "Industry Roles",
    description: "Associate Engineer & MERN Stack Intern",
  },
  {
    value: "10+",
    label: "Technologies",
    description: "Across frontend, backend, cloud & AI stacks",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
