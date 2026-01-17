
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Database, Layers, Smartphone } from 'lucide-react';
import MarginWrapper from './MarginWrapper';

interface ServiceCardProps {
  icon: React.ReactNode;
  head: string;
  para: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, head, para }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      
      className="flex gap-12 flex-col rotateDiv lg:items-start items-center"
    >
      <div className="relative w-fit">
        <div className="border border-blue-500/30 p-10 w-fit rotateBox bg-slate-900/40">
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500">
          {icon}
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="text-white font-black text-xl md:text-2xl text-center lg:text-start uppercase tracking-tighter leading-none">{head}</h2>
        <p className="font-mono text-center lg:text-start text-[11px] text-slate-500 uppercase tracking-widest leading-relaxed max-w-xs">
          {para}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <MarginWrapper>
    <section id="about" className="grid place-items-center relative py-24 md:py-40 overflow-hidden">
      {/* Background Texture */}
      <span className="w-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-center bg-cover absolute inset-0 -z-10 -scale-x-100 opacity-[0.04]"></span>
      <span className="w-full bg-linear-to-b from-slate-950 via-slate-950/80 to-slate-950 absolute inset-0 z-0"></span>

      <div className="mx-auto px-6 md:px-10 gap-20 lg:gap-6 flex w-full justify-between flex-col lg:flex-row z-20 items-center lg:items-start">
        {/* Left Section: Manifesto */}
        <div className="flex flex-col items-center justify-center m-auto w-fit gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            
          >
            <h2 className="text-xs m-auto text-center lg:text-start font-mono w-fit border-b border-blue-500 text-blue-500 tracking-[0.5em] uppercase mb-4 pb-2">Architecture Manifesto</h2>
            <h2 className="text-white text-center lg:text-start m-auto text-5xl md:text-6xl font-black w-fit leading-none tracking-tighter mb-6">
              SYSTEM<br />INTEGRATION.
            </h2>
            <p className="text-slate-400 text-center lg:text-start max-w-sm m-auto text-lg leading-relaxed mb-8">
              From distributed backends to autonomous AI reasoning modules, I engineer the digital infrastructure that powers the future.
            </p>
            <button
              className="m-auto w-fit flex items-center space-x-4 bg-white text-slate-950 px-10 py-5 font-black uppercase tracking-widest text-[10px] transition-all hover:bg-blue-600 hover:text-white"
            >
              <span>Access Repositories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Section: Modular Grid */}
        <div className="grid sm:grid-cols-2 gap-20 lg:gap-x-6 lg:gap-y-24">
          <ServiceCard
            icon={<BrainCircuit className="w-8 h-8" />}
            head="Agentic AI Systems"
            para="Deployment of autonomous reasoning agents capable of planning and executing multi-step business logic."
          />
          <ServiceCard
            icon={<Database className="w-8 h-8" />}
            head="Vector Optimization"
            para="Architecting high-dimensional data layers with Neon DB and Pinecone for semantic search and RAG pipelines."
          />
          <ServiceCard
            icon={<Layers className="w-8 h-8" />}
            head="MERN Infrastructure"
            para="End-to-end full-stack development using MongoDB, Express, React, and Node.js with absolute type safety."
          />
          <ServiceCard
            icon={<Smartphone className="w-8 h-8" />}
            head="Mobile Bridge UI"
            para="Bridging complex web dashboards into native Android experiences using optimized performance wrappers."
          />
        </div>
      </div>
    </section>
    </MarginWrapper>
  );
};

export default Services;