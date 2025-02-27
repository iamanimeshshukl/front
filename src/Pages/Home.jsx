import React from 'react'
import Hero from '../components/Hero'
import Tracker from "../components/Tracker.jsx"
//import Items from '../components/Items.jsx'
import Mentor from "../components/Mentor.jsx"
import Productdeatils from '../components/Productdetails.jsx'
import Review from "../components/Review.jsx"
//import Navbardummy from '../components/Navbardumy.jsx'
//import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div className='bg-gradient-to-r from-pink-100 to-purple-200'>
      <Hero />
      <Productdeatils/>
      <Tracker />
      <Mentor />
      <Review/>
    </div>
  )
}

export default Home
