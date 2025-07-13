import React from "react";

import OurMission from "../components/OurMission";  
import OurStory from "../components/OurStory";
import OurTeam from "../components/OurTeam";

/**
 * About Us Page Component
 * 
 * This component renders the main about us page with sections for:
 * - Newsletter signup
 * - Company mission
 * - Company story
 * - Team members
 */
const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-200 text-gray-900 min-h-screen">
      

      {/* Mission Section */}
      <OurMission />

      {/* Company Story Section */}
      <OurStory />

      {/* Team Section */}
      <OurTeam />
    </div>
  );
};

export default AboutUs;
