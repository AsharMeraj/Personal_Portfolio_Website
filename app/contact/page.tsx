'use client'
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles, Send, Mail, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import MarginWrapper from '../_components/MarginWrapper';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000); // Reset after 4s
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-slate-50/60 text-slate-800 flex items-center justify-center font-sans overflow-hidden py-20">
      <MarginWrapper>
        <div
          className="w-full mx-auto"
        >
          {/* PAGE HEADER (Split Layout) */}
          <header className="mb-5 md:mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-12">
            
            {/* Left Side: Badge & Heading */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-5">
                <div className="inline-flex items-center space-x-2 bg-blue-100/70 border border-blue-200/80 px-4 py-2 rounded-full text-blue-700 text-sm font-bold tracking-wide">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  <span>Get In Touch</span>
                </div>
              </div>

              <h2 className="xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Let&apos;s start a <br className="hidden lg:block" />
                <span className="text-blue-600">Conversation</span>.
              </h2>
            </div>

            {/* Right Side: Paragraph */}
            <div className="flex-1 lg:pl-10 lg:border-l-2 border-blue-100/50 flex justify-center lg:justify-start">
              <p className="text-lg text-slate-600 font-normal text-center lg:text-left leading-relaxed">
                Whether you have a project in mind, need a custom system, or just want to say hello, my inbox is always open.
              </p>
            </div>
          </header>

          {/* CONTENT MODULE: Info Cards & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* LEFT COLUMN: Contact Details */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Email Card */}
              <div className="bg-white p-5 rounded-[2rem] border border-blue-100 shadow-xl shadow-blue-500/5 hover:-translate-y-1 transition-transform duration-300 flex items-start gap-5">
                <div className="bg-blue-50 border border-blue-100 p-3.5 rounded-2xl text-blue-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="pt-1.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Email Me At</span>
                  <a href="mailto:asharmeraj55@gmail.com" className="font-extrabold text-slate-900 hover:text-blue-600 transition-colors break-all">
                    asharmeraj55@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white p-5 rounded-[2rem] border border-blue-100 shadow-xl shadow-blue-500/5 hover:-translate-y-1 transition-transform duration-300 flex items-start gap-5">
                <div className="bg-emerald-50 border border-emerald-100 p-3.5 rounded-2xl text-emerald-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="pt-1.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Current Base</span>
                  <span className="font-extrabold text-slate-900">
                    Karachi, Pakistan
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8  rounded-[2.5rem] border border-blue-100 shadow-xl shadow-blue-500/5 relative overflow-hidden">
                
                {/* Soft Decorative Background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/4" />

                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider pl-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 transition-all"
                      />
                    </div>
                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider pl-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider pl-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-[1.5rem] text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="mt-2 group cursor-pointer flex items-center justify-center space-x-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-[1.5rem] font-bold text-xs tracking-wider uppercase shadow-md shadow-blue-500/20 transition-colors w-full"
                  >
                    {status === 'idle' && (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                    {status === 'loading' && (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    )}
                    {status === 'success' && (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    )}
                    {status === 'error' && (
                      <span>Error - Try Again</span>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </MarginWrapper>
    </section>
  );
};

export default Contact;