import React from "react";

const AboutUs = () => {
  const honeycombImages = [
    { src: "https://res.cloudinary.com/denlloigs/image/upload/v1757251677/1000169182_1_vk80nk.jpg", alt: "Zenher Innovation" },
    { src: "https://res.cloudinary.com/denlloigs/image/upload/v1757251681/1000139165_vgjsn9.jpg", alt: "Zenher Growth" },
    { src: "https://res.cloudinary.com/denlloigs/image/upload/v1757251677/1000140148_gu3gjh.jpg", alt: "Zenher Community" },
    { src: "https://res.cloudinary.com/denlloigs/image/upload/v1757251681/1000139166_teqmax.jpg", alt: "Zenher Impact" },
  ];

  return (
    <div className=" text-gray-800 min-h-screen font-sans antialiased">

      {/* Our Mission Section */}
      <section
        id="story"
        className="py-20 px-6 md:px-20 bg-gradient-to-r from-pink-50 to-purple-200  text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Our <span className="text-pink-600">Story</span>
        </h2>
        <p className="max-w-4xl mx-auto text-xl text-gray-700 leading-relaxed font-light">
          Zenher's journey began within the vibrant ecosystem of HBTU Kanpur, where three students from diverse disciplines united around a shared mission: to transform women's healthcare in India. Animesh Shukla, from Electrical Engineering, driven by a passion for tech and social impact, had been exploring AI and IoT solutions in health when he identified a critical gap—digital healthcare for women remained vastly underserved.

          What started as a college project focused on menstrual awareness began to evolve. Animesh soon collaborated with Prakhar Singh, a Chemical Engineering student and systems thinker passionate about building scalable tech. With Prakhar's help, Zenher gained a solid technological and operational backbone.

          The final piece came with Shruti, a thoughtful and empathetic student from Food Technology. With a natural talent for communication and a strong sense of emotional design, she ensured that Zenher spoke directly to women's real needs. Shruti's influence helped shape the platform's user-first, wellness-focused approach.

          Together, this trio transformed a simple idea into a robust FemTech startup— combining AI-powered period tracking, doctor consultations, wellness product recommendations, and a women's health search engine.

          Zenher is more than an app. It's a movement born from purpose, empathy, and innovation—crafted to make healthcare more inclusive, private, and empowering for every woman. What started in classrooms and college labs is now impacting lives across campuses, households, and soon, across the nation.
        </p>
      </section>

      {/* Our Story Section */}
      <section
        className="py-20 px-6 md:px-20 bg-gradient-to-r from-pink-50 to-purple-200  flex flex-col lg:flex-row-reverse items-center gap-16 max-w-7xl mx-auto"
      >
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Our <span className="text-pink-600">Vision </span> Behind Zenher
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The lack of awareness and personalized solutions inspired us to reimagine how period and fertility tools work. Zenher isn't just an app—it's a revolution. With features like AI-powered cycle predictions, irregularity detection, and real-time consultations with licensed gynecologists, we're bridging the gap between digital health and real-world care.

            We're also building hybrid tools—like printable planners, Notion templates, and wearable integrations—to respect every user's lifestyle. At Zenher, we believe healthcare should feel like a conversation, not a chore.
          </p>
        </div>
        <div className="lg:w-1/2 relative flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/denlloigs/image/upload/v1757251705/1000195927_nrbdtw.jpg"
            alt="Illustrating the founding vision of Zenher"
            className="rounded-2xl shadow-2xl ring-4 ring-pink-100 transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </section>

      {/* --- Our Journey: Overlapping Bubbles Gallery (Updated with size adjustments) --- */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-pink-50 to-purple-200 " id="journey">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-20">
          Our Journey in <span className="text-pink-600">Moments</span>
        </h2>

        <div className="flex justify-center items-center flex-col md:flex-row">
          {honeycombImages.map((image, index) => (
            <div
              key={index}
              className={`
                relative group rounded-full flex-shrink-0 
                w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96  /* Increased size for larger screens */
                border-4 border-white shadow-lg
                ${index > 0 ? `-mt-12 md:-mt-0 md:-ml-16 lg:-ml-20` : ''} /* Adjusted negative margins for overlap */
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 rounded-full group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center p-4">
                <p className="text-white text-center text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt.split(' ')[1] || image.alt.split(' ')[0]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-20 max-w-3xl mx-auto text-lg leading-relaxed">
          From initial concepts to a thriving community, every step of Zenher's journey
          is guided by our dedication to women's well-being. These moments reflect our
          evolution, our commitment, and the growing impact we strive to make.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-20 bg-pink-600 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Begin Your Health Journey
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90 font-light">
          Download Zenher today and gain personalized insights into your body,
          connect with a supportive community, and take control of your well-being.
        </p>
        <button
          className="bg-white text-pink-600 font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:bg-pink-100 hover:scale-105 transition-all duration-300 transform"
        >
          Get the App
        </button>
      </section>
    </div>
  );
};

export default AboutUs;