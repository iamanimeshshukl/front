import React from 'react'
import Hero from '../components/Hero'
import Coverpage from "../components/Coverpage"
import Items from '../components/Items.jsx'
import Video from "../components/Video.jsx"
import Images from '../components/Images.jsx'
import Review from "../components/Review.jsx"
import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Home - Annanta Pharmaceuticals</title>
        <meta name="description" content="Welcome to Annanta Pharmaceuticals. We deliver innovative healthcare solutions." />
        <meta name="keywords" content="Pharmaceuticals, Healthcare, Medicine" />
        <meta property="og:title" content="Home - Annanta Pharmaceuticals" />
        <meta property="og:description" content="Explore innovative healthcare solutions with Annanta Pharmaceuticals." />
        <meta property="og:image" content="https://yourwebsite.com/path-to-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Hero />
      <Video />
      
      <br></br>
      <Items />
      <Images />
      <br/>
      <Coverpage />
      <br/>
      <Review/>
    </div>
  )
}

export default Home
