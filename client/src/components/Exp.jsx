import React from "react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Backend Development Trainee",
    company: "Code for India Foundation",
    description:
      "Learning Node.js, Express.js, and MongoDB. Understanding RESTful APIs, authentication, and database management. Building small projects to apply concepts.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Postman"],
  },
  {
    year: "2024 - Present",
    role: "Frontend Development Trainee",
    company: "Code for India Foundation",
    description:
      "Practicing HTML, CSS, and Tailwind CSS to build responsive web pages. Learning UI/UX best practices and modern web design principles.",
    technologies: ["HTML", "CSS", "Tailwind CSS"],
  },
  {
    year: "2024 - Present",
    role: "JavaScript Enthusiast",
    company: "Code for India Foundation",
    description:
      "Exploring JavaScript concepts deeply, including ES6+, array and object methods, promises, and async-await. Implementing JavaScript in real-world projects.",
    technologies: ["JavaScript", "ES6+", "Promises", "Async/Await"],
  },
  {
    year: "2024 - Present",
    role: "API Testing & Development",
    company: "Code for India Foundation",
    description:
      "Understanding how APIs work, testing them using Postman, and implementing CRUD operations with Express.js and MongoDB.",
    technologies: ["Postman", "REST APIs", "Express.js", "MongoDB"],
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
