import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/zenher-logo.png";
import OurTeam from "../components/OurTeam";
import OurMission from "../components/OurMission";  
import OurStory from "../components/OurStory";
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

      {/* Mission Section */}
  <OurMission/>

      {/* Our Story Section */}
     <OurStory/>

      {/* Our Team Section */}
   <OurTeam/>

      {/* Join Community Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            className="text-4xl font-extrabold text-pink-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Join Our Community
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Be part of a growing movement that’s rewriting the narrative around women’s health. Follow us on social media, become a campus ambassador, or partner with us to promote better healthcare access.
          </motion.p>
          <motion.a
            href="https://nas.io/zenher"
            className="inline-block mt-8 px-8 py-3 bg-purple-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-purple-700 transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Join Our Community
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default About;
