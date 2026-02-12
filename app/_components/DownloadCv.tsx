'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, FileText, Cpu } from 'lucide-react';
import MarginWrapper from './MarginWrapper';

const DownloadCV = () => {
    return (
        <MarginWrapper>

            <section id="download" className=" relative overflow-hidden w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 w-full mx-auto"
                >
                    <div className="backdrop-blur-xl p-8 md:p-16 relative overflow-hidden group">
                        {/* Cyberpunk Decorative Corner Accents */}


                        <div className="flex flex-col max-w-5xl m-auto lg:flex-row items-center justify-between gap-16">
                            <div className="flex-1 space-y-8 text-center lg:text-left">
                                <div className="inline-flex items-center space-x-3 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full">
                                    <Cpu className="w-3 h-3 text-blue-500 animate-pulse" />
                                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em]">Data_Extraction_Initiated</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                                    SYSTEM<br /><span className="gradient-text">DOSSIER.</span>
                                </h2>

                                <p className="text-slate-400 font-mono text-sm uppercase tracking-wide max-w-lg leading-relaxed border-l-2 border-blue-500/20 pl-6">
                                    Retrieve the compiled architectural documentation. This dossier contains full technical specifications, project history, and credential verification for off-grid evaluation.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4">
                                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-mono uppercase tracking-widest">
                                        <ShieldCheck className="w-4 h-4 text-green-500/50" />
                                        <span>Format: PDF_V1.4</span>
                                    </div>
                                    <div className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
                                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-mono uppercase tracking-widest">
                                        <FileText className="w-4 h-4 text-blue-500/50" />
                                        <span>Size: 1,424 KB</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative shrink-0">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative z-20"
                                >
                                    {/* Glowing background effect on hover */}
                                    <div className="absolute -inset-4 bg-blue-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <a href={'/Muhammad_Ashar_CV.pdf'} download={'Muhammad_Ashar_CV.pdf'} className="cursor-pointer relative bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-16 py-4 transition-all duration-300 border border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center gap-6 group/btn">
                                        <Download className="w-8 h-8 animate-bounce" />
                                        <span className="text-[12px] font-black uppercase tracking-[0.4em] mb-1">Export_CV</span>
                                        <span className="text-[8px] font-mono opacity-60">HASH: SHA-256</span>
                                    </a>
                                </motion.div>

                                {/* Floating Decorative Tech Circles */}
                                <div className="absolute -top-10 -right-10 w-24 h-24 border border-blue-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
                                <div className="absolute -bottom-6 -left-6 w-16 h-16 border border-blue-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section >
        </MarginWrapper>
    );
};

export default DownloadCV;
