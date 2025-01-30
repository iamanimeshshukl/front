import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaCloud, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Hero = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Handle button click to redirect
  const handleButtonClick = () => {
    navigate("/profile"); // Redirect to the profile page
  };

  return (
    <section className="relative bg-gray-900 text-white py-20 px-6 lg:py-32">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p 
          className="text-lg font-semibold text-teal-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI-Powered Hygiene & Health Monitoring
        </motion.p>

        <motion.h1 
          className="text-4xl sm:text-6xl font-extrabold mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-500">Smart</span>
          <span className="text-yellow-400">  E-Toilets</span>
        </motion.h1>

        <motion.p 
          className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transforming sanitation with AI, cloud technology, and real-time health analysis to provide a safer and smarter experience.
        </motion.p>

        <motion.div 
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 text-gray-300">
            <FaRobot className="text-3xl text-teal-400" /> AI Integration
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <FaCloud className="text-3xl text-blue-400" /> Cloud Storage
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <FaShieldAlt className="text-3xl text-yellow-400" /> Secure Data
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button 
            className="px-6 py-3 text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:from-purple-500 hover:to-blue-600 flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            onClick={handleButtonClick} // Add the onClick handler
          >
            Get Started <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;