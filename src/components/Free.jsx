import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit, HeartPulse, Smartphone } from "lucide-react";

const features = [
  {
    icon: <BrainCircuit size={36} className="text-pink-600" />,
    title: "AI-Powered Insights",
    description:
      "Personalized health tracking and wellness insights powered by cutting-edge AI technology.",
  },
  {
    icon: <ShieldCheck size={36} className="text-pink-600" />,
    title: "Privacy First",
    description:
      "Your data is encrypted and secure with advanced protection for complete confidentiality.",
  },
  {
    icon: <HeartPulse size={36} className="text-pink-600" />,
    title: "Holistic Wellness",
    description:
      "Comprehensive approach covering mental health, nutrition, fitness, and overall well-being.",
  },
  {
    icon: <Smartphone size={36} className="text-pink-600" />,
    title: "Simple & Intuitive",
    description:
      "Clean, user-friendly design that makes health tracking effortless and enjoyable with a seamless experience.",
  },
];

const WhyChooseZenher = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-pink-600 mb-4">
            Why Choose <span className="text-pink-600">Zenher</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Where AI intelligence meets privacy and holistic wellness in a seamless digital experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* 3D Card Effect */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform border border-gray-100">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* 3D Icon Container */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative">
                    {/* 3D Shadow Effect */}
                    <div className="absolute inset-0 bg-pink-200 rounded-full blur-sm transform translate-y-1 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    
                    {/* Main Icon Container */}
                    <div className="relative p-5 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                      <div className="relative z-10">
                        {feature.icon}
                      </div>
                      
                      {/* 3D Highlight */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Premium Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseZenher;