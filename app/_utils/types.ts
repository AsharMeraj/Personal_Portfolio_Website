export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'ai' | 'database' | 'other';
}

export interface Project {
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
