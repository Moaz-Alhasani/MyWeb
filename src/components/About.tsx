import React from "react";
import { assets } from "../assets/assets";

function About() {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      {/* العنوان */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        About <span className="underline underline-offset-4 decoration-2 font-light">Me</span>
      </h1>

      {/* وصف مختصر */}
      <p className="text-gray-500 max-w-xl text-center mb-12 text-lg">
        Experienced AI Engineer & Backend Developer, passionate about creating innovative solutions and delivering high-quality software.
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-16 w-full">
        {/* الصورة */}
        <img
          src={assets.About}
          alt="Moaz Alhosne"
          className="w-full sm:w-1/2 max-w-lg rounded-lg shadow-lg"
        />

        {/* المعلومات والخبرة */}
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-700">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-semibold text-gray-800">2+</p>
              <p>Years of Node.js Experience</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-800">6 Months</p>
              <p>Experience with Nest.js</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-800">1 Year</p>
              <p>AI & Machine Learning</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-800">1 Year</p>
              <p>Deep Learning, NLP & LLMs</p>
            </div>
          </div>

          {/* الوصف التفصيلي */}
          <p className="my-10 max-w-2xl text-gray-600 text-lg">
            I specialize in backend development using Node.js and Nest.js, and I have a strong background in AI, including machine learning, deep learning, natural language processing, and large language models (LLMs). I am dedicated to delivering robust, scalable, and innovative solutions that transform ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
