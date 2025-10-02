import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData = [
  { name: "Node.js", image: assets.node_icon, description: "2+ Years of experience in backend development" },
  { name: "Nest.js", image: assets.nest_icon, description: "6 Months building scalable APIs" },
  { name: "Typescript", image: assets.ts_icon, description: "2+ Years of experience in backend development" },
  { name: "React.js", image: assets.react_icon, description: "6 Months building and designing user interfaces" },
  { name: "Python", image: assets.py_icon, description: "2 Years of experience in python (sklearn,numpy,pandas,matplotlib,seaborn,scipy,etc)" },
  { name: "Machine Learning", image: assets.ml_icon, description: "1 Year applying ML models in real-world projects" },
  { name: "Large Language Models (LLMs)", image: assets.llm_icon, description: "1 Year fine-tuning and applying LLMs" },
];

function SkillTree() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div id="Skills" className="relative bg-black text-white py-20 px-6 md:px-20 flex flex-col items-center">

      {/* العنوان */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        My <span className="underline underline-offset-4 decoration-2 font-light">Skills</span>
      </h1>

      {/* wrapper للجذع والمحتوى */}
      <div className="relative w-full flex justify-center">
        {/* الجذع الأبيض يبدأ تحت العنوان */}
        <div className="absolute top-0 bottom-0 w-1 bg-white/30 left-1/2 transform -translate-x-1/2"></div>

        <div className="flex flex-col gap-16 relative z-10 max-w-4xl w-full">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`relative flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* الكرت */}
              <div
                className={`flex items-center gap-4 max-w-sm p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-lg relative z-10 ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                <img src={skill.image} alt={skill.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/40" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </div>
              </div>

              {/* الخط الواصل مع الجذع */}
              <div
                className={`absolute top-1/2 w-8 h-1 bg-white/40 ${index % 2 === 0 ? "right-1/2" : "left-1/2"}`}
                data-aos="zoom-in"
                data-aos-delay="300"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillTree;
