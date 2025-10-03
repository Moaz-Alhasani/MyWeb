// Header.tsx - معدل مع z-index مناسب
import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const [text, setText] = useState("");
  const [showServices, setShowServices] = useState(false);
  const [animatedServices, setAnimatedServices] = useState<boolean[]>([]);
  
  const fullText = "Hi, I'm Moaz Alhasani, AI Engineer & Backend Developer";

  const services = [
    {
      icon: "🧠",
      title: "AI Engineer",
      subtitle: "NLP Focus",
      description: "Expertise in model fine-tuning, information retrieval (RAG), embeddings, transformers, and deep learning.",
      technologies: ["Hugging Face", "PyTorch", "TensorFlow", "LangChain"],
      gradient: "from-purple-500/20 to-pink-500/20",
      color: "text-purple-300"
    },
    {
      icon: "🖥️",
      title: "Backend Developer",
      subtitle: "Scalable Systems",
      description: "Building fast, secure, and scalable APIs & microservices with modern technologies.",
      technologies: ["Node.js", "TypeScript", "NestJS", "Django"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      color: "text-cyan-300"
    },
    {
      icon: "☁️",
      title: "AI Deployment",
      subtitle: "Production Ready",
      description: "Putting ML/NLP models into production with cloud computing and scalable infrastructure.",
      technologies: ["Docker", "AWS", "CI/CD", "Microservices"],
      gradient: "from-green-500/20 to-emerald-500/20",
      color: "text-emerald-300"
    }
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowServices(true), 800);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showServices) {
      services.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedServices(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 400);
      });
    }
  }, [showServices]);

  return (
    <div
      id="home" // تم التغيير إلى home للربط مع النافبار
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      {/* طبقة متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/30 to-purple-900/40 z-10"></div>
      
      {/* جسيمات متحركة في الخلفية */}
      <div className="absolute inset-0 z-15">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Navbar - سيكون أعلى من كل شيء */}
      <div className="w-full relative" style={{ zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* المحتوى الرئيسي مع z-index أقل */}
      <div className="relative z-20 w-full max-w-7xl px-6 flex flex-col items-center mt-20">
        
        {/* النص الترحيبي */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-lg animate-pulse-slow"></div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="blinking-cursor">|</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building intelligent systems & scalable backend solutions with cutting-edge technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#Contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-500 hover:to-purple-500 overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#Skills"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105"
            >
              View Skills
            </a>
          </div>
        </div>

        {/* قسم الخدمات */}
        {showServices && (
          <div className="w-full mt-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-2xl">🚀</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  What I Do
                </h2>
                <span className="text-2xl">💼</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`
                    group relative
                    transform transition-all duration-700
                    ${animatedServices[index] 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-10 scale-95'
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div className={`absolute -inset-2 bg-gradient-to-br ${service.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full transform transition-all duration-500 group-hover:scale-105 group-hover:border-white/20">
                    
                    <div className="relative mb-6">
                      <div className="absolute -top-2 -left-2 w-16 h-16 bg-white/10 rounded-2xl rotate-12"></div>
                      <div className="relative text-5xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        {service.icon}
                      </div>
                    </div>

                    <h3 className={`text-2xl font-bold mb-2 ${service.color}`}>
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-4 font-medium">
                      {service.subtitle}
                    </p>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/10 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* سهم التمرير للأسفل */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* الأنيميشن المخصصة */}
      <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 3px;
          height: 1.2em;
          background: linear-gradient(to bottom, #60a5fa, #a855f7);
          animation: blink 1.2s ease-in-out infinite;
          margin-left: 4px;
          border-radius: 1px;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;