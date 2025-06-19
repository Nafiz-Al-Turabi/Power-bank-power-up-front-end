"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import logoMobile from "@/public/logo-mobile.svg";
import MenuIcon from "@/components/icons/MenuIcon";
import Language from "@/components/PageComponents/Others/Language";

const navLinks = [
  { label: "", href: "#home" },
  { label: "Why us", href: "#why-us" },
  { label: "How does it work", href: "#how-does-it-work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Become a partner", href: "#become-a-partner" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100; 

      setIsScrolled(window.scrollY > 20);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-[1120px] mx-auto px-4 2xl:px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="hidden sm:block">
              <Image src={logo} alt="PowerUp Logo" height={24} />
            </a>
            <a href="#" className="sm:hidden">
              <Image src={logoMobile} alt="PowerUp Logo" height={24} />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-8">
            {navLinks.map((link) => (
              link.label && (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-black text-base transition font-medium ${
                    activeSection === link.href.substring(1)
                      ? "text-green-600"
                      : "hover:text-green-600"
                  }`}
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Language />
            <button className="bg-[#141313] text-white rounded-full px-6 py-2 font-medium hover:bg-[#353535] transition cursor-pointer">
              Contact us
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <div>
              <Language />
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 text-white bg-[#18131b] rounded-full p-2 focus:outline-none"
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
            link.label && (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`w-full text-black hover:bg-[#EAEAEA] bg-white rounded-full text-center px-4 py-2 transition font-medium ${
                  activeSection === link.href.substring(1)
                    ? "text-green-600 font-semibold"
                    : "hover:text-green-600"
                }`}
              >
                {link.label}
              </a>
            )
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
