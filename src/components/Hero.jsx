import React from "react";
import logo from "../assets/zenher-logo.png"

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden p-4 sm:p-6 lg:p-14 ">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-16 left-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute top-32 right-12 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-15 animate-float-medium"></div>
        <div className="absolute bottom-32 left-12 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full opacity-20 animate-float-slow-reverse"></div>
        <div className="absolute bottom-16 right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-15 animate-float-medium-reverse"></div>
        
        {/* Animated Lines - Hidden on mobile for cleaner look */}
        <svg className="absolute top-0 left-0 w-full h-full hidden md:block" viewBox="0 0 1920 1080" fill="none">
          <defs>
            <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0 200 Q 480 100 960 200 T 1920 200" stroke="url(#line-gradient)" strokeWidth="2" fill="none" className="animate-draw-line" />
          <path d="M0 800 Q 480 700 960 800 T 1920 800" stroke="url(#line-gradient)" strokeWidth="2" fill="none" className="animate-draw-line-reverse" />
        </svg>
        
        {/* Moving Dots Grid - Reduced on mobile */}
        <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 opacity-5 sm:opacity-10">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1 h-1 sm:w-2 sm:h-2 bg-indigo-500 rounded-full animate-pulse" style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}></div>
          ))}
        </div>
      </div>

      {/* Left: Text & CTA */}
      <div className="flex-1 z-10 flex flex-col justify-center items-center lg:items-start space-y-6 sm:space-y-8 lg:space-y-10 max-w-2xl px-2 sm:px-4 lg:px-0 mt-4 sm:mt-6 lg:mt-0">
        <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
          <h1 className="text-3xl mt-10 sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-slate-800 tracking-tight">
            Welcome to{" "}
            <span className="font-bold text-cyan-500">
              Zenher
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-slate-600 max-w-lg sm:max-w-xl leading-relaxed font-light tracking-wide px-2 sm:px-0">
            Your trusted platform for women's health, offering seamless tracking of periods, ovulation, and pregnancy, with AI-powered insights to guide your journey.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto justify-center lg:justify-start mt-4 sm:mt-6">
          <a
            href="https://nas.io/zenher"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-cyan-500 text-white font-semibold rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl shadow-lg sm:shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:from-indigo-700 hover:to-purple-700 transform-gpu"
          >
            <span className="mr-2">Join our community</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="/about"
            className="group inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white/90 backdrop-blur-sm text-slate-700 font-semibold rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl border-2 border-slate-200 hover:border-slate-300 transition-all duration-500 hover:scale-105 hover:bg-white/95 shadow-lg sm:shadow-xl"
          >
            Learn more
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 mt-6 sm:mt-8">
          <span className="text-sm text-slate-500 font-medium hidden sm:block">Follow us:</span>
          <div className="flex space-x-3 sm:space-x-4">
            {/* Instagram */}
            <a
              href="https://instagram.com/zenher.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-pink-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/zenherhealth"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/zenher"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@realzenher"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-red-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* TikTok */}
          
          </div>
        </div>
      </div>

      {/* Right: Hero Image & Floating Elements */}
      <div className="flex-1 relative flex items-center justify-center mt-8 sm:mt-10 lg:mt-0 min-w-[240px] sm:min-w-[280px] lg:min-w-[400px] px-2 sm:px-4 lg:px-0">
        {/* Premium Background Shape */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-full blur-2xl sm:blur-3xl opacity-60 animate-pulse-slow"></div>
        
        {/* Geometric Frame - Hidden on mobile for cleaner look */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 border-2 border-gradient-to-r from-indigo-300 to-purple-300 rounded-3xl rotate-12 animate-rotate-slow hidden sm:block"></div>
        
        {/* Hero Image */}
        <img
          src={logo}
          alt="Zenher Wellness Platform"
          className="relative z-10 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover object-center border-3 sm:border-4 lg:border-8 border-white/90 backdrop-blur-sm animate-fadeIn"
        />
        
        {/* Premium Floating UI Elements - Simplified on mobile */}
        <div className="absolute left-2 sm:left-4 lg:left-4 top-8 sm:top-12 lg:top-16 flex items-center space-x-2 sm:space-x-3 lg:space-x-4 animate-float-medium z-20 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/50">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQEvGiUys4VRaQ/profile-displayphoto-shrink_800_800/B56ZYoH4UDHQAg-/0/1744429879588?e=1758153600&v=beta&t=9QP8M3XbA03jRtiWYXwUop_r1fx-ZD6UpLu5qub5x40" alt="Shurti Mishra" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 rounded-full border-2 sm:border-3 border-white shadow-md sm:shadow-lg" />
          <div className="hidden sm:block">
            <p className="text-xs sm:text-sm font-semibold text-slate-800">Join Now</p>
            <p className="text-xs text-slate-500">Zenher Community</p>
          </div>
        </div>
        
        <div className="absolute right-2 sm:right-4 lg:right-4 bottom-8 sm:bottom-12 lg:bottom-16 flex items-center space-x-2 sm:space-x-3 lg:space-x-4 animate-float-medium-reverse z-20 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/50">
          <div className="hidden sm:block text-right">
            <p className="text-xs sm:text-sm font-semibold text-slate-800">+100 members</p>
            <p className="text-xs text-slate-500">Active community</p>
          </div>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQEpQYOp1NEsSA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732224370539?e=1758153600&v=beta&t=Nc_3VU9mhZkLeXo1VgIKaC8crB9JiXqtfYnyNynj0HQ" alt="Community Member" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 rounded-full border-2 sm:border-3 border-white shadow-md sm:shadow-lg" />
        </div>
        
        {/* Premium Decorative Elements - Reduced on mobile */}
        <div className="absolute top-4 sm:top-8 right-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full shadow-md sm:shadow-lg animate-pulse z-20"></div>
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full shadow-md sm:shadow-lg animate-pulse z-20"></div>
        <div className="absolute top-1/2 left-4 sm:left-8 lg:left-12 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-md sm:shadow-lg animate-pulse z-20"></div>
        <div className="absolute top-1/3 right-3 sm:right-6 lg:right-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full shadow-md sm:shadow-lg animate-pulse z-20"></div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        
        @keyframes floatSlowReverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        .animate-float-slow-reverse {
          animation: floatSlowReverse 8s ease-in-out infinite;
        }
        
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-medium {
          animation: floatMedium 5s ease-in-out infinite;
        }
        
        @keyframes floatMediumReverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .animate-float-medium-reverse {
          animation: floatMediumReverse 5s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        
        @keyframes rotateSlow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-rotate-slow {
          animation: rotateSlow 20s linear infinite;
        }
        
        @keyframes drawLine {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        .animate-draw-line {
          animation: drawLine 3s ease-out forwards;
          stroke-dasharray: 0 1000;
        }
        
        @keyframes drawLineReverse {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        .animate-draw-line-reverse {
          animation: drawLineReverse 3s ease-out 1s forwards;
          stroke-dasharray: 0 1000;
        }
      `}</style>
    </section>
  );
};

export default Hero;
