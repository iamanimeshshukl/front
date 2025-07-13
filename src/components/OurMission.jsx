import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/tracker.jpg";
import img2 from "../assets/Fertility.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const MissionSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="container mx-auto max-w-6xl space-y-24">

        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-pink-600 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
      Our Mission
        </motion.h2>

        {/* Block 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <img
              src={img1}
              alt="Zenher Period Tracker Interface"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 text-left space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold text-pink-500">Where It All Began</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Zenher started as a college project, driven by real conversations with women about the daily gaps in reproductive healthcare. Our early research—spanning multiple universities—showed that over 75% of women weren’t using any digital tracking tools, relying instead on calendars, notebooks, or memory.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This sparked a mission: to create a smarter, more accessible ecosystem for menstrual and reproductive health, blending AI-driven insights with empathetic design.
            </p>
          </motion.div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <img
              src={img2}
              alt="Fertility Consultation via Zenher"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 text-left space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold text-pink-500">The Vision Ahead</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The lack of awareness and personalized solutions inspired us to reimagine how period and fertility tools work. Zenher isn’t just an app—it’s a revolution. With features like AI-powered cycle predictions, irregularity detection, and real-time consultations with licensed gynecologists, we’re bridging the gap between digital health and real-world care.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We’re also building hybrid tools—like printable planners, Notion templates, and wearable integrations—to respect every user’s lifestyle. At Zenher, we believe healthcare should feel like a conversation, not a chore.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
