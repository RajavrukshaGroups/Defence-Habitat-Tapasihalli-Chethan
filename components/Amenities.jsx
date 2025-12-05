import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

// --- Animated SVG Components ---

const AnimatedGardens = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Sun */}
    <motion.circle 
      cx="48" cy="16" r="6" 
      fill="#d4af37" 
      initial={{ opacity: 0, scale: 0.5 }} 
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        opacity: { duration: 1 },
        scale: { 
            repeat: Infinity, 
            duration: 3, 
            ease: "easeInOut",
            delay: 1 
        }
      }}
    />
    
    {/* Hills */}
    <motion.path 
      d="M4 56L20 40L36 56" 
      stroke="#0f3460" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }} 
      whileInView={{ pathLength: 1 }} 
      transition={{ duration: 1 }} 
    />
    <motion.path 
      d="M28 56L44 32L60 56" 
      stroke="#0f3460" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }} 
      whileInView={{ pathLength: 1 }} 
      transition={{ duration: 1, delay: 0.3 }} 
    />

    {/* Trees with Swaying Motion */}
    <motion.g>
        <line x1="20" y1="40" x2="20" y2="30" stroke="#0f3460" strokeWidth="2" />
        <motion.circle 
            cx="20" cy="26" r="6" stroke="#0f3460" strokeWidth="2" fill="white" 
            initial={{ scale: 0 }} 
            whileInView={{ scale: 1 }} 
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ 
                scale: { duration: 0.5, delay: 0.6 },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ originX: "20px", originY: "30px" }}
        />
    </motion.g>

    <motion.g>
        <line x1="44" y1="32" x2="44" y2="22" stroke="#0f3460" strokeWidth="2" />
        <motion.circle 
            cx="44" cy="18" r="6" stroke="#0f3460" strokeWidth="2" fill="white" 
            initial={{ scale: 0 }} 
            whileInView={{ scale: 1 }} 
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ 
                scale: { duration: 0.5, delay: 0.8 },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            style={{ originX: "44px", originY: "22px" }}
        />
    </motion.g>
  </svg>
);

const AnimatedClubhouse = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M32 8L8 28V56H56V28L32 8Z" 
          stroke="#0f3460" strokeWidth="2" strokeLinejoin="round" fill="white"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} 
        />
        
        {/* Door Opening Animation */}
        <motion.rect 
          x="26" y="36" width="12" height="20" 
          stroke="#d4af37" strokeWidth="2" fill="none"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} 
        />
        <motion.rect 
          x="26" y="36" width="12" height="20" 
          fill="#d4af37" 
          initial={{ scaleX: 1, opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          animate={{ scaleX: [1, 0.1, 1] }}
          transition={{ 
            opacity: { delay: 1, duration: 0.5 },
            scaleX: { delay: 2, duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 } 
          }}
          style={{ originX: 0 }}
        />
        
        {/* Windows */}
        <motion.rect x="16" y="36" width="6" height="8" stroke="#0f3460" strokeWidth="1.5" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.2}} />
        <motion.rect x="42" y="36" width="6" height="8" stroke="#0f3460" strokeWidth="1.5" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.3}} />
    </svg>
);

const AnimatedPool = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M8 24H56V48C56 52.4 52.4 56 48 56H16C11.6 56 8 52.4 8 48V24Z" 
          stroke="#0f3460" strokeWidth="2" fill="white"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} 
        />
        {/* Active Waves */}
        <motion.path 
          d="M10 36 C15 32, 20 40, 25 36 C30 32, 35 40, 40 36 C45 32, 50 40, 54 36" 
          stroke="#d4af37" strokeWidth="2" strokeLinecap="round" fill="none"
          initial={{ x: -2 }}
          animate={{ x: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <motion.path 
          d="M10 44 C15 40, 20 48, 25 44 C30 40, 35 48, 40 44 C45 40, 50 48, 54 44" 
          stroke="#d4af37" strokeWidth="2" strokeLinecap="round" fill="none"
          initial={{ x: 2 }}
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        
        {/* Sparkles */}
        <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}>
            <path d="M46 28L47 30L49 31L47 32L46 34L45 32L43 31L45 30L46 28Z" fill="#0f3460"/>
        </motion.g>
        <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2.5, delay: 1.5 }}>
            <path d="M18 50L19 52L21 53L19 54L18 56L17 54L15 53L17 52L18 50Z" fill="#0f3460"/>
        </motion.g>
    </svg>
);

const AnimatedPlayArea = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M16 56L24 16H40L48 56" 
          stroke="#0f3460" strokeWidth="2" strokeLinecap="round" 
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} 
        />
        {/* Smooth Swing */}
        <motion.g 
          style={{ originX: "32px", originY: "16px" }} 
          animate={{ rotate: [15, -15, 15] }} 
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
            <line x1="26" y1="16" x2="26" y2="44" stroke="#d4af37" strokeWidth="1.5" />
            <line x1="38" y1="16" x2="38" y2="44" stroke="#d4af37" strokeWidth="1.5" />
            <rect x="24" y="44" width="16" height="4" rx="2" fill="#d4af37" />
        </motion.g>
    </svg>
);

