
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Drain Cleaning' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Request submitted for ${form.name}. We will contact you at ${form.phone} shortly!`);
  };

  return (
    <section className="relative w-full min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.7), rgba(16, 22, 34, 0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCRo27J9v-IDpNLskls7LaOTTjewg2m-E79wmF3CDLFaaRn4rH6LzAp7E6fwuJI8FEVGfwMY6Dd0SgVGv062aCRN4YBlb0z8xg2fyTp1cAwokSA13j2ngDuOUxdTYbbUqYVFp2O9moXRKxvudz2Kt7S_1JWs7QtnQ9kmnXvJIMEKfOCj2KpR9LhMJHy264spKlXKVRymbzsHSob77JPtY-7hpbbtstGlHWKCOWlzzzbExZuLiT9Xd4zkc8NfdIlT8K9343hHv3VhVv')` 
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center gap-12 py-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            24/7 Emergency Service Available
          </div>
          
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Blackfoot's Most Trusted Plumbers
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl font-medium">
            Serving the Blackfoot community with fast, reliable, and affordable plumbing solutions. From leaky faucets to emergency bursts, we're at your door in 60 minutes or less.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-primary text-white h-14 px-8 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-95">
              <span className="material-symbols-outlined">calendar_today</span>
              Schedule Online
            </button>
            <a href="tel:2085550123" className="bg-white text-secondary h-14 px-8 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all active:scale-95 shadow-lg">
              <span className="material-symbols-outlined">call</span>
              Call (208) 555-0123
            </a>
          </div>
        </div>

        {/* Lead Gen Form */}
        <div className="flex-1 w-full max-w-md bg-white rounded-xl p-8 shadow-2xl hidden lg:block border border-gray-100">
          <h3 className="text-2xl font-bold text-secondary mb-2">Get a Free Estimate</h3>
          <p className="text-gray-500 mb-6">Enter your details and we'll call you back instantly.</p>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Full Name</label>
              <input 
                className="w-full border-gray-200 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" 
                placeholder="John Doe" 
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Phone Number</label>
              <input 
                className="w-full border-gray-200 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" 
                placeholder="(208) 000-0000" 
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Service Type</label>
              <select 
                className="w-full border-gray-200 rounded-lg focus:ring-primary focus:border-primary px-4 py-3"
                value={form.service}
                onChange={(e) => setForm({...form, service: e.target.value})}
              >
                <option>Drain Cleaning</option>
                <option>Water Heater Repair</option>
                <option>Pipe Replacement</option>
                <option>Sewer Line</option>
                <option>Other</option>
              </select>
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md mt-2">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
