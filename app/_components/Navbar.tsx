'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Activity } from 'lucide-react';
import MarginWrapper from './MarginWrapper';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'STACK', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'HISTORY', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (

      <nav className={`max-w-7xl m-auto fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className={`mx-auto px-6 flex justify-between items-center transition-all ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border border-blue-500/30 py-4 rounded-xl mx-4 px-8 shadow-2xl' : 'border-slate-950/90'}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 text-lg font-bold tracking-tighter cursor-pointer group"
          >
            <div className="bg-blue-600 p-2 rounded-lg">
              <Terminal className="text-white w-5 h-5" />
            </div>
            <span className="text-gray-100 font-bold uppercase tracking-widest">Muhammad<span className="text-blue-500">_Ashar</span></span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex  space-x-5 lg:space-x-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[11px] font-mono font-bold text-slate-400 hover:text-blue-400 transition-colors tracking-[0.2em] flex items-center"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-2 text-blue-300">
            <Activity className="w-4 h-4 animate-pulse" />
            <span className="text-[10px] font-mono tracking-tighter uppercase">Status: Online</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden glass mx-4 mt-4 overflow-hidden border border-blue-500/20"
            >
              <div className="px-6 py-10 flex flex-col space-y-6 items-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-mono font-bold text-gray-300 hover:text-blue-400 transition-colors tracking-widest uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
};

export default Navbar;
