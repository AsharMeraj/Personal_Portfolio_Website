'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, FileText, Sparkles } from 'lucide-react';
import MarginWrapper from './MarginWrapper';

const DownloadCV = () => {
    return (
        <section id="download" className="bg-slate-50/60 text-slate-800 flex items-center justify-center font-sans overflow-hidden">
            <MarginWrapper>
                <motion.div
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="w-full mx-auto"
                >
                    {/* Soft Card Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="bg-white border border-blue-100 shadow-xl shadow-blue-500/5 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group"
                    >

                        {/* Soft Background Blob Accent */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl opacity-50 pointer-events-none" />

                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">

                            {/* LEFT SIDE: Text & Action */}
                            <div className="flex-1 space-y-4 text-center lg:text-left">
                                <div className="inline-flex items-center space-x-2 bg-blue-100/70 border border-blue-200/80 px-4 py-2 rounded-full text-blue-700 text-base font-semibold tracking-wide mx-auto lg:mx-0">
                                    <Sparkles className="w-4 h-4 text-blue-500" />
                                    <span>Resume & Credentials</span>
                                </div>

                                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                                    Download my <br className="hidden lg:block" />
                                    <span className="text-blue-600">Resume</span>.
                                </h2>

                                <p className="text-slate-600 text-lg font-normal max-w-lg leading-relaxed mx-auto lg:mx-0">
                                    Get a complete overview of my experience, technical skills, and past projects in a clean PDF format. Ready to view or print.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-2">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        href={'/Muhammad_Ashar_CV.pdf'}
                                        download={'Muhammad_Ashar_CV.pdf'}
                                        className="group flex items-center justify-center space-x-2.5 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-2xl font-bold text-xs tracking-wider uppercase shadow-md shadow-blue-500/10 w-full sm:w-auto"
                                    >
                                        <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                        <span>Export CV</span>
                                    </motion.a>
                                </div>
                            </div>

                            {/* RIGHT SIDE: Professional Document Mockup */}
                            <div className="relative w-full md:block hidden lg:w-[40%] flex justify-center items-center py-6 lg:py-0 z-10">
                                <motion.div
                                    animate={{ y: [-8, 8, -8] }}
                                    transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                                    className="relative"
                                >
                                    {/* Background Document (Tilted) */}
                                    <div className="absolute top-4 left-6 w-56 sm:w-64 aspect-[1/1.4] bg-blue-50 border border-blue-100 rounded-2xl rotate-6 shadow-inner z-0" />

                                    {/* Foreground Document */}
                                    <div className="relative w-56 sm:w-64 aspect-[1/1.4] bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-blue-500/10 p-6 flex flex-col gap-4 z-10 group-hover:-translate-y-2 transition-transform duration-500">

                                        {/* Mockup Header Icon */}
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-2">
                                            <FileText className="w-6 h-6 text-blue-500" />
                                        </div>

                                        {/* Mockup Skeleton Text Lines */}
                                        <div className="w-3/4 h-2.5 bg-slate-200 rounded-full" />
                                        <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2" />
                                        <div className="w-5/6 h-1.5 bg-slate-100 rounded-full" />
                                        <div className="w-full h-1.5 bg-slate-100 rounded-full" />
                                        <div className="w-4/6 h-1.5 bg-slate-100 rounded-full" />
                                        <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4" />
                                        <div className="w-3/4 h-1.5 bg-slate-100 rounded-full" />

                                        {/* Floating Verified Badge */}
                                        <motion.div
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="absolute -bottom-4 -right-4 bg-white border border-blue-100 shadow-lg px-4 py-2 rounded-xl flex items-center gap-2"
                                        >
                                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                            <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Verified</span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            </MarginWrapper>
        </section>
    );
};

export default DownloadCV;