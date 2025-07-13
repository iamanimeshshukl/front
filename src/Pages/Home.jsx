import React from 'react'
//import Video from '../components/Video.jsx'
//import Tracker from "../components/Tracker.jsx"
//import Aboutus from '../components/Aboutus.jsx'
//import Ai from "../components/Ai.jsx"
import Productdeatils from '../components/Productdetails.jsx'
import Hero from '../components/Hero'
import Mentor from "../components/Mentor.jsx"
import Faq from '../components/Faq.jsx'
import Gallery from '../components/Gallery.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Free from '../components/Free.jsx'
//import Article from '../components/Article.jsx'
import Quiz from '../components/Quiz'

//import ArticleCard from '../components/ArticleCard.jsx'
//import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div className='overflow-hidden'>
      
      <Hero className="pt-[2cm]"/>
      <Productdeatils/>
      <Mentor />
      <Gallery/>
      <br></br>
      <Free/>
      <Newsletter/>
      <Faq/>
      <Quiz />
      
      
     
    </div>
  )
}

export default Home
