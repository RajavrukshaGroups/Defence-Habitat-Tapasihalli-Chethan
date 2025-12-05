import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

// --- Premium Animated SVG Logos ---

const AnimatedAirport = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Runway */}
    <motion.path
      d="M4 52H60"
      stroke="#0f3460"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M12 52L24 52"
      stroke="#d4af37"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    />
    {/* Plane */}
    <motion.g
      initial={{ x: -20, y: 20, opacity: 0 }}
      whileInView={{ x: 20, y: -20, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
        <path d="M4 30 L14 30 L18 22 L24 22 L18 30 L30 30 L34 26 L38 26 L32 32 L30 36 L4 36 Z" fill="white" stroke="#0f3460" strokeWidth="1.5"/>
        <path d="M18 30 L30 30" stroke="#d4af37" strokeWidth="1.5"/>
    </motion.g>
    {/* Clouds */}
    <motion.path
        d="M40 14C40 14 42 10 46 10C50 10 52 14 52 14"
        stroke="#d4af37"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 2 }}
    />
  </svg>
);

const AnimatedIndustry = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Factory Outline */}
        <motion.path 
            d="M8 52H56V24L46 24L46 34L36 24L36 34L26 24V52"
            stroke="#0f3460" 
            strokeWidth="2"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
        />
        {/* Rotating Gear */}
        <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ originX: "48px", originY: "16px" }}
        >
            <circle cx="48" cy="16" r="8" stroke="#d4af37" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="48" cy="16" r="3" fill="#d4af37" />
        </motion.g>
        {/* Smoke */}
        <motion.path
            d="M16 20Q20 10 16 4"
            stroke="#d4af37"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
    </svg>
);

const AnimatedIT = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Network Nodes */}
        <motion.circle cx="32" cy="12" r="3" stroke="#d4af37" strokeWidth="2" initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.2}}/>
        <motion.circle cx="12" cy="32" r="3" stroke="#d4af37" strokeWidth="2" initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.4}}/>
        <motion.circle cx="52" cy="32" r="3" stroke="#d4af37" strokeWidth="2" initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.6}}/>
        <motion.circle cx="32" cy="52" r="3" stroke="#d4af37" strokeWidth="2" initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.8}}/>
        
        {/* Connections */}
        <motion.path d="M32 15V49" stroke="#0f3460" strokeWidth="1.5" initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:1}}/>
        <motion.path d="M15 32H49" stroke="#0f3460" strokeWidth="1.5" initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:1}}/>
        
        {/* Building Chip */}
        <motion.rect x="22" y="22" width="20" height="20" rx="4" stroke="#0f3460" strokeWidth="2" fill="white" initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{delay:1}}/>
        <motion.path d="M28 28H36M28 36H36" stroke="#d4af37" strokeWidth="2" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.2}}/>
    </svg>
);

const AnimatedAerospace = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
         {/* Orbit Path */}
         <motion.ellipse 
            cx="32" cy="32" rx="24" ry="10" 
            stroke="#0f3460" strokeWidth="1.5"
            transform="rotate(-45 32 32)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 1.5 }}
         />
         {/* Rocket */}
         <motion.g
            initial={{ x: -20, y: 20, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
         >
             <path d="M36 28 L46 18 C48 16 50 14 50 12 C50 10 48 8 46 8 C44 8 42 10 42 12 C42 14 40 16 38 18 L28 28" stroke="#0f3460" strokeWidth="2" strokeLinecap="round" fill="white"/>
             <path d="M28 28 L24 32 L20 32 L20 28 L24 24" stroke="#d4af37" strokeWidth="2" fill="none"/>
             <path d="M18 34 Q 14 38 10 40" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="2 2" />
         </motion.g>
         {/* Stars */}
         <motion.path d="M52 10L54 14L52 18L50 14L52 10Z" fill="#d4af37" 
            animate={{ scale: [1, 1.3, 1] }} 
            transition={{ repeat: Infinity, duration: 2 }} 
         />
    </svg>
);

const AnimatedCity = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ground */}
        <motion.path 
            d="M8 52H56" 
            stroke="#0f3460" strokeWidth="2"
            strokeLinecap="round"
        />
        {/* Skyline */}
        <motion.path
            d="M12 52V36H20V24H32V16H44V32H52V52"
            stroke="#0f3460" strokeWidth="2" strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
        />
        {/* Sun/Moon */}
        <motion.circle 
            cx="48" cy="12" r="5" 
            stroke="#d4af37" strokeWidth="2"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
        />
        {/* Lit Windows */}
        <motion.rect x="36" y="20" width="4" height="4" fill="#d4af37" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.2}}/>
        <motion.rect x="36" y="28" width="4" height="4" fill="#d4af37" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.3}}/>
        <motion.rect x="24" y="28" width="4" height="4" fill="#d4af37" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.4}}/>
    </svg>
);

const AnimatedMedical = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Cross */}
        <motion.path
            d="M32 12V52 M12 32H52"
            stroke="#0f3460"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: 0.5 }}
        />
        {/* Pulse Line */}
        <motion.path
            d="M4 32H20L26 16L38 48L44 32H60"
            stroke="#d4af37"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Heart Outline */}
        <motion.path
            d="M32 54C32 54 56 42 56 24C56 14 46 8 38 14C36 16 32 20 32 20C32 20 28 16 26 14C18 8 8 14 8 24C8 42 32 54 32 54Z"
            stroke="#0f3460"
            strokeWidth="2"
            fill="none"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        />
    </svg>
);

// --- Main Component ---

const LocationItem = ({ icon, text, subtext, index }) => (
  <motion.div 
    className="p-6 border border-slate-200 hover:border-gold-400/50 bg-white shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm group flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="mb-6 flex justify-center items-center h-20 w-20 group-hover:scale-105 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-navy-900 mb-2 font-serif text-center">{text}</h3>
    {subtext && <p className="text-slate-500 text-sm text-center font-medium">{subtext}</p>}
  </motion.div>
);

const Location = () => {
  const locations = [
    { icon: <AnimatedAirport />, text: "Bangalore Airport", subtext: "20-minute drive away" },
    { icon: <AnimatedIndustry />, text: "KIADB Industrial Area", subtext: "Close proximity to major hub" },
    { icon: <AnimatedIT />, text: "ITIR / SEZ", subtext: "Upcoming 10,000 acres project" },
    { icon: <AnimatedAerospace />, text: "Aerospace Park", subtext: "1,000 acres Hardware Park" },
    { icon: <AnimatedCity />, text: "KHIR City Project", subtext: "Upcoming development" },
    { icon: <AnimatedMedical />, text: "Premium Healthcare", subtext: "Near Manipal & Seven Hills Hospital" },
  ];

  return (
    <Section id="location">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Prime Location</h2>
        <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
        <p className="text-lg text-slate-600">
          {/* Situated in North Bangalore, Defence Habitat Tapasihalli is strategically positioned to offer the perfect balance of connectivity and investment growth. */}
          Situated in North Bangalore, Defence Habitat Tapasihalli is strategically positioned in close proximity to the airport, upcoming 10,000 acres of ITIR/SEZ projects, and KIADB areas, ensuring a thriving economic environment. This location not only provides convenient access to workplaces but also promises a significant appreciation in property value, making it a lucrative investment for the future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((loc, idx) => (
          <LocationItem key={idx} index={idx} icon={loc.icon} text={loc.text} subtext={loc.subtext} />
        ))}
      </div>
    </Section>
  );
};

export default Location;