'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from './Skills';
import { Sparkles } from 'lucide-react';

interface SkillsCardProps {
    name: string;
    featured?: boolean;
}

export const SkillsCard = ({ name, featured = false }: SkillsCardProps) => {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='group relative'
        >
            <div className={`
                flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 shadow-sm cursor-default
                ${featured 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-blue-500/20 hover:bg-blue-700' 
                    : 'bg-white border-blue-100 text-slate-700 hover:border-blue-300 hover:shadow-md hover:text-blue-700'
                }
            `}>
                {featured && (
                    <Sparkles className="w-3.5 h-3.5 text-blue-200" />
                )}
                
                <span className="text-sm font-bold tracking-wide">
                    {name}
                </span>
            </div>
        </motion.div>
    )
}