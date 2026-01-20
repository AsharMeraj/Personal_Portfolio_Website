import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Terminal, Code2, Award } from 'lucide-react';
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
        <MarginWrapper>
            <section id="education" ref={containerRef} className="relative bg-slate-950 overflow-hidden">
                {/* Background Circuit Grid */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{ backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`, backgroundSize: '60px 60px' }}></div>

                <div className="mx-auto relative">
                    {/* Unified Design Header Section */}
                    <div className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-xs w-fit m-auto mb-4 whitespace-nowrap lg:m-0 font-mono text-blue-500 tracking-[0.2rem] uppercase border-l-2 border-blue-500 pl-4">
                                Registry // Academic_Logs
                            </h2>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl m-auto mb-4 lg:m-0 lg:text-start text-center font-black text-white tracking-tighter uppercase leading-none">
                                SYSTEM<br /><span className="gradient-text">EVOLUTION.</span>
                            </h2>
                        </motion.div>
                    </div>

                    {/* Central Vertical Conduit */}
                    <div className="absolute left-4 md:left-1/2 top-48 bottom-0 w-px bg-white/5 -translate-x-1/2">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-blue-600 via-blue-400 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        />
                    </div>

                    {/* Timeline Entries */}
                    <div className="space-y-32 relative">
                        {educationData.map((entry, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={entry.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-12 md:gap-24`}
                                >
                                    {/* Connection Node */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 z-10">
                                        <div className="absolute inset-0 bg-slate-950 border-2 border-blue-500 rounded-full" />
                                        <div className="absolute -inset-1 bg-blue-500/20 rounded-full animate-ping" />
                                    </div>

                                    {/* Content Side */}
                                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} gap-2 mb-4`}>
                                            <span className="text-[10px] font-mono text-blue-500 tracking-[0.3em] uppercase opacity-70">
                                                [{entry.period}]
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none">
                                                {entry.degree}
                                            </h3>
                                        </div>

                                        <div className={`flex items-center gap-3 text-blue-400 font-mono text-[11px] tracking-widest uppercase mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                            <Terminal className="w-3 h-3" />
                                            <span>{entry.institution}</span>
                                        </div>

                                        <p className={`text-slate-500 text-sm leading-relaxed max-w-md ${isEven ? 'ml-auto' : 'mr-auto'}`}>
                                            {entry.description}
                                        </p>
                                    </div>

                                    {/* Metadata / Highlights Side */}
                                    <div className={`hidden md:block w-1/2 ${isEven ? 'text-left pl-12' : 'text-right pr-12'}`}>
                                        <div className={`flex flex-col gap-3 ${isEven ? 'items-start' : 'items-end'}`}>
                                            <div className="flex items-center gap-2 text-[9px] font-mono text-slate-600 tracking-widest uppercase mb-2">
                                                <Code2 className="w-3 h-3" />
                                                <span>{entry.id} // CORE_MODULES</span>
                                            </div>
                                            {entry.highlights.map((h, i) => (
                                                <div key={i} className={`flex items-center gap-3 text-white font-bold text-[10px] uppercase tracking-widest px-4 py-2 border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:border-blue-500/30 transition-all ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                                                    <Award className="w-3 h-3 text-blue-500" />
                                                    {h}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Mobile Meta Info */}
                                    <div className="md:hidden pl-12 mt-4 flex flex-wrap gap-2">
                                        {entry.highlights.map((h, i) => (
                                            <span key={i} className="px-2 py-1 bg-slate-900 border border-white/5 text-[8px] font-mono text-slate-400 uppercase">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    
                </div>
            </section>
        </MarginWrapper>
    );
};

export default Education;