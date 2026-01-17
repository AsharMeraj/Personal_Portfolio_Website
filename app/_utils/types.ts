export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'ai' | 'database' | 'other';
}

export interface Service {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface ServiceCardProps {
  icon: React.ReactNode;
  head: string;
  para: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
}