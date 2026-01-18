
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


export const educationData: EducationEntry[] = [
  {
    id: "LOG_01",
    degree: "BS in Software Engineering",
    institution: "Tech Institute of Excellence",
    period: "2020 — 2024",
    location: "Global Digital Campus",
    description: "Architectural focus on distributed systems, neural networks, and high-concurrency backend infrastructure.",
    highlights: ["GPA: 3.9/4.0", "Distinction in AI Systems", "System Architect Lead"]
  },
  {
    id: "LOG_02",
    degree: "Professional Cloud Architect",
    institution: "Google Cloud Academy",
    period: "2023",
    location: "Certification Portfolio",
    description: "Mastering multi-cloud deployments, VPC peering, and serverless orchestration at massive scale.",
    highlights: ["Infrastructure as Code", "Global Scaling", "Zero-Trust Security"]
  },
  {
    id: "LOG_03",
    degree: "Advanced Algorithms Research",
    institution: "MIT OpenCourseWare",
    period: "2021 — 2022",
    location: "Specialization Log",
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
    title: "NeuroCore AI",
    category: "AGENTIC SYSTEMS",
    description: "A distributed autonomous agent network built on Next.js 15, utilizing Gemini 2.5 for complex task reasoning and multi-step planning.",
    tags: ["Next.js", "Gemini API", "Pinecone", "Drizzle"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    github: "#",
    live: "#"
  },
  {
    id: "PRJ-002",
    title: "Vortex Analytics",
    category: "DATA INFRASTRUCTURE",
    description: "Real-time data visualization platform processing millions of events per second with high-scale vector optimization.",
    tags: ["React", "TypeScript", "Neon DB", "Inngest"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
    github: "#",
    live: "#"
  },
  {
    id: "PRJ-003",
    title: "Quantum Bridge",
    category: "SYSTEM ARCHITECTURE",
    description: "Cloud-native infrastructure management tool for orchestrating microservices across multi-region hybrid environments.",
    tags: ["Go", "Node.js", "Docker", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    github: "#",
    live: "#"
  }
];
