import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DonateModal from './components/DonateModal';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import ImpactPage from './pages/ImpactPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Sync dark class on root document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenDonate={() => setIsDonateOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Tabbed Views */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <HomePage 
            onOpenDonate={() => setIsDonateOpen(true)} 
            onNavigate={(tab) => setActiveTab(tab)} 
          />
        )}
        {activeTab === 'programs' && <ProgramsPage onOpenDonate={() => setIsDonateOpen(true)} />}
        {activeTab === 'impact' && <ImpactPage />}
        {activeTab === 'about' && <AboutPage />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Donation Modal Container */}
      <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
    </div>
  );
}