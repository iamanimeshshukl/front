import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './Pages/Home';
import About from './Pages/Aboutus';
import Products from './Pages/Products';
import Health from './Pages/Health';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Whatsapp from './components/Whatsapp';
import Productdetail from './components/Productdetails';
import Signin from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const App = () => {
  return (
    <HelmetProvider>
    <div className='bg-pink-50'>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/health" element={<Health />} />
          <Route path="/product/:id" element={<Productdetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </HelmetProvider>
  );
};

export default App;
