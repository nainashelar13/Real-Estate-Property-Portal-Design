import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const TopBar = () => {
    return (
        <div className="bg-gradient-to-r from-[#b89563] via-[#c5a880] to-[#b89563] text-[#1a1412] py-2 px-4 md:px-8 flex justify-between items-center text-xs font-semibold shadow-sm">
            <div className="flex items-center gap-2">
                <span className="bg-[#1a1412] text-[#c5a880] text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold">
                    Official
                </span>
                <span className="tracking-wide">India's No. 1 Property Portal</span>
            </div>
            <div className="flex items-center gap-4">
                {/* Social Icons (Attractive, Larger Circular Badges) */}
                <div className="flex items-center gap-2.5">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow NSS Estate on Instagram"
                        aria-label="Instagram"
                        className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#1a1412] hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] text-[#c5a880] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-115 shadow-sm hover:shadow-md cursor-pointer border border-[#c5a880]/50 hover:border-transparent"
                    >
                        <FaInstagram size={17} />
                    </a>
                    
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Subscribe to NSS Estate on YouTube"
                        aria-label="YouTube"
                        className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#1a1412] hover:bg-[#ff0000] text-[#c5a880] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-115 shadow-sm hover:shadow-md cursor-pointer border border-[#c5a880]/50 hover:border-transparent"
                    >
                        <FaYoutube size={17} />
                    </a>

                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow NSS Estate on Facebook"
                        aria-label="Facebook"
                        className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#1a1412] hover:bg-[#1877f2] text-[#c5a880] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-115 shadow-sm hover:shadow-md cursor-pointer border border-[#c5a880]/50 hover:border-transparent"
                    >
                        <FaFacebookF size={16} />
                    </a>
                </div>

                <button className="bg-[#1a1412] hover:bg-black text-[#c5a880] px-4 py-1.5 rounded-full font-bold text-xs tracking-wide transition-all cursor-pointer shadow-md">
                    + Post Requirement
                </button>
            </div>
        </div>
    );
};

export default TopBar;