import React from 'react'
import Orangeleaf from '../components/Orangeleaf.jsx'
import Poster from '../components/Poster.jsx'
const Products = () => {
  return (
    <div className='p-12'>
      <br></br>
      <h2
        className="relative flex flex-col items-center justify-center py-12 px-4 sm:px-6 text-3xl sm:text-4xl font-bold text-pink-600 mb-8 tracking-tight"
      >
        Discover Our Wellness Products
      </h2>
      <Poster />
      <Orangeleaf />
    </div>
  )
}

export default Products
