import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Ovalucation from "../components/Ovalucation";
import { FaExclamationTriangle, FaCalendarAlt, FaChartLine, FaHeart } from "react-icons/fa";

const MenstrualTracker = () => {
  const [cycleLength, setCycleLength] = useState(null);
  const navigate = useNavigate();

  const handleCycleLengthChange = (length) => {
    setCycleLength(length);
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 ">
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          {/* Icon Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full shadow-lg mb-3"
          >
            <FaCalendarAlt className="text-white text-lg" />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-pink-600 drop-shadow-lg leading-tight mb-2">
            Menstrual & Ovulation Tracker
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Track your cycle and predict ovulation with precision and ease.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto"
        >
          <div className=" backdrop-blur-sm rounded-xl p-4 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <FaCalendarAlt className="text-white text-sm" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800">Cycle Tracking</h3>
            </div>
            <p className="text-gray-600 text-xs">Accurate period and cycle length tracking</p>
          </div>

          <div className=" backdrop-blur-sm rounded-xl p-4 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <FaChartLine className="text-white text-sm" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800">Ovulation Prediction</h3>
            </div>
            <p className="text-gray-600 text-xs">Predict your fertile window with precision</p>
          </div>

          <div className=" backdrop-blur-sm rounded-xl p-4 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <FaHeart className="text-white text-sm" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800">Health Insights</h3>
            </div>
            <p className="text-gray-600 text-xs">Understand your body's natural rhythms</p>
          </div>
        </motion.div>

        {/* Enhanced Warning Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-6"
        >
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-4 shadow-lg backdrop-blur-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FaExclamationTriangle className="text-red-500 text-lg mt-0.5" />
              </div>
              <div className="ml-3">
                <h4 className="text-red-800 font-semibold text-sm mb-2">Important Notice</h4>
                <p className="text-red-700 text-xs leading-relaxed">
                  If your cycle is more than{" "}
                  <span className="font-bold text-red-800">35 days</span>, please consult a
                  gynecologist for proper medical evaluation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Calculator Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100">
            <Ovalucation onCycleLengthChange={handleCycleLengthChange} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenstrualTracker;
