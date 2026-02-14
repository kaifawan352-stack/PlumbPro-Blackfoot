
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 md:px-10 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="text-primary flex items-center">
            <span className="material-symbols-outlined text-4xl">plumbing</span>
          </div>
          <h2 className="text-secondary text-xl font-extrabold tracking-tight">
            PlumbPro <span className="text-primary">Blackfoot</span>
          </h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#services">Services</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#emergency">Emergency Repair</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#about">About Us</a>
        </nav>

        <div className="flex items-center gap-4">
          <a className="hidden sm:flex items-center gap-2 text-primary font-bold" href="tel:2085550123">
            <span className="material-symbols-outlined">call</span>
            (208) 555-0123
          </a>
          <button className="bg-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md active:scale-95">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
