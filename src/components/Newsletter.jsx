import React from "react";

const JoinCommunity = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-b from-pink-100 to-purple-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-12 max-w-3xl mx-auto space-y-8 animate-fadeIn">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-purple-800 drop-shadow-md">
          Join Our <span className="text-pink-500">Women’s Wellness</span> Community
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto">
          Empower your health journey. Connect with inspiring women, share your story, and access trusted wellness resources.
        </p>
        <a
          href="https://nas.io/zenher"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Join Now
        </a>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes blob {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.2) translateY(-20px); }
        }
        .animate-blob {
          animation: blob 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default JoinCommunity;