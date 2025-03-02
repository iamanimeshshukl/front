import React, { useState } from "react";
import { motion } from "framer-motion";
import Ovalucation from "../components/Ovalucation";
import trackerImg from "../assets/Pregnant-woman.jpg"; // Add an appropriate illustration

const MenstrualTracker = () => {
  const [cycleLength, setCycleLength] = useState(null);

  const handleCycleLengthChange = (length) => {
    setCycleLength(length);
  };

  return (
    <section className="relative min-h-screen py-16 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${trackerImg})` }}></div>

      {/* Heading & Intro */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-purple-800 drop-shadow-lg">
          Menstrual & Ovulation Tracker
        </h2>
        <p className="text-pink-600 mt-3 text-lg font-medium">
          Track your cycle and predict ovulation with ease.
        </p>
    
      </motion.div>
<br></br>
      {/* Calculator Component */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full"
      >
        <Ovalucation onCycleLengthChange={handleCycleLengthChange} />
      </motion.div>
    
    </section>
  );
};

export default MenstrualTracker;

  