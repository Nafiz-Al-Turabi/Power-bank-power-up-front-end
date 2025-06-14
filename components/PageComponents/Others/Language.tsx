import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { label: "EN", image: "/uk.jpg" },
    { label: "PL", image: "/poland.png" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLanguage = languages.find(
    (lang) => lang.label === selectedLang
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-full bg-[#18131b] hover:bg-[#353535] text-white cursor-pointer"
      >
        {selectedLanguage && (
          <Image
            src={selectedLanguage.image}
            alt={selectedLanguage.label}
            width={24}
            height={24}
            className="rounded-full w-5 h-5"
          />
        )}
        <span>{selectedLang}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200">
          {languages.map((lang) => (
            <button
              key={lang.label}
              onClick={() => {
                setSelectedLang(lang.label);
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 w-32 px-2 py-2 hover:bg-gray-100  cursor-pointer"
            >
              <Image
                src={lang.image}
                alt={lang.label}
                width={24}
                height={24}
                className="rounded-full w-6 h-6"
              />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;
