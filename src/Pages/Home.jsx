import React from 'react'
import Hero from '../components/Hero'
import Tracker from "../components/Tracker.jsx"
//import Aboutus from '../components/Aboutus.jsx'
import Newsletter from "../components/Newsletter.jsx"
import Productdeatils from '../components/Productdetails.jsx'
import Review from "../components/Review.jsx"
//import Navbardummy from '../components/Navbardumy.jsx'
//import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div>
      <Hero />
      <Productdeatils/>
     <div className='w-screen'> <Tracker /></div>
      <Newsletter />
      <Review/>
     
    </div>
  )
}

export default Home
