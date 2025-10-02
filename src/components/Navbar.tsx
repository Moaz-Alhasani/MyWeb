import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // منع التمرير عند فتح قائمة الموبايل
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-20">
      {/* Navbar container */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo نصي مع تأثير */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide hover:text-blue-400 transition-shadow shadow-md hover:shadow-lg cursor-pointer">
          Moaz
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white">
          <li>
            <a href="#Header" className="hover:text-blue-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-blue-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Icon */}
        <img
          src={assets.menu_icon}
          alt="menu"
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed top-0 left-0 w-full z-30 bg-white shadow-md">
          {/* Close icon */}
          <div className="flex justify-end p-4">
            <img
              src={assets.cross_icon}
              alt="close"
              className="w-6 cursor-pointer"
              onClick={() => setShowMobileMenu(false)}
            />
          </div>
          {/* Mobile Links */}
          <div className="flex flex-col items-center gap-4 pb-4">
            <a
              href="#Header"
              onClick={() => setShowMobileMenu(false)}
              className="text-black text-xl hover:text-gray-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#About"
              onClick={() => setShowMobileMenu(false)}
              className="text-black text-xl hover:text-gray-500 transition-colors"
            >
              About
            </a>
            <a
              href="#Skills"
              onClick={() => setShowMobileMenu(false)}
              className="text-black text-xl hover:text-gray-500 transition-colors"
            >
              Skills
            </a>
            <a
              href="#Contact"
              onClick={() => setShowMobileMenu(false)}
              className="text-black text-xl hover:text-gray-500 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
