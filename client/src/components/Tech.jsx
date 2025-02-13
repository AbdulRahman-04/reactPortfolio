import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

// Floating Animation
const floatAnimation = {
  animate: {
    y: [0, -10, 0], // Move Up & Down
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Technologies = () => {
  return (
    <motion.div 
      className="border-b border-neutral-800 pb-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading Animation */}
      <motion.h1 
        className="my-20 text-center text-4xl text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technologies
      </motion.h1>

      {/* Icons Wrapper */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        
        {/* Individual Icons with Floating Animation */}
        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={floatAnimation}
          animate="animate"
          whileHover={{ scale: 1.2 }}
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>

        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={floatAnimation}
          animate="animate"
          whileHover={{ scale: 1.2 }}
        >
          <SiExpress className="text-5xl text-white" />
        </motion.div>

        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={floatAnimation}
          animate="animate"
          whileHover={{ scale: 1.2 }}
        >
          <SiMongodb className="text-5xl text-green-500" />
        </motion.div>
        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={floatAnimation}
          animate="animate"
          whileHover={{ scale: 1.2 }}
        >
          <FaNodeJs className="text-5xl text-green-400" />
        </motion.div>

        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={floatAnimation}
          animate="animate"
          whileHover={{ scale: 1.2 }}
        >
          <SiPostman className="text-5xl text-cyan-400" />
        </motion.div>

        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={floatAnimation}
          animate="animate"
          whileHover={{ scale: 1.2 }}
        >
          <FaHtml5 className="text-5xl text-red-500" />
        </motion.div>

        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={floatAnimation}
          animate="animate"
          whileHover={{ scale: 1.2 }}
        >
          <FaCss3Alt className="text-5xl text-cyan-400" />
        </motion.div>

       

        

      </div>
    </motion.div>
  );
};

export default Technologies;
