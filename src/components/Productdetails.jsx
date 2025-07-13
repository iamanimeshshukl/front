import React, { useEffect, useRef } from "react";
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
      "Track your pregnancy journey and monitor your baby's growth. Stay informed with insights tailored to each stage of pregnancy.",
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
      "Discover and shop for essential women's health products, including menstrual hygiene products, fertility kits, pregnancy essentials, and wellness supplements.",
    imgSrc: ShoppingImg,
  },
];

const FloAppSection = () => {
  const sectionRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      // Parallax effect for features only
      featureRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top;
          const elementHeight = rect.height;
          const windowHeight = window.innerHeight;
          
          if (elementTop < windowHeight && elementTop > -elementHeight) {
            const progress = (windowHeight - elementTop) / (windowHeight + elementHeight);
            const translateY = (1 - progress) * 30;
            const opacity = Math.max(0.8, Math.min(progress * 1.2, 1));
            const scale = 0.95 + (progress * 0.05);
            
            ref.style.transform = `translateY(${translateY}px) scale(${scale})`;
            ref.style.opacity = opacity;
          } else {
            // Ensure elements are visible when not in viewport
            ref.style.opacity = 0.8;
            ref.style.transform = 'translateY(0px) scale(1)';
          }
        }
      });
    };

    // Initial call to set visibility
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-r mt-12 from-pink-50 to-purple-200 text-gray-900  px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-300 rounded-full opacity-15 blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - No Animation */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            <span className="text-pink-600">
              One App, Your Lifelong Companion
            </span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            From your first period to motherhood and beyond, we are here for you every step of the way.
          </p>
        </div>

        {/* Features Grid with Parallax */}
        <div className="space-y-12 lg:space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => featureRefs.current[index] = el}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 opacity-100 transition-all duration-1000 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Container with Enhanced Effects */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative group perspective-1000">
                  <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                    <img
                      src={feature.imgSrc}
                      alt={feature.title}
                      className="rounded-2xl shadow-2xl w-full max-w-md h-72 object-cover transition-all duration-500 transform group-hover:scale-110 group-hover:shadow-3xl"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 animate-pulse"></div>
                </div>
              </div>

              {/* Content Container with Enhanced Styling */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                        <FaCheckCircle className="text-pink-500 text-xl" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 leading-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        {feature.description}
                      </p>
                      {/* Hover effect line */}
                      <div className="w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 mt-4 transition-all duration-500 group-hover:w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloAppSection;
