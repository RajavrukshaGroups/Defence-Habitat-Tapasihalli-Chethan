import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Location from './components/Location';
import Connectivity from './components/Connectivity';
import Amenities from './components/Amenities';
import Pricing from './components/Pricing';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-gold-400 selection:text-navy-900">
      <Navbar />
      <main>
        <Hero />
        <Location />
        <Connectivity />
        <Amenities />
        <Pricing />
        <Community />
        <Contact />
      </main>
      <Footer />
      
      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 w-full md:hidden z-40 flex">
        <a href="tel:+918884735735" className="flex-1 bg-white text-navy-900 py-4 text-center font-bold border-t border-slate-200">
          Call Now
        </a>
        <a href="#contact" className="flex-1 bg-navy-900 text-gold-400 py-4 text-center font-bold">
          Enquire
        </a>
      </div>
    </div>
  );
}

export default App;