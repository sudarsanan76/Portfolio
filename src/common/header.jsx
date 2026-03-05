import React, { useState } from "react";
import {analytics} from "../firebase";
import { logEvent } from "firebase/analytics";
const Header = () => {
  // State to handle mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  // Function to handle the click event
  const handleButtonClick = (buttonName) => {
    console.log(`Logging click for: ${buttonName}`);
    
    // Log the event to Firebase
    logEvent(analytics, 'button_click', {
      button_name: buttonName,
      page_location: window.location.pathname,
    });
  };
  return (
    <nav className="text-black sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-20 bg-grey-500">
          {/* LEFT SECTION: Name and Nav Links */}
          <div className="flex items-center justify-between w-full h-20 font-sans">
            {/* Name / Logo - Pushed to the far Left */}
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight cursor-pointer hover:text-blue-400 transition-colors">
              Sudarsanan K
            </h1>

            {/* Desktop Nav Fields - Pushed to the far Right */}
            <div className="hidden md:flex items-center space-x-8 font-medium">
              <a
                href="#about"
                onClick={()=>{handleButtonClick("About")}}
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={()=>{handleButtonClick("Skills")}}
                className="hover:text-blue-400 transition-colors"
              >
                Skills
              </a>
              
              <a
                href="#experience"
                onClick={()=>{handleButtonClick("Experience")}}
                className="hover:text-blue-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={()=>{handleButtonClick("Contact")}}
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* MOBILE MENU BUTTON (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV MENU - Only shows when toggled */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 border-t border-slate-200 shadow-2xl sticky top-20 left-0 w-full z-50">
          <a
            href="#about"
            className="block px-3 py-2 rounded-md hover:bg-slate-700"
          >
            About
          </a>
          <a
            href="#experience"
            className="block px-3 py-2 rounded-md hover:bg-slate-700"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="block px-3 py-2 rounded-md hover:bg-slate-700"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md hover:bg-slate-700"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
