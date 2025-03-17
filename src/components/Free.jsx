import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit, HeartPulse, Smartphone } from "lucide-react";

const features = [
  {
    icon: <BrainCircuit size={50} className="text-pink-500" />,
    title: "AI-Powered Insights",
    description:
      "Cutting-edge AI provides personalized health tracking, fertility predictions, and wellness insights tailored to your needs.",
  },
  {
    icon: <ShieldCheck size={50} className="text-purple-500" />,
    title: "Uncompromised Privacy",
    description:
      "Your data remains encrypted and secure with advanced protection, ensuring complete confidentiality.",
  },
  {
    icon: <HeartPulse size={50} className="text-blue-500" />,
    title: "Holistic Well-being",
    description:
      "A 360° approach to wellness, covering mental health, nutrition, fitness, and overall health management.",
  },
  {
    icon: <Smartphone size={50} className="text-green-500" />,
    title: "Seamless Experience",
    description:
      "An elegantly designed, user-friendly app with an intuitive interface for effortless health tracking.",
  },
];

const WhyChooseZenher = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold text-purple-600"
        >
          Why Choose <span className="text-pink-600">Zenher?</span>
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Elevate your healthcare experience with Zenher—where AI intelligence meets privacy and holistic wellness in a seamless digital solution.
        </p>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center border border-gray-200"
            >
              <div className="mb-5 p-5 bg-slate-50 rounded-full shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseZenher;