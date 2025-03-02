import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-700 to-pink-500 text-white text-center py-16 px-6">
  <div className="container mx-auto max-w-3xl">
    <h2 className="text-4xl font-extrabold tracking-tight">Stay Ahead with Zenher</h2>
    <p className="mt-3 text-lg text-gray-200">
      Join our exclusive newsletter to receive expert insights, AI-driven health innovations, and personalized wellness tips.
    </p>
    <form className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
      <div className="relative w-full md:w-2/3">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-5 py-3 rounded-full shadow-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-pink-400"
        />
        <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">
          📩
        </span>
      </div>
      <button
        type="submit"
        className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition-all"
      >
        Subscribe Now 🚀
      </button>
    </form>
    
  </div>
</section>

    </div>
  )
}

export default Newsletter
