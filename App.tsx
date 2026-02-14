
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import EmergencyBanner from './components/EmergencyBanner';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'privacy'>('home');

  // Handle back button or hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy') {
        setCurrentView('privacy');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  const navigateToPrivacy = () => {
    window.location.hash = 'privacy';
    setCurrentView('privacy');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header onLogoClick={navigateToHome} />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero />
            <Stats />
            <Services />
            <About />
            <Testimonials />
            <EmergencyBanner />
          </>
        ) : (
          <PrivacyPolicy onBack={navigateToHome} />
        )}
      </main>

      <Footer onPrivacyClick={navigateToPrivacy} />
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
