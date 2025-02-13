import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Github, Linkedin, Brain, Code, Database } from 'lucide-react';

const Hero = () => {
  const techStack = [
    { icon: '🐍', name: 'Python' },
    { icon: '🐘', name: 'SQL' },
    { icon: '☕', name: 'Java' },
    { icon: '☁️', name: 'Azure' },
    { icon: '🔥', name: 'Databricks' },
    { icon: '🚀', name: 'Synapse' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-blue-900"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Sri Harsha Vardhan
              </h1>
              <p className="text-xl md:text-2xl text-blue-400 mb-6">
                Bridging Data & AI to Solve Real-World Problems
              </p>
              <p className="text-gray-400 mb-8 flex items-center">
                <span className="mr-2">📍</span>
                Baltimore, MD, USA
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full flex items-center"
                >
                  <span className="mr-2">{tech.icon}</span>
                  <span className="text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex space-x-4">
              <motion.a
                href="mailto:msriharshavardhan2001@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Let's Connect
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600/10 transition flex items-center"
              >
                Learn More
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex space-x-4 mt-8"
            >
              <a
                href="https://github.com/Harsha2001-creater"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/sriharshavardhanm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-12 md:mt-0 max-w-lg mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75"></div>
              <motion.div
                className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* Data Science Visual */}
                  <div className="col-span-2">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                      alt="Data Science Visualization"
                      className="w-full h-32 object-cover rounded-xl mb-4"
                    />
                  </div>

                  {/* Interactive Elements */}
                  <motion.div
                    className="bg-gray-800/50 p-3 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Brain className="w-6 h-6 text-blue-400 mb-2" />
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="h-full bg-blue-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-gray-800/50 p-3 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Code className="w-6 h-6 text-purple-400 mb-2" />
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '90%' }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                        className="h-full bg-purple-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-gray-800/50 p-3 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Database className="w-6 h-6 text-green-400 mb-2" />
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="h-full bg-green-500"
                      />
                    </div>
                  </motion.div>

                  {/* Animated Dots Grid */}
                  <div className="relative h-[72px] bg-gray-800/50 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-4 gap-1 p-2">
                      {[...Array(16)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.05,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            repeatDelay: 2
                          }}
                          className="w-2 h-2 bg-blue-400/30 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-blue-400 w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;