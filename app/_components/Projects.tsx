'use client'
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProjectCards from './ProjectCards';
import { PROJECT } from '../_utils/Constant';
import MarginWrapper from './MarginWrapper';

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const Projects = () => {
    return (
        <section id="projects" className="bg-slate-50/60 text-slate-800 font-sans relative overflow-hidden">
            <MarginWrapper>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                    {/* TOP SECTION: Header & Call to Action */}
                    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">

                        {/* Heading & Badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center md:items-start text-center md:text-left"
                        >
                            <div className="mb-5">
                                <div className="inline-flex items-center space-x-2 bg-blue-100/70 border border-blue-200/80 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-blue-700 text-xs lg:text-sm xl:text-base font-bold tracking-wide">
                                    <Sparkles className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-blue-500" />
                                    <span>Project Index</span>
                                </div>
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                                System <br className="hidden md:block" />
                                <span className="text-blue-600">Blueprints</span>.
                            </h2>
                        </motion.div>

                        {/* "View All" Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex justify-center md:justify-end pb-2"
                        >
                            <motion.a
                                href="/work"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="group flex items-center space-x-3 bg-white hover:bg-blue-50 text-slate-700 border border-slate-200 hover:border-blue-200 px-7 py-3.5 lg:px-9 lg:py-4 rounded-2xl lg:rounded-[1.25rem] font-bold text-xs lg:text-sm tracking-wider uppercase transition-all shadow-sm"
                            >
                                <span>Explore All Work</span>
                                <div className="bg-blue-100/50 p-1.5 rounded-lg group-hover:bg-blue-200/50 transition-colors">
                                    <ArrowRight className="w-4 h-4 text-blue-600" />
                                </div>
                            </motion.a>
                        </motion.div>

                    </div>

                    {/* PROJECT CARDS GRID */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-2"
                    >
                        {PROJECT.slice(0, 3).map((p) => (
                            <motion.div key={p.id} variants={itemVariants}>
                                <ProjectCards project={p} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </MarginWrapper>
        </section >
    );
};

export default Projects;