import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: any;
      };
    };
  }
}

const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [isLoaded, setIsLoaded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { label: "EN", image: "/uk.jpg", code: "en" },
    { label: "PL", image: "/poland.png", code: "pl" },
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

    // Check if Google Translate is loaded
    const checkGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        setIsLoaded(true);
      } else {
        setTimeout(checkGoogleTranslate, 100);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    checkGoogleTranslate();
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (languageCode: string) => {
    const tryTranslate = () => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (select) {
        select.value = languageCode;
        select.dispatchEvent(new Event("change"));
      } else {
        setTimeout(tryTranslate, 100);
      }
    };
  
    tryTranslate(); 
  };

  const selectedLanguage = languages.find(
    (lang) => lang.label === selectedLang
  );

  const handleLanguageSelect = (lang: typeof languages[0]) => {
    setSelectedLang(lang.label);
    setIsOpen(false);
    changeLanguage(lang.code); 
  };

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
              onClick={() => handleLanguageSelect(lang)}
              className="flex items-center space-x-2 w-32 px-2 py-2 hover:bg-gray-100 cursor-pointer notranslate"
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
