import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Cognizant",
      role: "Data Analyst",
      period: "Jun 2022 – Jun 2023",
      location: "Bangalore, India",
      achievements: [
        "Engineered data processing pipelines using Azure Data Factory, achieving <span class='text-blue-400 font-semibold'>30%</span> reduction in manual processing time",
        "Spearheaded cross-functional data integration initiatives, driving <span class='text-blue-400 font-semibold'>15%</span> improvement in decision-making efficiency",
        "Implemented fraud detection models using Python and Scikit-learn, boosting accuracy by <span class='text-blue-400 font-semibold'>25%</span>",
        "Architected automated ETL workflows, streamlining data integration from multiple sources into Azure Data Lake"
      ]
    },
    {
      company: "Cognizant",
      role: "Data Analyst Trainee",
      period: "Aug 2021 – Jun 2022",
      location: "Bangalore, India",
      achievements: [
        "Analyzed customer transaction data in MongoDB, contributing to <span class='text-blue-400 font-semibold'>10%</span> reduction in fraud incidents",
        "Developed dynamic visualizations using Power BI and Tableau, enhancing reporting efficiency by <span class='text-blue-400 font-semibold'>20%</span>",
        "Streamlined data workflows, resulting in <span class='text-blue-400 font-semibold'>15%</span> decrease in processing errors"
      ]
    },
    {
      company: "Qbec Infosal",
      role: "Data Analyst Intern",
      period: "Jan 2020 – Aug 2021",
      location: "Tamil Nadu, India",
      achievements: [
        "Engineered data pipelines using React JS and Redux, achieving <span class='text-blue-400 font-semibold'>15%</span> reduction in load time",
        "Conducted user interaction analysis in MySQL, leading to <span class='text-blue-400 font-semibold'>20%</span> improvement in engagement",
        "Generated data-driven insights, contributing to <span class='text-blue-400 font-semibold'>10%</span> increase in application usability"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Work Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                  
                  {/* Content */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                    }`}
                  >
                    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                      <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''} mb-4`}>
                        <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                          <p className="text-blue-400">{exp.role}</p>
                          <p className="text-gray-400">{exp.period}</p>
                          <p className="text-gray-500">{exp.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                          >
                            <CheckCircle className={`w-5 h-5 text-blue-400 ${
                              index % 2 === 0 ? 'md:ml-2' : 'mr-2'
                            } flex-shrink-0 mt-1`} />
                            <span className="text-gray-300" dangerouslySetInnerHTML={{ __html: achievement }}></span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;