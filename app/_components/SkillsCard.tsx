import React from 'react';
import { motion, Variants } from 'framer-motion';
import MarginWrapper from './MarginWrapper';
import { itemVariants } from './Skills';

export const SkillsCard = ({ name }: { name: string }) => {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
            }}
            className='group relative'
        >
            <div className='px-5 py-2 h-fit text-white tracking-wider sm:tracking-normal sm:font-mono border border-blue-400/20 bg-slate-900/40 backdrop-blur-md w-fit sm:text-base text-sm text-center hover:border-blue-400 hover:bg-blue-600/10 transition-all duration-300 cursor-default overflow-hidden'>
                <span className="absolute left-0 top-0 h-full w-0.5 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></span>
                <span className="flex items-center gap-2">
                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold -ml-1">{'>'}</span>
                    {name}
                </span>
            </div>
        </motion.div>
    )
}