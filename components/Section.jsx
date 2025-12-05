import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, className = "", children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 relative overflow-hidden ${dark ? 'bg-navy-900 text-white' : 'bg-slate-50 text-slate-800'} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      {dark && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
      )}
    </section>
  );
};

export default Section;