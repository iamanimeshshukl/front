import React from 'react'
import Video from '../components/Video.jsx'
import Tracker from "../components/Tracker.jsx"
//import Aboutus from '../components/Aboutus.jsx'
//import Newsletter from "../components/Newsletter.jsx"
import Productdeatils from '../components/Productdetails.jsx'
import Hero from '../components/Hero'
import Mentor from "../components/Mentor.jsx"
import Faq from '../components/Faq.jsx'
import Gallery from '../components/Gallery.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Free from '../components/Free.jsx'
import Article from '../components/Article.jsx'
import Quiz from '../components/Quiz'

//import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div>
      
      <Hero className="pt-[2cm]"/>
      <Productdeatils/>
     <div className='w-screen'> <Tracker /></div>
      <Mentor />
      <Video />
      <Article />
      <Gallery/>
      <br></br>
      <Newsletter/>
      <Quiz/>
      <Free/>
      
      <Faq/>
     
     
    </div>
  )
}

export default Home
