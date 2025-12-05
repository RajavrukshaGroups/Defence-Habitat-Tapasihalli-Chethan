import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-slate-400 py-16 border-t border-navy-800 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white rounded-full p-1.5 shadow-lg inline-block">
                <img 
                    src="https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/logo%20(1)-CaK3gJYe.webp" 
                    alt="Defence Habitat" 
                    className="h-16 w-16 object-contain rounded-full"
                    onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/150/0f3460/ffffff?text=DHS";
                    }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xs font-thin tracking-wide leading-none text-white">DEFENCE HABITAT HOUSING  CO-OPERATIVE SOCIETY LTD.</span>
                <span className="text-[0.65rem] tracking-[0.2em] text-gold-400 uppercase font-bold"> ಡಿಫೆನ್ಸ್ ಹ್ಯಾಬಿಟಾಟ್ ಹೌಸಿಂಗ್ ಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ಲಿ.</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 border-l-2 border-gold-400 pl-4">
              A premium residential project committed to providing high-quality living spaces in North Bangalore.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-400 hover:text-navy-900 transition-all transform hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wide border-b border-white/10 pb-2 inline-block">Stay Updated</h4>
            <p className="text-sm mb-4">Subscribe to get the latest updates and brochure.</p>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Your email address" className="bg-navy-800 border border-navy-700 text-white px-4 py-3 w-full outline-none focus:border-gold-400 rounded-sm text-sm transition-colors" />
              <button className="bg-gold-400 text-navy-900 px-4 py-3 font-bold text-sm rounded-sm hover:bg-white transition-colors uppercase tracking-wider">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Defence Habitat. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 opacity-70">Reg. No: HSG-3/64/HHS/53744</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;