import { FaHeartbeat, FaShieldAlt, FaLightbulb, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import feature1 from "/src/assets/Pregnant-woman.jpg";
import feature2 from "/src/assets/Fertility.jpg";
import feature3 from "/src/assets/Pregnant-woman.jpg";
import feature4 from "/src/assets/Fertility.jpg";

const features = [
  {
    icon: <FaHeartbeat className="text-white text-5xl drop-shadow-md" />, 
    title: "Personalized Health Insights",
    description: "Get AI-driven health tracking tailored to your unique needs.",
    image: feature1
  },
  {
    icon: <FaShieldAlt className="text-white text-5xl drop-shadow-md" />, 
    title: "Privacy & Security",
    description: "Your data is encrypted and protected with top-tier security measures.",
    image: feature2
  },
  {
    icon: <FaLightbulb className="text-white text-5xl drop-shadow-md" />, 
    title: "Smart AI Recommendations",
    description: "Receive scientifically backed suggestions for better well-being.",
    image: feature3
  },
  {
    icon: <FaMobileAlt className="text-white text-5xl drop-shadow-md" />, 
    title: "Seamless Mobile Experience",
    description: "Access all features smoothly on any device, anywhere.",
    image: feature4
  }
];

export default function WhyChooseZenher() {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-pink-100 to-purple-200 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 text-pink-600 drop-shadow-lg">Why Choose Zenher?</h2>
        <p className="text-lg text-gray-700">Empowering women’s health with technology and care.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200"
          >
            <img src={feature.image} alt={feature.title} className="w-full h-40 object-cover" />
            <div className="absolute inset-0  flex justify-center items-center">
              {feature.icon}
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mt-2">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
