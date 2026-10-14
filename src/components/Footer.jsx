import React from 'react';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiArrowUp, 
  FiShield, 
  FiCheckCircle, 
  FiArrowRight 
} from 'react-icons/fi';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn, 
  FaWhatsapp 
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#140e0c] text-[#ded6ce] border-t border-[#c5a880]/30 relative overflow-hidden">
      
      {/* ── 1. Top Newsletter & Fast Connect Strip ── */}
      <div className="border-b border-[#2a201c] bg-[#1a1412]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Prompt */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241a16] border border-[#c5a880]/40 text-[#c5a880] text-[10px] font-bold uppercase tracking-widest mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse" />
                VIP Advisory Concierge
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Looking for exclusive, off-market luxury residences?
              </h3>
              <p className="text-xs sm:text-sm text-[#a89a8e] mt-1">
                Connect directly with NSS Estate senior investment directors across Maharashtra &amp; Goa.
              </p>
            </div>

            {/* Right Fast Actions */}
            <div className="lg:col-span-6 flex flex-wrap sm:flex-nowrap items-center gap-3 lg:justify-end">
              <a
                href="tel:1234567890"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-full bg-[#c5a880] hover:bg-[#b5976f] text-[#1a1412] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-[#c5a880]/30 cursor-pointer"
              >
                <FiPhone size={14} className="stroke-[2.5]" />
                <span>+91 1234567890</span>
              </a>

              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1e2e1e] hover:bg-[#273d27] border border-[#3b593b] text-[#7ee787] font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                <FaWhatsapp size={15} />
                <span>WhatsApp Direct</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── 2. Main Footer Navigation Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand Info & Address (Col-span 4) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-black tracking-tight text-white">
                <span className="text-[#c5a880] mr-1.5">NSS</span>ESTATE
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#a89a8e] leading-relaxed mb-6 font-normal">
              India's premier luxury property portal delivering verified landmark developments, curated villas, and high-growth commercial assets with total RERA compliance.
            </p>

            {/* Contact details */}
            <div className="space-y-3 text-xs text-[#cfc4b8]">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-[#c5a880] shrink-0 mt-0.5" size={15} />
                <span>NSS Estate Tower, Senapati Bapat Road, Pune, Maharashtra 411016</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-[#c5a880] shrink-0" size={14} />
                <a href="tel:1234567890" className="hover:text-[#c5a880] transition-colors font-medium">
                  +91 1234567890 / 020-4100-2020
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-[#c5a880] shrink-0" size={14} />
                <a href="mailto:info@nssestate.com" className="hover:text-[#c5a880] transition-colors">
                  concierge@nssestate.com
                </a>
              </div>
            </div>

            {/* Social Icons (Attractive, Larger Badges) */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { 
                  icon: <FaInstagram size={18} />, 
                  label: 'Instagram', 
                  href: '#', 
                  hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white hover:border-transparent hover:shadow-[#dd2a7b]/40' 
                },
                { 
                  icon: <FaYoutube size={18} />, 
                  label: 'YouTube', 
                  href: '#', 
                  hoverClass: 'hover:bg-[#ff0000] hover:text-white hover:border-transparent hover:shadow-[#ff0000]/40' 
                },
                { 
                  icon: <FaFacebookF size={17} />, 
                  label: 'Facebook', 
                  href: '#', 
                  hoverClass: 'hover:bg-[#1877f2] hover:text-white hover:border-transparent hover:shadow-[#1877f2]/40' 
                },
                { 
                  icon: <FaLinkedinIn size={17} />, 
                  label: 'LinkedIn', 
                  href: '#', 
                  hoverClass: 'hover:bg-[#0077b5] hover:text-white hover:border-transparent hover:shadow-[#0077b5]/40' 
                },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  aria-label={s.label}
                  title={`Follow NSS Estate on ${s.label}`}
                  className={`w-10 h-10 rounded-full bg-[#1e1613] border border-[#3d2f28] text-[#c5a880] flex items-center justify-center transition-all duration-300 transform hover:scale-115 shadow-md hover:shadow-lg cursor-pointer ${s.hoverClass}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Prime Regions (Col-span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              Prime Regions
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a89a8e]">
              {[
                { name: 'Maharashtra Properties', tag: 'Hot' },
                { name: 'Pune & Baner Hubs', tag: '' },
                { name: 'Kolhapur & Sangli Residences', tag: '' },
                { name: 'Goa Luxury Coastal Villas', tag: 'Luxury' },
                { name: 'Gujarat Commercial & Plots', tag: '' },
                { name: 'Karnataka IT Corridors', tag: '' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#regions" className="hover:text-[#c5a880] transition-colors inline-flex items-center gap-1.5 group">
                    <FiArrowRight size={10} className="text-[#c5a880] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{item.name}</span>
                    {item.tag && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-[#c5a880]/20 text-[#c5a880] border border-[#c5a880]/30 uppercase">
                        {item.tag}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Portfolio & Types (Col-span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              Portfolio &amp; Asset Types
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a89a8e]">
              {[
                'Ultra-Luxury Penthouses',
                'Signature Independent Villas',
                'Waterfront & Hilltop Estates',
                'Grade-A Corporate IT Spaces',
                'High Footfall Retail Showrooms',
                'RERA Sanctioned NA Plots',
              ].map((name, idx) => (
                <li key={idx}>
                  <a href="#home" className="hover:text-[#c5a880] transition-colors inline-flex items-center gap-1.5 group">
                    <FiArrowRight size={10} className="text-[#c5a880] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Trust & Quick Links (Col-span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a89a8e]">
              {[
                { name: 'About NSS Estate', href: '#about' },
                { name: 'Verified Builders', href: '#regions' },
                { name: 'Post Requirement', href: '#' },
                { name: 'Create Listing', href: '#' },
                { name: 'Customer Reviews', href: '#' },
                { name: 'Contact Concierge', href: '#about' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-[#c5a880] transition-colors inline-flex items-center gap-1.5 group">
                    <FiArrowRight size={10} className="text-[#c5a880] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── 3. Trust & RERA Assurance Banner ── */}
        <div className="mt-12 pt-8 border-t border-[#2a201c] grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 bg-[#1c1513] border border-[#2e221d] rounded-xl p-3.5">
            <FiShield className="text-[#c5a880] shrink-0" size={20} />
            <div>
              <div className="text-xs font-bold text-white">100% RERA Verified</div>
              <div className="text-[10px] text-[#9c8e82]">Direct builder listings only</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#1c1513] border border-[#2e221d] rounded-xl p-3.5">
            <FiCheckCircle className="text-[#c5a880] shrink-0" size={20} />
            <div>
              <div className="text-xs font-bold text-white">Zero Brokerage Guarantee</div>
              <div className="text-[10px] text-[#9c8e82]">Transparent advisory assistance</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#1c1513] border border-[#2e221d] rounded-xl p-3.5">
            <div className="w-5 h-5 rounded-full bg-[#c5a880] text-[#140e0c] font-black text-[10px] flex items-center justify-center shrink-0">
              ₹
            </div>
            <div>
              <div className="text-xs font-bold text-white">Best Value Pricing</div>
              <div className="text-[10px] text-[#9c8e82]">Direct pre-launch &amp; VIP pricing</div>
            </div>
          </div>
        </div>

      </div>

      {/* ── 4. Legal Disclaimer (Standard for Lodha / Godrej / Luxury Portals) ── */}
      <div className="border-t border-[#221815] bg-[#100b09] py-5 px-4 sm:px-6 lg:px-12 text-[11px] text-[#827468] leading-relaxed">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="max-w-4xl">
            <strong className="text-[#a89a8e]">Disclaimer:</strong> NSS Estate is India's premier property discovery platform. All project renders, floor plans, pricing, and amenities displayed are provided by respective developers and subject to change under MahaRERA / RERA norms. Prospective purchasers are advised to verify details independently prior to any commercial decision.
          </p>
          <div className="text-nowrap text-[#a89a8e] font-semibold">
            MahaRERA Reg. No: <span className="text-[#c5a880]">A52100038491</span>
          </div>
        </div>
      </div>

      {/* ── 5. Bottom Copyright & Back to Top ── */}
      <div className="border-t border-[#1a1210] bg-[#0c0807] py-4 px-4 sm:px-6 lg:px-12 text-xs text-[#827468]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center sm:text-left">
            <span>© 2026 NSS Estate Ltd. All Rights Reserved.</span>
            <span className="hidden sm:inline text-[#3a2f2a]">|</span>
            <a href="#" className="hover:text-[#c5a880] transition-colors">Privacy Policy</a>
            <span className="text-[#3a2f2a]">|</span>
            <a href="#" className="hover:text-[#c5a880] transition-colors">Terms &amp; Conditions</a>
            <span className="text-[#3a2f2a]">|</span>
            <a href="#" className="hover:text-[#c5a880] transition-colors">Sitemap</a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1e1613] hover:bg-[#c5a880] text-[#cfc4b8] hover:text-[#140e0c] border border-[#352720] hover:border-[#c5a880] transition-all duration-300 font-semibold cursor-pointer text-[11px]"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <FiArrowUp size={12} />
          </button>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
