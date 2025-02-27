import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import MenstrualCycleImg from "../assets/Menstrual-Cycle.png";
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
        <h2 className="text-5xl font-extrabold text-gray-800 tracking-wide leading-tight">
          <span className="text-pink-500">Discover the Power of</span> <span className="text-purple-600">Zenher!</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto space-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className="rounded-lg shadow-lg w-72 md:w-96"
            />

            {/* Text Section */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 w-full md:w-1/2">
              <FaCheckCircle className="text-pink-500 text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FloAppSection;
