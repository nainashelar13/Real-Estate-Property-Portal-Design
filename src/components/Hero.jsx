import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiCheck } from 'react-icons/fi';

// Pill / Airbnb Segment Component with Luxury Theme
const PillSegment = ({ label, value, placeholder, options, onChange, isOpen, onToggle, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div className="relative flex-1" ref={ref}>
      <button
        type="button"
        onClick={onToggle}
        className={`w-full text-left px-3 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all cursor-pointer ${
          isOpen ? 'bg-[#ede2d2] ring-1 ring-[#c5a880] shadow-xs' : 'hover:bg-[#f3ede4]'
        }`}
      >
        <span className="text-[10px] font-extrabold text-[#8c6d46] uppercase tracking-wider block leading-tight">
          {label}
        </span>
        <span className={`text-xs block truncate mt-0.5 ${value ? 'text-[#1f1916] font-bold' : 'text-[#9e8f82] font-medium'}`}>
          {value || placeholder}
        </span>
      </button>

      {/* Floating Menu Popup (Constrained strictly to the field's space) */}
      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 right-0 w-full bg-white border border-[#c5a880]/50 rounded-xl shadow-xl py-1.5 z-50 max-h-60 overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
          {placeholder && (
            <div
              onClick={() => {
                onChange('');
                onClose();
              }}
              className={`px-3 sm:px-3.5 py-2 text-xs cursor-pointer flex items-center justify-between transition-colors ${
                !value ? 'bg-[#f5ede2] text-[#1f1916] font-bold' : 'text-[#8c6d46] hover:bg-[#faf7f2]'
              }`}
            >
              <span className="truncate">{placeholder}</span>
              {!value && <FiCheck size={13} className="text-[#b89563] stroke-[2.5] shrink-0 ml-1.5" />}
            </div>
          )}

          {options.map((opt) => {
            const isSelected = value === opt;
            return (
              <div
                key={opt}
                onClick={() => {
                  onChange(opt);
                  onClose();
                }}
                className={`px-3 sm:px-3.5 py-2 text-xs cursor-pointer flex items-center justify-between transition-colors ${
                  isSelected
                    ? 'bg-[#f5ede2] text-[#1f1916] font-bold'
                    : 'text-[#3d3129] hover:bg-[#faf6f0] hover:text-[#1f1916]'
                }`}
              >
                <span className="truncate" title={opt}>{opt}</span>
                {isSelected && <FiCheck size={13} className="text-[#b89563] stroke-[2.5] shrink-0 ml-1.5" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [configuration, setConfiguration] = useState('');

  // Dropdown open states
  const [openDropdown, setOpenDropdown] = useState(null);

  const states = ['Maharashtra', 'Goa', 'Gujarat', 'Karnataka'];
  const cities = ['Pune', 'Kolhapur', 'Nashik', 'Nagpur', 'Sangli', 'Satara', 'Aurangabad'];
  const propertyTypes = ['Apartment / Flat', 'Villa / Row House', 'Independent House', 'Plot / Land', 'Commercial Property'];
  const configurations = ['1 RK / 1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK / Penthouse'];
  
  const popularTags = [
    'Prime Location',
    'Spacious Homes',
    'IT Hub Connectivity',
    'High Footfall',
    'Modern Lifestyle',
    'Commercial Property',
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <section className="relative min-h-[480px] lg:min-h-[530px] flex items-center justify-center overflow-hidden">
      
      {/* ── 1. Background Video ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src={`${import.meta.env.BASE_URL}hero-video.mp4`} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* ── 2. Luxury Espresso Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1f1916]/85 via-[#1a1412]/60 to-[#1f1916]/90 backdrop-blur-[0.5px]" />

      {/* ── 3. Foreground Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">

        {/* Badge: Champagne Gold */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1f1916]/90 border border-[#c5a880]/50 text-[#c5a880] text-[10px] sm:text-xs font-semibold mb-3 shadow-lg backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse" />
          <span className="tracking-wider uppercase font-bold">India's No. 1 Real Estate Portal</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2 drop-shadow-md">
          Find Your Perfect{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eadecc] via-[#c5a880] to-[#b89563] drop-shadow-lg">
            Dream Home
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#ded6ce] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-6 font-normal drop-shadow">
          Explore 2,500+ verified properties across Kolhapur, Sangli, Pune &amp; more. Connect directly with top builders — zero brokerage.
        </p>

        {/* ── 4. Luxury Pill / Airbnb Single Pill Row Card (Theme-Matched Colors) ── */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-5 shadow-2xl max-w-4xl mx-auto border border-[#c5a880]/40 text-left shadow-[0_20px_50px_rgba(26,20,18,0.25)]">
          
          {/* The Single Pill Row */}
          <div className="bg-[#faf8f5] rounded-full border border-[#e5dcd1] hover:border-[#c5a880] shadow-sm hover:shadow-md transition-all flex items-center p-1 sm:p-1.5 pl-2 sm:pl-3 pr-2 divide-x divide-[#e8ded3]">
            
            {/* STATE */}
            <PillSegment
              label="STATE"
              value={selectedState}
              placeholder="Where?"
              options={states}
              onChange={setSelectedState}
              isOpen={openDropdown === 'state'}
              onToggle={() => toggleDropdown('state')}
              onClose={closeDropdown}
            />

            {/* CITY */}
            <PillSegment
              label="CITY"
              value={selectedCity}
              placeholder="Any City"
              options={cities}
              onChange={setSelectedCity}
              isOpen={openDropdown === 'city'}
              onToggle={() => toggleDropdown('city')}
              onClose={closeDropdown}
            />

            {/* TYPE */}
            <PillSegment
              label="TYPE"
              value={propertyType}
              placeholder="Any Type"
              options={propertyTypes}
              onChange={setPropertyType}
              isOpen={openDropdown === 'type'}
              onToggle={() => toggleDropdown('type')}
              onClose={closeDropdown}
            />

            {/* BHK */}
            <PillSegment
              label="BHK"
              value={configuration}
              placeholder="Any BHK"
              options={configurations}
              onChange={setConfiguration}
              isOpen={openDropdown === 'config'}
              onToggle={() => toggleDropdown('config')}
              onClose={closeDropdown}
            />

            {/* Circular Search Action Button (Signature Champagne Gold) */}
            <div className="pl-2 sm:pl-3 pr-1 shrink-0">
              <button
                type="button"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#c5a880] hover:bg-[#b5976f] text-[#1f1916] flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-[#c5a880]/40 transition-all cursor-pointer transform hover:scale-105 active:scale-95"
                title="Search Properties"
              >
                <FiSearch size={19} className="stroke-[2.8] text-[#1f1916]" />
              </button>
            </div>

          </div>

          {/* Popular Filter Tags Row (Warm Gold & Espresso Theme) */}
          <div className="flex flex-wrap items-center gap-2 mt-4 px-2">
            <span className="text-[11px] font-extrabold text-[#8c6d46] uppercase tracking-wider mr-1">Popular:</span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className="text-xs px-3.5 py-1.5 rounded-full bg-[#f4ede3] hover:bg-[#c5a880] text-[#3d3129] hover:text-[#1a1412] border border-[#e2d6c6] hover:border-[#c5a880] font-semibold transition-all cursor-pointer shadow-xs hover:shadow-sm"
              >
                {tag}
              </button>
            ))}
          </div>

        </div>

        {/* ── 5. Luxury Metrics / Stats Bar ── */}
        <div className="mt-7 grid grid-cols-3 max-w-lg mx-auto divide-x divide-[#c5a880]/30 text-white">
          <div className="px-3">
            <div className="text-xl sm:text-2xl font-extrabold text-white">45+</div>
            <div className="text-[10px] text-[#cfc5ba] uppercase tracking-widest mt-0.5 font-medium">Verified Builders</div>
          </div>
          <div className="px-3">
            <div className="text-xl sm:text-2xl font-extrabold text-[#c5a880]">14+</div>
            <div className="text-[10px] text-[#cfc5ba] uppercase tracking-widest mt-0.5 font-medium">Cities Covered</div>
          </div>
          <div className="px-3">
            <div className="text-xl sm:text-2xl font-extrabold text-white">2,500+</div>
            <div className="text-[10px] text-[#cfc5ba] uppercase tracking-widest mt-0.5 font-medium">Live Properties</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
