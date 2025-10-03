import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

interface Skill {
  name: string;
  image: string;
  description: string;
  level: number;
  category: "ai" | "language" | "backend" | "frontend";
}

// تعديل ترتيب المهارات - AI أولاً ثم Language
const skillsData: Skill[] = [
  { 
    name: "Machine Learning", 
    image: assets.ml_icon, 
    description: "Implementing and deploying ML models for real-world applications", 
    level: 80,
    category: "ai"
  },
  { 
    name: "Large Language Models", 
    image: assets.llm_icon, 
    description: "Fine-tuning and applying LLMs in production environments", 
    level: 75,
    category: "ai"
  },
  { 
    name: "Python", 
    image: assets.py_icon, 
    description: "Data science, ML libraries & AI development", 
    level: 85,
    category: "language"
  },
  { 
    name: "TypeScript", 
    image: assets.ts_icon, 
    description: "Type-safe full-stack development for robust applications", 
    level: 80,
    category: "language"
  },
  { 
    name: "Node.js", 
    image: assets.node_icon, 
    description: "Building scalable backend systems and RESTful APIs", 
    level: 85,
    category: "backend"
  },
  { 
    name: "Nest.js", 
    image: assets.nest_icon, 
    description: "Developing enterprise-level applications with modern frameworks", 
    level: 70,
    category: "backend"
  },
  { 
    name: "React.js", 
    image: assets.react_icon, 
    description: "Building modern, responsive user interfaces", 
    level: 65,
    category: "frontend"
  },
];

// الألوان الأصلية مع تغيير الترتيب فقط
const categoryColors = {
  ai: "from-purple-500 to-pink-500", // AI يأخذ لون Frontend السابق
  language: "from-orange-500 to-red-500", // Language يبقى كما هو
  backend: "from-blue-500 to-cyan-500", // Backend يبقى كما هو
  frontend: "from-green-500 to-emerald-500" // Frontend يأخذ لون AI السابق
};

const categoryIcons = {
  ai: "🧠",
  language: "📝",
  backend: "⚙️",
  frontend: "🎨"
};

// أسماء تصنيفات محسنة
const categoryNames = {
  ai: "Artificial Intelligence",
  language: "Programming Languages",
  backend: "Backend Development",
  frontend: "Frontend Development"
};

function SkillTree() {
  const [animatedSkills, setAnimatedSkills] = useState<boolean[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      skillsData.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 300);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="skills" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden">
      {/* خلفية متحركة - العودة للألوان الأصلية */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* نمط شبكي */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-24 py-20">
        {/* العنوان الرئيسي - العودة للألوان الأصلية */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              SKILLS
            </span>
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My technical arsenal for building <span className="font-semibold text-cyan-400">innovative solutions</span> and{" "}
            <span className="font-semibold text-purple-400">scalable systems</span>
          </p>
        </div>

        {/* تصنيفات المهارات */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(categoryNames).map(([key, name]) => (
            <div
              key={key}
              className={`px-6 py-3 rounded-2xl bg-gradient-to-r ${categoryColors[key as keyof typeof categoryColors]} text-white font-semibold text-sm uppercase tracking-wider shadow-lg transform hover:scale-105 transition-transform duration-300`}
            >
              {name}
            </div>
          ))}
        </div>

        {/* شجرة المهارات */}
        <div className="relative flex justify-center">
          {/* الجذع الرئيسي مع تأثير متوهج - العودة للون الأصلي */}
          <div className="absolute top-0 bottom-0 w-2 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-2xl shadow-cyan-400/50"></div>
          
          {/* الأوراق/الفروع */}
          <div className="relative z-10 max-w-6xl w-full space-y-24">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className={`relative flex items-center w-full ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* بطاقة المهارة */}
                <div
                  className={`relative group transform transition-all duration-1000 ${
                    animatedSkills[index] 
                      ? 'opacity-100 scale-100 translate-x-0' 
                      : `opacity-0 scale-90 ${index % 2 === 0 ? '-translate-x-20' : 'translate-x-20'}`
                  } ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* تأثير الإضاءة الخلفية */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${categoryColors[skill.category]} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  {/* البطاقة الرئيسية */}
                  <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl w-96 transform transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400/30">
                    
                    {/* الهيدر */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-white/20 rounded-full blur-sm"></div>
                        <img 
                          src={skill.image} 
                          alt={skill.name} 
                          className="relative w-16 h-16 rounded-2xl object-cover border-2 border-white/20 z-10"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{categoryIcons[skill.category]}</span>
                          <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                        </div>
                        
                        {/* شريط التقدم */}
                        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className={`h-2.5 bg-gradient-to-r ${categoryColors[skill.category]} rounded-full transition-all duration-2000 ease-out`}
                            style={{ 
                              width: animatedSkills[index] ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 200 + 500}ms`
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                      </div>
                    </div>

                    {/* الوصف */}
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {skill.description}
                    </p>

                    {/* التاق التصنيف */}
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${categoryColors[skill.category]} rounded-full text-white uppercase tracking-wide`}>
                        {categoryNames[skill.category]}
                      </span>
                      <div className="text-2xl opacity-0 group-hover:opacity-100 transform group-hover:rotate-12 transition-all duration-500">
                        {index % 2 === 0 ? "➡️" : "⬅️"}
                      </div>
                    </div>

                    {/* خط متحرك سفلي */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${categoryColors[skill.category]} rounded-full transition-all duration-1000 ${
                      animatedSkills[index] ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>

                  {/* خط الاتصال مع الجذع */}
                  <div
                    className={`absolute top-1/2 w-16 h-0.5 bg-gradient-to-r ${
                      index % 2 === 0 
                        ? `right-full ${categoryColors[skill.category]} from-90%` 
                        : `left-full ${categoryColors[skill.category]} to-90%`
                    } rounded-full transform -translate-y-1/2 shadow-lg ${
                      animatedSkills[index] ? 'scale-x-100' : 'scale-x-0'
                    } transition-transform duration-1000`}
                    style={{ transitionDelay: `${index * 200 + 300}ms` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* الفروع الجانبية - العودة للألوان الأصلية */}
        <div className="absolute left-1/4 top-1/3 w-32 h-1 bg-gradient-to-r from-cyan-400/50 to-transparent rounded-full rotate-45"></div>
        <div className="absolute right-1/4 top-1/4 w-32 h-1 bg-gradient-to-l from-purple-400/50 to-transparent rounded-full -rotate-45"></div>
        <div className="absolute left-1/3 bottom-1/3 w-32 h-1 bg-gradient-to-r from-blue-400/50 to-transparent rounded-full -rotate-45"></div>
        <div className="absolute right-1/3 bottom-1/4 w-32 h-1 bg-gradient-to-l from-cyan-400/50 to-transparent rounded-full rotate-45"></div>

        {/* الأوراق المتساقطة - العودة للألوان الأصلية */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            >
              {["🍃", "🌿", "🍂"][i % 3]}
            </div>
          ))}
        </div>

        {/* ملخص المهارات */}

      </div>

      {/* الأنيميشن المخصصة */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-pulse {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default SkillTree;