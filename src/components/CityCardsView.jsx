import React, { useState, useMemo, useEffect } from 'react';
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiSearch,
  FiX,
  FiMapPin,
  FiTrendingUp,
  FiHome,
  FiCheckCircle,
  FiPhone,
  FiGrid,
  FiFilter,
  FiCalendar
} from 'react-icons/fi';
import { statesData, getStateById, getAllPropertiesForState } from '../data/regionsData';

const CityCardsView = ({ stateId, initialCity = '', initialType = '', initialBhk = '', onBack }) => {
  // Active main tab: 'cities' or 'properties'
  const [activeTab, setActiveTab] = useState(initialCity ? 'properties' : 'cities');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCityFilter, setSelectedCityFilter] = useState(initialCity || '');
  const [selectedBhkFilter, setSelectedBhkFilter] = useState(initialBhk || '');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState(initialType || '');

  // Modal for individual property / city consultation
  const [selectedItemModal, setSelectedItemModal] = useState(null);
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({ name: '', phone: '', email: '', preferredType: '3 BHK' });

  // Current State Data
  const currentState = useMemo(() => {
    return getStateById(stateId) || statesData[0];
  }, [stateId]);

  // All properties for this state
  const allStateProperties = useMemo(() => {
    return getAllPropertiesForState(currentState.id);
  }, [currentState]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filtered Cities list based on search and selected city filter
  const filteredCities = useMemo(() => {
    if (!currentState || !currentState.cities) return [];
    let list = currentState.cities;
    if (selectedCityFilter) {
      list = list.filter((c) => c.name.toLowerCase() === selectedCityFilter.toLowerCase());
    }
    const query = searchQuery.toLowerCase().trim();
    if (!query) return list;
    return list.filter((city) => {
      return (
        city.name.toLowerCase().includes(query) ||
        city.tag.toLowerCase().includes(query) ||
        city.localities.some((loc) => loc.toLowerCase().includes(query)) ||
        city.highlights.toLowerCase().includes(query)
      );
    });
  }, [currentState, selectedCityFilter, searchQuery]);

  // Filtered Properties list for this state
  const filteredProperties = useMemo(() => {
    let list = allStateProperties;

    if (selectedCityFilter) {
      list = list.filter((p) => p.city.toLowerCase() === selectedCityFilter.toLowerCase());
    }

    if (selectedBhkFilter) {
      list = list.filter((p) => p.bhk === selectedBhkFilter || p.type.includes(selectedBhkFilter));
    }

    if (selectedTypeFilter) {
      list = list.filter((p) => p.propertyType === selectedTypeFilter);
    }

    const query = searchQuery.toLowerCase().trim();
    if (query) {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(query) ||
        p.locality.toLowerCase().includes(query) ||
        p.city.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query)
      );
    }

    return list;
  }, [allStateProperties, selectedCityFilter, selectedBhkFilter, selectedTypeFilter, searchQuery]);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setSelectedItemModal(null);
      setInquiryForm({ name: '', phone: '', email: '', preferredType: '3 BHK' });
    }, 2500);
  };

  const handleCityClick = (cityName) => {
    setSelectedCityFilter(cityName);
    setActiveTab('properties');
  };

  const clearAllFilters = () => {
    setSelectedCityFilter('');
    setSelectedBhkFilter('');
    setSelectedTypeFilter('');
    setSearchQuery('');
  };

  return (
    <div className="bg-[#f8f6f2] min-h-screen">

      {/* ── 1. Full-Width Edge-to-Edge Sleek Rectangle State Hero Banner (Compact Height) ── */}
      <div className="w-full relative overflow-hidden bg-[#1f1916] shadow-md">
        <div className="relative min-h-[250px] sm:min-h-[280px] lg:min-h-[300px] w-full flex flex-col justify-between overflow-hidden">

          {/* Background Image */}
          <img
            src={currentState.image}
            alt={currentState.name}
            className="absolute inset-0 w-full h-full object-cover scale-100"
          />

          {/* Deep Luxury Espresso Gradient Overlays for High Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f1916]/95 via-[#1f1916]/80 to-[#1f1916]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f1916] via-[#1f1916]/30 to-[#1f1916]/70" />

          {/* ── Top Bar inside Banner: Breadcrumb & Back to All States ── */}
          <div className="relative z-10 w-full border-b border-white/10 bg-black/30 backdrop-blur-md py-2 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs font-semibold text-[#ded6ce]">
                <button
                  type="button"
                  onClick={onBack}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <FiHome size={12} className="text-[#c5a880]" />
                  <span>Home</span>
                </button>
                <span className="text-[#c5a880]">/</span>
                <button
                  type="button"
                  onClick={onBack}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  All States
                </button>
                <span className="text-[#c5a880]">/</span>
                <span className="text-white font-bold">{currentState.name}</span>
                {selectedCityFilter && (
                  <>
                    <span className="text-[#c5a880]">/</span>
                    <span className="text-[#c5a880] font-bold">{selectedCityFilter}</span>
                  </>
                )}
              </nav>

              {/* Back Button */}
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 hover:bg-[#c5a880] hover:text-[#1a1412] text-white border border-white/20 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 backdrop-blur-md cursor-pointer group shadow-xs"
              >
                <FiArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to All States</span>
              </button>
            </div>
          </div>

          {/* ── Main Banner Content (Bigger, Bold Luxury Typography) ── */}
          <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 my-auto">
            <div className="max-w-4xl">

              {/* FIRST LINE: Explore Cities in [State] - Prominent Big Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-3 drop-shadow-lg">
                Explore Cities in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5ede2] via-[#c5a880] to-[#b89563]">
                  {currentState.name}
                </span>
              </h1>

              {/* Portfolio Badge - Increased Font Size */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a880]/20 border border-[#c5a880]/40 text-[#f5ebd9] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3.5 backdrop-blur-sm shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
                <span>State Portfolio</span>
                <span className="text-[#c5a880]">•</span>
                <span>{currentState.cities.length} Prime Cities</span>
                <span className="text-[#c5a880]">•</span>
                <span>{allStateProperties.length} Curated Developments</span>
              </div>

              {/* State Highlights Chips - Increased Font Size */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="bg-black/60 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-lg text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm">
                  <FiTrendingUp className="text-[#c5a880]" size={16} />
                  <span>{currentState.totalListings} Active Listings</span>
                </div>
                <div className="bg-black/60 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-lg text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm">
                  <FiMapPin className="text-[#c5a880]" size={16} />
                  <span>{currentState.cities.length} Regional Centers</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── 2. Main Content Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* ── 4. Main View Selector Tabs (Cities vs Properties) ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white p-2 sm:p-3 rounded-2xl border border-[#e8ded3] shadow-xs">

          {/* View Mode Pills */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('cities')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-xs ${activeTab === 'cities'
                  ? 'bg-[#1f1916] text-[#c5a880] shadow-md'
                  : 'bg-[#faf8f5] text-[#5c4f46] hover:bg-[#ede4d7] hover:text-[#1f1916]'
                }`}
            >
              <FiGrid size={14} />
              <span>Explore Cities ({currentState.cities.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('properties')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-xs ${activeTab === 'properties'
                  ? 'bg-[#1f1916] text-[#c5a880] shadow-md'
                  : 'bg-[#faf8f5] text-[#5c4f46] hover:bg-[#ede4d7] hover:text-[#1f1916]'
                }`}
            >
              <FiHome size={14} />
              <span>
                Properties in {currentState.name} ({filteredProperties.length})
              </span>
            </button>
          </div>

          {/* Active Filter Info / Reset */}
          {(selectedCityFilter || selectedBhkFilter || selectedTypeFilter || searchQuery) && (
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#8c6d46] font-bold">
                Filtered: {[selectedCityFilter, selectedBhkFilter, selectedTypeFilter, searchQuery].filter(Boolean).join(' • ')}
              </span>
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-xs bg-[#f4ede3] hover:bg-[#c5a880] text-[#1f1916] font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
              >
                <FiX size={12} />
                <span>Clear All</span>
              </button>
            </div>
          )}

        </div>

        {/* ── 5. Search & Filters Strip ── */}
        <div className="bg-white p-4 rounded-2xl border border-[#e8ded3] shadow-xs mb-8 space-y-3">

          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#c5a880]" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search city, locality, project or villa in ${currentState.name}...`}
                className="w-full bg-[#f8f6f2] border border-[#e2d7c9] focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20 rounded-xl pl-9 pr-8 py-2.5 text-xs font-semibold text-[#1f1916] placeholder-[#9c8e82] outline-none transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
                >
                  <FiX size={14} />
                </button>
              )}
            </div>

            {/* City Quick Pills */}
            <div className="w-full md:w-auto flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c6d46] shrink-0 mr-1 flex items-center gap-1">
                <FiFilter size={12} />
                <span>City:</span>
              </span>
              <button
                type="button"
                onClick={() => setSelectedCityFilter('')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${!selectedCityFilter
                    ? 'bg-[#1f1916] text-[#c5a880]'
                    : 'bg-[#f4ede3] text-[#5c4f46] hover:bg-[#c5a880] hover:text-[#1f1916]'
                  }`}
              >
                All {currentState.name}
              </button>
              {currentState.cities.map((c) => {
                const isSelected = selectedCityFilter.toLowerCase() === c.name.toLowerCase();
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCityFilter(isSelected ? '' : c.name)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${isSelected
                        ? 'bg-[#1f1916] text-[#c5a880]'
                        : 'bg-[#f4ede3] text-[#5c4f46] hover:bg-[#c5a880] hover:text-[#1f1916]'
                      }`}
                  >
                    {c.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sub-Filters: BHK selection */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#f0e8dc]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c6d46] mr-1">
              Configuration:
            </span>
            {['', '2 BHK', '3 BHK', '4 BHK', '5+ BHK / Penthouse'].map((bhk) => {
              const isSelected = selectedBhkFilter === bhk;
              return (
                <button
                  key={bhk || 'all'}
                  type="button"
                  onClick={() => setSelectedBhkFilter(bhk)}
                  className={`text-[11px] px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${isSelected
                      ? 'bg-[#c5a880] text-[#1f1916] font-extrabold shadow-xs'
                      : 'bg-[#faf8f5] text-[#6e6259] hover:bg-[#ede4d7] hover:text-[#1f1916] border border-[#e8ded3]'
                    }`}
                >
                  {bhk || 'All BHKs'}
                </button>
              );
            })}
          </div>

        </div>

        {/* ── 6. VIEW TAB 1: CITY CARDS GRID ── */}
        {activeTab === 'cities' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-black text-[#1f1916]">
                Premier Cities in {currentState.name}
              </h3>
              <span className="text-xs font-semibold text-[#8c6d46]">
                Showing {filteredCities.length} of {currentState.cities.length} Cities
              </span>
            </div>

            {filteredCities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {filteredCities.map((city) => (
                    <div
                      key={city.id}
                      onClick={() => handleCityClick(city.name)}
                      className="group relative bg-white rounded-2xl overflow-hidden border border-[#e8ded3] hover:border-[#c5a880] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#c5a880]/15 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5"
                    >
                        {/* City Architectural Image with City Name */}
                        <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                          <img
                            src={city.image}
                            alt={city.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                          {/* Gradient Overlay for photo contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                            {/* City Name ON the Image (Left Corner) */}
                            <div className="absolute bottom-3 left-3.5 sm:left-4">
                              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-lg group-hover:text-[#c5a880] transition-colors">
                                {city.name}
                              </h3>
                            </div>

                              {/* Properties Count Badge on Top Right */}
                              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[#c5a880] text-[10px] font-bold">
                                {city.propertiesCount}
                              </div>
                            </div>

                                {/* Card Body: ONLY Explore Button (Exact same as State Cards) */}
                                <div className="p-3.5 sm:p-4 bg-white">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleCityClick(city.name);
                                    }}
                                    className="w-full bg-[#1f1916] hover:bg-gradient-to-r hover:from-[#b89563] hover:via-[#c5a880] hover:to-[#b89563] text-white hover:text-[#1a1412] font-extrabold text-xs uppercase tracking-widest py-2.5 px-4 rounded-xl border border-transparent transition-all duration-300 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                                  >
                                    <span>Explore {city.name}</span>
                                    <FiArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                  </button>
                                </div>

                          </div>
                ))}
                        </div>
                        ) : (
                        <div className="bg-white rounded-2xl border border-[#e8ded3] p-12 text-center max-w-md mx-auto shadow-sm my-6">
                          <div className="w-14 h-14 mx-auto rounded-full bg-[#f4ede3] flex items-center justify-center text-[#c5a880] mb-3">
                            <FiSearch size={24} />
                          </div>
                          <h4 className="text-lg font-bold text-[#1f1916] mb-1">No Cities Found</h4>
                          <p className="text-xs text-gray-500 mb-4">
                            We couldn't find any city matching "{searchQuery}".
                          </p>
                          <button
                            type="button"
                            onClick={clearAllFilters}
                            className="bg-[#1f1916] hover:bg-[#c5a880] text-white hover:text-[#1a1412] px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                          >
                            Show All {currentState.name} Cities
                          </button>
                        </div>
            )}
                      </div>
        )}

                      {/* ── 7. VIEW TAB 2: LIVE PROPERTIES IN STATE & CITY ── */}
                      {activeTab === 'properties' && (
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <div>
                              <h3 className="text-base sm:text-lg font-black text-[#1f1916]">
                                {selectedCityFilter
                                  ? `Curated Properties in ${selectedCityFilter}, ${currentState.name}`
                                  : `All Luxury Properties in ${currentState.name}`}
                              </h3>
                              <p className="text-xs text-[#6e6259]">
                                Verified builder residences with direct concierge assistance.
                              </p>
                            </div>

                            <span className="text-xs font-semibold text-[#8c6d46] bg-white px-3 py-1 rounded-lg border border-[#e8ded3]">
                              Showing {filteredProperties.length} Properties
                            </span>
                          </div>

                          {filteredProperties.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {filteredProperties.map((prop) => (
                                <div
                                  key={prop.id}
                                  onClick={() => setSelectedItemModal(prop)}
                                  className="group bg-white rounded-2xl overflow-hidden border border-[#e8ded3] hover:border-[#c5a880] transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-[#c5a880]/20 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5"
                                >
                                  {/* Property Image */}
                                  <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                                    <img
                                      src={prop.image}
                                      alt={prop.name}
                                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                      loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Top Badges */}
                                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                                      <span className="px-2.5 py-1 rounded-full bg-[#1f1916]/80 backdrop-blur-md text-[#c5a880] text-[10px] font-black uppercase tracking-wider border border-[#c5a880]/30">
                                        {prop.bhk}
                                      </span>

                                      <span className="px-2 py-0.5 rounded-md bg-green-900/90 backdrop-blur-sm text-green-200 text-[10px] font-bold uppercase tracking-wider border border-green-500/30">
                                        {prop.status}
                                      </span>
                                    </div>

                                    {/* Bottom Info on Image */}
                                    <div className="absolute bottom-3 left-3.5 right-3.5">
                                      <h4 className="text-xl font-black text-white tracking-tight drop-shadow-md group-hover:text-[#c5a880] transition-colors">
                                        {prop.name}
                                      </h4>
                                      <p className="text-[11px] text-gray-200 font-medium flex items-center gap-1 mt-0.5">
                                        <FiMapPin size={11} className="text-[#c5a880]" />
                                        <span>{prop.locality}, {prop.city}</span>
                                      </p>
                                    </div>
                                  </div>

                                  {/* Property Details Body */}
                                  <div className="p-4 flex-1 flex flex-col justify-between bg-white">

                                    <div className="mb-4">
                                      <div className="text-xs font-semibold text-[#52463e] mb-2">
                                        {prop.type}
                                      </div>

                                      {/* Price & Location Tag */}
                                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#f8f6f2] border border-[#eee6dc]">
                                        <div>
                                          <span className="text-[9px] uppercase tracking-wider text-[#9c8e82] font-bold block">
                                            Investment Price
                                          </span>
                                          <span className="text-sm font-extrabold text-[#1f1916]">
                                            {prop.price}
                                          </span>
                                        </div>

                                        <div className="text-right">
                                          <span className="text-[9px] uppercase tracking-wider text-[#9c8e82] font-bold block">
                                            Type
                                          </span>
                                          <span className="text-xs font-bold text-[#8c6d46]">
                                            {prop.propertyType}
                                          </span>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Action Button */}
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedItemModal(prop);
                                      }}
                                      className="w-full bg-[#1f1916] hover:bg-[#c5a880] text-white hover:text-[#1a1412] font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                                    >
                                      <FiCalendar size={13} />
                                      <span>Book Site Visit &amp; Brochure</span>
                                    </button>

                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="bg-white rounded-2xl border border-[#e8ded3] p-12 text-center max-w-md mx-auto shadow-sm my-6">
                              <div className="w-14 h-14 mx-auto rounded-full bg-[#f4ede3] flex items-center justify-center text-[#c5a880] mb-3">
                                <FiSearch size={24} />
                              </div>
                              <h4 className="text-lg font-bold text-[#1f1916] mb-1">No Properties Found</h4>
                              <p className="text-xs text-gray-500 mb-4">
                                No properties matched your current criteria in {currentState.name}.
                              </p>
                              <button
                                type="button"
                                onClick={clearAllFilters}
                                className="bg-[#1f1916] hover:bg-[#c5a880] text-white hover:text-[#1a1412] px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                              >
                                Clear Filters &amp; View All
                              </button>
                            </div>
                          )}
                        </div>
                      )}

                    </div>

      {/* ── 8. Luxury Property / City Consultation Modal ── */ }
      { selectedItemModal && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
                        <div
                          className="bg-white rounded-3xl overflow-hidden border border-[#c5a880]/40 max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl relative"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Modal Header with Image */}
                          <div className="relative h-48 sm:h-56 w-full shrink-0">
                            <img
                              src={selectedItemModal.image}
                              alt={selectedItemModal.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1916] via-[#1f1916]/60 to-black/30" />

                            {/* Close Button */}
                            <button
                              type="button"
                              onClick={() => setSelectedItemModal(null)}
                              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer border border-white/20"
                            >
                              <FiX size={16} />
                            </button>

                            {/* Title on Banner */}
                            <div className="absolute bottom-4 left-5 right-5">
                              <span className="px-2.5 py-0.5 rounded-full bg-[#c5a880] text-[#1f1916] text-[10px] font-black uppercase tracking-wider mb-1.5 inline-block">
                                {selectedItemModal.bhk || selectedItemModal.tag || 'Luxury Development'}
                              </span>
                              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                                {selectedItemModal.name}
                              </h3>
                              <p className="text-xs text-gray-200 font-medium flex items-center gap-1 mt-0.5">
                                <FiMapPin size={11} className="text-[#c5a880]" />
                                <span>
                                  {selectedItemModal.locality ? `${selectedItemModal.locality}, ${selectedItemModal.city}, ` : ''}
                                  {currentState.name}
                                </span>
                              </p>
                            </div>
                          </div>

                          {/* Modal Scrollable Content */}
                          <div className="p-6 overflow-y-auto space-y-5">

                            {/* Key Specs Strip */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 rounded-xl bg-[#f8f6f2] border border-[#eee6dc]">
                              <div>
                                <span className="text-[9px] uppercase tracking-wider text-[#9c8e82] font-bold block">Investment</span>
                                <span className="text-sm font-black text-[#1f1916]">
                                  {selectedItemModal.price || selectedItemModal.avgPrice || 'Price on Request'}
                                </span>
                              </div>
                              <div>
                                <span className="text-[9px] uppercase tracking-wider text-[#9c8e82] font-bold block">Configuration</span>
                                <span className="text-xs font-bold text-[#8c6d46]">
                                  {selectedItemModal.bhk || selectedItemModal.propertiesCount || 'Signature Residences'}
                                </span>
                              </div>
                              <div className="col-span-2 sm:col-span-1">
                                <span className="text-[9px] uppercase tracking-wider text-[#9c8e82] font-bold block">Status</span>
                                <span className="text-xs font-bold text-green-700">
                                  {selectedItemModal.status || 'Verified Listing'}
                                </span>
                              </div>
                            </div>

                            {/* Instant Inquiry / Site Visit Form */}
                            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#1f1916] to-[#2c2420] text-white border border-[#c5a880]/30">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <h5 className="text-sm font-black text-white">
                                    Book Private Site Visit &amp; Official Brochure
                                  </h5>
                                  <p className="text-[11px] text-gray-300">
                                    Connect directly with NSS Senior Investment Director in {currentState.name}
                                  </p>
                                </div>
                                <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-[#c5a880]/20 border border-[#c5a880]/40 text-[#c5a880] text-[10px] font-bold uppercase">
                                  VIP Concierge
                                </span>
                              </div>

                              {inquirySuccess ? (
                                <div className="p-4 rounded-xl bg-[#c5a880]/20 border border-[#c5a880] text-center text-[#f8f6f2] flex items-center justify-center gap-2">
                                  <FiCheckCircle size={18} className="text-[#c5a880]" />
                                  <span className="text-xs font-bold">
                                    Thank you! Your private consultation request has been confirmed. Our director will call you shortly.
                                  </span>
                                </div>
                              ) : (
                                <form onSubmit={handleInquirySubmit} className="space-y-2.5">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <input
                                      type="text"
                                      required
                                      placeholder="Your Full Name"
                                      value={inquiryForm.name}
                                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                                      className="bg-white/10 border border-white/20 focus:border-[#c5a880] rounded-xl px-3 py-2 text-xs text-white placeholder-gray-400 outline-none"
                                    />
                                    <input
                                      type="tel"
                                      required
                                      placeholder="Phone Number (e.g. 9876543210)"
                                      value={inquiryForm.phone}
                                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                                      className="bg-white/10 border border-white/20 focus:border-[#c5a880] rounded-xl px-3 py-2 text-xs text-white placeholder-gray-400 outline-none"
                                    />
                                  </div>

                                  <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#b89563] via-[#c5a880] to-[#b89563] hover:brightness-110 text-[#1a1412] font-black text-xs uppercase tracking-wider py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                                  >
                                    <FiPhone size={13} />
                                    <span>Request VIP Site Visit for {selectedItemModal.name}</span>
                                  </button>
                                </form>
                              )}
                            </div>

                          </div>

                        </div>
                      </div>
                    )}

                </div>
                );
};

                export default CityCardsView;
