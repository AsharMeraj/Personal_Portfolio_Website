'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BrainCircuit, Database, Layers, Smartphone, Sparkles } from 'lucide-react';
import MarginWrapper from './MarginWrapper';

interface ServiceCardProps {
  icon: React.ReactNode;
  head: string;
  para: string;
}

const containerVariants: Variants = {
  hidden: { y: 24 },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, head, para }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group bg-white p-6 rounded-[2rem] border border-blue-100 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 flex flex-col sm:flex-row items-start gap-5 text-left"
    >
      {/* Icon Bubble */}
      <div className="bg-blue-50/80 border border-blue-100 p-4 rounded-[1.5rem] text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>

      {/* Content */}
      <div className="pt-1">
        <h3 className="text-slate-900 font-extrabold text-xl tracking-tight mb-2">
          {head}
        </h3>
        <p className="text-slate-600 text-sm font-normal leading-relaxed">
          {para}
        </p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-slate-50/60 text-slate-800 flex items-center justify-center font-sans overflow-hidden">
      <MarginWrapper>
        {/* EXACT Container size from the Hero section (max-w-5xl) */}
        <motion.div
          className="w-full mx-auto flex flex-col gap-12 lg:gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
        >

          {/* TOP SECTION: Split Header (Heading Left, Paragraph Right) */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">

            {/* Top Left: Badge & Heading */}
            <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

              {/* EXACT Badge styling from Hero */}
              <div className="mb-5">
                <div className="inline-flex items-center space-x-2 bg-blue-100/70 border border-blue-200/80 px-4 py-2 rounded-full text-blue-700 text-base font-semibold tracking-wide">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  <span>How I Can Help</span>
                </div>
              </div>

              {/* EXACT Heading styling from Hero */}
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                What we can <br className="hidden lg:block" />
                <span className="text-blue-600">build for you</span>.
              </h2>
            </motion.div>

            {/* Top Right: Paragraph */}
            <motion.div variants={itemVariants} className="flex-1 lg:pl-10 lg:border-l-2 border-blue-100/50 flex justify-center lg:justify-start">

              {/* EXACT Paragraph styling from Hero */}
              <p className="text-lg text-slate-600 font-normal max-w-md text-center lg:text-left leading-relaxed">
                We build online stores and custom business systems that replace manual work. You tell us the problem, we build the tool.
              </p>
            </motion.div>

          </div>

          {/* BOTTOM SECTION: Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <ServiceCard
              icon={<BrainCircuit className="w-6 h-6" />}
              head="Business Automation"
              para="Stop doing repetitive work by hand. We automate orders, invoices, reports and follow-ups."
            />
            <ServiceCard
              icon={<Database className="w-6 h-6" />}
              head="Management Systems"
              para="Complete custom systems for clinics, schools, shops and offices: records, billing, staff and reports in one place."
            />
            <ServiceCard
              icon={<Layers className="w-6 h-6" />}
              head="Ecommerce Stores"
              para="Fast online stores with product management, payments, order tracking and an admin panel you can run yourself."
            />
            <ServiceCard
              icon={<Smartphone className="w-6 h-6" />}
              head="Web & Mobile Apps"
              para="Websites and mobile apps built around your business, easy to use and ready to grow with you."
            />
          </div>
        </motion.div>
      </MarginWrapper >
    </section>
  );
};

export default Services;