
import React from 'react';
import { motion, Variants } from 'framer-motion';
import MarginWrapper from './MarginWrapper';
import { SkillsCard } from './SkillsCard';

// Explicitly type container variants to ensure correct staggerChildren inference
export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02
        }
    }
};

// Explicitly type item variants to ensure 'type: spring' is treated as a literal instead of string
export const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    }
};

const Skills = () => {
    return (
        <MarginWrapper>
            <section id="skills" className='relative px-2 bg-slate-950 overflow-hidden'>
                {/* Background Layers */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}></div>
                <span className='w-full bg-[url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")] bg-center bg-cover absolute inset-0 -z-10 scale-x-100 opacity-[0.04]'></span>
                <span className='w-full bg-linear-to-b from-slate-950 via-slate-950/90 to-slate-950 absolute inset-0 z-0'></span>

                <div className='w-full m-auto relative z-10'>
                    {/* Headers */}
                    <div className="text-center mb-4">
                        <motion.h2
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            
                            className='text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-2'
                        >
                            Capabilities<span className="text-blue-500">_</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100px" }}
                            
                            className="h-1 bg-blue-600 mx-auto"
                        ></motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        
                        className='font-mono text-sm m-auto mt-8 text-blue-400 px-12 py-3 border border-blue-500/20 w-fit bg-slate-900/60 backdrop-blur-xl rounded-full flex items-center gap-3'
                    >
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        ACTIVE_TECH_STACK_SCAN
                    </motion.div>

                    {/* Animated SVG Path */}
                    <div className="relative">
                        <svg className="max-w-4xl w-full m-auto md:px-20 -mt-2 opacity-40"
                            xmlns="http://www.w3.org/2000/svg"
                            width="744" height="323"
                            viewBox="0 0 744 323"
                            fill="none">
                            <motion.path
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                
                                transition={{ duration: 2, ease: "easeInOut" }}
                                d="M2 133V86H258V0M366.5 600V0M741.5 133V86H481.5V0"
                                stroke="url(#paint0_linear_2101_768)"
                                strokeWidth="1.5"
                            />
                            {/* Animated "Pulse" flow */}
                            <path
                                d="M2 133V86H258V0M366.5 600V0M741.5 133V86H481.5V0"
                                stroke="#3b82f6"
                                strokeWidth="1.5"
                                strokeDasharray="10 40"
                                className="animate-pulse-flow"
                            />
                            <defs>
                                <linearGradient id="paint0_linear_2101_768"
                                    x1="371.963" y1="12"
                                    x2="359.62" y2="600"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3b82f6" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className='z-20 -mt-20 min-[500px]:-mt-32 sm:-mt-40'>
                            <motion.main
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                
                                className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32'
                            >
                                {/* Left Side: Frontend Cluster */}
                                <div className='flex flex-wrap gap-4 justify-center md:justify-start content-start'>
                                    <SkillsCard name='Next.js' />
                                    <SkillsCard name='Tailwind CSS' />
                                    <SkillsCard name='Typescript' />
                                    <SkillsCard name='React.js' />
                                    <SkillsCard name='Javascript' />
                                    <SkillsCard name='Framer Motion' />
                                    <SkillsCard name='Shadcn UI' />
                                    <SkillsCard name='CSS' />
                                    <SkillsCard name='HTML' />
                                </div>

                                {/* Right Side: Backend/AI Cluster */}
                                <div className='flex flex-wrap gap-4 justify-center md:justify-end content-start'>
                                    <SkillsCard name='Gemini Ai' />
                                    <SkillsCard name='OpenAi' />
                                    <SkillsCard name='Postgres' />
                                    <SkillsCard name='Drizzle ORM' />
                                    <SkillsCard name='Inngest' />
                                </div>
                            </motion.main>

                            {/* Bottom Side: Systems Specializations */}
                            <motion.main
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                
                                className='w-full flex flex-wrap justify-center mt-12 md:mt-20 gap-4 px-6'
                            >
                                <SkillsCard name='Generative Ai' />
                                <SkillsCard name='Fullstack Architecture' />
                                <SkillsCard name='Cloud Infrastructure' />
                                <SkillsCard name='Web Animation' />
                                <SkillsCard name='3D Implementation' />
                            </motion.main>
                        </div>
                    </div>
                </div>
            </section>
        </MarginWrapper>
    )
}

export default Skills;
