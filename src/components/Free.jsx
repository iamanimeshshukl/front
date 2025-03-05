import React from "react";
import { motion } from "framer-motion";
import giftImage from "/src/assets/istockphoto-1174426173-612x612.jpg"; // Replace with relevant image

const GiftSection = () => {
  return (
    <section className="bg-pink-50 dark:bg-gray-900 py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={giftImage}
            alt="Zenher Free Subscription"
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg drop-shadow-lg"
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            🌸 Zenher is <span className="text-pink-600">Gifting Premium Care</span> to Women in Need
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            We believe **every woman deserves access to advanced healthcare.**  
            Zenher is offering **free premium subscriptions** to those in need, 
            ensuring access to **personalized period tracking, fertility insights, and AI-driven health solutions.**
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            If you or someone you know needs support, apply today and take charge of your health with Zenher’s **AI-powered care.**
          </p>

          {/* CTA Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block px-6 py-3 bg-pink-600 text-white rounded-lg text-lg font-medium shadow-md hover:bg-pink-700 transition-all"
          >
            Apply for Free Subscription 💖
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSection;
