import { FaInstagram, FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import heroImg from "../assets/zenher-logo.png";


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-pink-100 to-orange-200 overflow-hidden">
      {/* Decorative Patterns */}
      {/* Circles */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-pink-300 rounded-full opacity-60 animate-float-slow" />
      <div className="absolute bottom-12 right-10 w-10 h-10 bg-blue-300 rounded-full opacity-50 animate-float-fast" />
      <div className="absolute top-1/2 left-4 w-6 h-6 bg-fuchsia-300 rounded-full opacity-40 animate-pulse" />
      {/* Squares */}
      <div className="absolute top-24 right-24 w-8 h-8 bg-yellow-300 rounded-lg opacity-40 animate-float-slow" />
      <div className="absolute bottom-24 left-1/3 w-12 h-12 bg-green-200 rounded-lg opacity-30 animate-float-fast" />
      {/* Hexagons (SVG) */}
      <svg className="absolute top-1/4 right-1/4 w-12 h-12 opacity-40 animate-spin-slow" viewBox="0 0 100 100"><polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="#a5b4fc" /></svg>
      <svg className="absolute bottom-10 left-1/4 w-8 h-8 opacity-30 animate-spin-reverse" viewBox="0 0 100 100"><polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="#f472b6" /></svg>
      {/* Glassy Card */}
      <div className="relative z-10 w-full max-w-6xl mx-auto rounded-3xl bg-white/70 backdrop-blur-lg shadow-2xl px-2 sm:px-8 py-6 sm:py-14 flex flex-col min-h-[70vh]">
        <div className="flex flex-col md:flex-row items-center justify-between flex-1 gap-8">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left relative z-10 px-2 sm:px-0">
            {/* SVG Lines - hide on mobile */}
            <svg className="hidden sm:block absolute -top-10 -left-10 w-[250px] h-[250px] opacity-30 -z-10" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,300 Q175,100 350,300" stroke="#f472b6" strokeWidth="2" fill="none" />
              <path d="M0,320 Q175,120 350,320" stroke="#818cf8" strokeWidth="2" fill="none" />
            </svg>
            <span className="text-xs text-gray-400 mb-2 mt-2 sm:mt-0">We are proud of the work we've done.</span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight mt-8 xs:mt-10 sm:mt-0">
              Welcome to <br className="hidden xs:inline" /> Zenher Family
            </h1>
            <p className="text-gray-600 mb-6 max-w-md text-base sm:text-lg">Zenher is your trusted platform for women’s health, offering seamless tracking of periods, ovulation, and pregnancy, with AI-powered insights to guide your journey.</p>
            <a href="https://nas.io/zenher" className="inline-block w-full sm:w-auto px-7 py-3 rounded-full bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition text-base text-center mb-4 sm:mb-0">Join Our Community</a>
            {/* Social Icons - show on mobile below button */}
            <div className="flex items-center justify-center gap-4 mt-4 sm:hidden">
              <a href="https://wa.me/7310212507" target="_blank" rel="noopener noreferrer" className="hover:text-green-600"><FaWhatsapp size={22} /></a>
              <a href="https://x.com/zenherofficial" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaXTwitter size={22} /></a>
              <a href="https://www.instagram.com/zenher.in" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600"><FaInstagram size={22} /></a>
              <a href="https://www.linkedin.com/company/zenher/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedinIn size={22} /></a>
            </div>
          </div>
          {/* Right Content - Logo/Image with Shape */}
          <div className="flex-1 flex items-center justify-center relative min-h-[180px] sm:min-h-[320px] mt-8 md:mt-0">
            {/* Colored Shape - smaller on mobile */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-72 bg-pink-200 rounded-3xl z-0" />
            {/* Logo/Image */}
            <img src={heroImg} alt="Zenher Logo" className="relative z-10 w-32 h-32 sm:w-60 sm:h-72 object-contain rounded-2xl shadow-xl border-4 border-white bg-white/80 p-2" />
            {/* Floating Hexagons - hide on mobile */}
            <div className="hidden sm:block absolute top-8 right-8 w-6 h-6 bg-pink-400 rounded-lg rotate-12 opacity-80" />
            <div className="hidden sm:block absolute bottom-8 left-8 w-4 h-4 bg-blue-400 rounded-lg rotate-12 opacity-80" />
            <div className="hidden sm:block absolute top-1/2 left-1/2 w-3 h-3 bg-fuchsia-400 rounded-lg rotate-12 opacity-80" />
          </div>
        </div>
        {/* Scroll Down Indicator - hide on mobile */}
        <div className="hidden sm:flex flex-col items-center mt-8">
          <span className="text-gray-400 text-xs mb-1">Scroll down</span>
          <div className="w-1 h-6 bg-pink-300 rounded-full animate-bounce" />
        </div>
        {/* Social Icons Vertical - desktop only */}
        <div className="hidden sm:flex flex-col gap-4 items-center absolute right-8 top-1/2 -translate-y-1/2 z-20">
          <a href="https://wa.me/7310212507" target="_blank" rel="noopener noreferrer" className="hover:text-green-600"><FaWhatsapp size={22} /></a>
          <a href="https://x.com/zenherofficial" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaXTwitter size={22} /></a>
          <a href="https://www.instagram.com/zenher.in" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600"><FaInstagram size={22} /></a>
          <a href="https://www.linkedin.com/company/zenher/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedinIn size={22} /></a>
        </div>
      </div>
    </section>
  );
}
