import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Pages/Home';
import About from './Pages/Aboutus';
import Products from './Pages/Products';
import Health from './Pages/Health';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Article from './Pages/Article';
import Tools from "./Pages/Tools"
const App = () => {
  return (
    <HelmetProvider>
    <div className='pt-8  bg-gradient-to-r from-pink-100 to-purple-200'>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/health" element={<Health />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </HelmetProvider>
  );
};

export default App;
