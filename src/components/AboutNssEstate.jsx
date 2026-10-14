import React from 'react';
import { FiArrowRight, FiAward, FiShield, FiUsers } from 'react-icons/fi';

const AboutNssEstate = () => {
  return (
    <section id="about" className="bg-[#faf8f5] py-14 sm:py-20 px-4 sm:px-6 lg:px-12 border-b border-[#e8ded3] relative overflow-hidden">
      
      {/* Subtle luxury glow effect in background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-[#c5a880]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ── Left Column: Architectural Photo ── */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#e8ded3] group-hover:border-[#c5a880] transition-all duration-500">
              <img
                src="/images/about-nss-estate.jpg"
                alt="NSS Estate Corporate Headquarters"
                className="w-full h-[420px] sm:h-[500px] lg:h-[560px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f1916]/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md border border-[#c5a880]/40 rounded-xl p-3.5 shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-[#8c6d46] uppercase tracking-wider">Corporate Headquarters</div>
                  <div className="text-sm font-extrabold text-[#1f1916]">NSS Estate Tower</div>
                </div>
                <div className="h-8 w-8 rounded-full bg-[#c5a880] text-[#1f1916] flex items-center justify-center font-bold text-xs">
                  ★
                </div>
              </div>
            </div>

            {/* Decorative accent element behind the image */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#c5a880] rounded-tl-2xl pointer-events-none -z-10" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#c5a880] rounded-br-2xl pointer-events-none -z-10" />
          </div>

          {/* ── Right Column: About Content ── */}
          <div className="lg:col-span-7 lg:pl-4">
            
            {/* Sub-header with terracotta/gold accent line */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#1f1916] uppercase">
                About NSS Estate
              </span>
              <div className="h-[2px] w-20 sm:w-28 bg-[#c5a880]" />
            </div>

            {/* Main Title: Driven by commitment */}
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#1f1916] tracking-tight leading-[1.15] mb-6 uppercase">
              We're Driven By{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9e7d53] via-[#b89563] to-[#8c6d46]">
                Commitment
              </span>
            </h2>

            {/* Paragraph Text 1 */}
            <p className="text-[#52453c] text-sm sm:text-[15px] leading-relaxed mb-4 text-justify sm:text-left font-normal">
              At NSS Estate, every new project is a commitment that we make to our customers and ourselves. A commitment to deliver quality, safety, value and excellence, and deliver it right, the first time and every time. We back this with a dedicated team of the best of talent, scientific architecture, latest technology, and smart innovations.
            </p>

            {/* Paragraph Text 2 */}
            <p className="text-[#52453c] text-sm sm:text-[15px] leading-relaxed mb-7 text-justify sm:text-left font-normal">
              Be it an affordable home, luxury apartment, IT park or commercial complex, our skills and overview of every aspect of the process brings our commitment to fruition. Till date, we have delivered some of the largest infrastructure projects in our country and beyond. Everything we plan, design and construct is driven by commitment, and it is this synergy that helps us deliver as committed.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-[#e8ded3] mb-8">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#f4ede3] border border-[#c5a880]/40 flex items-center justify-center text-[#8c6d46] shrink-0">
                  <FiShield size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1f1916]">Zero Risk</div>
                  <div className="text-[10px] text-[#7d6f63]">100% RERA Verified</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#f4ede3] border border-[#c5a880]/40 flex items-center justify-center text-[#8c6d46] shrink-0">
                  <FiAward size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1f1916]">Excellence</div>
                  <div className="text-[10px] text-[#7d6f63]">Highest Standards</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#f4ede3] border border-[#c5a880]/40 flex items-center justify-center text-[#8c6d46] shrink-0">
                  <FiUsers size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1f1916]">25,000+</div>
                  <div className="text-[10px] text-[#7d6f63]">Happy Families</div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#regions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1f1916] hover:bg-gradient-to-r hover:from-[#b89563] hover:via-[#c5a880] hover:to-[#b89563] text-white hover:text-[#1a1412] text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Explore Properties</span>
                <FiArrowRight size={14} />
              </a>

              <a
                href="tel:1234567890"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#c5a880] text-[#1f1916] hover:bg-[#c5a880]/15 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Connect With An Advisor
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutNssEstate;
