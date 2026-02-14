
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Drain Cleaning',
    description: 'Say goodbye to stubborn clogs and slow drains. Our high-pressure cleaning restores your pipes to like-new condition.',
    icon: 'cleaning_services'
  },
  {
    id: '2',
    title: 'Water Heater Repair',
    description: 'Running out of hot water? We repair and install all major brands of traditional and tankless water heaters.',
    icon: 'hot_tub'
  },
  {
    id: '3',
    title: 'Pipe Replacement',
    description: 'Specializing in repiping and copper pipe installation. We provide long-lasting solutions to keep your home dry and safe.',
    icon: 'hardware'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="services">
      <div className="text-center mb-16">
        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Professional Solutions</h2>
        <h3 className="text-3xl md:text-4xl font-black text-secondary">Our Core Plumbing Services</h3>
        <div className="h-1.5 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white p-8 rounded-xl border border-gray-200 hover:border-primary transition-all group hover:shadow-2xl flex flex-col h-full"
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">{service.icon}</span>
            </div>
            <h4 className="text-xl font-bold mb-3">{service.title}</h4>
            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
              {service.description}
            </p>
            <a 
              href="https://forms.gle/hNTdqpHQ1ZvMzK856" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              Book Now 
              <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
