'use client'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../_utils/types';
import Link from 'next/link';

export default function ProjectCards({ project }: { project: Project }) {
  return (
    <div 
      className="group relative flex flex-col rounded-md bg-white border border-blue-100 shadow-xl shadow-blue-100/10 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 overflow-hidden"
    >
      <Link href={`/work/${project.slug}`} className="relative block w-full aspect-[16/10] outline-none">
        
        {/* Background Image */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Hover Overlay with Action Icon */}
        <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-md text-blue-600 p-4 rounded-full shadow-lg transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out flex items-center justify-center mb-10">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Floating Info Bar (Overlays directly on top of the image) */}
        <div className="absolute bottom-3 left-8 right-8 bg-white/95 backdrop-blur-md px-5 py-2 rounded-[1rem] shadow-sm flex items-center justify-center border border-white transition-colors duration-300 group-hover:border-blue-100 ">
          <h3 className="text-base font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors truncate">
            {project.title}
          </h3>
          {/* <span className="text-xs font-bold text-blue-500 tracking-widest uppercase whitespace-nowrap bg-blue-50 px-2.5 py-1 rounded-md">
            {project.category}
          </span> */}
        </div>

      </Link>
    </div>
  );
}