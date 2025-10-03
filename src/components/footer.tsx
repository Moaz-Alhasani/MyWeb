import React from "react";
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Moaz-Alhasani/Moaz-Alhasani",
      label: "GitHub",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-800"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/moaz_alhasani/",
      label: "Instagram",
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-500/10"
    },
    {
      icon: FaEnvelope,
      href: "mailto:moazalhosne9@gmail.com",
      label: "Email",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10"
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0">
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute top-10 left-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* نمط شبكي */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-24 py-16">
        {/* المحتوى الرئيسي */}
        <div className="text-center">
          {/* العنوان */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          {/* الوصف */}
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
          </p>

          {/* أيقونات التواصل مع تصميم دائري */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group relative flex flex-col items-center gap-3 transform transition-all duration-500
                  hover:scale-110 hover:-translate-y-2
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* الخلفية الدائرية */}
                <div className={`
                  relative w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
                  flex items-center justify-center transition-all duration-500 group-hover:border-white/30
                  ${social.bgColor}
                `}>
                  <social.icon className={`
                    text-3xl text-white transition-all duration-500
                    ${social.color}
                  `} />
                  
                  {/* تأثير التوهج */}
                  <div className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  {/* نقطة متحركة */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                </div>

                {/* النص */}
                <span className={`
                  text-sm font-medium text-gray-300 transition-all duration-500
                  ${social.color} group-hover:font-semibold
                `}>
                  {social.label}
                </span>

                {/* خط متحرك */}
                <div className="absolute -bottom-2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-500 group-hover:w-8"></div>
              </a>
            ))}
          </div>

          {/* فاصل زخرفي */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 rounded-full"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-600 rounded-full"></div>
          </div>

          {/* حقوق الملكية مع تأثير */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <span>by Moaz Alhasani</span>
            </div>
            <p className="text-gray-500 text-sm">
              © {currentYear} All rights reserved. Crafted with passion and cutting-edge technology.
            </p>
            
            {/* إحصائيات صغيرة */}
            <div className="flex gap-6 mt-4 text-xs text-gray-500">
              <span>🚀 AI Engineer</span>
              <span>⚡ Backend Developer</span>
              <span>🎯 Problem Solver</span>
            </div>
          </div>
        </div>

        {/* زر العودة للأعلى */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/25 z-50"
        >
          <span className="text-lg">↑</span>
        </button>
      </div>

      {/* الأنيميشن المخصصة */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;