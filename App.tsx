
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import EmergencyBanner from './components/EmergencyBanner';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <Testimonials />
        <EmergencyBanner />
      </main>
      <Footer />
      <AiAssistant />
      
      {/* Floating Call Button for Mobile */}
      <div className="sm:hidden fixed bottom-6 left-6 z-[60]">
        <a 
          href="tel:2085550123" 
          className="bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 border-4 border-white"
        >
          <span className="material-symbols-outlined text-3xl">call</span>
        </a>
      </div>
    </div>
  );
};

export default App;
