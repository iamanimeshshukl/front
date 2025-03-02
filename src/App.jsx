import React, { useState, useEffect, lazy, Suspense, memo } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 🚀 Preload Main Pages (No Delay)
import Home from "./Pages/Home";
import About from "./Pages/Aboutus";
import Products from "./Pages/Products";

// 🛠 Lazy Load Non-Essential Pages
const Health = lazy(() => import("./Pages/Health"));
const Article = lazy(() => import("./Pages/Article"));
const Tools = lazy(() => import("./Pages/Tools"));

// Memoized Components for Performance
const MemoizedNavbar = memo(Navbar);
const MemoizedFooter = memo(Footer);

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
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src="/smart.png"
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
    // If navigating away from home, hide preloader
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
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/health" element={<Health />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/article/:id" element={<Article />} />
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
