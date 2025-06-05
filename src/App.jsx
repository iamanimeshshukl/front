import React, { useState, useEffect, lazy, Suspense, memo } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
// 🚀 Preload Main Pages (No Delay)
import Home from "./Pages/Home";
import About from "./Pages/Aboutus";
import Products from "./Pages/Products";
import Term from "./Pages/Term";
import logo from "./assets/zenher-logo.png"
import KnowYourBody from "./Pages/KnowYourBody";
// 🛠 Lazy Load Non-Essential Pages
const Health = lazy(() => import("./Pages/Health"));
const Article = lazy(() => import("./Pages/Article"));
const Tools = lazy(() => import("./Pages/Tools"));

// Memoized Components for Performance
const MemoizedNavbar = memo(Navbar);
const MemoizedFooter = memo(Footer);
//import Whatsapp from './components/Whatsapp'
// 🚀 Preloader (Only on Home Refresh)
const Preloader = ({ onLoadingComplete }) => {
  useEffect(() => {
    gsap.fromTo(
      ".logo",
      { scale: 0, rotateY: 180, opacity: 0 },
      { scale: 1, rotateY: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    gsap.to(".logo", {
      opacity: 0,
      scale: 1.1,
      duration: 0.5,
      delay: 0.8,
      onComplete: onLoadingComplete,
    });
  }, [onLoadingComplete]);

  return (
    <div className="fixed overflow-hidden inset-0 flex items-center justify-center bg-gradient-to-r from-pink-50 to-purple-200 z-50">
      <img
        src={logo}
        alt="Loading Logo"
        className="logo w-40 h-40"
        style={{ filter: "drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.2))" }}
      />
    </div>
  );
};

// 🎬 Smooth Page Transitions
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeIn" } },
};

// 🚀 Fast Animated Page Load
const AnimatedRoutes = ({ showPreloader, setShowPreloader }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowPreloader(false);
    }
  }, [location.pathname, setShowPreloader]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen"
      >
        <HelmetProvider>
          <title>ZenHer - Women's Healthcare & Wellness</title>
          <meta name="description" content="ZenHer provides healthcare solutions for women, focusing on wellness, menstrual health, and reproductive care." />
          <meta name="keywords" content="women's health, menstrual care, reproductive health, wellness, ZenHer,Period tracker app, Women's health app, Menstrual cycle tracker, Best period tracking app, Ovulation tracker app, Fertility tracker for women, 
Menstrual health tracker, Free period tracker app, Pregnancy planning app, PMS symptom tracker, Period prediction app, Best fertility app, 
Cycle tracking app, Hormonal health app, Women's wellness tracker, Irregular period tracker, Birth control tracker, PCOS period tracker, 
Endometriosis tracking app, Period reminder app, Contraceptive tracking app, Hormonal balance tracker, Menstrual log app, Cycle syncing app, 
Pregnancy preparation app, Period flow tracker, Natural fertility tracker, Daily menstrual journal, Period tracker with AI, Best health app for women, 
Ovulation and pregnancy app, Women's cycle calendar, Best period reminder, Menstrual pain tracker, Safe days calculator, Female health monitoring app, 
Women's reproductive health app, Best PCOS tracking app, Mood tracking for periods, Smart period tracker, AI-based menstrual tracker, 
Women's health assistant, Intuitive cycle tracker, Personalized menstrual insights, Period tracker with predictions, Fertility awareness tracker, 
Menstrual symptoms analyzer, Holistic women's health app, Period tracker for teens, Menstrual tracking for wellness.
" />
          <meta name="author" content="ZenHer Team" />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="ZenHer - Women's Healthcare & Wellness" />
          <meta property="og:description" content="Revolutionizing women's healthcare with advanced solutions." />
          <meta property="og:image" content="https://zenher.in" />
          <meta property="og:url" content="https://zenher.in/" />
          <meta property="og:type" content="website" />
          
          {/* Twitter Card */}
          <meta name="twitter:title" content="ZenHer - Women's Healthcare & Wellness" />
          <meta name="twitter:description" content="Revolutionizing women's healthcare with advanced solutions." />
          <meta name="twitter:image" content="https://zenher.in/twitter-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
        </HelmetProvider>
       
      
        <Suspense fallback={<div className="text-center py-10">Zenher..</div>}>
          <Analytics />
          <SpeedInsights />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/health" element={<Health />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/termandconditions" element={<Term />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/articles/:id" element={<Article />} />
            <Route path="/body" element={<KnowYourBody />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  const location = window.location.pathname;
  const [showPreloader, setShowPreloader] = useState(location === "/");

  useEffect(() => {
    if (location === "/") {
      setShowPreloader(true);
    }
  }, [location]);

  return (
    <div className="pt-8 bg-gradient-to-r from-pink-50 to-purple-200 min-h-screen">
      {showPreloader && <Preloader onLoadingComplete={() => setShowPreloader(false)} />}
      {!showPreloader && (
        <Router>
          <MemoizedNavbar />
          <AnimatedRoutes showPreloader={showPreloader} setShowPreloader={setShowPreloader} />
          <MemoizedFooter />
        </Router>
      )}
    </div>
  );
};

export default App;
