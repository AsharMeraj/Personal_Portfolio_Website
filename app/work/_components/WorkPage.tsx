'use client'
import React, { useState, useMemo } from 'react';
import { Search, FolderOpen, Sparkles, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import MarginWrapper from '@/app/_components/MarginWrapper';
import ProjectCards from '@/app/_components/ProjectCards';
import { PROJECT } from '@/app/_utils/Constant';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

const WorkPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('ALL');

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

  const uniqueCategories = ["ALL", ...new Set(PROJECT.map((p) => p.category))];

  const getCategoryCount = (cat: string) => {
    if (cat === "ALL") return PROJECT.length;
    return PROJECT.filter((p) => p.category === cat).length;
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50/60 font-sans overflow-x-hidden">
      <MarginWrapper>

        {/* PAGE HEADER */}
        <header className="mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">

          {/* Left Side: Badge & Heading */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="mb-5">
              <div className="inline-flex items-center space-x-2 bg-blue-100/70 border border-blue-200/80 px-4 py-2 rounded-full text-blue-700 text-sm font-bold tracking-wide">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span>Project Portfolio</span>
              </div>
            </div>

            <h1 className="flex-1 flex text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              System&nbsp;<span className="text-blue-600">Blueprints</span>.
            </h1>
          </motion.div>

          {/* Right Side: Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:border-l-2 border-blue-100/50 flex justify-center lg:justify-start"
          >
            <p className="text-lg text-slate-600 font-normal text-center lg:text-left leading-relaxed">
              Explore a curated collection of my full-stack applications, hardware integrations, and AI systems.
            </p>
          </motion.div>

        </header>
        {/* CONTROLS MODULE (Search & Filters) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mb-10 flex flex-col items-center gap-8"
        >

          {/* Soft Search Bar */}
          <div className="relative w-full group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Search projects by name, tech stack, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-blue-50 px-14 py-4 rounded-[1.5rem] text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm shadow-blue-500/5 placeholder:text-base"
            />
          </div>

          {/* Cute Pill Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {uniqueCategories.map((category) => {
              const count = getCategoryCount(category);
              const isActive = activeFilter === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`flex items-center cursor-pointer gap-2 px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 ${isActive
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-white border-blue-100 text-slate-600 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 shadow-sm'
                    }`}
                >
                  <span>{category}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* STATUS INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center items-center gap-2 mb-10 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-6"
        >
          <LayoutGrid className="w-4 h-4 text-blue-500" />
          <span>Showing {filteredProjects.length} Project{filteredProjects.length !== 1 && 's'}</span>
        </motion.div>

        {/* PROJECTS GRID / EMPTY STATE */}
        <div className="min-h-[50vh]">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key="grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} variants={itemVariants} layout className="h-full">
                    <ProjectCards project={project} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Cute Empty State
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="py-24 text-center bg-white border border-blue-100 rounded-[2.5rem] shadow-xl shadow-blue-500/5 max-w-2xl mx-auto flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <FolderOpen className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">No projects found</h3>
                <p className="text-slate-500 font-medium max-w-sm mb-8 text-sm">
                  We couldn&apos;t find any projects matching your current search criteria.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setSearchQuery(''); setActiveFilter('ALL'); }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-bold text-xs tracking-wider uppercase transition-colors shadow-md shadow-blue-500/20"
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SOFT FOOTER LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-24 flex justify-center"
        >
          <div className="flex items-center gap-6 font-bold text-[10px] uppercase tracking-widest text-slate-400">
            <div className="w-16 h-px bg-slate-200" />
            <span>End of Results</span>
            <div className="w-16 h-px bg-slate-200" />
          </div>
        </motion.div>

      </MarginWrapper>
    </div>
  );
};

export default WorkPage;