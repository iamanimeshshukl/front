import React from 'react'
//import Hero2 from '../components/Hero2'
import Tracker from "../components/Tracker.jsx"
//import Aboutus from '../components/Aboutus.jsx'
//import Newsletter from "../components/Newsletter.jsx"
import Productdeatils from '../components/Productdetails.jsx'
import Hero from '../components/Hero'
import Mentor from "../components/Mentor.jsx"
import Faq from '../components/Faq.jsx'
import Gallery from '../components/Gallery.jsx'
import Newsletter from '../components/Newsletter.jsx'
//import Navbardummy from '../components/Navbardumy.jsx'
//import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div>
      
      <Hero className="pt-[2cm]"/>
      <Productdeatils/>
     <div className='w-screen'> <Tracker /></div>
      <Mentor />
      <Gallery/>
      <br></br>
      <Newsletter/>
      <Faq/>
     
     
    </div>
  )
}

export default Home
