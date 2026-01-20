'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, Zap, ShieldCheck, Cpu } from 'lucide-react';
import Image from 'next/image';
import Pic from '@/public/Pic5.png'
import MarginWrapper from './MarginWrapper';

const TypingText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const startTyping = () => {
      let i = 0;
      intervalRef.current = window.setInterval(() => {
        setDisplayedText(text.slice(0, i));
        i++;
        if (i > text.length) {
          if (intervalRef.current) window.clearInterval(intervalRef.current);
        }
      }, 40);
    };

    const timeout = window.setTimeout(startTyping, delay);

    return () => {
      window.clearTimeout(timeout);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [text, delay]);

  return <span>{displayedText}</span>;
};

const Hero: React.FC = () => {
  return (
      <section className="relative px-10 max-w-7xl w-fit m-auto pb-10 pt-32 md:py-20 md:pt-40 lg:pt-55 flex items-center justify-center overflow-hidden">
        <div className="floating-blob top-1/4 -left-20 opacity-10" />
        <div className="floating-blob bottom-1/4 -right-20 opacity-10" style={{ animationDelay: '1.5s' }} />

        <div className="mx-auto w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* LEFT COLUMN: Professional Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative z-10 w-full max-w-md mx-auto aspect-4/5 bg-slate-900 rounded-3xl border border-blue-500/20 overflow-hidden shadow-2xl lg:block hidden">
                <Image src={Pic} alt='/' className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 to-transparent opacity-60 pointer-events-none" />

              </div>

              <motion.div
                whileInView={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 lg:block hidden bg-blue-600 p-5 rounded-2xl shadow-2xl z-20 border border-blue-400/50"
              >
                <Cpu className="w-7 h-7 text-white" />
              </motion.div>

              <div className="absolute -bottom-6 lg:block hidden -left-6 bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 p-6 rounded-2xl z-20">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-1">Authorization</span>
                    <span className="text-white text-xs font-bold uppercase">Level 07 Architect</span>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-3 bg-blue-500/5 border border-blue-500/20 px-5 py-2 rounded-lg text-[10px] font-mono text-blue-400 mb-8"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="tracking-[0.3em] uppercase">System Execution Protocol</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-4">
                  <span className="block text-white">SOFTWARE</span>
                  <span className="gradient-text block">ENGINEER.</span>
                </h1>
                <p className="text-lg text-slate-400 font-light">Integrating high-scale AI modules into robust digital infrastructure.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-xl mx-auto lg:mx-0 font-mono text-sm bg-slate-900/50 p-6 border border-white/5 rounded-xl mb-10 text-left relative overflow-hidden"
              >
                <div className="flex items-center space-x-2 text-slate-500 mb-4 text-[9px] uppercase tracking-[0.2em] border-b border-white/5 pb-2">
                  <Terminal className="w-3 h-3" />
                  <span>root@architect_vm:~$</span>
                </div>
                <p className="text-blue-300">
                  <span className="text-blue-600 font-bold">$</span> <TypingText text="init --module=AGENTIC_AI --db=NEON_DB" delay={500} />
                </p>
                <div className="mt-4 text-slate-400 text-xs leading-relaxed border-l-2 border-blue-500/20 pl-4">
                  Designing distributed systems with NEXT.JS architecture,
                  Vector Database optimization, and autonomous AI agents.
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <a
                  href="#projects"
                  className="group relative flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                >
                  <span className="tracking-widest uppercase text-xs">View Engineering Lab</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="group relative border border-slate-700 text-slate-300 px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-all text-xs tracking-widest uppercase"
                >
                  Initiate Contact
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
};

export default Hero;
