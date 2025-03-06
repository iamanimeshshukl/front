import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaUserShield, FaMagic, FaMobileAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaHeartbeat size={40} className="text-pink-600" />,
    title: "AI-Powered Healthcare",
    description: "Personalized period tracking, fertility insights, and smart health recommendations tailored for every woman.",
  },
  {
    icon: <FaUserShield size={40} className="text-purple-600" />,
    title: "100% Privacy & Security",
    description: "Your data is fully encrypted and protected. We prioritize women's health without compromising privacy.",
  },
  {
    icon: <FaMagic size={40} className="text-blue-600" />,
    title: "Holistic Wellness Support",
    description: "From mental well-being to nutrition and fitness, Zenher empowers you with a complete wellness approach.",
  },
  {
    icon: <FaMobileAlt size={40} className="text-green-600" />,
    title: "Seamless Experience",
    description: "Enjoy an intuitive, user-friendly app designed for smooth navigation and effortless health tracking.",
  },
];

const WhyChooseZenher = () => {
  return (
    <section className=" py-20 px-6">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-4xl sm:text-5xl font-bold text-pink-600"
        >
          Why Choose <span className="text-pink-600">Zenher?</span>
        </motion.h2>
        <p className="mt-4 text-lg text-gray-700">
          The future of women’s healthcare starts here. Zenher offers cutting-edge AI-powered insights, security, and holistic wellness—all in one place.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-700 ">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseZenher;
