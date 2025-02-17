import React from "react";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/download");
  };

  return (
    <section className="relative bg-gradient-to-r from-pink-400 via-pink-500 to-purple-600 text-gray-900 py-20 px-6 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Animated Tagline */}
        <motion.p 
          className="text-lg font-semibold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Trusted Health Companion
        </motion.p>

        {/* Animated Heading */}
        <motion.h1 
          className="text-4xl sm:text-6xl font-extrabold mt-4 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-yellow-300">Adhya</span>
          {/* <span className="text-gray-700"> Health</span> */}
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p 
          className="mt-6 text-lg text-white max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join millions of women worldwide using Adhya to track their cycle, get insights, and improve their well-being.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          className="mt-12 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button 
            className="px-8 py-4 text-lg font-medium bg-white text-black flex items-center gap-2 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
            whileHover={{ scale: 1.05 }}
            onClick={handleButtonClick}
          >
            <FaApple /> Download on App Store
          </motion.button>
          <motion.button 
            className="px-8 py-4 text-lg font-medium bg-green-500 text-white flex items-center gap-2 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-green-400"
            whileHover={{ scale: 1.05 }}
            onClick={handleButtonClick}
          >
            <FaGooglePlay /> Get it on Google Play
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <svg width="400" height="400" viewBox="0 0 400 400" className="w-full h-auto">
          <circle cx="200" cy="200" r="150" fill="rgba(255, 255, 255, 0.2)" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
