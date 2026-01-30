
import React from 'react';
import {
  Code2,
  Cpu,
  Database,
  Layout,
  Layers,
  Smartphone,
  BrainCircuit,
  Bot,
  Zap,
  Globe,
  Server,
  Terminal
} from 'lucide-react';
import { Project, Experience, Service, EducationEntry } from './types';

export const CurrentTime = () => {
  const date = new Date
  return date.toLocaleTimeString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });
};


export const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'STACK', href: '#skills' },
  { name: 'PROJECTS', href: '/work' },
  { name: 'HISTORY', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];


export const educationData: EducationEntry[] = [
  {
    id: "LOG_01",
    degree: "BS in Software Engineering",
    institution: "Virtual University of Pakistan",
    period: "2025 — 2029",
    location: "Online",
    description: "Architectural focus on distributed systems, networking, and high-concurrency backend infrastructure.",
    highlights: ["GPA: N/A", "Distinction in AI Systems", "System Architect Lead"]
  },
  {
    id: "LOG_02",
    degree: "Intermediate in Computer Science",
    institution: "Government Degree Collage",
    period: "2023-2024",
    location: "Physical",
    description: "Mastering multi-cloud deployments, VPC peering, and serverless orchestration at massive scale.",
    highlights: ["Infrastructure as Code", "Global Scaling", "Zero-Trust Security"]
  },
  {
    id: "LOG_03",
    degree: "Matriculation in Computer Science",
    institution: "Jauhar Grammer School",
    period: "2022 — 2023",
    location: "Physical",
    description: "Deep dive into computational complexity, graph theory, and advanced data structures for real-time systems.",
    highlights: ["Complexity Analysis", "Graph Optimization", "Memory Management"]
  }
];

export const SKILLS = [
  // Frontend
  { name: 'React', category: 'frontend', icon: <Layout className="w-5 h-5" /> },
  { name: 'Next.js', category: 'frontend', icon: <Layers className="w-5 h-5" /> },
  { name: 'Tailwind CSS', category: 'frontend', icon: <Zap className="w-5 h-5" /> },
  { name: 'TypeScript', category: 'frontend', icon: <Code2 className="w-5 h-5" /> },

  // Backend
  { name: 'Node.js', category: 'backend', icon: <Server className="w-5 h-5" /> },
  { name: 'Express', category: 'backend', icon: <Terminal className="w-5 h-5" /> },
  { name: 'MERN Stack', category: 'backend', icon: <Layers className="w-5 h-5" /> },

  // AI
  { name: 'Generative AI', category: 'ai', icon: <BrainCircuit className="w-5 h-5" /> },
  { name: 'Agentic AI', category: 'ai', icon: <Bot className="w-5 h-5" /> },
  { name: 'Vector DBs', category: 'ai', icon: <Cpu className="w-5 h-5" /> },

  // Databases
  { name: 'MongoDB', category: 'database', icon: <Database className="w-5 h-5" /> },
  { name: 'PostgreSQL', category: 'database', icon: <Database className="w-5 h-5" /> },
  { name: 'Neon DB', category: 'database', icon: <Database className="w-5 h-5" /> },

  // Other
  { name: 'Android WebView', category: 'other', icon: <Smartphone className="w-5 h-5" /> },
  { name: 'Deployment', category: 'other', icon: <Globe className="w-5 h-5" /> },
];

export const SERVICE: Service[] = [
  {
    title: "AI-Powered CRM System",
    description: "Built a complete CRM with Agentic AI modules for automated lead qualification and task prioritization using Vector Databases for semantic search.",
    tags: ["Next.js", "Neon DB", "Agentic AI", "LangChain"],
    image: "https://picsum.photos/seed/crm/800/600"
  },
  {
    title: "Eco-Stream Monitor",
    description: "MERN stack application with real-time analytics for environmental monitoring, utilizing PostgreSQL for heavy relational data operations.",
    tags: ["React", "Express", "PostgreSQL", "Socket.io"],
    image: "https://picsum.photos/seed/eco/800/600"
  },
  {
    title: "Android WebView Hub",
    description: "A specialized wrapper for web-based enterprise dashboards optimized for Android performance and system-level bridge communication.",
    tags: ["Java", "WebView", "React", "Next.js"],
    image: "https://picsum.photos/seed/mobile/800/600"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Lead Full Stack Developer",
    company: "AI Solutions Inc.",
    period: "2023 - Present",
    points: [
      "Integrating Gemini and OpenAI modules into core business workflows.",
      "Architecting scalable backends with Neon DB and MongoDB for high-concurrency apps.",
      "Developing custom Agentic AI workflows to reduce manual lead processing by 40%."
    ]
  },
  {
    role: "Full Stack Engineer",
    company: "TechNexus",
    period: "2021 - 2023",
    points: [
      "Built and maintained complex web applications using the MERN stack.",
      "Implemented responsive UIs with Tailwind CSS and advanced Framer Motion animations.",
      "Optimized SQL queries in PostgreSQL resulting in 25% faster data retrieval."
    ]
  }
];



