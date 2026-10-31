'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { navLinks } from '../_utils/Constant';
import Link from 'next/link';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MotionLink = motion.create(Link);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 flex justify-center pointer-events-none">
      {/* Floating Pill Container */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-6xl flex justify-between items-center px-4 py-2.5 rounded-full pointer-events-auto duration-300 bg-white/95 border border-slate-200/60 shadow-xl shadow-slate-200/20`}
      >
        {/* Cute Logo */}
        <MotionLink
          href="/"
          scroll={false}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2.5 cursor-pointer group"
        >
          <div className="bg-blue-500 p-2 rounded-full text-white shadow-sm shadow-blue-500/20">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="text-slate-800 font-extrabold text-base tracking-tight font-sans hidden sm:block">
            Muhammad Ashar
          </span>
        </MotionLink>

        {/* Desktop Links (Soft Pills) */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <MotionLink
            scroll={false}
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05, backgroundColor: "#eff6ff" }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 px-4 py-2 rounded-full transition-colors"
            >
              {link.name}
            </MotionLink>
          ))}
        </div>

        {/* Playful Status / Contact Button */}
        <div className="hidden md:flex items-center">
          <MotionLink
          scroll={false}
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Let&apos;s Talk
          </MotionLink>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden bg-slate-100 text-slate-700 p-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </motion.nav>

      {/* Mobile Nav Dropdown Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-20 left-4 right-4 max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-[2rem] border border-slate-200 p-4 shadow-2xl pointer-events-auto md:hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 px-6 py-4 rounded-2xl transition-colors flex justify-between items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="mt-2 p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-blue-700">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-bold">Status</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-slate-700">Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;