import React, { useState } from 'react';
import { FiArrowUpRight, FiSearch, FiX } from 'react-icons/fi';

const stateData = [
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    image: '/images/states/maharashtra.jpg',
  },
  {
    id: 'goa',
    name: 'Goa',
    image: '/images/states/goa.jpg',
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    image: '/images/states/gujarat.jpg',
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    image: '/images/states/karnataka.jpg',
  },
];

const StateCards = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStates = stateData.filter((state) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return state.name.toLowerCase().includes(query);
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <section id="regions" className="bg-[#f8f6f2] py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-t border-[#e8ded3] relative overflow-hidden">
      
      {/* Subtle Warm Luxury Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-gradient-to-b from-[#c5a880]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0e8dc] border border-[#d8cabb] text-[#8c6d46] text-[10px] font-bold uppercase tracking-widest mb-2 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse" />
            Discover By Region
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1f1916] tracking-tight leading-tight mb-1.5">
            Prime Real Estate{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b89563] via-[#9e7d53] to-[#8c6d46]">
              Across India
            </span>
          </h2>

          <p className="text-[#6e6259] text-xs sm:text-sm leading-relaxed font-normal max-w-xl mx-auto mb-4">
            Curated residences, coastal estates, and commercial spaces across India's top state corridors.
          </p>

          {/* Compact State Search Bar */}
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center bg-white border border-[#e2d7c9] focus-within:border-[#c5a880] focus-within:ring-2 focus-within:ring-[#c5a880]/25 rounded-xl p-1 shadow-sm transition-all">
              <FiSearch className="text-[#c5a880] ml-2.5 shrink-0" size={15} />
              
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search state (e.g. Maharashtra, Goa, Gujarat, Karnataka)..."
                className="w-full bg-transparent px-2.5 py-1.5 text-xs font-semibold text-[#1f1916] placeholder-[#9c8e82] outline-none"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-gray-400 hover:text-gray-600 p-1 mr-1"
                >
                  <FiX size={14} />
                </button>
              )}

              <button
                type="submit"
                className="bg-[#1f1916] hover:bg-[#c5a880] text-white hover:text-[#1a1412] px-4 py-2 rounded-lg font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs shrink-0 cursor-pointer"
              >
                <span>Search State</span>
              </button>
            </form>
          </div>

        </div>

        {/* ── Minimalist Clean State Cards (Only State Name & Explore Button) ── */}
        {filteredStates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredStates.map((state) => (
              <div
                key={state.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#e8ded3] hover:border-[#c5a880] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#c5a880]/15 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5"
              >
                
                {/* State Architectural Image with State Name */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <img
                    src={state.image}
                    alt={state.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Gradient Overlay for photo contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* State Name ON the Image (Left Corner) */}
                  <div className="absolute bottom-3 left-3.5 sm:left-4">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-lg group-hover:text-[#c5a880] transition-colors">
                      {state.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body: ONLY Explore Button */}
                <div className="p-3.5 sm:p-4 bg-white">
                  <button
                    type="button"
                    className="w-full bg-[#1f1916] hover:bg-gradient-to-r hover:from-[#b89563] hover:via-[#c5a880] hover:to-[#b89563] text-white hover:text-[#1a1412] font-extrabold text-xs uppercase tracking-widest py-2.5 px-4 rounded-xl border border-transparent transition-all duration-300 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Explore {state.name}</span>
                    <FiArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-[#e8ded3] p-8 text-center max-w-sm mx-auto shadow-xs">
            <FiSearch className="mx-auto text-[#c5a880] mb-2" size={28} />
            <h4 className="text-base font-bold text-[#1f1916] mb-1">No States Found</h4>
            <p className="text-xs text-gray-500 mb-3">No results matched "{searchQuery}".</p>
            <button
              type="button"
              onClick={handleClear}
              className="bg-[#1f1916] hover:bg-[#c5a880] text-white hover:text-[#1a1412] px-4 py-1.5 rounded-lg text-xs font-bold transition-all"
            >
              Show All States
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default StateCards;
