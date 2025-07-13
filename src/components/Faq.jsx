import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-pink-600 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our women's healthcare services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <svg 
                    className="w-5 h-5 text-pink-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "What healthcare services does ZenHer provide?",
    answer: "ZenHer offers comprehensive women's healthcare services including AI-powered health monitoring, telemedicine consultations, menstrual cycle tracking, fertility insights, personalized health recommendations, and access to a supportive community of women. Our platform combines cutting-edge technology with compassionate care to support your health journey.",
  },
  {
    question: "How does artificial intelligence enhance women's healthcare?",
    answer: "Our AI technology analyzes your health data to provide personalized insights, predict potential health patterns, and offer evidence-based recommendations. The system learns from your unique health profile to deliver increasingly accurate and relevant health guidance while maintaining the highest standards of privacy and security.",
  },
  {
    question: "How do you ensure the security and privacy of my health data?",
    answer: "We implement enterprise-grade security measures including end-to-end encryption, HIPAA compliance protocols, and strict access controls. Your health data is stored securely and never shared without your explicit consent. We regularly undergo security audits and maintain transparency about our data practices.",
  },
  {
    question: "Can I track my menstrual cycle and fertility with ZenHer?",
    answer: "Yes, our advanced cycle tracking feature allows you to monitor your menstrual cycle, log symptoms, track fertility indicators, and receive personalized insights about your reproductive health. The system provides predictions and recommendations based on your unique patterns and health data.",
  },
  {
    question: "What types of healthcare professionals are available for consultations?",
    answer: "Our network includes board-certified gynecologists, nurse practitioners, and women's health specialists. All providers are licensed and experienced in women's healthcare, ensuring you receive expert medical guidance through our secure telemedicine platform.",
  },
  {
    question: "How can I get support if I have technical issues or questions?",
    answer: "Our dedicated support team is available through multiple channels: in-app chat support, email at support@zenher.com, and phone support during business hours. We typically respond within 24 hours and offer comprehensive assistance for both technical and healthcare-related questions.",
  },
];

export default Faq;
