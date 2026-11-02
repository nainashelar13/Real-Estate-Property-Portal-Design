import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutNssEstate from './components/AboutNssEstate';
import StateCards from './components/StateCards';
import CityCardsView from './components/CityCardsView';
import Footer from './components/Footer';
import { getStateById } from './data/regionsData';

function App() {
  const [selectedStateId, setSelectedStateId] = useState(() => {
    // Check initial hash (e.g. #state/maharashtra)
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('state/')) {
      const stateKey = hash.split('/')[1]?.split('?')[0];
      if (getStateById(stateKey)) return stateKey;
    }
    return null;
  });

  const [selectedCityFilter, setSelectedCityFilter] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('');
  const [selectedBhkFilter, setSelectedBhkFilter] = useState('');

  // Listen for browser back / forward button
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('state/')) {
        const stateKey = hash.split('/')[1]?.split('?')[0];
        if (getStateById(stateKey)) {
          setSelectedStateId(stateKey);
          return;
        }
      }
      // If not state hash, clear selection
      if (!hash.startsWith('state/')) {
        setSelectedStateId(null);
        setSelectedCityFilter('');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle selecting a state (opens city cards & properties view)
  const handleSelectState = (stateId, initialCity = '', initialType = '', initialBhk = '') => {
    setSelectedStateId(stateId);
    setSelectedCityFilter(initialCity || '');
    setSelectedTypeFilter(initialType || '');
    setSelectedBhkFilter(initialBhk || '');
    window.location.hash = `state/${stateId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle going back to all states
  const handleBackToStates = () => {
    setSelectedStateId(null);
    setSelectedCityFilter('');
    setSelectedTypeFilter('');
    setSelectedBhkFilter('');
    window.location.hash = 'regions';
    setTimeout(() => {
      const el = document.getElementById('regions');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  // Handle clicking Home or NSS logo
  const handleNavigateHome = () => {
    setSelectedStateId(null);
    setSelectedCityFilter('');
    setSelectedTypeFilter('');
    setSelectedBhkFilter('');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f6f2] flex flex-col justify-between">
      {/* Sabse upar Header */}
      <Header onNavigateHome={handleNavigateHome} />

      {/* Main Page Content */}
      <main className="flex-1">
        {selectedStateId ? (
          /* City Cards & Properties Page for the clicked state */
          <CityCardsView
            key={selectedStateId}
            stateId={selectedStateId}
            initialCity={selectedCityFilter}
            initialType={selectedTypeFilter}
            initialBhk={selectedBhkFilter}
            onBack={handleBackToStates}
          />
        ) : (
          /* Home Page with Hero, About, and State Cards */
          <>
            {/* 1. Hero with Video Background & Search Bar */}
            <Hero onSelectState={handleSelectState} />
            
            {/* 2. About NSS Estate */}
            <div id="about-nss">
              <AboutNssEstate />
            </div>

            {/* 3. Discover By Region - State Cards */}
            <StateCards onSelectState={handleSelectState} />
          </>
        )}
      </main>

      {/* 4. Luxury Brand Footer */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
