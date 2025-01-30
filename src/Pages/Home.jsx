import React from 'react'
import Hero from '../components/Hero'
//import Aboutus from "../components/Aboutus.jsx"
//import Items from '../components/Items.jsx'
//import Video from "../components/Video.jsx"
import Productdeatils from '../components/Productdetails.jsx'
import Review from "../components/Review.jsx"
//import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div>
      
      <Hero />
      
      <Productdeatils/>
    
      <Review/>
    </div>
  )
}

export default Home
