import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import MenstrualCycleImg from "../assets/menstrual-cycle-chart.jpg";
import FertilityImg from "../assets/Fertility.jpg";
import PregnantWomanImg from "../assets/Pregnant-woman.jpg";
import PartnerImg from "../assets/partner.avif";

const features = [
  {
    title: "Track your cycle and symptoms",
    description:
      "Figure out what’s normal for you with our period and cycle tracker. Spot patterns in your symptoms and know when your period is likely to start so you’re always prepared.",
    imgSrc: MenstrualCycleImg,
  },
  {
    title: "Understand your fertility better",
    description:
      "Get daily conception tips from our experts and learn how to read your body’s fertility signals with our ovulation tracker.",
    imgSrc: FertilityImg,
  },
  {
    title: "Follow your pregnancy week by week",
    description:
      "See how your body and baby are changing with our pregnancy tracker. Know when your baby will hit important milestones.",
    imgSrc: PregnantWomanImg,
  },
  {
    title: "Share with your partner",
    description:
      "We’ll teach them everything they need to know about your body (and how to better support you).",
    imgSrc: PartnerImg,
  },
];

const FloAppSection = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 to-purple-200 text-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2 
          className="text-5xl font-extrabold text-gray-800 tracking-wide leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-pink-500">Discover the Power of</span> <span className="text-purple-600">Zenher!</span>
        </motion.h2>
      </div>
      <div className="max-w-6xl mx-auto space-y-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Image Section */}
            <motion.img
              src={feature.imgSrc}
              alt={feature.title}
              className="rounded-lg shadow-lg w-72 md:w-96"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 2 }}
            />

            {/* Text Section */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 w-full md:w-1/2"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaCheckCircle className="text-pink-500 text-2xl mt-1" />
              </motion.div>
              <div>
                <motion.h3 
                  className="text-lg font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.4 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FloAppSection;
