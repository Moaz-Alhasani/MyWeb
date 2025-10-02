import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Moaz Alhasani, AI Engineer & Backend Developer (Node.js , Nest.js)";

  // كتابة حرف حرف
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100); // سرعة الكتابة
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="Header"
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      {/* طبقة شفافة */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* النص والزر */}
      <div className="relative z-20 px-4 md:px-20 lg:px-32 text-white flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-6">
          {text}
          <span className="blinking-cursor">|</span>
        </h2>

        {/* زر Contact */}
        <a
          href="#contact"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg text-base sm:text-lg hover:bg-blue-600 transition"
        >
          Contact Me
        </a>
      </div>

      {/* أنيميشن المؤشر */}
      <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 1px;
          background-color: white;
          animation: blink 1s step-start infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Header;
