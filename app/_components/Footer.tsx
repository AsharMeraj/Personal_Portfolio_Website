import React from 'react';
import { Heart, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 bg-slate-50/60 border-t border-blue-100 font-sans text-center sm:text-left">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
        
        {/* Main Copyright Text */}
        <p className="text-slate-600 text-xs sm:text-sm font-medium tracking-wide">
          &copy; {new Date().getFullYear()} <span className="text-blue-600 font-bold">Muhammad Ashar</span>. All rights reserved.
        </p>

        {/* Socials, Status & Made With Section */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          
          {/* Social Icons */}
          <div className="flex items-center gap-1 sm:mr-2">
            <a 
              href="https://www.linkedin.com/in/muhammad-ashar-244059273" 
              target="_blank" 
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-blue-600 bg-blue-100/50 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/asharlabs" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2 text-pink-600 bg-pink-50 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Crafted With Love */}
          <div className="flex items-center text-white text-[11px] font-bold tracking-wide bg-blue-600 shadow-md shadow-blue-500/10 px-3.5 py-1.5 rounded-full">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400 mx-1.5 animate-[pulse_2s_ease-in-out_infinite]" />
            <span>Next.js</span>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;