"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import logoMobile from "@/public/logo-mobile.svg";
import MenuIcon from "@/components/icons/MenuIcon";

const navLinks = [
  { label: "Why us", href: "#why-us" },
  { label: "How does it work", href: "#how-does-it-work" },
  { label: "Become a partner", href: "#become-a-partner" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-black text-base hover:text-green-600 transition font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center bg-black rounded-full px-4 py-2 text-sm font-medium">
              <span className="text-green-500 mr-1">EN</span>
              <span className="text-white/60">PL</span>
            </div>
            <button className="bg-black text-white rounded-full px-6 py-2 font-medium hover:bg-green-600 transition">
              Contact us
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 text-white bg-black rounded-full p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              Menu <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden absolute top-20 left-0 w-full bg-[#470974] px-4 py-4 transform transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <button className="w-full text-white bg-[#141313] rounded-full text-center px-4 py-2 hover:text-green-600 transition font-medium mb-4">
          Download app
        </button>
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="w-full text-black bg-white rounded-full text-center px-4 py-2 hover:text-green-600 transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <button className="w-full text-black bg-white rounded-full text-center px-4 py-2 hover:text-green-600 transition font-medium">
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
