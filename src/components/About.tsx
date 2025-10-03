import React, { useEffect, useState, useRef } from "react";
import { assets } from "../assets/assets";

interface Counters {
  nodejs: number;
  nestjs: number;
  ai: number;
  nlp: number;
}

interface TargetValues {
  nodejs: number;
  nestjs: number;
  ai: number;
  nlp: number;
}

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<Counters>({
    nodejs: 0,
    nestjs: 0,
    ai: 0,
    nlp: 0
  });
  const aboutRef = useRef<HTMLDivElement>(null);

  const targetValues: TargetValues = {
    nodejs: 2,
    nestjs: 6,
    ai: 1,
    nlp: 1
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    (Object.keys(targetValues) as Array<keyof Counters>).forEach(key => {
      let currentStep = 0;
      const target = targetValues[key];
      const increment = target / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounters(prev => ({
          ...prev,
          [key]: Math.min(Math.floor(increment * currentStep), target)
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  };

  const stats = [
    {
      value: counters.nodejs,
      suffix: "+",
      label: "Years of Node.js Experience",
      color: "from-green-500 to-emerald-600",
      icon: "⚡",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      value: counters.nestjs,
      suffix: " Months",
      label: "Experience with Nest.js",
      color: "from-red-500 to-pink-600",
      icon: "🔄",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20"
    },
    {
      value: counters.ai,
      suffix: " Year",
      label: "AI & Machine Learning",
      color: "from-blue-500 to-cyan-600",
      icon: "🧠",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      value: counters.nlp,
      suffix: " Year",
      label: "Deep Learning, NLP & LLMs",
      color: "from-purple-500 to-indigo-600",
      icon: "🤖",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20"
    }
  ];

  const technologies = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "Node.js", level: 88 },
    { name: "Nest.js", level: 75 },
    { name: "TensorFlow", level: 70 },
    { name: "PyTorch", level: 65 },
    { name: "NLP", level: 75 }
  ];

  return (
    <div
      ref={aboutRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden"
      id="About"
    >
      {/* خلفية متحركة محسنة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* شبكة خلفية */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-24 py-20">
        {/* العنوان الرئيسي المحسن */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                ABOUT
              </span>
            </h1>
          </div>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Transforming <span className="font-bold text-blue-600 dark:text-blue-400">Ideas</span> into{" "}
            <span className="font-bold text-purple-600 dark:text-purple-400">Intelligent Solutions</span> through{" "}
            <span className="font-bold text-cyan-600 dark:text-cyan-400">Code & AI</span>
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-between gap-20">
          {/* الصورة مع تأثيرات محسنة */}
          <div className={`relative flex-1 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-20 opacity-0 scale-95'
          }`}>
            <div className="relative group perspective-1000">
              {/* تأثيرات متعددة */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* الصورة الرئيسية */}
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-5 group-hover:scale-105">
                <img
                  src={assets.About}
                  alt="Moaz Alhasani - AI Engineer & Backend Developer"
                  className="w-full max-w-2xl rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                />
              </div>
              
              {/* تأثيرات إضافية */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-400/30 rounded-full mix-blend-multiply filter blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-125"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-cyan-400/30 rounded-full mix-blend-multiply filter blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-125"></div>
              
              {/* نقاط عائمة */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce animation-delay-1000"></div>
            </div>

            {/* شهادات المهارات */}
            <div className="mt-12 flex flex-wrap gap-3 justify-center">
              {["🚀 Full-Stack Developer", "🧠 AI Specialist", "⚡ Node.js Expert", "🔧 System Architect", "🤖 NLP Engineer", "☁️ Cloud Native"].map((skill, index) => (
                <span
                  key={skill}
                  className="px-5 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl text-sm font-semibold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:bg-white dark:hover:bg-gray-700 cursor-pointer"
                  style={{
                    animationDelay: `${index * 150 + 800}ms`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* المحتوى النصي والإحصائيات */}
          <div className={`flex-1 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'
          }`}>
            {/* شبكة الإحصائيات المحسنة */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`relative group ${stat.bgColor} backdrop-blur-lg rounded-3xl p-8 border border-white/30 dark:border-gray-600/30 shadow-2xl hover:shadow-3xl transform transition-all duration-700 hover:scale-105 hover:-translate-y-2`}
                  style={{
                    animationDelay: `${index * 200 + 600}ms`
                  }}
                >
                  {/* أيقونة متحركة */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  
                  {/* الرقم مع تأثير */}
                  <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 drop-shadow-lg`}>
                    {stat.value}{stat.suffix}
                  </div>
                  
                  {/* الوصف */}
                  <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                    {stat.label}
                  </p>
                  
                  {/* شريط تقدم متحرك */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${(stat.value / (stat.suffix === '+' ? 3 : 1)) * 100}%` : '0%' 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* الوصف التفصيلي المحسن */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-10 border border-white/30 dark:border-gray-600/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                🎯 My Mission
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-light">
                I bridge the gap between <span className="font-semibold text-blue-600 dark:text-blue-400">cutting-edge AI research</span> and{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">production-ready software</span>. With a deep passion for both{" "}
                <span className="font-semibold">backend architecture</span> and <span className="font-semibold">machine learning</span>, I create 
                solutions that are not just functional, but intelligent and scalable.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 font-light">
                My expertise spans the entire stack - from designing robust <span className="font-semibold text-green-600 dark:text-green-400">RESTful APIs</span> and{" "}
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">microservices</span> to implementing sophisticated{" "}
                <span className="font-semibold text-pink-600 dark:text-pink-400">NLP models</span> and <span className="font-semibold text-orange-600 dark:text-orange-400">deep learning systems</span>.
              </p>

              {/* مهارات تقنية مع أشرطة تقدم */}
              <div className="space-y-4 mt-8">
                <h4 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6">Technical Proficiency</h4>
                {technologies.map((tech, index) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold text-gray-600 dark:text-gray-400">
                      <span>{tech.name}</span>
                      <span>{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${tech.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الأنيميشن المخصصة */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(40px, -60px) scale(1.1) rotate(120deg);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9) rotate(240deg);
          }
          100% {
            transform: translate(0px, 0px) scale(1) rotate(360deg);
          }
        }

        .animate-blob {
          animation: blob 8s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-5 {
          transform: rotateY(5deg);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default About;