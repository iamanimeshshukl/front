import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import MenstrualCycleImg from "../assets/tracker.jpg";
import FertilityImg from "../assets/Fertility.jpg";
import PregnantWomanImg from "../assets/Pregnant-woman.jpg";
import PartnerImg from "../assets/coummunity.jpg";
import ShoppingImg from "../assets/ShoppingImg.jpg";

const features = [
  {
    title: "Track Your Cycle & Symptoms",
    description:
      "Understand your body better with our advanced period and cycle tracker. Identify patterns and predict your next period with accuracy.",
    imgSrc: MenstrualCycleImg,
  },
  {
    title: "Consult a Doctor Online",
    description:
      "Get medical advice from certified professionals anytime, anywhere. Book a consultation and receive personalized healthcare guidance.",
    imgSrc: FertilityImg,
  },
  {
    title: "Follow Your Pregnancy Week by Week",
    description:
      "Track your pregnancy journey and monitor your baby’s growth. Stay informed with insights tailored to each stage of pregnancy.",
    imgSrc: PregnantWomanImg,
  },
  {
    title: "Community Support",
    description:
      "Join a supportive community of women sharing experiences and valuable health insights to guide you through your journey.",
    imgSrc: PartnerImg,
  },
  {
    title: "Buy Products for Your Needs",
    description:
      "Discover and shop for essential women’s health products, including menstrual hygiene products, fertility kits, pregnancy essentials, and wellness supplements.",
    imgSrc: ShoppingImg,
  },
];

const FloAppSection = () => {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-purple-200 text-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
          <span className="text-pink-600">One App, Your Lifelong Companion</span>
        </h2>
        <p className="text-gray-600 mt-3 text-base sm:text-lg font-medium max-w-2xl mx-auto">
          From your first period to motherhood and beyond, we are here for you every step of the way.
        </p>
      </div>
      <div className="max-w-6xl mx-auto space-y-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className="rounded-xl shadow-lg w-80 h-64 object-cover transition-transform transform hover:scale-105"
            />
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg flex items-start space-x-4 w-full md:w-1/2">
              <FaCheckCircle className="text-pink-500 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FloAppSection;
