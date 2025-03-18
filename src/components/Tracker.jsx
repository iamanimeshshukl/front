import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import Ovalucation from "../components/Ovalucation";
import trackerImg from "../assets/Pregnant-woman.jpg"; 
import { FaExclamationTriangle } from "react-icons/fa";

const MenstrualTracker = () => {
  const [cycleLength, setCycleLength] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  const handleCycleLengthChange = (length) => {
    setCycleLength(length);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${trackerImg})` }}
      ></div>

      {/* Heading & Intro */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-5xl w-full text-center p-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-pink-600 drop-shadow-lg leading-tight">
          Menstrual & Ovulation Tracker
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg font-medium">
          Track your cycle and predict ovulation with ease.
        </p>
      </motion.div>

      {/* Warning Message */}
      <div className="flex items-center justify-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mt-4">
        <FaExclamationTriangle className="text-red-600 text-xl mr-2" />
        <p className="text-sm sm:text-base font-medium">
          If your cycle is more than{" "}
          <span className="font-semibold">35 days</span>, please consult a
          gynecologist.
        </p>
      </div>

      {/* Calculator Component */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-6 px-4 sm:px-0"
      >
        <Ovalucation onCycleLengthChange={handleCycleLengthChange} />
      </motion.div>

      {/* Know Your Body Section */}
      <div className="relative mt-12 flex items-center space-x-3">
        {/* Flag Pole */}
        <div className="w-3 h-40 bg-gray-800 rounded-lg shadow-lg"></div>

        {/* Waving Flag */}
        <motion.div
          className="relative w-64 h-36 bg-red-600 text-white font-bold text-lg flex items-center justify-center rounded-lg shadow-lg"
          style={{
            clipPath:
              "polygon(0% 0%, 90% 10%, 100% 50%, 90% 90%, 0% 100%)",
            transformOrigin: "left center",
          }}
          animate={{
            rotate: [0, 2, -2, 0],
            scaleX: [1, 1.05, 0.95, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <p className="px-3 text-center">Your Health Matters! 💖</p>
        </motion.div>

        {/* Floating Tooltip */}
        <motion.div
          className="absolute -top-10 left-14 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        >
          Click the button for insights!
        </motion.div>

        {/* Animated Button with Navigation */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 0, 100, 0.5)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/body")} // Navigate to the new page
          className="relative px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold text-lg rounded-full shadow-xl transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-red-300 ml-[-20px]"
        >
          Know Your Body 🚀
        </motion.button>

        {/* Sparkles Effect */}
        <motion.div
          className="absolute -top-4 -right-6 w-5 h-5 bg-yellow-400 rounded-full opacity-70"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        ></motion.div>
      </div>
    </section>
  );
};

export default MenstrualTracker;
