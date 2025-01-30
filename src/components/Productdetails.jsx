import React from "react";
import { motion } from "framer-motion";
import { FaCloudUploadAlt, FaToilet, FaBrain, FaChartLine } from "react-icons/fa";

const RoadmapSection = () => {
  const steps = [
    {
      icon: <FaToilet className="text-5xl text-blue-500" />, 
      title: "User Uses Smart E-Toilet", 
      description: "The user enters the smart toilet, which automatically collects health data from urine analysis.",
      position: "left"
    },
    {
      icon: <FaCloudUploadAlt className="text-5xl text-teal-500" />, 
      title: "Data Sent to Cloud", 
      description: "The collected health data is securely transmitted to the cloud for processing.",
      position: "right"
    },
    {
      icon: <FaBrain className="text-5xl text-purple-500" />, 
      title: "AI Analyzes Data", 
      description: "AI models analyze the data, detecting potential health issues and generating a detailed report.",
      position: "left"
    },
    {
      icon: <FaChartLine className="text-5xl text-green-500" />, 
      title: "Report Sent to User", 
      description: "The processed data and insights are displayed on the user’s dashboard for health monitoring.",
      position: "right"
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-300 mb-12">How Smart E-Toilet Works</h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="border-l-4 border-teal-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex w-full mb-10 relative ${step.position === 'left' ? 'justify-start' : 'justify-end'}`}
              initial={{ opacity: 0, x: step.position === 'left' ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className={`bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg text-center ${step.position === 'left' ? 'ml-12' : 'mr-12'}`}>
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{step.description}</p>
              </div>
            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
