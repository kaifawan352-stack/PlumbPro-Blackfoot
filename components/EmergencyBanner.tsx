
import React from 'react';

const EmergencyBanner: React.FC = () => {
  return (
    <section id="emergency" className="bg-primary py-20 px-6">
      <div className="max-w-4xl mx-auto text-center text-white space-y-8">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">Facing a Plumbing Emergency?</h2>
        <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">
          Don't wait for the damage to spread. Our experts are standing by 24 hours a day to help you protect your home.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
          <a href="tel:2085550123" className="bg-white text-primary px-10 py-5 rounded-lg font-black text-xl hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
            Call (208) 555-0123
          </a>
          <a 
            href="https://forms.gle/hNTdqpHQ1ZvMzK856" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary border-2 border-white text-white px-10 py-5 rounded-lg font-black text-xl hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center"
          >
            Book Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
