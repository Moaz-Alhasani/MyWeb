import React from "react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20 flex flex-col items-center gap-6">
      {/* عنوان Footer */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Connect with Me</h2>

      {/* أيقونات التواصل */}
      <div className="flex gap-8">
        <a
          href="https://github.com/Moaz-Alhasani/Moaz-Alhasani"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 transform transition-transform duration-300 hover:-translate-y-2"
        >
          <FaGithub className="text-3xl md:text-4xl hover:text-gray-400 transition-colors" />
          <span className="text-sm md:text-base hover:text-gray-400">GitHub</span>
        </a>

        <a
          href="https://www.instagram.com/moaz_alhasani/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 transform transition-transform duration-300 hover:-translate-y-2"
        >
          <FaInstagram className="text-3xl md:text-4xl hover:text-pink-500 transition-colors" />
          <span className="text-sm md:text-base hover:text-pink-500">Instagram</span>
        </a>

        <a
          href="moazalhosne9@gmail.com"
          className="flex flex-col items-center gap-1 transform transition-transform duration-300 hover:-translate-y-2"
        >
          <FaEnvelope className="text-3xl md:text-4xl hover:text-blue-400 transition-colors" />
          <span className="text-sm md:text-base hover:text-blue-400">Email</span>
        </a>
      </div>

      {/* حقوق الملكية */}
      <p className="text-gray-500 text-sm md:text-base mt-6">
        © {new Date().getFullYear()} Moaz Alhosne. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
