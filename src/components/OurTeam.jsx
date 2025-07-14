import React from "react";
import { FaLinkedinIn, FaTwitter, FaGlobe } from "react-icons/fa";

const teamMembers = [
  {
    name: "Animesh Shukla",
    title: "CEO & Founder",
    description: "Electrical Engineer and visionary driving the future of FemTech with innovative solutions and strategic leadership.",
    img: "https://res.cloudinary.com/denlloigs/image/upload/v1752496931/animesh_soxiag.jpg",
    linkedin: "https://www.linkedin.com/in/animesh-shukl/",

    expertise: ["Strategic Leadership", "FemTech Innovation", "Business Development"]
  },
  {
    name: "Prakhar Singh",
    title: "Co-Founder & COO",
    description: "Chemical Engineer managing operations with precision and purpose, ensuring seamless execution of our mission.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEN1Pvn0YHe2g/profile-displayphoto-crop_800_800/B56Ze2WYgjHQAI-/0/1751111012023?e=1758153600&v=beta&t=0EsRzKKRK7jQGd_XAkOyhr47uFk9aBNf23GnLbrw9-k",
    linkedin: "https://www.linkedin.com/in/prakharsinghparkar/",
    twitter: "",
    website: "",
    expertise: ["Operations Management", "Process Optimization", "Team Leadership"]
  },
  {
    name: "Shruti Mishra",
    title: "Chief Marketing Officer",
    description: "Food Technologist leading creative outreach and brand awareness with innovative marketing strategies.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEvGiUys4VRaQ/profile-displayphoto-shrink_800_800/B56ZYoH4UDHQAg-/0/1744429879588?e=1758153600&v=beta&t=9QP8M3XbA03jRtiWYXwUop_r1fx-ZD6UpLu5qub5x40",
    linkedin: "https://www.linkedin.com/in/shruti-mishra-2b0137276/",
    twitter: "",
    website: "",
    expertise: ["Brand Strategy", "Digital Marketing", "Creative Direction"]
  },
  {
    name: "Kartik Sharma",
    title: "Technical Lead",
    description: "Computer Science Engineer crafting innovative solutions and leading technical excellence across our platform.",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQEIFbxkOpUzoQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667328641704?e=1758153600&v=beta&t=1iFDVmsZjes4lcicIFYPYd0aiAQxNoshRkQjBWV2oWM",
    linkedin: "https://www.linkedin.com/in/kartixharma/",
    twitter: "",
    website: "",
    expertise: ["Software Architecture", "Team Leadership", "Innovation"]
  },
  {
    name: "Anshika Singh",
    title: "Data Analyst",
    description: "Statistics expert transforming data into actionable insights that drive our strategic decisions.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEpQYOp1NEsSA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732224370539?e=1758153600&v=beta&t=Nc_3VU9mhZkLeXo1VgIKaC8crB9JiXqtfYnyNynj0HQ",
    linkedin: "https://www.linkedin.com/in/anshika-singh-b85622327/",
    twitter: "",
    website: "",
    expertise: ["Data Analytics", "Statistical Modeling", "Business Intelligence"]
  },
  {
    name: "Prashant Rathi",
    title: "React Native Developer",
    description: "Mobile app developer creating seamless user experiences with cutting-edge mobile technologies.",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQHQCeZDxT508A/profile-displayphoto-scale_200_200/B4DZgC1irgGgAY-/0/1752394250708?e=1758153600&v=beta&t=kqQ5mB6w-4Ubw_rwCmBjM5xo8Q6tHkPf-V1fGVcrL74",
    linkedin: "https://www.linkedin.com/in/prashantrathiii/",
    twitter: "",
    website: "",
    expertise: ["Mobile Development", "React Native", "UI/UX Design"]
  },
];

const cardBgColors = [
  "bg-gradient-to-br from-green-50 to-green-100",
  "bg-gradient-to-br from-pink-50 to-pink-100",
  "bg-gradient-to-br from-blue-50 to-blue-100",
  "bg-gradient-to-br from-yellow-50 to-yellow-100",
  "bg-gradient-to-br from-purple-50 to-purple-100",
  "bg-gradient-to-br from-orange-50 to-orange-100",
];

const OurTeam = () => {
  return (
    <section className="py-24 px-4 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
       
          <h2 className="text-5xl font-bold text-pink-600 mb-4">
            Meet Our <span className="text-pink-600">Team </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            We're a passionate group of innovators, engineers, and visionaries committed to redefining women's healthcare through cutting-edge technology and compassionate care.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 ${cardBgColors[idx % cardBgColors.length]}`}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Social Links */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <div className="flex space-x-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <FaLinkedinIn size={18} />
                      </a>
                    )}
                    {member.twitter && member.twitter !== "" && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 backdrop-blur-sm text-blue-500 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <FaTwitter size={18} />
                      </a>
                    )}
                    {member.website && member.website !== "" && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 backdrop-blur-sm text-green-600 p-3 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <FaGlobe size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-pink-600 font-semibold text-lg mb-4">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.description}</p>
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-gradient-to-r from-pink-50 to-purple-50 text-gray-700 text-xs font-medium rounded-full border border-pink-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default OurTeam;
