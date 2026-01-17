'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Database, Layers, Smartphone, ArrowRight, Code, Terminal } from 'lucide-react';
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import Services from './_components/Services';
import Skills from './_components/Skills';
// import SkillsGrid from './components/SkillsGrid.tsx';
// import Projects from './components/Projects.tsx';
// import Experience from './components/Experience.tsx';
// import Contact from './components/Contact.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen m-auto selection:bg-blue-500/30 bg-slate-950 ">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* REINVENTED ABOUT/SERVICES SECTION */}
       <Services/>

        <Skills/>
      </main>

      <footer className="py-16 border-t border-white/5 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-slate-600 text-[10px] font-mono uppercase tracking-[0.5em]">
            &copy; {new Date().getFullYear()} // System_Architect // build_v.3.1.0
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-slate-800 text-[9px] font-mono tracking-widest uppercase">Encryption_Protocol: AES-256-Active</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
