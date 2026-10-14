import React from 'react';
// Header component ko import karein
import Header from './components/Header';
import Hero from './components/Hero';
import AboutNssEstate from './components/AboutNssEstate';
import StateCards from './components/StateCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f6f2] flex flex-col justify-between">
      {/* Sabse upar Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero with Video Background & Search Bar */}
        <Hero />
        
        {/* 2. About NSS Estate (Exact video ke niche scroll karne ke baad) */}
        <AboutNssEstate />

        {/* 3. Discover By Region - State Cards */}
        <StateCards />
      </main>

      {/* 4. Luxury Brand Footer */}
      <Footer />
    </div>
  );
}

export default App;