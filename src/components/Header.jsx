import React from 'react';
import TopBar from './TopBar';
import { FiSearch, FiPhone, FiUser } from 'react-icons/fi';

const Header = () => {
    return (
        <header className="w-full shadow-lg">
            {/* Upar wali top patti */}
            <TopBar />

            {/* Main Navigation (Lodha Style Luxury Dark Espresso Bar) */}
            <div className="bg-[#1f1916] text-white py-3.5 px-4 md:px-8 flex justify-between items-center border-b border-white/10">

                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <div className="font-extrabold text-2xl tracking-widest text-white flex items-center">
                        <span className="text-[#c5a880] mr-2">NSS</span>ESTATE
                    </div>
                </div>

                {/* Navigation Links - Lodha luxury uppercase tracking */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-xs md:text-sm tracking-widest uppercase text-gray-200">
                    <a href="#" className="text-white border-b-2 border-[#c5a880] pb-1 font-semibold">
                        Home
                    </a>
                    <a href="#" className="hover:text-[#c5a880] transition-colors">
                        Smart Search
                    </a>
                    <a href="#" className="hover:text-[#c5a880] transition-colors">
                        About Us
                    </a>
                    <a href="#" className="hover:text-[#c5a880] transition-colors">
                        Contact Us
                    </a>
                </nav>

                {/* Right Section (Search, Phone, Login, Create Listing) */}
                <div className="hidden lg:flex items-center gap-3">

                    {/* Search Bar */}
                    <div className="flex items-center border border-white/20 rounded-full px-3 py-1.5 bg-white/5 focus-within:border-[#c5a880] focus-within:bg-white/10 transition-all">
                        <FiSearch className="text-gray-300 mr-2" size={15} />
                        <input
                            type="text"
                            placeholder="Search project, builder, locality"
                            className="bg-transparent outline-none text-xs w-48 text-white placeholder-gray-400"
                        />
                        <button className="bg-[#c5a880] hover:bg-[#b5976f] text-[#1f1916] px-3.5 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer">
                            Search
                        </button>
                    </div>

                    {/* Phone Number */}
                    <a href="tel:1234567890" className="flex items-center border border-white/20 rounded-full px-4 py-1.5 text-gray-200 text-xs font-semibold hover:border-[#c5a880] hover:text-white transition-colors">
                        <FiPhone className="mr-2 text-[#c5a880]" size={14} />
                        1234567890
                    </a>

                    {/* User Icon */}
                    <button className="border border-white/20 rounded-full p-2 text-gray-200 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                        <FiUser size={15} />
                    </button>

                    {/* Create Listing Button */}
                    <button className="bg-[#c5a880] hover:bg-[#b5976f] text-[#1f1916] px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md">
                        + Create Listing
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;