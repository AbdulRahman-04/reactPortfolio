import React from "react";
import { motion } from "framer-motion";
import aboutme from "../assets/about.jpg";

const About = () => {
  return (
    <motion.div 
      className="border-b border-neutral-900 pb-16"
      whileInView={{ opacity: 1, y: 0 }} 
      initial={{ opacity: 0, y: 50 }} 
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}  // Animate only once when in view
    >
      {/* Heading */}
      <motion.h2 
        className="my-10 text-center text-4xl text-white"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-16">

        {/* Left Side - Image */}
        <motion.div 
          className="lg:w-1/2 flex justify-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img 
            className="rounded-lg h-80 shadow-lg shadow-purple-500/30"
            src={aboutme} 
            alt="aboutme"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm leading-relaxed">
            I am a dedicated and versatile full stack developer with a
            passion for creating efficient and user-friendly web
            applications. With 5 years of professional experience, I have
            worked with a variety of technologies, including React, Next.js,
            Node.js, MySQL, PostgreSQL, and MongoDB.
            <br /><br />
            My journey in web development began with a deep curiosity for
            how things work, and it has evolved into a career where I
            continuously strive to learn and adapt to new challenges.
            I thrive in collaborative environments and enjoy solving
            complex problems to deliver high-quality solutions.
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default About;
