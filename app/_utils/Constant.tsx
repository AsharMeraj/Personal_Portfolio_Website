
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
  { name: 'Home', href: '/' },
  { name: 'Works', href: '/work' },
  { name: 'Contact', href: '/contact' },
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
    slug: "jarvis",
    category: "AGENTIC SYSTEMS",
    description: [
      "JARVIS is an AI assistant built as a network of autonomous agents. Each agent has its own job, and together they work through complex tasks without needing constant instructions. It is powered by Gemini 2.5, which handles the reasoning and decides what should happen next.",
      "When a task comes in, JARVIS breaks it into smaller steps and plans the order to do them in. The agents pass results to each other as they go, so one request can turn into a full workflow. It also processes audio live, which means you can talk to it and get a spoken style response without waiting for a full page reload.",
      "The app is built with Next.js and TypeScript, so the interface is fast and the code stays safe and easy to maintain. Drizzle manages the database layer, which keeps conversations and task history stored in a clean, typed way.",
    ],
    tags: ["Next.js", "Gemini API", "Drizzle", "TypeScript"],
    image: "/jarvis.png",
    github: "#",
    live: "https://jarvis-asharmeraj.vercel.app"
  },
  {
    id: "PRJ-002",
    title: "Timestore",
    slug: "timestore",
    category: "ECOMMERCE",
    description: [
      "Timestore is a full watch store built with Next.js 15 and TypeScript. The home page shows New Arrivals, Showcase, and Featured sections with smooth Framer Motion transitions. Products load from a PostgreSQL database on the server, so pages open fast and the catalog can keep growing.",
      "Each product has its own page with an image carousel, a size picker, and related products from the same category. The cart runs on Redux Toolkit, keeps track of sizes for every item, and updates totals instantly. At checkout, a server route creates a Stripe session and sends the customer to pay, with separate success and failure pages after that.",
    ],
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Stripe"],
    image: "/Timestore.png",
    github: "#",
    live: "https://timestore-asharmeraj.vercel.app/"
  },
  {
    id: "PRJ-003",
    title: "QuickChat",
    slug: "quickchat",
    category: "SERVICE SECTOR",
    description: [
      "QuickChat is a real-time messaging app where messages show up instantly, without refreshing the page. It uses Socket.io to keep a live connection open between users and the server, so data moves both ways with very little delay.",
      "Because the connection stays open, the app can handle things like instant delivery, live conversations, and fast updates even when many people are chatting at once. It is built for speed, so the chat feels smooth and responsive.",
      "The interface is built with Next.js and TypeScript, which keeps the code reliable and easy to grow. Tailwind CSS handles the styling, so the layout stays clean and works well on any screen size.",
    ],
    tags: ["Next.js", "Socket.io", "Tailwind CSS", "TypeScript"],
    image: "/Quickchat.png",
    github: "#",
    live: "https://quickchat-asharmeraj.vercel.app/"
  },
  {
    id: "PRJ-004",
    title: "EZCounselling",
    slug: "ezcounselling",
    category: "MEDICAL SYSTEM",
    description: [
      "EZCounselling is a platform that connects counsellors and clients in one place. Clients can book sessions that fit their schedule, and consultants can manage their availability without back and forth messages.",
      "Scheduling happens in real time, so open slots are always up to date and double bookings are avoided. Communication between the consultant and the client is kept secure, which matters when the conversations are private.",
      "The app is built with Next.js and styled with Tailwind CSS for a clean, responsive layout. PostgreSQL stores the data, and Prisma gives the code a typed, reliable way to work with it.",
    ],
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma"],
    image: "/counselling.png",
    github: "#",
    live: "https://counselling-app-scree-git-352ccb-ashar-merajs-projects-60e64089.vercel.app/"
  },
  {
    id: "PRJ-005",
    title: "MyVitals",
    slug: "myvitals",
    category: "MEDICAL SYSTEM",
    description: [
      "MyVitals is a health dashboard that lets people track their vitals in one place. Readings show up in real time, so changes can be spotted as they happen instead of after the fact.",
      "Medical data is turned into clear charts and visuals, which makes trends easier to read than raw numbers. The system is also optimized to handle large amounts of data without slowing down.",
      "The frontend is built with React and TypeScript for a reliable, typed codebase. Neon DB stores the data, and Inngest runs background jobs so heavy tasks do not block the interface.",
    ],
    tags: ["React", "TypeScript", "Neon DB", "Inngest"],
    image: "/myvitals2.png",
    github: "#",
    live: "#"
  },
  {
    id: "PRJ-006",
    title: "Digital Clinic",
    slug: "digital-clinic",
    category: "MEDICAL SYSTEM",
    description: [
      "Digital Clinic is a complete clinic management system that runs the whole patient journey in one place. Patients register online, and their details are saved so they never have to fill out the same forms twice.",
      "Once registered, a patient can consult a doctor through the system. The doctor reviews the case, then writes a prescription directly in the app, so there is no paper work and no confusion about what was prescribed.",
      "Everything is automated, from registration to consultation to prescription, which saves time for both staff and patients. The app is built with React and TypeScript, Neon DB stores the data, and Inngest runs background tasks like notifications and follow ups.",
    ],
    tags: ["React", "TypeScript", "Neon DB", "Inngest"],
    image: "/digitalclinic.png",
    github: "#",
    live: "#"
  },
  {
    id: "PRJ-007",
    title: "AIM",
    slug: "aim",
    category: "AI & EDUCATION",
    description: [
      "AIM is an interview practice tool that helps people get ready for real technical interviews. It uses Gemini AI to ask realistic questions, so the session feels close to sitting in front of an actual interviewer.",
      "After each answer, the user gets instant feedback on what was good and what can be improved. This makes it easy to practice again and again, and see progress without needing another person to help.",
      "The app is built with Next.js and styled with Tailwind CSS for a clean, responsive layout. Clerk handles sign up and login, so every user has a secure account and their practice sessions stay private.",
    ],
    tags: ["Next.js", "Gemini API", "Tailwind CSS", "Clerk"],
    image: "/Aim.png",
    github: "#",
    live: "https://ai-interview-mocker-aim.vercel.app/"
  },
  {
    id: "PRJ-008",
    title: "AI ACADEMY",
    slug: "ai-academy",
    category: "AI & EDUCATION",
    description: [
      "AI Academy is a learning management system where students can take courses and learn at their own pace. It uses Gemini AI to adjust course content to each student, so the material fits what they need instead of being the same for everyone.",
      "The platform tracks each student's progress, so they can see what they have finished and what is left. Teachers and learners both get a clear picture of how the learning is going.",
      "The app is built with Next.js and TypeScript, which keeps the code fast, safe, and easy to maintain. Tailwind CSS handles the styling, so the pages look clean and work well on any device.",
    ],
    tags: ["Next.js", "Gemini API", "TypeScript", "Tailwind CSS"],
    image: "/AiAcademy.png",
    github: "#",
    live: "https://asharmeraj-ai-academy.vercel.app/"
  },
  {
    id: "PRJ-009",
    title: "Pest Control",
    slug: "pest-control",
    category: "SERVICE SECTOR",
    description: [
      "Pest Control is a website and service platform for a pest control company. It helps the business find new customers, and lets visitors book a service in a few clicks without needing to call first.",
      "After a booking, the system follows up with customers automatically, so no lead is forgotten and no one is left waiting for a reply. This saves the team time and helps turn more enquiries into real jobs.",
      "The site is built with Next.js and TypeScript for fast pages and reliable code. Tailwind CSS keeps the design clean on every screen, and Framer Motion adds smooth animations that make the site feel polished.",
    ],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/Pestcontrol.png",
    github: "#",
    live: "https://americanhitecpestcontrol-asharmeraj.vercel.app/"
  },
  {
    id: "PRJ-010",
    title: "Dine Market",
    slug: "dine-market",
    category: "ECOMMERCE",
    description: [
      "Dine Market is an online marketplace for fashion and lifestyle products. The focus is on a clean, simple design, so shoppers can find what they want and move through the store without any confusion.",
      "Pages are rendered on the server, so they load quickly and feel smooth, even on slower connections. This also helps the store show up better in search results.",
      "The app is built with Next.js and TypeScript. Neon DB stores the product data, and Tailwind CSS handles the styling, so the layout stays sharp and responsive on every device.",
    ],
    tags: ["Next.js", "Neon DB", "Tailwind CSS", "TypeScript"],
    image: "/Dinemarket.png",
    github: "#",
    live: "https://dinemarket-blue.vercel.app/"
  },
  {
    id: "PRJ-011",
    title: "BusinessGrowth",
    slug: "business-growth",
    category: "SERVICE SECTOR",
    description: [
      "BusinessGrowth is a website built to help a business present its services and attract more clients. It has a clear layout that explains what the business offers and makes it easy for visitors to get in touch.",
      "The design focuses on a clean look and fast loading, so visitors stay on the page and trust what they see.",
      "The app is built with Next.js and TypeScript. Neon DB stores the data, and Tailwind CSS handles the styling, so the site looks good on every screen size.",
    ],
    tags: ["Next.js", "Neon DB", "Tailwind CSS", "TypeScript"],
    image: "/businessgrowth.png",
    github: "#",
    live: "https://businessgrowth-url-here.vercel.app/"
  },
];




