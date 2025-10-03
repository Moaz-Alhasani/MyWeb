// Navbar.tsx - معدل ليناسب أقسامك
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // تحديث القسم النشط بناءً على الأقسام الموجودة لديك
      const sections = ["home", "about", "skills", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#About" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#Contact" }
  ];

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled 
          ? 'bg-black/90 backdrop-blur-xl shadow-2xl py-3 border-b border-white/10' 
          : 'bg-transparent py-6'
        }
      `} style={{ zIndex: 9999 }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform transition-all duration-500 hover:rotate-180 hover:scale-110">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30 animate-pulse"></div>
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Moaz Alhasani
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium transition-all duration-300 transform
                    ${activeSection === item.name.toLowerCase() 
                      ? 'text-white scale-110' 
                      : 'text-gray-300 hover:text-white'
                    }
                    hover:scale-105 nav-hover-effect
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item.name}
                  {activeSection === item.name.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  )}
                </a>
              ))}
              
              {/* CTA Button */}
              <a
                href="#Contact"
                className="group relative px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ zIndex: 10000 }}
            >
              <div className={`
                w-6 h-0.5 bg-white transition-all duration-300 transform
                ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}
              `}></div>
              <div className={`
                w-6 h-0.5 bg-white transition-all duration-300
                ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}
              `}></div>
              <div className={`
                w-6 h-0.5 bg-white transition-all duration-300 transform
                ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}
              `}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden fixed top-0 left-0 right-0 h-screen bg-black/95 backdrop-blur-xl
          transition-all duration-500 overflow-hidden z-40
          ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `} style={{ zIndex: 9998 }}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  text-2xl font-medium transition-all duration-300 transform
                  ${activeSection === item.name.toLowerCase() 
                    ? 'text-white scale-110' 
                    : 'text-gray-300 hover:text-white'
                  }
                  hover:scale-105
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                {activeSection === item.name.toLowerCase() && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full inline-block ml-2 animate-pulse"></div>
                )}
              </a>
            ))}
            
            <a
              href="#contact"
              className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl transition-all duration-300 hover:scale-105 mt-8"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* أنيميشن مخصصة للـ Navbar */}
      <style>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        nav {
          animation: slideInDown 0.8s ease-out;
        }

        /* تأثير تتبع الماوس */
        .nav-hover-effect {
          position: relative;
          overflow: hidden;
        }

        .nav-hover-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.5s;
        }

        .nav-hover-effect:hover::before {
          left: 100%;
        }
      `}</style>
    </>
  );
};

export default Navbar;