'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import logoMobile from '@/public/logo-mobile.svg';

const navLinks = [
  { label: 'Why us', href: '#' },
  { label: 'How does it work', href: '#' },
  { label: 'Become a partner', href: '#' },
  { label: 'Pricing', href: '#' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="max-w-[1152px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="hidden sm:block">
              <Image src={logo} alt="PowerUp Logo" height={32} />
            </span>
            <span className="sm:hidden">
              <Image src={logoMobile} alt="PowerUp Logo" height={32} />
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-black hover:text-green-600 transition font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-black rounded-full px-4 py-2 text-sm font-medium">
              <span className="text-green-500 mr-1">EN</span>
              <span className="text-white/60">PL</span>
            </div>
            {/* Contact Button */}
            <button className="bg-black text-white rounded-full px-6 py-2 font-medium hover:bg-green-600 transition">
              Contact us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f7f7fa] px-4 pb-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-black hover:text-green-600 transition font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center bg-black rounded-full px-4 py-2 text-sm font-medium">
              <span className="text-green-500 mr-1">EN</span>
              <span className="text-white/60">PL</span>
            </div>
            <button className="bg-black text-white rounded-full px-6 py-2 font-medium hover:bg-green-600 transition">
              Contact us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;