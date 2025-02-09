import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/AR.logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="text-white w-full h-25 mb-10 flex items-center justify-between py-5 px-5">
        
        {/* Logo */}
        <motion.div 
          className="flex flex-shrink-0 items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img className="h-16 w-16" src={logo} alt="logo" />
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="m-8 flex items-center justify-center gap-6 text-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a 
            href="https://www.linkedin.com/in/syed-abdul-rahman-643a282b2/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0077B5" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a 
            href="https://github.com/AbdulRahman-04"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#fff" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a 
            href="https://www.instagram.com/rahmann.dev/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#E1306C" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaInstagram />
          </motion.a>

          <motion.a 
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#1DA1F2" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaSquareXTwitter />
          </motion.a>
        </motion.div>

      </nav>
    </>
  );
};

export default Navbar;
