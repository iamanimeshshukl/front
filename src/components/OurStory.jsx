import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const bubbleAnimation = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const OurStory = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Bubbles */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-pink-200 rounded-full opacity-30"
          variants={bubbleAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-purple-200 rounded-full opacity-40"
          variants={bubbleAnimation}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-25"
          variants={bubbleAnimation}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-14 h-14 bg-yellow-200 rounded-full opacity-35"
          variants={bubbleAnimation}
          animate="animate"
          style={{ animationDelay: "3s" }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-16 right-16 w-8 h-8 bg-pink-300 rounded-lg opacity-20"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-6 h-6 bg-purple-300 rounded-full opacity-25"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-10 h-10 bg-blue-300 rounded-lg opacity-20"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "4s" }}
        />

      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl text-pink-600 md:text-5xl font-bold  mb-6"
            variants={fadeIn}
          >
            Our Story
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
            variants={fadeIn}
          />
        </motion.div>

        <motion.div
          className="backdrop-blur-sm bg-white/70 rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          whileHover={{ scale: 1.01, y: -2 }}
        >
          <div className="space-y-6">
            <motion.p
              className="text-lg leading-relaxed text-gray-700"
              variants={fadeIn}
            >
              Zenher's journey began within the vibrant ecosystem of{" "}
              <span className="font-semibold text-pink-600">HBTU Kanpur</span>,
              where three students from diverse disciplines united around a shared
              mission: to transform women's healthcare in India.{" "}
              <span className="font-semibold text-gray-900">Animesh Shukla</span>, 
              from Electrical Engineering, driven by a passion for tech and social 
              impact, had been exploring AI and IoT solutions in health when he 
              identified a critical gap—digital healthcare for women remained 
              vastly underserved.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-gray-700"
              variants={fadeIn}
            >
              What started as a college project focused on menstrual awareness 
              began to evolve. Animesh soon collaborated with{" "}
              <span className="font-semibold text-gray-900">Prakhar Singh</span>, 
              a Chemical Engineering student and systems thinker passionate about 
              building scalable tech. With Prakhar's help, Zenher gained a solid 
              technological and operational backbone.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-gray-700"
              variants={fadeIn}
            >
              The final piece came with{" "}
              <span className="font-semibold text-gray-900">Shruti</span>, a 
              thoughtful and empathetic student from Food Technology. With a natural 
              talent for communication and a strong sense of emotional design, she 
              ensured that Zenher spoke directly to women's real needs. Shruti's 
              influence helped shape the platform's user-first, wellness-focused 
              approach.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-gray-700"
              variants={fadeIn}
            >
              Together, this trio transformed a simple idea into a robust{" "}
              <span className="font-semibold text-pink-600">FemTech startup</span>—
              combining AI-powered period tracking, doctor consultations, wellness
              product recommendations, and a women's health search engine.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-gray-700"
              variants={fadeIn}
            >
              Zenher is more than an app. It's a movement born from purpose,
              empathy, and innovation—crafted to make healthcare more inclusive,
              private, and empowering for every woman. What started in classrooms
              and college labs is now impacting lives across campuses, households,
              and soon, across the nation.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
