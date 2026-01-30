'use client'
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Database, Box, Cpu, Shield } from 'lucide-react';
import MarginWrapper from '../../_components/MarginWrapper';
import ProjectCard from '../../_components/ProjectCards';
import { CurrentTime, PROJECT } from '../../_utils/Constant';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const WorkPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'AI/MACHINE LEARNING', 'CYBER SECURITY', 'FULLSTACK ARCH', 'BACKEND INFRA', 'FRONTEND SYSTEMS'];

  const filteredProjects = useMemo(() => {
    return PROJECT.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesFilter = activeFilter === 'ALL' || project.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="pt-16">
      <MarginWrapper>
        {/* Page Header */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4 mb-4"
          >
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-xs text-center lg:text-start font-mono w-fit  m-auto lg:m-0 border-b border-blue-500 text-blue-500 tracking-[0.5em] uppercase pb-2">
              REPOS_ARCHIVE // PROJECT_DATABASE
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-center lg:text-start  text-4xl md:text-5xl lg:text-6xl font-black w-fit leading-none tracking-tighter"
          >
            SYSTEM<br />
            <span className="gradient-text">BLUEPRINTS.</span>
          </motion.h1>
        </header>

        {/* Controls Module */}
        <div className="mb-12 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
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
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-[9px] font-mono tracking-widest uppercase border transition-all ${
                  activeFilter === cat 
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20' 
                  : 'bg-slate-900/40 border-white/5 text-slate-500 hover:border-blue-500/30 hover:text-blue-400'
                }`}
              >
                [{idx < 10 ? `0${idx}` : idx}] {cat.replace('/', '_')}
              </button>
            ))}
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center gap-8 mb-10 text-[9px] font-mono text-slate-600 uppercase tracking-[0.3em] border-b border-white/5 pb-4">
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
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Technical Footer Label */}
        <div className="mt-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            className="flex items-center gap-8 font-mono text-[9px] tracking-[0.4em] uppercase text-slate-600"
          >
            <div className="w-20 h-px bg-slate-800" />
            <span>End of Primary Repository</span>
            <div className="w-20 h-px bg-slate-800" />
          </motion.div>
        </div>
      </MarginWrapper>
    </div>
  );
};

export default WorkPage;
