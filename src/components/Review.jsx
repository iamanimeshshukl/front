import { FaHeartbeat, FaShieldAlt, FaLightbulb, FaMobileAlt, FaStar, FaArrowLeft, FaArrowRight, FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const features = [
  {
    icon: <FaHeartbeat className="text-pink-500 text-4xl" />, 
    title: "Personalized Health Insights",
    description: "Get AI-driven health tracking tailored to your unique needs."
  },
  {
    icon: <FaShieldAlt className="text-blue-500 text-4xl" />, 
    title: "Privacy & Security",
    description: "Your data is encrypted and protected with top-tier security measures."
  },
  {
    icon: <FaLightbulb className="text-yellow-500 text-4xl" />, 
    title: "Smart AI Recommendations",
    description: "Receive scientifically backed suggestions for better well-being."
  },
  {
    icon: <FaMobileAlt className="text-green-500 text-4xl" />, 
    title: "Seamless Mobile Experience",
    description: "Access all features smoothly on any device, anywhere."
  }
];


export default function WhyChooseZenher() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-pink-50 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-pink-600">Why Choose Zenher?</h2>
        <p className="text-lg text-gray-600">Empowering women’s health with technology and care.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-2xl text-center flex flex-col items-center border border-gray-200 hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-500 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Review Section */}
  
    </section>
  );
}
