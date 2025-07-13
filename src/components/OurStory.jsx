import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const OurStory = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24text-gray-800">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-4xl font-extrabold text-pink-600 text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Our Story
        </motion.h2>

        <motion.p
          className="text-lg leading-8 text-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Zenher’s journey began within the vibrant ecosystem of{" "}
          <span className="font-semibold text-pink-600">HBTU Kanpur</span>,
          where three students from diverse disciplines united around a shared
          mission: to transform women’s healthcare in India.{" "}
          <span className="font-semibold">Animesh Shukla</span>, from Electrical
          Engineering, driven by a passion for tech and social impact, had been
          exploring AI and IoT solutions in health when he identified a critical
          gap—digital healthcare for women remained vastly underserved.
        </motion.p>

        <motion.p
          className="mt-6 text-lg leading-8 text-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          What started as a college project focused on menstrual awareness began
          to evolve. Animesh soon collaborated with{" "}
          <span className="font-semibold">Prakhar Singh</span>, a Chemical
          Engineering student and systems thinker passionate about building
          scalable tech. With Prakhar’s help, Zenher gained a solid technological
          and operational backbone.
        </motion.p>

        <motion.p
          className="mt-6 text-lg leading-8 text-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          The final piece came with{" "}
          <span className="font-semibold">Shruti</span>, a thoughtful and
          empathetic student from Food Technology. With a natural talent for
          communication and a strong sense of emotional design, she ensured that
          Zenher spoke directly to women’s real needs. Shruti’s influence helped
          shape the platform’s user-first, wellness-focused approach.
        </motion.p>

        <motion.p
          className="mt-6 text-lg leading-8 text-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Together, this trio transformed a simple idea into a robust{" "}
          <span className="text-pink-600 font-medium">FemTech startup</span>—
          combining AI-powered period tracking, doctor consultations, wellness
          product recommendations, and a women’s health search engine.
        </motion.p>

        <motion.p
          className="mt-6 text-lg leading-8 text-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Zenher is more than an app. It’s a movement born from purpose,
          empathy, and innovation—crafted to make healthcare more inclusive,
          private, and empowering for every woman. What started in classrooms
          and college labs is now impacting lives across campuses, households,
          and soon, across the nation.
        </motion.p>
      </div>
    </section>
  );
};

export default OurStory;
