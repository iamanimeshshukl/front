import React from 'react'
import About from "../components/Aboutus"
//import Infro from "../components/Infro"
import { Helmet } from 'react-helmet-async';
const Aboutus = () => {
  return (
    <div>
        <Helmet>
        <meta name="description" content="Learn more about Annanta Pharmaceuticals and our mission to improve healthcare worldwide." />
        <meta property="og:title" content="About Us - Annanta Pharmaceuticals" />
        <meta property="og:description" content="Discover how Annanta Pharmaceuticals is transforming the healthcare industry." />
        <meta property="og:type" content="website" />
      </Helmet>
      <About />
      </div>
  )
}

export default Aboutus
