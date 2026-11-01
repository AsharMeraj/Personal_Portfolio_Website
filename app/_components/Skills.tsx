'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import MarginWrapper from './MarginWrapper';
import { SkillsCard } from './SkillsCard';
import { Sparkles, Code2 } from 'lucide-react';

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

export const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

const Skills = () => {
    return (
        <section id="skills" className='relative overflow-hidden bg-slate-50/60 text-slate-800 font-sans'>
            <MarginWrapper>
                <motion.div
                    className='w-full m-auto relative flex flex-col items-center'
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >

                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 mb-14">

                        {/* Top Left: Badge & Heading */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
                        >
                            <div className="mb-5">
                                <div className="inline-flex items-center space-x-2 bg-blue-100/70 border border-blue-200/80 px-4 py-2 rounded-full text-blue-700 text-xs lg:text-sm xl:text-base font-bold tracking-wide">
                                    <Sparkles className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-blue-500" />
                                    <span>Tech Stack & Toolkit</span>
                                </div>
                            </div>

                            <h2 className='text-4xl  md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]'>
                                Engineering <span className="text-blue-600">Capabilities</span>.
                            </h2>
                        </motion.div>

                        {/* Top Right: Paragraph */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 lg:pl-10 lg:border-l-2 border-blue-100/50 flex justify-center lg:justify-start"
                        >
                            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-md text-center lg:text-left leading-relaxed">
                                The tools and technologies we use to build fast online stores and reliable business systems.
                            </p>
                        </motion.div>

                    </div>

                    <div className='w-full flex flex-col lg:flex-row gap-12 lg:gap-16'>
                        {/* Left Side: Frontend Cluster */}
                        <motion.main
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className='flex-1'
                        >
                            <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                                <Code2 className="w-5 h-5 text-blue-500" />
                                <h3 className="text-xl font-bold text-slate-800">Frontend & UI</h3>
                            </div>
                            <div className='flex flex-wrap gap-3 justify-center lg:justify-start'>
                                <SkillsCard name='Next.js' />
                                <SkillsCard name='React.js' />
                                <SkillsCard name='Typescript' />
                                <SkillsCard name='Javascript' />
                                <SkillsCard name='Tailwind CSS' />
                                <SkillsCard name='Framer Motion' />
                                <SkillsCard name='Shadcn UI' />
                                <SkillsCard name='CSS' />
                                <SkillsCard name='HTML' />
                            </div>
                        </motion.main>

                        {/* Right Side: Backend/AI Cluster */}
                        <motion.main
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className='flex-1'
                        >
                            <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                <h3 className="text-xl font-bold text-slate-800">Backend, Database & AI</h3>
                            </div>
                            <div className='flex flex-wrap gap-3 justify-center lg:justify-start'>
                                <SkillsCard name='Node.js' />
                                <SkillsCard name='Python' />
                                <SkillsCard name='PostgreSQL' />
                                <SkillsCard name='MongoDB' />
                                <SkillsCard name='Drizzle ORM' />
                                <SkillsCard name='Gemini AI' />
                                <SkillsCard name='OpenAI' />
                                <SkillsCard name='Inngest' />
                                <SkillsCard name='Electron' />
                            </div>
                        </motion.main>
                    </div>

                    {/* Bottom Side: Systems Specializations */}
                    <div className="w-full mt-5 pt-5 border-t border-slate-200">
                        <motion.main
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className='w-full flex flex-wrap justify-center gap-3'
                        >
                            <SkillsCard name='Generative AI Integration' featured />
                            <SkillsCard name='Fullstack Architecture' featured />
                            <SkillsCard name='Cloud Infrastructure' featured />
                            <SkillsCard name='Web Animation' featured />
                            <SkillsCard name='3D Implementation' featured />
                            <SkillsCard name='IoT Integration' featured />
                        </motion.main>
                    </div>

                </motion.div>
            </MarginWrapper>
        </section>
    )
}

export default Skills;