export const PROJECT: Project[] = [
  {
    id: "PRJ-001",
    title: "JARVIS",
    category: "AGENTIC SYSTEMS",
    description: "A distributed autonomous agent network built on Next.js 16, utilizing Gemini 2.5 audio preview for complex task reasoning and multi-step planning.",
    tags: ["Next.js", "Gemini API", "Drizzle"],
    image: "/jarvis.png",
    github: "#",
    live: "https://jarvis-asharmeraj.vercel.app"
  },
   {
    id: "PRJ-002",
    title: "Timestore",
    category: "ECOMMERCE",
    description: "Cloud-native infrastructure management tool for orchestrating microservices across multi-region hybrid environments.",
    tags: ["Go", "Node.js", "Docker", "PostgreSQL"],
    image: "/Timestore.png",
    github: "#",
    live: "https://time-store.vercel.app/"
  },
  {
    id: "PRJ-003",
    title: "EZCounselling",
    category: "SYSTEM ARCHITECTURE",
    description: "Cloud-native infrastructure management tool for orchestrating microservices across multi-region hybrid environments.",
    tags: ["Go", "Node.js", "Docker", "PostgreSQL"],
    image: "/counselling.png",
    github: "#",
    live: "https://counselling-app-scree-git-352ccb-ashar-merajs-projects-60e64089.vercel.app/"
  },
  {
    id: "PRJ-004",
    title: "MyVitals",
    category: "Medical System",
    description: "Real-time data visualization platform processing millions of events per second with high-scale vector optimization.",
    tags: ["React", "TypeScript", "Neon DB", "Inngest"],
    image: "/myvitals2.png",
    github: "#",
    live: "#"
  },
  {
    id: "PRJ-005",
    title: "AIM",
    category: "SYSTEM ARCHITECTURE",
    description: "Cloud-native infrastructure management tool for orchestrating microservices across multi-region hybrid environments.",
    tags: ["Go", "Node.js", "Docker", "PostgreSQL"],
    image: "/Aim.png",
    github: "#",
    live: "https://ai-interview-mocker-aim.vercel.app/"
  },
  {
    id: "PRJ-006",
    title: "AI ACADEMY",
    category: "SYSTEM ARCHITECTURE",
    description: "Cloud-native infrastructure management tool for orchestrating microservices across multi-region hybrid environments.",
    tags: ["Go", "Node.js", "Docker", "PostgreSQL"],
    image: "/AiAcademy.png",
    github: "#",
    live: "https://asharmeraj-ai-academy.vercel.app/"
  },
  {
    id: "PRJ-007",
    title: "Pest Control",
    category: "SYSTEM ARCHITECTURE",
    description: "Cloud-native infrastructure management tool for orchestrating microservices across multi-region hybrid environments.",
    tags: ["Go", "Node.js", "Docker", "PostgreSQL"],
    image: "/Pestcontrol.png",
    github: "#",
    live: "https://americanhitecpestcontrol-asharmeraj.vercel.app/"
  },
  {
    id: "PRJ-008",
    title: "Dine Market",
    category: "SYSTEM ARCHITECTURE",
    description: "Cloud-native infrastructure management tool for orchestrating microservices across multi-region hybrid environments.",
    tags: ["Go", "Node.js", "Docker", "PostgreSQL"],
    image: "/Dinemarket.png",
    github: "#",
    live: "https://dinemarket-blue.vercel.app/"
  },
];
