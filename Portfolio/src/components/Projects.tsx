import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, LineChart, Film } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Employee Churn Prediction",
      date: "March 2024",
      description: "Machine learning model to predict employee turnover with 90% accuracy using Logistic Regression & Decision Trees. Implemented feature engineering and model optimization techniques.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      github: "#",
      icon: <Code className="w-6 h-6" />,
      tags: ["Python", "Scikit-learn", "Pandas", "ML"]
    },
    {
      title: "Power BI Dashboard for Movie OTT",
      date: "Nov 2023",
      description: "Interactive dashboard analyzing user preferences & viewing trends across multiple OTT platforms. Implemented complex DAX measures for user engagement metrics.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      github: "#",
      icon: <Film className="w-6 h-6" />,
      tags: ["Power BI", "DAX", "SQL", "Analytics"]
    },
    {
      title: "Stock Price Predictor",
      date: "April 2022",
      description: "LSTM-based deep learning model for stock price prediction with 85% accuracy. Implemented real-time data processing and technical indicator analysis.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      github: "#",
      icon: <LineChart className="w-6 h-6" />,
      tags: ["Python", "TensorFlow", "LSTM", "Time Series"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-800 rounded-lg overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
                    <div className="absolute bottom-4 left-4 flex items-center">
                      <div className="p-2 bg-blue-500 rounded-lg">
                        {project.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-blue-400 text-sm">{project.date}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-700 text-blue-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-blue-400 transition"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="#"
                      className="flex items-center text-white hover:text-blue-400 transition"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;