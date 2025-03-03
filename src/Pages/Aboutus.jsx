import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/smart.png";
//import Review from "../components/Review.jsx"
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-200 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-24 px-6">
        <div className="container mx-auto">
          <motion.img
            src={logo}
            alt="Zenher Logo"
            className="mx-auto w-28 md:w-36 mb-6 drop-shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <motion.h1
            className="text-5xl md:text-6xl font-bold tracking-tight"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
          Empowering Women’s Healthcare
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Over 60% of Indian women lack access to adequate healthcare. Zenher aims to bridge this gap through AI-driven diagnostics, telemedicine, and a community-driven support network.
          </motion.p>
        </div>
      </section>
 
      {/* About Us Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 text-center">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            className="text-4xl font-extrabold text-purple-700"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-gray-700 leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
           At Zenher, we are on a mission to revolutionize menstrual and reproductive health through AI-driven technology, expert medical support, and social change. Our journey began in university when discussions with friends revealed the challenges women face in tracking their cycles and accessing reliable healthcare. To gain deeper insights, we conducted a survey across multiple colleges, which revealed that 75-80% of respondents do not use a period or health-tracking app, either due to a lack of awareness or a preference for traditional tracking methods like calendars or manual records. Only 20-25% of participants relied on digital tracking, highlighting a significant gap in adoption.

These findings pointed to key challenges: many individuals are either unaware of the benefits of period-tracking apps or do not find them necessary. Additionally, some prefer non-digital methods, emphasizing the need for a hybrid approach that includes options like printable trackers, Notion integration, or wearable compatibility. This insight shaped our vision for Zenher—an AI-powered menstrual and reproductive health companion that provides intelligent cycle predictions, early irregularity detection, and personalized health insights. Unlike conventional period-tracking apps, Zenher offers instant and affordable consultations with top gynecologists, ensuring that expert medical support is always within reach.

Beyond tracking, Zenher is committed to breaking social taboos surrounding menstrual and reproductive health. We aim to foster a culture of openness, education, and empowerment, making healthcare more accessible and stigma-free. By combining AI-driven analytics with real-time doctor support, Zenher is not just an app—it is a proactive health companion designed to support women at every stage of their journey. Join us in redefining women’s health, because your body deserves more than just an app, it deserves a revolution.
          </motion.p>
        </div>
      </section>

      {/* Call to Action */}
     
    </div>
  );
};

export default About;
