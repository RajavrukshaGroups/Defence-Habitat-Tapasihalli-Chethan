import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    // Changed min-h-screen to calculate remaining height to prevent scrollbar on load
    <div id="home" className="relative min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-180px)] w-full overflow-hidden flex items-center justify-center bg-navy-900">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop" 
          alt="Defence Habitat Tapasihalli Entrance" 
          className="w-full h-full object-cover" 
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1600596542815-e32c21571d78?q=80&w=2069&auto=format&fit=crop";
          }}
        />
        {/* Dark Overlay Gradient - Adjusted for bright daylight image */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-navy-900/50 to-navy-900/80" />
      </div>

      {/* Animated SVG Lines Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block py-1.5 px-4 border border-gold-400/50 rounded-full text-gold-400 text-xs md:text-sm tracking-[0.25em] uppercase mb-8 backdrop-blur-md bg-navy-900/30">
            Premium Residential Layout
          </span>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Defence Habitat <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-yellow-200 to-gold-400">
            Tapasihalli
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl text-slate-100 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          An exceptional residential layout blending modern living with tranquil surroundings in the heart of North Bangalore.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a 
            href="tel:+918884735735"
            className="w-full sm:w-auto px-10 py-4 bg-gold-400 text-navy-900 font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3 group text-sm md:text-base"
          >
            <span>Call Now</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 border border-white/30 bg-navy-900/40 backdrop-blur-sm text-white font-bold uppercase tracking-wider hover:bg-white hover:text-navy-900 transition-all duration-300 rounded-sm text-sm md:text-base"
          >
            Enquire Now
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;