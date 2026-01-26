import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github, Code2, Layers } from 'lucide-react';
import { Project } from '../_utils/types';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function ProjectCards({project}: {project: Project}) {
  return (
    <motion.div 
      variants={cardVariants}
      className="group relative flex flex-col bg-slate-900/40 border border-white/5 backdrop-blur-sm overflow-hidden"
    >
      {/* Technical Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-950/50 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
        <div className="flex items-center gap-2">
          <Code2 className="w-3 h-3 text-blue-500" />
          <span>ID: {project.id}</span>
        </div>
        <div className="flex items-center gap-2">
          <Layers className="w-3 h-3" />
          <span>V2.1.0_LATEST</span>
        </div>
      </div>

      {/* Image Section with Scanner Hover */}
      <div className="relative  overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Scanner Line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)] opacity-0 group-hover:animate-scanner pointer-events-none" />
        
        <div className="absolute bottom-2 left-4 flex gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-slate-950/80 backdrop-blur-md text-[9px] font-mono text-blue-400 border border-blue-500/20">
              0x_{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <span className="text-[10px] font-mono text-blue-500 mb-2 tracking-[0.3em] uppercase">{project.category}</span>
        <h3 className="text-2xl font-black text-white mb-4 tracking-tighter uppercase leading-none group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
          {project.description}
        </p>

        <div className="flex items-center gap-4 mt-auto">
          <a 
            href={project.live}
            target='_blank' 
            className="flex items-center gap-2 text-[10px] font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 uppercase tracking-widest transition-all"
          >
            <ExternalLink className="w-3 h-3" />
            Launch Module
          </a>
          <a 
            href={project.github} 
            className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-white border border-white/10 hover:border-blue-500/50 px-4 py-2 uppercase tracking-widest transition-all"
          >
            <Github className="w-3 h-3" />
            Source
          </a>
        </div>
      </div>
      
      {/* Glow corner decoration */}
      <div className="absolute top-0 right-0 w-px h-0 bg-blue-500 group-hover:h-full transition-all duration-700" />
      <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
};