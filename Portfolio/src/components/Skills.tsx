import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, BarChart as ChartBar, PenTool as Tool, Brain, Bot } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Programming & Analytics",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "R", level: 85 },
        { name: "PySpark", level: 80 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Bot className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "AI Agents", level: 85 },
        { name: "RAG", level: 80 },
        { name: "LLMs", level: 90 },
        { name: "NLP", level: 85 }
      ]
    },
    {
      title: "Data Processing",
      icon: <ChartBar className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Excel", level: 95 },
        { name: "Pandas", level: 90 },
        { name: "Visualization", level: 85 }
      ]
    },
    {
      title: "Cloud & Big Data",
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "Azure Data Factory", level: 85 },
        { name: "Databricks", level: 80 },
        { name: "Synapse", level: 75 },
        { name: "Data Lake", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      title: "Technical Skills",
      icon: <Tool className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "ETL/ELT", level: 90 },
        { name: "Data Modeling", level: 85 },
        { name: "Data Warehouse", level: 80 },
        { name: "Data Quality", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>

          {/* Category Selection */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(index)}
                className={`p-4 rounded-lg ${
                  activeCategory === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                } transition-all duration-300`}
              >
                <div className="flex flex-col items-center">
                  {category.icon}
                  <span className="text-sm mt-2 text-center">{category.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                  <span className="text-blue-400 font-medium">{skill.level}%</span>
                </div>
                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;