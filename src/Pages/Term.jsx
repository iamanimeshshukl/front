import React from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const TermsAndConditions = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-16 bg-pink-50 flex flex-col items-center justify-center px-2 sm:px-6 relative">
      {/* Sticky Back Button */}
      <a href="/" className="fixed top-4 left-4 z-50 flex items-center bg-white/90 hover:bg-pink-100 border border-pink-200 shadow-md rounded-full px-3 py-2 text-pink-600 font-semibold transition-colors duration-200 backdrop-blur-md">
        <ArrowLeftIcon className="h-5 w-5 mr-1" /> Back
      </a>
      {/* Scroll to Top Button */}
      {showScroll && (
        <button onClick={handleScrollTop} className="fixed bottom-6 right-6 z-50 bg-pink-600 hover:bg-pink-700 text-white rounded-full p-3 shadow-lg transition-colors duration-200">
          <ArrowUpIcon className="h-5 w-5" />
        </button>
      )}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-4 sm:p-8 border border-pink-200 mt-4 mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 text-center mb-8">Terms & Conditions</h1>
        <div className="space-y-10 text-gray-700">
          {/* Section Example with Divider and Icon */}
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><ArrowLeftIcon className="h-5 w-5 text-pink-600" /></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">Introduction</h2>
            </div>
            <p className="leading-relaxed">Welcome to Zenher! By accessing or using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully. If you do not agree with any part of these Terms, you must not use our website or services.</p>
          </section>
          <div className="border-t border-pink-100" />
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" /></svg></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">Healthcare Disclaimer</h2>
            </div>
            <p className="leading-relaxed"><strong>Zenher is not a medical provider.</strong> The information, content, and services provided on Zenher are for general informational and educational purposes only. They are not intended as, and do not constitute, medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on Zenher.</p>
            <p className="leading-relaxed mt-2">If you think you may have a medical emergency, call your doctor, go to the emergency department, or call emergency services immediately. Zenher is not intended for use in emergency or urgent situations.</p>
          </section>
          <div className="border-t border-pink-100" />
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" /></svg></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">User Responsibilities</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700">
              <li>You are responsible for the accuracy and completeness of any information you provide, including health data, symptoms, and personal details.</li>
              <li>Zenher does not guarantee the accuracy, completeness, or usefulness of any information provided through the platform.</li>
              <li>Decisions regarding your health and well-being should always be made in consultation with a qualified healthcare professional.</li>
            </ul>
          </section>
          <div className="border-t border-pink-100" />
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" /></svg></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">Eligibility</h2>
            </div>
            <p className="leading-relaxed">You must be at least 18 years old to use our services. By using Zenher, you represent and warrant that you meet this requirement and that all information you provide is accurate and complete.</p>
          </section>
          <div className="border-t border-pink-100" />
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" /></svg></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">User Data & Privacy</h2>
            </div>
            <p className="leading-relaxed">Zenher is committed to protecting your privacy and the confidentiality of your health information. Please review our Privacy Policy to understand how we collect, use, store, and protect your personal and health data. By using Zenher, you consent to the collection and processing of your data as described in our Privacy Policy.</p>
            <p className="leading-relaxed mt-2">We implement industry-standard security measures to safeguard your data, but no system can be completely secure. You are responsible for maintaining the confidentiality of your account credentials.</p>
          </section>
          <div className="border-t border-pink-100" />
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" /></svg></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">Consent to Data Processing</h2>
            </div>
            <p className="leading-relaxed">By using Zenher, you expressly consent to the collection, use, and processing of your personal and health-related data for the purposes of providing and improving our services. You may withdraw your consent at any time by discontinuing use of our services and contacting us as described in our Privacy Policy.</p>
          </section>
          <div className="border-t border-pink-100" />
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" /></svg></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">Prohibited Activities</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Using our website or services for unlawful, harmful, or fraudulent purposes.</li>
              <li>Distributing viruses, malware, or other harmful code.</li>
              <li>Attempting to gain unauthorized access to our systems or data, or disrupting the operation of our website.</li>
              <li>Impersonating any person or entity, or misrepresenting your affiliation with any person or entity.</li>
            </ul>
          </section>
          <div className="border-t border-pink-100" />
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" /></svg></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">Intellectual Property Rights</h2>
            </div>
            <p className="leading-relaxed">All content, including but not limited to articles, graphics, logos, and software, is the property of Zenher and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or modify our content without prior written permission.</p>
          </section>
          <div className="border-t border-pink-100" />
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" /></svg></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">Accounts and Security</h2>
            </div>
            <p className="leading-relaxed">To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.</p>
          </section>
          <div className="border-t border-pink-100" />
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" /></svg></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">Purchases, Payments, and Refunds</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Products or services offered for sale on our website are subject to availability and may change without notice.</li>
              <li>All payments are processed securely via third-party payment providers. We do not store your payment information.</li>
              <li>Refund policies will be clearly stated on relevant product or service pages. Please review them before making a purchase.</li>
            </ul>
          </section>
          <div className="border-t border-pink-100" />
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" /></svg></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">Limitation of Liability</h2>
            </div>
            <p className="leading-relaxed">To the fullest extent permitted by law, Zenher and its affiliates, officers, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of, or inability to use, our website or services, including but not limited to any errors or omissions in content, or any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via Zenher.</p>
            <p className="leading-relaxed mt-2">We do not guarantee uninterrupted or error-free access to our website and are not liable for any disruptions or technical issues.</p>
          </section>
          <div className="border-t border-pink-100" />
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" /></svg></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">Third-Party Links and Services</h2>
            </div>
            <p className="leading-relaxed">Our website may contain links to third-party websites or services. Zenher is not responsible for the content, privacy practices, or accuracy of any external sites. Accessing third-party sites is at your own risk.</p>
          </section>
          <div className="border-t border-pink-100" />
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" /></svg></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">Modifications to Terms</h2>
            </div>
            <p className="leading-relaxed">Zenher reserves the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. We encourage you to review this page regularly for updates. Continued use of our website and services constitutes acceptance of any changes.</p>
          </section>
          <div className="border-t border-pink-100" />
          <section>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" /></svg></span>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-800">Contact Us</h2>
            </div>
            <p className="leading-relaxed">If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:info@zenher.in" className="text-pink-600 underline hover:text-pink-800 transition-colors duration-200">info@zenher.in</a>.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
