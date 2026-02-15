'use client'
import React, { useState, useMemo, useRef, useEffect, useLayoutEffect } from 'react';
import { Search, Database, Box, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MarginWrapper from '@/app/_components/MarginWrapper';
import ProjectCards from '@/app/_components/ProjectCards';
import { PROJECT } from '@/app/_utils/Constant';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const WorkPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Refs for animation targets
  const headerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const emptyRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const categories = ['ALL', 'AGENTIC SYSTEMS', 'ECOMMERCE', 'MEDICAL SYSTEM', 'AI & EDUCATION', 'SERVICE SECTOR'];

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    const filter = activeFilter.toUpperCase().trim();

    return PROJECT.filter((project) => {
      const projectCategory = project.category.toUpperCase().trim();
      const matchesFilter = filter === "ALL" || projectCategory === filter;
      if (!matchesFilter) return false;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        project.description.toLowerCase().includes(query);

      return matchesSearch;
    });
  }, [searchQuery, activeFilter]);

  // Initial Entrance Animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.header-tag', {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.header-title', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out'
      });

      // Controls Entrance
      gsap.from(controlsRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.6,
        delay: 0.3,
        ease: 'power2.out'
      });

      // Status Indicator Entrance
      gsap.from(statusRef.current, {
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        ease: 'power2.out'
      });

      // Footer Animation on Scroll
      // Fixed: Removed duplicate 'opacity' key in the configuration object.
      gsap.from(footerRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none none"
        },
        duration: 1
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Grid/Project List Animation when filtered list changes
  useEffect(() => {
    if (filteredProjects.length > 0) {
      // Small delay to ensure DOM is ready after React render
      const ctx = gsap.context(() => {
        gsap.fromTo('.project-card-wrapper',
          {
            opacity: 0,
            y: 40,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)'
          }
        );
      }, gridRef);
      return () => ctx.revert();
    } else {
      const ctx = gsap.context(() => {
        gsap.fromTo(emptyRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 }
        );
      });
      return () => ctx.revert();
    }
  }, [filteredProjects]);

  const uniqueCategories = ["ALL", ...new Set(PROJECT.map((p) => p.category))];

  // 2. Helper function to get the count
  const getCategoryCount = (cat: string) => {
    if (cat === "ALL") return PROJECT.length;
    return PROJECT.filter((p) => p.category === cat).length;
  };


  return (
    <div className="pt-16 min-h-screen bg-slate-950 overflow-x-hidden">
      <MarginWrapper>
        {/* Page Header */}
        <header className="mb-16" ref={headerRef}>
          <div className="header-tag flex items-center space-x-4 mb-4">
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-xs text-center lg:text-start font-mono w-fit m-auto lg:m-0 border-b border-blue-500 text-blue-500 tracking-[0.5em] uppercase pb-2">
              REPOS_ARCHIVE // PROJECT_DATABASE
            </span>
          </div>
          <h1 className="header-title text-white text-center lg:text-start text-4xl md:text-5xl lg:text-6xl font-black w-fit leading-none tracking-tighter">
            SYSTEM<br />
            <span className="gradient-text">BLUEPRINTS.</span>
          </h1>
        </header>

        {/* Controls Module */}
        <div ref={controlsRef} className="mb-12 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          {/* Search Module */}
          <div className="relative w-full lg:max-w-md group">
            <div className="absolute inset-0 bg-blue-500/5 blur-xl group-focus-within:bg-blue-500/10 transition-all" />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="SCAN_QUERY (Project name, tech stack...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/50 border border-white/5 px-12 py-4 text-xs font-mono tracking-widest text-blue-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all uppercase"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-mono text-slate-600 uppercase tracking-widest hidden sm:block">
              SYS_REQ: READY
            </div>
          </div>

          {/* Filter Module */}
          <div className="flex flex-wrap gap-2">
            {uniqueCategories.map((category, idx) => {
              const count = getCategoryCount(category);
              const isActive = activeFilter === category;

              return (
                <button
                  key={category} // Using category name as key is safer than index
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 text-[9px] font-mono tracking-widest uppercase border transition-all ${isActive
                      ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20'
                      : 'bg-slate-900/40 border-white/5 text-slate-500 hover:border-blue-500/30 hover:text-blue-400'
                    }`}
                >
                  {/* Showing the count formatted as [0X] */}
                  [{count < 10 ? `0${count}` : count}] {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Status Indicators */}
        <div ref={statusRef} className="flex items-center gap-8 mb-10 text-[9px] font-mono text-slate-600 uppercase tracking-[0.3em] border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <Box className="w-3 h-3 text-blue-500" />
            <span>Modules: {filteredProjects.length}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3 h-3 text-blue-500" />
            <span>Secure Access: V3.0</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div>
          {filteredProjects.length > 0 ? (
            <div
              key="grid"
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {filteredProjects.map((project) => (
                <div key={project.id} className="project-card-wrapper">
                  <ProjectCards project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div
              key="no-results"
              ref={emptyRef}
              className="py-20 text-center border border-dashed border-white/5 rounded-xl"
            >
              <Database className="w-12 h-12 text-slate-800 mx-auto mb-4" />
              <p className="font-mono text-slate-600 uppercase tracking-[0.2em] text-xs">
                ERR_0404: NO_MODULES_FOUND_IN_CURRENT_QUERY
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveFilter('ALL'); }}
                className="mt-6 text-[10px] font-mono text-blue-500 border-b border-blue-500 hover:text-blue-400 transition-colors uppercase tracking-widest"
              >
                Restart_Search_Sequence
              </button>
            </div>
          )}
        </div>

        {/* Technical Footer Label */}
        <div className="mt-20 flex justify-center">
          <div
            ref={footerRef}
            className="flex items-center gap-8 font-mono text-[9px] tracking-[0.4em] uppercase text-slate-600"
          >
            <div className="w-20 h-px bg-slate-800" />
            <span>End of Primary Repository</span>
            <div className="w-20 h-px bg-slate-800" />
          </div>
        </div>
      </MarginWrapper>
    </div>
  );
};

export default WorkPage;