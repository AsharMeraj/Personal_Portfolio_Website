'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Database, Layers, Smartphone, ArrowRight, Code, Terminal } from 'lucide-react';
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import Services from './_components/Services';
import Skills from './_components/Skills';
import Projects from './_components/Projects';
import Education from './_components/Education';
import DownloadCV from './_components/DownloadCv';
import Footer from './_components/Footer';

const App: React.FC = () => {
  return (
    <div>
      
      <main>
        <Hero />
        
       <Services/>

        <Education/>

        <Skills/>

        <Projects/>

        <DownloadCV/>
      </main>

    </div>
  );
};

export default App;
