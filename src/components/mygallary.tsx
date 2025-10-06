// Portfolio.tsx
import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  category: string;
  features: string[];
  status: string;
  demoVideo?: string;
}

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [animatedProjects, setAnimatedProjects] = useState<boolean[]>([]);

  const categories = [
    { id: "all", name: "All Projects", icon: "🚀" },
    { id: "ai", name: "AI & ML", icon: "🧠" },
    { id: "backend", name: "Backend", icon: "⚙️" },
    { id: "ecommerce", name: "E-commerce", icon: "🛒" },
    { id: "nlp", name: "NLP", icon: "💬" },
    { id: "fullstack", name: "Full Stack", icon: "🌐" }
  ];

  const projectsData: Project[] = [
    {
      id: 1,
      title: "BazzarSpices E-commerce",
      description: "Full-stack e-commerce platform for household products",
      longDescription: "A comprehensive e-commerce backend application built with modern technologies for selling various household products including carpets, solar energy systems, salt, and more. Features include user authentication, product management, shopping cart, and order processing.",
      technologies: ["Node.js", "TypeScript", "Prisma", "PostgreSQL", "Express", "JWT", "WhatsApp API"],
      githubUrl: "https://github.com/Moaz-Alhasani/BazzarSpices",
      image: assets.header_img,
      category: "ecommerce",
      features: [
        "User registration and login system",
        "Browse categorized products",
        "Contact seller via WhatsApp",
        "Admin dashboard",
        "Prisma + PostgreSQL database",
        "Cloud deployment ready"
      ],
      status: "Completed"
    },
    {
      id: 2,
      title: "Irshad Smart Job Recommendation",
      description: "AI-powered job recommendation with salary prediction",
      longDescription: "An advanced Irshad Smart Job Recommendation System combined with Salary Prediction and Dynamic Multi-Factor Candidate Ranking, designed to assist job seekers, employers, and administrators in managing recruitment efficiently using AI and NLP techniques.",
      technologies: ["Python", "Machine Learning", "NLP", "AI", "Recommendation System"],
      githubUrl: "https://github.com/Moaz-Alhasani/Irshad",
      image: assets.header_img,
      category: "ai",
      features: [
        "Smart Job Recommendations",
        "Salary Prediction",
        "Multi-Factor Candidate Ranking",
        "NLP Techniques",
        "Employer & Job Seeker Portal"
      ],
      status: "Completed"
    },
    {
      id: 3,
      title: "LangChain + Gemini RAG System",
      description: "Question Answering System with Retrieval-Augmented Generation",
      longDescription: "A sophisticated Question Answering System using LangChain and Google Gemini API with RAG (Retrieval-Augmented Generation) architecture for intelligent document processing and question answering.",
      technologies: ["Python", "LangChain", "Gemini API", "ChromaDB", "RAG", "NLP"],
      githubUrl: "https://github.com/Moaz-Alhasani/LangChain-Gemini-API",
      image: assets.header_img,
      category: "nlp",
      features: [
        "PDF Document Loading & Splitting",
        "Gemini Embedding Model",
        "Vector Storage with ChromaDB",
        "Semantic Search",
        "RAG Chain with Gemini 1.5 Pro"
      ],
      status: "Completed"
    },
    {
      id: 4,
      title: "Llama-2 Chatbot with CUDA",
      description: "Local chatbot with CUDA acceleration using Llama-2",
      longDescription: "This project utilizes Llama-2 13B GGML to run a local chatbot with CUDA acceleration via llama-cpp-python. It enables large language model inference on GPU using cublas, improving performance and efficiency.",
      technologies: ["Python", "Llama-2", "CUDA", "GGML", "llama-cpp-python", "NLP"],
      githubUrl: "https://github.com/Moaz-Alhasani/Llama-2-Chatbot-with-CUDA-Acceleration",
      image: assets.header_img,
      category: "ai",
      features: [
        "Llama-2 13B GGML Model",
        "CUDA Acceleration",
        "GPU Inference",
        "Local Chatbot",
        "High Performance"
      ],
      status: "Completed"
    },
    {
      id: 5,
      title: "Rainfall Prediction ML",
      description: "Meteorological rainfall prediction using Random Forest",
      longDescription: "This project focuses on predicting rainfall based on meteorological parameters using a Random Forest Classifier. The dataset is preprocessed, visualized, balanced, and trained using GridSearchCV for hyperparameter tuning.",
      technologies: ["Python", "Random Forest", "Machine Learning", "GridSearchCV", "Scikit-learn"],
      githubUrl: "https://github.com/Moaz-Alhasani/Rainfall-Prediction-using-Random-Forest-",
      image: assets.header_img,
      category: "ai",
      features: [
        "Random Forest Classifier",
        "Meteorological Data Analysis",
        "GridSearchCV Tuning",
        "Data Preprocessing",
        "Weather Prediction"
      ],
      status: "Completed"
    },
    {
      id: 6,
      title: "Customer Churn Prediction",
      description: "Telco customer churn prediction with ML algorithms",
      longDescription: "A comprehensive project to predict Customer Churn using Machine Learning algorithms such as Decision Tree, Random Forest, and XGBoost. The project applies data preprocessing, balancing data with SMOTE, and hyperparameter tuning using RandomizedSearchCV.",
      technologies: ["Python", "XGBoost", "Random Forest", "SMOTE", "Machine Learning"],
      githubUrl: "https://github.com/Moaz-Alhasani/Telco-Customer-Churn-Prediction",
      image: assets.header_img,
      category: "ai",
      features: [
        "Multiple ML Algorithms",
        "SMOTE Data Balancing",
        "RandomizedSearchCV Tuning",
        "Customer Analytics",
        "Churn Prediction"
      ],
      status: "Completed"
    },
    {
      id: 7,
      title: "NestJS Full Course Project",
      description: "Progressive Node.js framework for scalable applications",
      longDescription: "A comprehensive NestJS framework project demonstrating building efficient and scalable server-side applications with TypeScript. Includes modern backend development practices and architecture patterns.",
      technologies: ["Node.js", "NestJS", "TypeScript", "Backend", "API Development"],
      githubUrl: "https://github.com/Moaz-Alhasani/Nest-js-Full-Course",
      image: assets.header_img,
      category: "backend",
      features: [
        "NestJS Framework",
        "TypeScript",
        "Scalable Architecture",
        "API Development",
        "Modern Backend Practices"
      ],
      status: "Completed"
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setProjects(projectsData);
      setFilteredProjects(projectsData);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (filteredProjects.length > 0) {
      filteredProjects.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedProjects(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 200);
      });
    }
  }, [filteredProjects]);

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
    setAnimatedProjects([]);
    
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <div id="portfolio" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <span className="text-2xl">💼</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                My Project
              </h2>
              <span className="text-2xl">🚀</span>
            </div>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="portfolio" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <span className="text-2xl">💼</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              My Portfolio
            </h2>
            <span className="text-2xl">🚀</span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of AI, backend, and full-stack projects. 
            Each project represents my passion for building innovative solutions with cutting-edge technologies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => filterProjects(category.id)}
              className={`
                group relative px-6 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 
                backdrop-blur-md border-2
                ${selectedCategory === category.id 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent scale-105 shadow-2xl' 
                  : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 hover:scale-105'
                }
              `}
            >
              <span className="flex items-center gap-2">
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </span>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                selectedCategory === category.id ? 'opacity-100' : ''
              }`}></div>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`
                group relative
                transform transition-all duration-700
                ${animatedProjects[index] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
                }
              `}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full transform transition-all duration-500 group-hover:scale-105 group-hover:border-white/20 overflow-hidden">
                
                {/* Project Image/Badge */}
                <div className="relative mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <div className="text-6xl">
                      {project.category === 'ai' && '🧠'}
                      {project.category === 'backend' && '⚙️'}
                      {project.category === 'ecommerce' && '🛒'}
                      {project.category === 'nlp' && '💬'}
                      {project.category === 'fullstack' && '🌐'}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 backdrop-blur-md rounded-full border border-green-500/30">
                    <span className="text-green-300 text-sm font-semibold">{project.status}</span>
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 rounded-lg text-xs text-gray-300 border border-white/10 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-white/10 rounded-lg text-xs text-gray-400 border border-white/10">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-2 rounded-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    GitHub
                  </a>
                  <button
                    onClick={() => openProjectModal(project)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Details
                  </button>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-6">
          <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-xl text-gray-300">{selectedProject.description}</p>
                </div>
                <button
                  onClick={closeProjectModal}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 text-white text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-md rounded-full border border-green-500/30 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-semibold">{selectedProject.status}</span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">📖 Project Overview</h4>
                <p className="text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">✨ Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-blue-400">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">🛠️ Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-white border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-white/10">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-4 rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3"
                >
                  <span>📂</span>
                  View on GitHub
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-center py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3"
                  >
                    <span>🌐</span>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;