const AnimatedCCTV = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path d="M32 56V32" stroke="#0f3460" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
        <motion.path d="M24 56H40" stroke="#0f3460" strokeWidth="2" strokeLinecap="round" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} />
        
        {/* Camera Head & Beam */}
        <motion.g
            initial={{ rotate: -20 }}
            animate={{ rotate: 20 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.5, ease: "easeInOut" }}
            style={{ originX: "32px", originY: "32px" }}
        >
            {/* Scanning Beam */}
            <motion.path 
                d="M32 27 L10 5 L54 5 Z" 
                fill="url(#beamGradient)"
                opacity="0.2"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <defs>
                <linearGradient id="beamGradient" x1="32" y1="27" x2="32" y2="5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#d4af37" stopOpacity="0"/>
                    <stop offset="1" stopColor="#d4af37" stopOpacity="0.8"/>
                </linearGradient>
            </defs>

            <rect x="20" y="20" width="24" height="14" rx="2" stroke="#0f3460" strokeWidth="2" fill="white" />
            <circle cx="38" cy="27" r="3" fill="#d4af37" />
        </motion.g>
        
        {/* Blinking Light */}
        <motion.circle cx="24" cy="24" r="1.5" fill="red" animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} />
    </svg>
);

const AnimatedElectricity = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle 
          cx="32" cy="32" r="24" 
          stroke="#0f3460" strokeWidth="1.5" strokeDasharray="4 4" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }} 
        />
        <motion.path
            d="M36 14L24 32H40L28 50"
            stroke="#d4af37"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ opacity: [1, 0.5, 1] }}
        />
        {/* Sparks */}
        <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <path d="M48 24 L52 20" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 40 L12 44" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
        </motion.g>
    </svg>
);

const AnimatedWater = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
         {/* Tap */}
        <motion.path d="M12 44V28C12 28 12 16 24 16H44" stroke="#0f3460" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
        <motion.rect x="40" y="12" width="8" height="12" rx="1" stroke="#0f3460" strokeWidth="2" fill="white" initial={{ scale: 0 }} whileInView={{ scale: 1 }} />
        
        {/* Falling Drop */}
        <motion.circle
            cx="44" cy="30" r="3" fill="#d4af37"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, 24], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeIn" }}
        />
        
        {/* Expanding Ripples */}
        <motion.circle 
            cx="44" cy="56" r="4" 
            stroke="#0f3460" strokeWidth="1" 
            fill="none"
            initial={{ scale: 0, opacity: 0 }} 
            animate={{ scale: [0, 2.5], opacity: [0.8, 0] }} 
            transition={{ repeat: Infinity, duration: 1.2, delay: 0.9 }} 
        />
        <motion.circle 
            cx="44" cy="56" r="4" 
            stroke="#0f3460" strokeWidth="1" 
            fill="none"
            initial={{ scale: 0, opacity: 0 }} 
            animate={{ scale: [0, 2], opacity: [0.6, 0] }} 
            transition={{ repeat: Infinity, duration: 1.2, delay: 1.1 }} 
        />
    </svg>
);

const AnimatedSewage = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path d="M8 24H24V40H56" stroke="#0f3460" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
        <circle cx="24" cy="24" r="4" stroke="#d4af37" strokeWidth="2" fill="white" />
        <circle cx="24" cy="40" r="4" stroke="#d4af37" strokeWidth="2" fill="white" />
        
        {/* Continuous Flow */}
        <motion.path 
            d="M10 24H20 M24 26V38 M28 40H54" 
            stroke="#d4af37" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -8] }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
    </svg>
);

const AmenityCard = ({ icon, title, index }) => (
  <motion.div 
    className="flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 aspect-square group relative overflow-hidden"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    viewport={{ once: true }}
  >
    {/* Decorative background circle that expands on hover */}
    <div className="absolute inset-0 bg-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 z-10 shadow-inner">
      {icon}
    </div>
    <h3 className="text-center font-bold text-navy-900 font-serif text-lg z-10">{title}</h3>
  </motion.div>
);

const Amenities = () => {
  const list = [
    { icon: <AnimatedGardens />, title: "Landscaped Gardens" },
    { icon: <AnimatedClubhouse />, title: "Clubhouse" },
    { icon: <AnimatedPool />, title: "Swimming Pool" },
    { icon: <AnimatedPlayArea />, title: "Children's Play Area" },
    { icon: <AnimatedCCTV />, title: "24/7 Surveillance" },
    { icon: <AnimatedElectricity />, title: "Electricity Supply" },
    { icon: <AnimatedWater />, title: "Water Supply" },
    { icon: <AnimatedSewage />, title: "Sewage Lines" },
  ];

  return (
    <Section id="amenities" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Modern Amenities</h2>
        <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Experience a lifestyle designed for comfort and luxury with our world-class amenities.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {list.map((item, idx) => (
          <AmenityCard key={idx} index={idx} icon={item.icon} title={item.title} />
        ))}
      </div>
    </Section>
  );
};

export default Amenities;