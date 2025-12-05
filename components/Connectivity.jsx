import React from 'react';
import Section from './Section';
import { Route, Car, School, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Connectivity = () => {
  const features = [
    {
      icon: <Route size={28} />,
      title: "Strategic Access",
      desc: "Close to 4-lane State Highway (SH-09), ensuring rapid transit."
    },
    {
      icon: <Car size={28} />,
      title: "Seamless Travel",
      desc: "Well-developed roads providing smooth connectivity to the city center."
    },
    {
      icon: <School size={28} />,
      title: "Education Hubs",
      desc: "Surrounded by prestigious schools and educational institutions."
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "Lifestyle Centers",
      desc: "Short drive to major malls, shopping destinations, and entertainment."
    }
  ];

  return (
    <Section id="connectivity" dark className="border-t border-navy-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Unmatched <br/>Connectivity</h2>
          <div className="w-24 h-1 bg-gold-400 mb-8"></div>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light">
            Our project boasts excellent connectivity to key areas of Bangalore. With well-developed roads and upcoming infrastructure projects, residents can enjoy seamless travel to airports, workplaces, and lifestyle destinations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <motion.div 
                key={idx}
                className="group relative bg-white p-6 rounded-sm shadow-xl border-l-4 border-gold-400 hover:border-gold-500 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Hover gradient overlay */}
                 <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10 flex items-start justify-between mb-4">
                  <div className="text-navy-900 bg-gold-400/20 p-3 rounded-full group-hover:bg-navy-900 group-hover:text-gold-400 transition-colors duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <ArrowUpRight className="text-slate-300 group-hover:text-gold-400 transition-colors duration-300" size={20} />
                </div>
                
                <div className="relative z-10">
                   <h3 className="text-xl font-bold text-navy-900 mb-2 font-serif group-hover:text-navy-800 transition-colors">{item.title}</h3>
                   <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative h-full min-h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
           {/* Placeholder for map/connectivity image */}
           <img 
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop" 
            alt="City Connectivity" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent"></div>
           
           <div className="absolute bottom-8 left-8 right-8">
             <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
               <p className="text-white font-serif italic text-lg">"Connectivity is the key to growth."</p>
             </div>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default Connectivity;