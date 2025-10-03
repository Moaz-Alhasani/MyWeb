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
    // ✅ إذا شاشة موبايل → إظهار مباشر بدون أنيميشن
    if (window.innerWidth < 768) {
      setIsVisible(true);
      setCounters(targetValues); // إظهار القيم مباشرة
      return;
    }

    // ✅ للـ Desktop → نستخدم IntersectionObserver والعداد التدريجي
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
      {/* خلفية متحركة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-24 py-20">
        {/* العنوان */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            ABOUT
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Transforming <span className="font-bold text-blue-600 dark:text-blue-400">Ideas</span> into{" "}
            <span className="font-bold text-purple-600 dark:text-purple-400">Intelligent Solutions</span> through{" "}
            <span className="font-bold text-cyan-600 dark:text-cyan-400">Code & AI</span>
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-between gap-20">
          {/* الصورة */}
          <div className={`relative flex-1 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-20 opacity-0 scale-95'
          }`}>
            <img
              src={assets.About}
              alt="Moaz Alhasani - AI Engineer & Backend Developer"
              className="w-full max-w-2xl rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm"
            />
          </div>

          {/* المحتوى */}
          <div className={`flex-1 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {stats.map(stat => (
                <div
                  key={stat.label}
                  className={`relative ${stat.bgColor} rounded-3xl p-8 shadow-2xl`}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">🎯 My Mission</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-light">
                I bridge the gap between <span className="font-semibold text-blue-600">cutting-edge AI research</span> and{" "}
                <span className="font-semibold text-purple-600">production-ready software</span>.
              </p>

              <div className="space-y-4 mt-8">
                <h4 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6">Technical Proficiency</h4>
                {technologies.map((tech, index) => (
                  <div key={tech.name}>
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

      {/* أنيميشن الخلفية */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(40px, -60px) scale(1.1) rotate(120deg); }
          66% { transform: translate(-30px, 30px) scale(0.9) rotate(240deg); }
          100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}

export default About;
