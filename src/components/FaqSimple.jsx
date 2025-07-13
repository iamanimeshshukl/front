import React, { useState } from "react";

const faqs = [
  {
    question: "What is Zenher?",
    answer: "Zenher is a women’s health platform offering period, ovulation, and pregnancy tracking, plus AI-powered wellness insights.",
  },
  {
    question: "Is Zenher free to use?",
    answer: "Yes, Zenher offers free access to its core health tracking and community features.",
  },
  {
    question: "How do I join the Zenher community?",
    answer: "Click the 'Join Our Community' button on the homepage or visit our community link to get started.",
  },
  {
    question: "Is my health data private?",
    answer: "Absolutely. Your data is encrypted and never shared without your consent.",
  },
];

export default function FaqSimple() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-xl mx-auto my-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8 text-pink-600">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg bg-white shadow-sm">
            <button
              className="w-full text-left px-5 py-4 focus:outline-none flex justify-between items-center"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <span className={`ml-4 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openIndex === idx && (
              <div className="px-5 pb-4 text-gray-700 text-sm animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 