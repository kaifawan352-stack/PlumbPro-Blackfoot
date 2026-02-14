
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <span className="material-symbols-outlined text-4xl">plumbing</span>
            </div>
            <h2 className="text-white text-xl font-extrabold tracking-tight">PlumbPro <span className="text-primary">Blackfoot</span></h2>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-xs">
            The leading plumbing experts in Blackfoot, ID. Dedicated to quality workmanship and 100% customer satisfaction for over 15 years.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined text-sm">social_leaderboard</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 relative after:content-[''] after:block after:w-8 after:h-1 after:bg-primary after:mt-2">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#">Home</a></li>
            <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#services">Our Services</a></li>
            <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#about">About the Company</a></li>
            <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#">Emergency Dispatch</a></li>
            <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 relative after:content-[''] after:block after:w-8 after:h-1 after:bg-primary after:mt-2">Contact Us</h4>
          <ul className="space-y-6 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">location_on</span>
              <span>27 N 550 W, Blackfoot, ID 83221</span>
            </li>
            <li className="flex items-center gap-3 font-black text-white text-lg">
              <span className="material-symbols-outlined text-primary">call</span>
              <span>(208) 555-0123</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span>service@plumbproblackfoot.com</span>
            </li>
          </ul>
        </div>

        <div id="about">
          <h4 className="text-lg font-bold mb-8 relative after:content-[''] after:block after:w-8 after:h-1 after:bg-primary after:mt-2">Our Location</h4>
          <p className="text-sm text-gray-400 mb-6">Visit our office or find our dispatch center near you.</p>
          <a 
            className="inline-flex items-center justify-center w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95 gap-3" 
            href="https://www.google.com/maps/place/Blackfoot,+ID+83221/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">directions</span>
            Get Directions
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
        <p>© 2024 PlumbPro Blackfoot. All rights reserved. Locally owned & operated.</p>
        <div className="flex gap-8">
          <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-white transition-colors" href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
