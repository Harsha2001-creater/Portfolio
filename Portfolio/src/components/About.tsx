import React from 'react';
import { motion } from 'framer-motion';
import { Download, Brain, Code, Database, LineChart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      title: "Data Science Enthusiast",
      description: "Passionate about transforming complex data into actionable insights"
    },
    {
      icon: <Code className="w-6 h-6 text-purple-400" />,
      title: "Full Stack Developer",
      description: "Experienced in building end-to-end data-driven applications"
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: "Data Engineer",
      description: "Skilled in designing and implementing robust data pipelines"
    },
    {
      icon: <LineChart className="w-6 h-6 text-yellow-400" />,
      title: "Analytics Professional",
      description: "Proven track record in delivering impactful business solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">About Me</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Main Bio */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 mb-12"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  As a Data Science graduate student at UMBC with a strong foundation in Computer Science, I bridge the gap between complex data challenges and innovative solutions. My journey in tech began with a passion for problem-solving, leading me to excel academically and professionally in data science and analytics.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Currently serving as a Graduate Assistant at UMBC, I combine academic excellence with practical experience in data analysis, machine learning, and software development. My previous role as a Data Analyst at Cognizant allowed me to implement data-driven solutions that significantly improved business processes and decision-making capabilities.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My career objective is to leverage my expertise in data science and machine learning to solve complex real-world problems, particularly in the fields of AI and predictive analytics. I'm constantly exploring new technologies and methodologies to stay at the forefront of data science innovation.
                </p>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-700 rounded-lg p-3">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                      <p className="text-gray-400">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <motion.a
                href="https://drive.google.com/file/d/1noBf0Y5xKZ3HRLYZmO6mGGeHmySH1w0M/view"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;