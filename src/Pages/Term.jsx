import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

const PrivacyPolicy = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-16 bg-pink-50 flex flex-col items-center justify-center px-2 sm:px-6 relative">
      {/* Sticky Back Button */}
      <a
        href="/"
        className="fixed top-4 left-4 z-50 flex items-center bg-white/90 hover:bg-pink-100 border border-pink-200 shadow-md rounded-full px-3 py-2 text-pink-600 font-semibold transition-colors duration-200 backdrop-blur-md"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" /> Back
      </a>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-50 bg-pink-600 hover:bg-pink-700 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </button>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-4 sm:p-8 border border-pink-200 mt-4 mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 text-center mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Last Updated: September 7, 2025
        </p>

        <div className="space-y-10 text-gray-700">
          {/* Intro */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-800 mb-2">
              Introduction
            </h2>
            <p className="leading-relaxed">
              This Privacy Policy explains how <strong>Zenher</strong> (“we”,
              “us”, or “our”) collects, uses, stores, and protects your personal
              data, including sensitive personal health data, when you use our
              mobile application (“App”). By using the App, you agree to the
              terms of this Privacy Policy.
            </p>
            <p className="leading-relaxed mt-2">
              We are committed to protecting your privacy and ensuring data
              security in accordance with the{" "}
              <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>{" "}
              and the principles of the{" "}
              <strong>Ayushman Bharat Digital Health Mission (ABDHM)</strong>.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-800 mb-2">
              1. Data Collection and Purpose
            </h2>
            <p>
              We follow the principle of data minimization, collecting only what
              is necessary with your explicit and informed consent.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Registration Data:</strong> Name, phone number, email,
                and account details.
              </li>
              <li>
                <strong>Health Data:</strong> Medical history, symptoms,
                prescriptions, lab reports (Sensitive Personal Data).
              </li>
              <li>
                <strong>Usage Data:</strong> Features you use, time spent in the
                app.
              </li>
              <li>
                <strong>Technical Data:</strong> Device info, IP address,
                operating system.
              </li>
            </ul>
          </section>

          {/* Data Usage */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-800 mb-2">
              2. How We Use Your Data
            </h2>
            <ul className="list-disc pl-6">
              <li>To provide and maintain our services.</li>
              <li>To personalize health insights for you.</li>
              <li>To communicate with you about your account and services.</li>
              <li>To improve the app’s performance and user experience.</li>
              <li>
                For research and analytics (using anonymized or pseudonymized
                data).
              </li>
              <li>To comply with legal and regulatory requirements.</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-800 mb-2">
              3. Data Sharing and Disclosure
            </h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>With Your Consent:</strong> e.g., sharing your health
                record with a doctor.
              </li>
              <li>
                <strong>With Service Providers:</strong> Cloud hosting,
                analytics, secure payment gateways (with strict confidentiality
                agreements).
              </li>
              <li>
                <strong>For Legal Compliance:</strong> When required by law or
                court orders.
              </li>
            </ul>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-800 mb-2">
              4. Your Rights under DPDP Act
            </h2>
            <ul className="list-disc pl-6">
              <li>Right to Access your personal data.</li>
              <li>Right to Correction of inaccurate data.</li>
              <li>Right to Erasure (Right to be Forgotten).</li>
              <li>Right to Withdraw Consent anytime.</li>
              <li>Right to Grievance Redressal.</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-800 mb-2">
              5. Data Security and Storage
            </h2>
            <ul className="list-disc pl-6">
              <li>Encryption in transit and at rest.</li>
              <li>Strict access controls for authorized personnel only.</li>
              <li>Secure servers located within India (DPDP compliance).</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-800 mb-2">
              6. Data Retention
            </h2>
            <p>
              We retain your data as long as your account is active or as needed
              to provide services. Once no longer required, data is securely
              deleted using approved methods.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-800 mb-2">
              7. Children’s Privacy
            </h2>
            <p>
              The Zenher App is not intended for individuals under 18. We do not
              knowingly collect data from children. If collected accidentally,
              we will delete it promptly.
            </p>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-800 mb-2">
              8. Updates to this Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will
              be effective immediately upon posting with a revised{" "}
              <strong>“Last Updated”</strong> date.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-800 mb-2">
              9. Grievance Redressal & Contact
            </h2>
            <p>
              If you have any questions, concerns, or complaints about this
              Privacy Policy or data handling, please contact us:
            </p>
            <p className="mt-2">
              📧{" "}
              <a
                href="mailto:info@zenher.in"
                className="text-pink-600 underline hover:text-pink-800 transition-colors duration-200"
              >
                info@zenher.in
              </a>
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
