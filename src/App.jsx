import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './Pages/Home';
import About from './Pages/Aboutus';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Whatsapp from './components/Whatsapp';
import Productdetail from './components/Productdetails';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Productdetail />} />
        </Routes>
        <Footer />
        <Whatsapp />
      </Router>
    </HelmetProvider>
  );
};

export default App;
