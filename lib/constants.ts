import { Project, SkillCategory, Achievement, SocialLink, Testimonial, Education } from './types';

export const PERSONAL_INFO = {
  name: "Yash Pandav",
  role: "AI Engineer",
  roleSecondary: "Full Stack Developer",
  location: "Surat, Gujarat, India",
  email: "contact@yashpandav.dev",
  resume: "https://drive.google.com/file/d/1xq6-83jdWkrOTpY2PksBAXoTkwsObU6Q/view?usp=sharing",
  terminalIntro: {
    cmd: "> npm run dev",
    response: "Bootstrapping Yash Pandav... Full-stack systems online. AI modules loaded. Ready to ship.",
    tagline: "Building scalable applications and AI-powered solutions that turn ideas into reality.",
    latency_humor: "O(1) complexity. Always."
  },
  aboutJson: {
    current_focus: "Agentic AI, RAG Systems, Production Backend",
    core_stack: ["LangChain", "LangGraph", "Next.js", "VectorDB"],
    mission_objective: "Ship fast. Scale clean. Make it intelligent.",
    latency_tolerance: "Optimized for High Performance"
  }
};

export const ABOUT = {
  imageUrl: "/MyImage.png",
  bioParagraphs: [
    "I'm a *Full-Stack* *Developer* and *AI* *Engineer* who turns complex ideas into fast, intelligent, production-ready software.",
    "I specialize in blending modern web architecture with *Generative* *AI* and *Agentic* *AI* — building systems that don't just work, but actually think.",
    "From zero to deployment, I design end-to-end solutions powered by *LLMs*, *automation pipelines*, and *modern* *web* *stacks* — crafted to create real impact, not just demos."
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Generative AI & Agents",
    skills: [
      "LangChain", "LangGraph", "LangSmith", "Vercel AI SDK", "LLM APIs", "Mastra", "Neo4j", "RAG Pipelines", "VectorDB",
      "Autonomous Agents", "Tool Integration", "Memory Management", "n8n"
    ],
    icon: "Brain"
  },
  {
    name: "Frontend Interface",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux Toolkit", "shadcn/ui"],
    icon: "Layout"
  },
  {
    name: "Backend Infrastructure",
    skills: ["Node.js", "Express.js", "FastAPI", "WebSockets", "BullMQ", "Redis", "OAuth2 / JWT / Authentication"],
    icon: "Server"
  },
  {
    name: "Data Persistence & State",
    skills: ["MongoDB", "PostgreSQL", "Supabase", "Firebase", "Vector Databases", "Neo4j"],
    icon: "Database"
  },
  {
    name: "System Ops & Ecosystem",
    skills: [
      "AWS (EC2, S3, Lambda)", "Nginx", "Linux", "Git", "GitHub", "Java", "C", "Python"
    ],
    icon: "Cloud"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Wealth Management CRM",
    date: "April 2026",
    description: [
      "An enterprise-grade Wealth Management CRM built for Emdee Ventures to oversee client portfolios, customized investment plans, and multi-role operational workflows.",
      "Automates the entire investment lifecycle—from lead onboarding and KYC verification to processing purchase requests, signing contracts, and scheduling recurring interest payouts.",
      "Architected for financial compliance with strict Role-Based Access Control (RBAC), a 7-year immutable audit trail, and secure document storage — deployed on AWS Elastic Beanstalk."
    ],
    tech: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS", "AWS", "Docker"],
    links: {
      demo: "http://investment-mangement-env.eba-dxkbr8aq.us-east-1.elasticbeanstalk.com/"
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=Wealth+Management+CRM"
  },
  {
    title: "TechieBlog",
    date: "March 2025",
    description: [
      "An open-source blogging platform built for developers who care about speed, clarity, and clean UX — powered by Appwrite and Next.js.",
      "Ships with full authentication, markdown publishing, media uploads, and a distraction-free editor. Everything you need, nothing you don't.",
      "Architected for maintainability — contributed scalable optimizations that make it fast to build on and easy to extend."
    ],
    tech: ["Next.js", "Express.js", "Tailwind CSS", "Appwrite", "Docker", "JavaScript"],
    links: {
      demo: "https://techie-blogs.vercel.app/",
      code: "https://github.com/yashpandav/TechieBlog/tree/main"
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=TechieBlog"
  },
  {
    title: "AI-SafeQuery",
    date: "September 2025",
    description: [
      "Talk to your database in plain English — safely. AI-SafeQuery converts natural language into permission-aware SQL without ever exposing sensitive data.",
      "Built with FastAPI guardrails and blockchain-style immutable audit logs to meet enterprise-grade security standards.",
      "Shipped under hackathon pressure at HackOdisha — fast, secure, and production-minded from line one."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "LangChain", "Mastra"],
    links: {
      demo: "https://safequeryai.devinit.in/",
      code: "https://github.com/yashpandav/HackOdisha/tree/main"
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=AI-SafeQuery"
  },
  {
    title: "TeaCoder — AI Coding Agent",
    date: "May 2025",
    description: [
      "A terminal-native AI coding agent that reads your entire project, rewrites files, and runs shell commands — like having a mini Cursor in your CLI.",
      "Powered by Gemini 1.5 Flash with persistent reasoning context, built for speed and automation-first developer workflows.",
      "Designed for rapid prototyping: describe what you want, let it build. No IDE required."
    ],
    tech: ["Python", "Google Gemini API", "Terminal UI", "Code Generation", "Shell Automation"],
    links: {
      demo: "https://www.youtube.com/playlist?list=PLm3PPaAhVA-YfZdyG9lDjgPAoo1CP5bqK",
      code: "https://github.com/yashpandav/TeaCoder"
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=TeaCoder+Agent"
  },
  {
    title: "AutoMission Bot — HR Agent",
    date: "June 2025",
    description: [
      "An intelligent HR automation agent that handles employee queries instantly — with sub-second retrieval accuracy using RAG pipelines and vector search.",
      "Cuts manual HR workload by ~80% through structured memory, dynamic tool-calling, and a context-aware response engine.",
      "Ranked Top 8 globally out of 7,000+ participants in the official LangFlow AI Challenge."
    ],
    tech: ["LangFlow", "LangChain", "RAG", "Vector DB", "Gemini API"],
    links: { demo: "https://youtu.be/k9CrXuwjglw" },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=AutoMission+Bot"
  },
  {
    title: "Portfolio",
    date: "November 2025",
    description: [
      "Not just a portfolio — a statement. Built with Next.js, Framer Motion, and a custom AI chat agent powered by Google Gemini.",
      "Features a premium Vercel - inspired UI and micro - interactions that make every scroll feel intentional.",
      "Fully mobile-responsive with custom cursors, smooth reveal animations, and a design that's hard to forget."
    ],
    tech: ["Next.js", "Tailwind CSS", "Google Gemini API", "Framer Motion", "TypeScript"],
    links: {
      code: "https://github.com/yashpandav",
      demo: "#"
    },
    featured: true,
    image: ""
  },
  {
    title: "Circle LMS",
    date: "November 2024",
    description: [
      "A Google Classroom-inspired learning management system built for real classrooms — assignments, submissions, grading, all in one place.",
      "Role-based dashboards for teachers and students, automated evaluation workflows, and a MERN backend built to scale.",
      "Clean UI, reliable state management, and UX decisions made with actual classroom workflows in mind."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Role-based Access"],
    links: {
      code: "https://github.com/yashpandav/Circle"
    },
    featured: false,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=Circle+LMS"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Global Rank #8",
    description: "LangFlow AI Challenge 2025 — Top 8 out of 7,000+ participants worldwide.",
  },
  {
    title: "Open Source Winner",
    description: "Champion at Social Winter of Code (Season 5) & Innogeeks Winter of Code — 40+ merged contributions recognized.",
    image: "/Oken.png",
  },
  {
    title: "Hackathon Victor",
    description: "5+ wins across National and International Hackathons. Consistent top finisher under pressure.",
  },
  {
    title: "Algorithmic Proficiency",
    description: "Active competitive programmer — strong foundation in Data Structures & Algorithms across multiple platforms.",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Oken Keithellakpam",
    role: "Project Maintainer",
    company: "React Blog (SWOC / IWOC)",
    image: "/Oken.png",
    text: "I want to highlight Yash, one of the key contributors to my React Blog open-source project. Yash made more than 40+ meaningful contributions, ranging from adding significant features to improving existing functionality and addressing important issues. Throughout the process, he was highly professional, reliable, and always easy to communicate with. His dedication and technical expertise played a major role in the growth of the project. Yash is an excellent developer with a strong sense of collaboration, and I'm confident he will continue to grow and achieve even greater milestones in his career.",
    linkedin: "https://www.linkedin.com/in/okenk/"
  },
  {
    name: "Anwishta Ghosh",
    role: "Mentor, SWOC 2025",
    company: "Social Winter of Code",
    image: "./Anwishta.jpeg",
    text: "I had the pleasure of mentoring Yash during SWOC 2025, and I was consistently impressed by his dedication, technical depth, and eagerness to learn. He quickly grasped complex concepts, contributed high-quality code, and showed strong problem-solving skills throughout the program. His proactive attitude, attention to detail, and ability to collaborate effectively make him stand out. I'm confident he will excel in any role he pursues, and I highly recommend him.",
    linkedin: "https://www.linkedin.com/in/anwishta-ghosh/"
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Veer Narmad South Gujarat University",
    degree: "Bachelor of Science in Information Technology",
    duration: "July 2023 — Present",
    location: "Surat, Gujarat",
    grades: "Sem 1: 8.64, Sem 2: 8.18, Sem 3: 8.27, Sem 4: 8.18, Sem 5: 7.55"
  },
  {
    school: "Sarvajanik Vidhya Mandir",
    degree: "Higher Secondary Education",
    duration: "Completed March 2023",
    grades: "12th — 92.93%   ·   10th — 92.00%"
  }
];

export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/yashpandav", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/yash-pandav/", icon: "Linkedin" },
  { name: "Twitter", url: "https://x.com/YashPandav22959", icon: "Twitter" },
  { name: "Discord", url: "https://discord.com/users/yashpandav", icon: "Discord" },
  { name: "Dev.to", url: "https://dev.to/yashpandav", icon: "Code2" },
  { name: "Hashnode", url: "https://hashnode.com/@yashpandav", icon: "Hash" },
  { name: "Peerlist", url: "https://peerlist.io/yashpandav", icon: "Globe" },
  { name: "Email", url: "mailto:contact@yashpandav.dev", icon: "Mail" },
];