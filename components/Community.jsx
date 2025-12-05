// import React from 'react';

// import Section from './Section';
// // import { motion } from 'framer-motion';
// import group from '../assets/group.jpg';


// const Community = () => {
//   return (
//     <Section id="community" className="bg-white">
//       <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
//         {/* Image Collage */}
//         <motion.div 
//           className="md:w-1/2 w-full"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//         >
//           <div className="relative">
//              {/* Decorative Background Blurs */}
//              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-400/20 rounded-full blur-3xl -z-10"></div>
//              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-navy-900/10 rounded-full blur-3xl -z-10"></div>

//              <div className="grid grid-cols-2 gap-3 md:gap-4 h-[450px] md:h-[500px]">
//                 {/* Image 1: Family / Active (Tall Left) */}
//                 <div className="col-span-1 row-span-2 relative rounded-lg overflow-hidden shadow-lg group">
//                     <img 
//                         src="https://images.unsplash.com/photo-1574618768228-5690558742a7?q=80&w=2070&auto=format&fit=crop" 
//                         alt="Happy Indian family in park" 
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                         <span className="text-white font-serif tracking-wide text-sm font-bold">Active Lifestyle</span>
//                     </div>
//                 </div>

//                 {/* Image 2: Festivals (Top Right) */}
//                 <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden shadow-lg group">
//                     <img 
//                         src="https://images.unsplash.com/photo-1608555855762-2b657eb1c348?q=80&w=2070&auto=format&fit=crop" 
//                         alt="Community Festivals" 
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                         <span className="text-white font-serif tracking-wide text-sm font-bold">Vibrant Culture</span>
//                     </div>
//                 </div>

//                 {/* Image 3: Wellness (Bottom Right) */}
//                 <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden shadow-lg group">
//                     <img 
//                         src={group}
//                         alt="Yoga and Wellness" 
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                         <span className="text-white font-serif tracking-wide text-sm font-bold">Peaceful Living</span>
//                     </div>
//                 </div>
//              </div>
//           </div>
//         </motion.div>

//         {/* Text Content */}
//         <motion.div 
//           className="md:w-1/2 w-full"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Community & Lifestyle</h2>
//           <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
//           <p className="text-lg text-slate-700 leading-loose font-light mb-6">
//             We believe in fostering a sense of community and belonging. Defence Habitat offers a vibrant and inclusive environment where residents can enjoy a fulfilling lifestyle, engage in community events, and reside in a safe and secure neighborhood.
//           </p>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
//                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
//                <span className="text-navy-900 font-medium">Peaceful Surroundings</span>
//             </div>
//              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
//                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
//                <span className="text-navy-900 font-medium">Like-minded Neighbors</span>
//             </div>
//              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
//                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
//                <span className="text-navy-900 font-medium">Secure Environment</span>
//             </div>
//              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
//                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
//                <span className="text-navy-900 font-medium">Cultural Events</span>
//             </div>
//           </div>

//           <div className="mt-8 pt-8 border-t border-slate-100">
//             <p className="text-slate-500 italic text-sm">
//               "A home is not just a place to live, it's where your story begins."
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </Section>
//   );
// };

// export default Community;


import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import group from '../assets/group.jpg';
import motherKid from '../assets/motherKid.jpg';
import yoga from '../assets/yoga.jpg';

const Community = () => {
  return (
    <Section id="community" className="bg-white">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">

        {/* Image Collage */}
        <motion.div 
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Decorative Background Blurs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-navy-900/10 rounded-full blur-3xl -z-10"></div>

            <div className="grid grid-cols-2 gap-3 md:gap-4 h-[450px] md:h-[500px]">

              {/* Image 1 */}
              <div className="col-span-1 row-span-2 relative rounded-lg overflow-hidden shadow-lg group">
                <img 
                  src={yoga}
                  alt="Happy Indian family in park" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-serif tracking-wide text-sm font-bold">Active Lifestyle</span>
                </div>
              </div>

              {/* Image 2 */}
              <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden shadow-lg group">
                <img 
                  src={motherKid}
                  alt="Community Festivals" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-serif tracking-wide text-sm font-bold">Vibrant Culture</span>
                </div>
              </div>

              {/* Image 3 */}
              <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden shadow-lg group">
                <img 
                  src={group}
                  alt="Yoga and Wellness" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-serif tracking-wide text-sm font-bold">Peaceful Living</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Community & Lifestyle</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>

          <p className="text-lg text-slate-700 leading-loose font-light mb-6">
            We believe in fostering a sense of community and belonging. Defence Habitat offers a vibrant and inclusive environment where residents can enjoy a fulfilling lifestyle, engage in community events, and reside in a safe and secure neighborhood.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
              <span className="text-navy-900 font-medium">Peaceful Surroundings</span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
              <span className="text-navy-900 font-medium">Like-minded Neighbors</span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
              <span className="text-navy-900 font-medium">Secure Environment</span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
              <span className="text-navy-900 font-medium">Cultural Events</span>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100">
            <p className="text-slate-500 italic text-sm">
              "A home is not just a place to live, it's where your story begins."
            </p>
          </div>
        </motion.div>

      </div>
    </Section>
  );
};

export default Community;
