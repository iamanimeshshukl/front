import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './Pages/Home';
import About from './Pages/Aboutus';
import Profile from './Pages/Profile';
import Contact from './Pages/Contact';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Whatsapp from './components/Whatsapp';
import Productdetail from './components/Productdetails';
import Signin from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const App = () => {
  return (
    <HelmetProvider>
    <div className='bg-gray-900'>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Productdetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </HelmetProvider>
  );
};

export default App;
