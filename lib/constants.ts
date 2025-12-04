
import { Project, SkillCategory, Achievement, SocialLink, Testimonial } from './types';
export const PERSONAL_INFO = {
  name: "Yash Pandav",
  role: "AI Engineer",
  roleSecondary: "Full Stack Developer",
  location: "Surat, Gujarat, India",
  email: "contact@yashpandav.dev",
  resume: "https://drive.google.com/file/d/1LiJPlb8OvMAimUihFTTWkbmjFwySdy4u/view?usp=sharing",
  terminalIntro: {
    cmd: "> npm run dev",
    response: "Initializing Project... Setup complete. Specializing in scalable full-stack architecture and AI integration.",
    tagline: "Building scalable applications and AI-powered solutions that turn ideas into reality.",
    latency_humor: "O(1) complexity preferred"
  },
  aboutJson: {
    current_focus: "Agentic AI, RAG Systems, Backend Development",
    core_stack: ["LangChain", "LangGraph", "Next.js", "VectorDB"],
    mission_objective: "Building scalable, user-centric applications.",
    latency_tolerance: "Optimized for High Performance"
  }
};

export const ABOUT = {
  imageUrl: "/MyImage.png",
  bioParagraphs: [
    "I'm a *Full-Stack* *Developer* and *AI* *Engineer* passionate about creating scalable, intelligent applications that solve real-world problems.",
    "My expertise lies in combining modern web technologies with *Generative* *AI* and *Agentic* *AI* to build intelligent, reliable, and user-focused solutions.",
    "I enjoy designing end-to-end systems — from concept to implementation — that integrate *LLMs*, *automation*, and *modern* *web* *architectures* to create meaningful impact."
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
    title: "TechieBlog",
    date: "March 2025",
    description: [
      "A clean and modern open - source blogging platform powered by Appwrite and Next.js.",
      "Built end - to - end authentication, markdown publishing, media uploads, and a dynamic editor — all wrapped in a fast, minimal UI.",
      "Focused on improving DX by contributing optimizations, setup, and scalable architecture."
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
      "A secure natural-language SQL assistant designed for teams working with sensitive data and internal dashboards.",
      "Converts English queries into safe, permission-aware SQL using FastAPI guardrails, role-based access, and immutable blockchain-style logs.",
      "Built during HackOdisha with a focus on speed, safety, and enterprise-grade reliability — delivering a smooth, intelligent query experience."
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
    title: "TeaCoder Agent - AI Coding Assistant",
    date: "May 2025",
    description: [
      "A terminal - native AI coding companion that edits, generates, and executes code like a mini Cursor.",
      "Scans entire projects, rewrites files, runs shell commands, and maintains reasoning context using Gemini 1.5 Flash.",
      "Designed for speed, automation, and a coder- first workflow — perfect for rapid prototyping from your terminal."
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
    title: "AutoMission Bot - HR Assistant",
    date: "June 2025",
    description: [
      "A smart HR automation agent that answers employee queries with sub - second vector - retrieval accuracy.",
      "Reduces manual workload by nearly 80 % through RAG pipelines, structured memory, and dynamic tool - calling.",
      "Achieved Top 8 global ranking in the official LangFlow AI Challenge."
    ],
    tech: ["LangFlow", "LangChain", "RAG", "Vector DB", "Gemini API"],
    links: { demo: "https://youtu.be/k9CrXuwjglw" },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=AutoMission+Bot"
  },
  {
    title: "Book Review Platform",
    date: "September 2025",
    description: [
      "A full - stack MERN platform for discovering, reviewing, and organizing books with an intuitive rating system.",
      "Features real - time reviews, pagination, search filters, JWT authentication, and interactive rating charts.",
      "Built with a focus on clean UX, responsive layouts, and a robust REST API layer."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "Tailwind CSS", "JWT Authentication"],
    links: {
      demo: "https://book-review-platform-sigma.vercel.app/",
      code: "https://github.com/yashpandav/Book-Review-Platform"
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=Book+Review+Platform"
  },
  {
    title: "Portfolio",
    date: "November 2025",
    description: [
      "A high - performance personal portfolio built with React, Tailwind CSS, and Google Gemini.",
      "Features a custom AI chat agent, a cinematic system - boot preloader, and a premium Vercel - inspired UI.",
      "Enhanced with micro - interactions, custom cursors, smooth reveal animations, and full mobile responsiveness."
    ],
    tech: ["Next Js", "Tailwind CSS", "Google Gemini API", "Framer Motion", "TypeScript"],
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
      "A Google - Classroom - style learning platform for managing assignments, submissions, and grading.",
      "Role - based dashboards for teachers and students, automated evaluation workflows, and a scalable MERN backend.",
      "Designed with clean UI, reliable state management, and real - world classroom - friendly usability."
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
    title: "Global Rank 8",
    description: "Langflow Challenge 2025 (Top 8 among 7,000+ participants)",
  },
  {
    title: "Open Source Winner",
    description: "Winner of Social Winter of Code (Season 5) & Innogeeks Winter of Code",
    image: "/Oken.png",
  },
  {
    title: "Hackathon Victor",
    description: "Consistent winner across 5+ National and International Hackathons",
  },
  {
    title: "Algorithmic Proficiency",
    description: "Data Structures & Algorithms problems solver",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Oken Keithellakpam",
    role: "Project Maintainer",
    company: "React Blog (SWOC/IWOC)",
    image: "/Oken.png",
    text: "I want to highlight Yash, one of the key contributors to my React Blog open-source project. Yash made more than 40+ meaningful contributions, ranging from adding significant features to improving existing functionality and addressing important issues. Throughout the process, he was highly professional, reliable, and always easy to communicate with. His dedication and technical expertise played a major role in the growth of the project. Yash is an excellent developer with a strong sense of collaboration, and I'm confident he will continue to grow and achieve even greater milestones in his career.",
    linkedin: "https://www.linkedin.com/in/okenk/"
  },
  {
    name: "Anwishta Ghosh",
    role: "Mentor (SWOC 2025)",
    company: "Social Winter of Code",
    image: "./Anwishta.jpeg",
    text: "I had the pleasure of mentoring Yash during SWOC 2025, and I was consistently impressed by his dedication, technical depth, and eagerness to learn. He quickly grasped complex concepts, contributed high-quality code, and showed strong problem-solving skills throughout the program. His proactive attitude, attention to detail, and ability to collaborate effectively make him stand out. I'm confident he will excel in any role he pursues, and I highly recommend him.",
    linkedin: "https://www.linkedin.com/in/anwishta-ghosh/"
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
