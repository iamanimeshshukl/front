import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-200 flex items-center justify-center p-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl text-center"
      >
        <h1 className="text-4xl font-extrabold text-pink-600 mb-4">About Zenher</h1>
        <p className="text-gray-700 text-lg mb-6">
          Zenher is a pioneering women’s healthcare startup dedicated to empowering women
          by providing seamless period tracking and comprehensive wellness insights.
          Our goal is to bring advanced healthcare technology into the hands of women,
          ensuring they stay informed and in control of their well-being.
        </p>
        <motion.div 
          className="flex justify-center gap-6 mt-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-pink-500 text-white p-6 rounded-xl shadow-lg max-w-xs">
            <h2 className="text-2xl font-semibold">Period Tracking</h2>
            <p className="text-sm mt-2">Stay updated on your cycle with precision and ease.</p>
          </div>
          <div className="bg-purple-500 text-white p-6 rounded-xl shadow-lg max-w-xs">
            <h2 className="text-2xl font-semibold">Health Insights</h2>
            <p className="text-sm mt-2">Get AI-driven insights about your health and wellness.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
