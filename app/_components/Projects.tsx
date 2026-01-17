
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github, Code2, Layers } from 'lucide-react';
import ProjectCards, { containerVariants } from './ProjectCards';
import { PROJECT } from '../_utils/Constant';
import MarginWrapper from './MarginWrapper';


const Projects = () => {
    return (
        <MarginWrapper>
            <section id="projects" className="relative py-24 md:py-48 px-6 bg-slate-950">
                <div className="mx-auto">
                    <div className="mb-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-xs font-mono text-blue-500 tracking-[0.5em] uppercase border-l-2 border-blue-500 pl-4">
                                Project Index 01
                            </h2>
                            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                                SYSTEM<br /><span className="gradient-text">BLUEPRINTS.</span>
                            </h2>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
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