import React from 'react'
import Hero from '../components/Hero'
//import Aboutus from "../components/Aboutus.jsx"
//import Items from '../components/Items.jsx'
//import Why from "../components/Why.jsx"
import Productdeatils from '../components/Productdetails.jsx'
import Review from "../components/Review.jsx"
//import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div className='bg-pink-50'>
      
      <Hero />
      
      <Productdeatils/>
      
      <Review/>
    </div>
  )
}

export default Home
