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
    
    </section>
  );
};

export default MenstrualTracker;
