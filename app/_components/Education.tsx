'use client'
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Code2, Award, GraduationCap, Sparkles } from 'lucide-react';
import { educationData } from '../_utils/Constant';
import MarginWrapper from './MarginWrapper';

const Education = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="education" ref={containerRef} className="min-h-screen bg-slate-50/60 text-slate-800 font-sans relative overflow-hidden">
            <motion.div
                className="w-full mx-auto relative"
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                <MarginWrapper>
                    {/* Unified Cute Design Header Section (Heading Left, Badge Right) */}
                    <div className="mb-14">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                        >
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight text-center lg:text-left">
                                System <span className="text-blue-600">Evolution</span>.
                            </h2>

                            <div className="flex justify-center lg:justify-end">
                                <div className="inline-flex items-center space-x-2 bg-blue-100/70 border border-blue-200/80 px-4 py-2 rounded-full text-blue-700 text-base font-semibold tracking-wide">
                                    <Sparkles className="w-4 h-4 text-blue-500" />
                                    <span>Academic Logs & Registry</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Central Vertical Conduit */}
                    <div className="absolute left-6 md:left-1/2 top-48 bottom-12 w-0.5 bg-blue-100 -translate-x-1/2">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute top-0 left-0 w-full h-full bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"
                        />
                    </div>

                    {/* Timeline Entries */}
                    <div className="space-y-8 md:space-y-0 relative">
                        {educationData.map((entry, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={entry.id}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-8  md:gap-16`}
                                >
                                    {/* Connection Node */}
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 z-10 flex items-center justify-center">
                                        <div className="w-4 h-4 bg-white border-2 border-blue-600 rounded-full shadow-sm" />
                                        <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-ping" />
                                    </div>

                                    {/* Content Side (Soft Card) */}
                                    <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${isEven ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                                        <div className={`bg-white px-4 py-6 sm:p-8 rounded-4xl gap-4 border border-blue-100 shadow-xl shadow-blue-500/5 flex flex-col ${isEven ? 'md:items-start' : 'md:items-start'} text-left`}>
                                            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full w-fit">
                                                {entry.period}
                                            </span>
                                            <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-start'}`}>
                                                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                                    {entry.degree}
                                                </h3>
                                            </div>

                                            <div className={`flex items-center gap-2 text-slate-500 font-medium text-xs uppercase tracking-wider ${isEven ? 'justify-start' : 'justify-start'}`}>
                                                <GraduationCap className="w-4 h-4 text-blue-500" />
                                                <span>{entry.institution}</span>
                                            </div>

                                            {/* <p className={`text-slate-600 text-sm leading-relaxed max-w-md ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                                {entry.description}
                                            </p> */}
                                        </div>
                                    </div>

                                    {/* Metadata / Highlights Side */}
                                    {/* <div className={`hidden md:block w-1/2 ${isEven ? 'text-left pl-10' : 'text-right pr-10'}`}>
                                        <div className={`flex flex-col gap-2.5 ${isEven ? 'items-start' : 'items-end'}`}>
                                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                                                <Code2 className="w-3.5 h-3.5 text-blue-500" />
                                                <span>Core Focus</span>
                                            </div>
                                            {entry.highlights.map((h, i) => (
                                                <div key={i} className={`flex items-center gap-2 text-slate-700 font-bold text-xs uppercase tracking-wide px-4 py-2.5 rounded-2xl bg-white border border-blue-100 shadow-xs hover:border-blue-300 transition-all ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                                                    <Award className="w-4 h-4 text-blue-500" />
                                                    {h}
                                                </div>
                                            ))}
                                        </div>
                                    </div> */}

                                    {/* Mobile Meta Info Badges */}
                                    {/* <div className="md:hidden pl-14 w-full flex flex-wrap gap-2">
                                        {entry.highlights.map((h, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-white border border-blue-100 rounded-xl text-xs font-semibold text-slate-700 shadow-2xs flex items-center gap-1.5">
                                                <Award className="w-3.5 h-3.5 text-blue-500" />
                                                {h}
                                            </span>
                                        ))}
                                    </div> */}
                                </motion.div>
                            );
                        })}
                    </div>
                </MarginWrapper>
            </motion.div>
        </section>
    );
};

export default Education;