
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581244276891-83393aed4307?auto=format&fit=crop&q=80&w=800" 
                alt="Plumbing Team" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary/20 rounded-2xl -z-0"></div>
            
            <div className="absolute bottom-10 left-10 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <div className="text-xl font-black text-secondary">Licensed</div>
                  <div className="text-sm text-gray-500 font-bold">Bonded & Insured</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">About PlumbPro</h2>
              <h3 className="text-3xl md:text-5xl font-black text-secondary leading-tight">Your Local Blackfoot Plumbing Experts Since 2009</h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We started with a single truck and a simple mission: to provide the families of Blackfoot with honest, high-quality plumbing services that don't break the bank. Today, we're proud to be the region's top-rated service provider.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined font-bold">check_circle</span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Local Heritage</h4>
                  <p className="text-sm text-gray-500">Family owned and operated right here in Idaho.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined font-bold">check_circle</span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Upfront Pricing</h4>
                  <p className="text-sm text-gray-500">No hidden fees or surprise charges, ever.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined font-bold">check_circle</span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Expert Team</h4>
                  <p className="text-sm text-gray-500">Master plumbers with decades of experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined font-bold">check_circle</span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Modern Tech</h4>
                  <p className="text-sm text-gray-500">Using the latest leak detection technology.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a href="tel:2085550123" className="inline-flex items-center gap-3 text-white bg-secondary px-8 py-4 rounded-lg font-bold hover:bg-black transition-all shadow-lg active:scale-95">
                Meet the Team
                <span className="material-symbols-outlined">groups</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
