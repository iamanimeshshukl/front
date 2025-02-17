import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  {
    title: "Track your cycle and symptoms",
    description:
      "Figure out what’s normal for you with our period and cycle tracker. Spot patterns in your symptoms and know when your period is likely to start so you’re always prepared.",
  },
  {
    title: "Understand your fertility better",
    description:
      "Get daily conception tips from our experts and learn how to read your body’s fertility signals with our ovulation tracker.",
  },
  {
    title: "Follow your pregnancy week by week",
    description:
      "See how your body and baby are changing with our pregnancy tracker. Know when your baby will hit important milestones.",
  },
  {
    title: "Share with your partner",
    description:
      "We’ll teach them everything they need to know about your body (and how to better support you).",
  },
  {
    title: "Switch to Anonymous Mode",
    description:
      "Understand your body better with an added layer of privacy. Flo is already encrypted as standard, and we will never sell your data.",
  },
];

const FloAppSection = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Mobile UI Preview */}
        <div className="flex justify-center">
          <motion.img
            src="/flo-app-preview.png" // Placeholder, replace with the actual image URL
            alt="Adhya App UI"
            className="rounded-lg shadow-lg w-72"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Features List */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What can you do with the Adhya app?</h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <FaCheckCircle className="text-pink-500 text-2xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloAppSection;