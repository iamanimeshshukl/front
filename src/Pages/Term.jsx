import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen pt-12  bg-pink-50 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 border border-pink-200"
      >
        <h1 className="text-4xl font-bold text-pink-600 text-center mb-6">Terms & Conditions</h1>
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-pink-800">Introduction</h2>
            <p>Welcome to Zenher! Our website and services are designed to support your wellness journey. By accessing or using our website, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using our website and services.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-pink-800">Use of Our Website</h2>
            <p>Zenher provides health, wellness, and lifestyle content for informational purposes only. The information on this website should not be considered medical advice. Always consult a qualified healthcare provider before making decisions regarding your health and well-being.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-pink-800">Eligibility</h2>
            <p>You must be at least 18 years old to use our services. By using our website, you confirm that the information you provide is accurate and complete.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-pink-800">Prohibited Activities</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Using our website for unlawful purposes.</li>
              <li>Distributing viruses or other harmful code.</li>
              <li>Attempting to gain unauthorized access to our website or disrupting its operation.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-pink-800">Health Disclaimer</h2>
            <p>The content provided on Zenher is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
            <p>Always seek the advice of a healthcare professional before making changes to your diet, exercise, or health routine.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-pink-800">Intellectual Property Rights</h2>
            <p>All content, including articles, graphics, logos, and software, is the property of Zenher and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or modify our content without prior written permission.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-pink-800">Accounts and Security</h2>
            <p>To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for any activity conducted under your account.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-pink-800">Purchases, Payments, and Refunds</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Products or services offered for sale on our website are subject to availability.</li>
              <li>Prices may change without notice.</li>
              <li>Payments are processed securely via third-party payment providers.</li>
              <li>Refund policies will be clearly stated on relevant product or service pages.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-pink-800">Limitation of Liability</h2>
            <p>Zenher is not responsible for any injuries, health issues, or damages resulting from the use of our website or reliance on any information provided.</p>
            <p>We do not guarantee uninterrupted access to our website and are not liable for any disruptions or errors.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-pink-800">Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. Zenher is not responsible for the content, privacy practices, or accuracy of any external sites.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-pink-800">Privacy Policy</h2>
            <p>Your use of Zenher is also governed by our Privacy Policy, which details how we collect, use, and protect your personal information.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-pink-800">Changes to These Terms</h2>
            <p>Zenher reserves the right to update or modify these Terms and Conditions at any time. We encourage you to review this page regularly for updates.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-pink-800">Contact Us</h2>
            <p>If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:zenherhealth@gmail.com" className="text-pink-600 underline">info@zenher.in</a>.</p>
          </section>
        </div>
        <div className="mt-6 text-center">
        
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
