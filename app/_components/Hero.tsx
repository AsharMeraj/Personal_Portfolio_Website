'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Coffee, Code2, Heart } from 'lucide-react';
import Image from 'next/image';
import Pic from '@/public/Pic5.png';
import MarginWrapper from './MarginWrapper';
import Link from "next/link"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const MotionLink = motion.create(Link);

const Hero: React.FC = () => {
  return (
    <section className="text-slate-800 flex items-center justify-center font-sans overflow-hidden bg-slate-50/60 px-6 md:px-8 m-auto md:pt-40 py-22">

      <motion.div
        initial={{ y: 18 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-4xl "
      >

        {/* LEFT COLUMN: Friendly & Cute Copy */}
        <motion.div
          className="order-2 lg:order-1 flex-1 flex flex-col text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="mb-5">
            <div className="inline-flex items-center space-x-2 bg-blue-100/70 border border-blue-200/80 px-4 py-2 rounded-full text-blue-700 text-base font-semibold tracking-wide">
              <span className="animate-bounce inline-block">👋</span>
              <span>Hey there! I&apos;m Ashar</span>
            </div>
          </motion.div>

          {/* Soft Main Headline */}
          <motion.div variants={itemVariants} className="mb-5">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
              We build <span className="text-blue-600">stores</span> & <span className="text-blue-600">systems</span> that run themselves.
            </h1>
          </motion.div>

          {/* Simple Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 font-normal max-w-md mx-auto lg:mx-0 leading-relaxed mb-8"
          >
            From online stores to complete management systems, we automate the manual work so you can focus on growth.
          </motion.p>

          {/* Cute Soft Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group flex items-center justify-center space-x-2.5 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-2xl font-bold text-xs tracking-wider uppercase shadow-md shadow-blue-500/10 w-full sm:w-auto"
            >
              <span>See My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <MotionLink
              href="/contact"
              scroll={false}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group flex items-center justify-center space-x-2 bg-white hover:bg-blue-50 text-slate-700 border border-slate-200 px-7 py-3.5 rounded-2xl font-bold text-xs tracking-wider uppercase transition-colors w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 text-blue-500" />
              <span>Say Hello</span>
            </MotionLink>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Playful Stacked Cards & Badges */}
        <motion.div
          className="order-1 lg:order-2 relative flex justify-center w-full lg:w-auto"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.6, type: "spring" }}
        >
          {/* Main Container */}
          <div className="relative hidden lg:block lg:w-[18rem] xl:w-[20rem] group">

            {/* Playful Tilted Background Card */}
            <div className="absolute inset-0 bg-blue-100/60 rounded-[2.5rem] rotate-[-6deg] origin-bottom-left transition-transform duration-500 group-hover:rotate-[-8deg]" />

            {/* Foreground Portrait Frame */}
            <div className="relative bg-white p-3 aspect-[4/5] rounded-[2.5rem] border border-blue-50 shadow-xl shadow-blue-500/10 z-10 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-sky-50 relative">
                <Image
                  src={Pic}
                  alt="Muhammad Ashar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Status Nameplate - Centered Bottom */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max bg-white border border-blue-100 px-5 py-2.5 rounded-full shadow-lg flex items-center space-x-2.5"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-extrabold text-slate-700 tracking-wide">Software Engineer</span>
              </motion.div>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;