import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo نصي مع تأثيرات */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide hover:text-blue-400 transition-shadow shadow-md hover:shadow-lg cursor-pointer">
          Moaz
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white">
          <li>
            <a href="#Header" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" className="hover:text-blue-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-blue-400">
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
        <div className="md:hidden fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-6 z-30 bg-black/50 backdrop-blur-sm">
          <img
            src={assets.cross_icon}
            alt="close"
            className="absolute top-4 left-4 w-6 cursor-pointer invert"
            onClick={() => setShowMobileMenu(false)}
          />
          <a
            href="#Header"
            onClick={() => setShowMobileMenu(false)}
            className="text-white text-xl hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => setShowMobileMenu(false)}
            className="text-white text-xl hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#Projects"
            onClick={() => setShowMobileMenu(false)}
            className="text-white text-xl hover:text-gray-300"
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            onClick={() => setShowMobileMenu(false)}
            className="text-white text-xl hover:text-gray-300"
          >
            Testimonials
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
