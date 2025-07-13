import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Animesh Shukla",
    title: "CEO & Founder",
    description: "Electrical Engineer and visionary driving the future of FemTech.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQElyVnYbG_UCQ/profile-displayphoto-crop_800_800/B56ZgCx5nIHYAI-/0/1752393295425?e=1758153600&v=beta&t=vUj_S2iLmHR9NIr8YbEirFQ6HJ7N9df0jr1W2tnQIoU",
    linkedin: "https://www.linkedin.com/in/animesh-shukl/",
  },
  {
    name: "Prakhar Singh",
    title: "Co-Founder & COO",
    description: "Chemical Engineer managing operations with precision and purpose.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEN1Pvn0YHe2g/profile-displayphoto-crop_800_800/B56Ze2WYgjHQAI-/0/1751111012023?e=1758153600&v=beta&t=0EsRzKKRK7jQGd_XAkOyhr47uFk9aBNf23GnLbrw9-k",
    linkedin: "https://www.linkedin.com/in/prakharsinghparkar/",
  },
  {
    name: "Shruti Mishra",
    title: "Chief Marketing Officer",
    description: "Food Technologist leading creative outreach and brand awareness.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEvGiUys4VRaQ/profile-displayphoto-shrink_800_800/B56ZYoH4UDHQAg-/0/1744429879588?e=1758153600&v=beta&t=9QP8M3XbA03jRtiWYXwUop_r1fx-ZD6UpLu5qub5x40",
    linkedin: "https://www.linkedin.com/in/shruti-mishra-2b0137276/",
  },
   {
    name: "Kartik Sharma",
    title: "Technical Lead",
    description: "Computer Science Engineer crafting innovative",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQEIFbxkOpUzoQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667328641704?e=1758153600&v=beta&t=1iFDVmsZjes4lcicIFYPYd0aiAQxNoshRkQjBWV2oWM",
    linkedin: "https://www.linkedin.com/in/kartixharma/",
  },
  {
    name: "Anshika Singh",
    title: "Data Analyst",
    description: "Statistics expert transforming data into actionable insights.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEpQYOp1NEsSA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732224370539?e=1758153600&v=beta&t=Nc_3VU9mhZkLeXo1VgIKaC8crB9JiXqtfYnyNynj0HQ",
    linkedin: "https://www.linkedin.com/in/anshika-singh-b85622327/",
  },
  {
    name: "Prashant Rathi ",
    title: "React Native Developer",
    description: "Mobile app developer creating seamless user experiences.",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQHQCeZDxT508A/profile-displayphoto-scale_200_200/B4DZgC1irgGgAY-/0/1752394250708?e=1758153600&v=beta&t=kqQ5mB6w-4Ubw_rwCmBjM5xo8Q6tHkPf-V1fGVcrL74",
    linkedin: "https://www.linkedin.com/in/prashantrathiii/",
  },
];

const OurTeam = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 bg-pink-600 bg-clip-text text-transparent">
            Meet Our Talented Team
          </h2>
          <div className="h-1 w-24 bg-pink-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            We’re a passionate group committed to redefining women’s healthcare through innovation and technology.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="relative group bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-indigo-600 p-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-indigo-600 font-medium mt-1">{member.title}</p>
                <p className="text-gray-600 mt-3 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
     
      </div>
    </section>
  );
};

export default OurTeam;
