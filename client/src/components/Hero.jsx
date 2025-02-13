import React from "react";
import { motion } from "framer-motion";
import myImage from "../assets/myImage.jpg"

const Hero = () => {
  return (
    <motion.div 
      className="border-b border-neutral-900 pb-16 lg:mb-35"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section Container */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16">

        {/* Left Side - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          
          {/* Animated Name */}
          <motion.h1 
            className="text-white text-5xl font-thin tracking-tight lg:text-6xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Abdul Rahman
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.span 
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent block mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Full Stack Developer
          </motion.span>

          {/* Animated Description */}
          <motion.p 
            className="text-gray-400 max-w-xl mx-auto lg:mx-0 mt-6 text-sm font-light tracking-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I am a passionate full stack developer with a knack for crafting
            robust and scalable web applications. With 3 months of hands-on
            experience, I have honed my skills in frontend technologies like Html, Css, Javascript, tailwindCSS,
            ReactJs as well as back-end technologies like Node.js, ExpressJs, Postman, and MongoDB.
          </motion.p>

        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <motion.img 
            className="h-80 w-80 rounded-full shadow-lg shadow-purple-500/30"
            src={myImage} 
            alt="Abdul Rahman"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05 }}
          />
        </div>

      </div>
    </motion.div>
  );
};

export default Hero;
