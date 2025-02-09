import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
    technologies: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    technologies: ["HTML", "CSS", "Vue.js", "MySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

const Exp = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2 
        className="my-10 text-center text-4xl text-white"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Experience 🚀
      </motion.h2>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
            key={index} 
            className="relative bg-neutral-900/70 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-cyan-500/30 hover:border-cyan-500/80 transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/40"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white">
              {exp.role} - <span className="text-cyan-400">{exp.company}</span>
            </h3>
            <p className="text-sm text-gray-400">{exp.year}</p>
            <p className="mt-3 text-gray-300">{exp.description}</p>

            {/* Tech Stack Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <motion.span 
                  key={i} 
                  className="bg-cyan-700 text-white px-3 py-1 text-xs rounded-md shadow-md cursor-pointer hover:bg-cyan-500 hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Exp;
