import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/tracker.jpg";
import img2 from "../assets/Fertility.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const MissionSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 text-gray-800 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-pink-200 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-pink-200 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-pink-200 rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-block mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-pink-600 leading-tight">
              Our Mission
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto mt-6 rounded-full"></div>
          </motion.div>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Empowering women through intelligent reproductive health solutions
          </motion.p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-32">
          {/* Block 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-100 to-pink-200 rounded-3xl opacity-30 blur-xl"></div>
                <img
                  src={img1}
                  alt="Zenher Period Tracker Interface"
                  className="relative w-full rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-100 rounded-full opacity-20"></div>
            </motion.div>
            
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-pink-500">Where It All Began</h3>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Zenher started as a college project, driven by real conversations with women about the daily gaps in reproductive healthcare. Our early research—spanning multiple universities—showed that over <span className="font-semibold text-pink-600">75% of women</span> weren't using any digital tracking tools, relying instead on calendars, notebooks, or memory.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This sparked a mission: to create a smarter, more accessible ecosystem for menstrual and reproductive health, blending <span className="font-semibold text-pink-600">AI-driven insights</span> with empathetic design.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Block 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8 order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-pink-500">The Vision Ahead</h3>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The lack of awareness and personalized solutions inspired us to reimagine how period and fertility tools work. Zenher isn't just an app—it's a <span className="font-semibold text-pink-600">revolution</span>. With features like AI-powered cycle predictions, irregularity detection, and real-time consultations with licensed gynecologists, we're bridging the gap between digital health and real-world care.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We're also building hybrid tools—like printable planners, Notion templates, and wearable integrations—to respect every user's lifestyle. At Zenher, we believe healthcare should feel like a <span className="font-semibold text-pink-600">conversation</span>, not a chore.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-100 to-pink-200 rounded-3xl opacity-30 blur-xl"></div>
                <img
                  src={img2}
                  alt="Fertility Consultation via Zenher"
                  className="relative w-full rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-100 rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20 pt-16 border-t border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-xl text-gray-600 mb-8">
            Join us in transforming reproductive healthcare for women everywhere
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
