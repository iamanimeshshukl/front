import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.warning("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} />
      <section 
        className="relative bg-purple-600 text-white text-center py-16 px-6 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight">Stay Ahead with Zenher</h2>
          <p className="mt-3 text-lg text-gray-200">
            Join our exclusive newsletter to receive expert insights, AI-driven health innovations, and personalized wellness tips.
          </p>
          <form className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4" onSubmit={handleSubscribe}>
            <div className="relative w-full md:w-2/3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-5 py-3 rounded-full shadow-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-pink-400"
              />
              <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">
                📩
              </span>
            </div>
            <button
              type="submit"
              className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-500 transition-all"
            >
              Subscribe Now 
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;