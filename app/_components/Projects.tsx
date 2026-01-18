import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github, Code2, Layers, ArrowRight } from 'lucide-react';
import ProjectCards, { containerVariants } from './ProjectCards';
import { PROJECT } from '../_utils/Constant';
import MarginWrapper from './MarginWrapper';


const Projects = () => {
    return (
        <MarginWrapper>
            <section id="projects" className="relative bg-slate-950">
                <div className="mx-auto">
                    <div className="mb-10 gap-4 md:gap-0 flex md:flex-row flex-col justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-xs text-center md:text-start w-fit md:m-0 m-auto font-mono text-blue-500 tracking-[0.5em] uppercase border-l-2 border-blue-500 pl-4">
                                Project Index 01
                            </h2>
                            <h2 className="text-5xl text-center md:text-start md:text-6xl font-black text-white tracking-tighter uppercase mt-4">
                                SYSTEM<br /><span className="gradient-text">BLUEPRINTS.</span>
                            </h2>
                        </motion.div>
                        <a
                            href="/projects"
                            className="group flex h-fit items-center space-x-4 border border-blue-500/30 bg-slate-900/40 px-8 py-4 text-white font-bold uppercase tracking-widest text-[11px] hover:bg-blue-600/10 hover:border-blue-500 transition-all active:scale-95"
                        >
                            <span>Explore All Repositories</span>
                            <div className="bg-blue-500/20 p-2 rounded group-hover:bg-blue-500/40 transition-colors">
                                <ArrowRight className="w-4 h-4 text-blue-400" />
                            </div>
                        </a>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {PROJECT.map((p) => (
                            <ProjectCards key={p.id} project={p} />
                        ))}
                    </motion.div>

                    {/* Technical Label */}
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
                </div>

                <style>{`
        @keyframes scanner {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scanner {
          animation: scanner 2s ease-in-out infinite;
        }
      `}</style>
            </section>
        </MarginWrapper>
    );
};

export default Projects;