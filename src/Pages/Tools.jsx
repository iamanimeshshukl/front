import React from 'react';
import Ovalucation from '../components/Ovalucation';
//import Mental from '../components/Mental';
import trackerImg from "../assets/Pregnant-woman.jpg";

const Tools = () => {
  return (
    <div className="pt-12">
      <br></br>
      <br></br>
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${trackerImg})` }}></div>
        <Ovalucation />
       
      </div>
    
  );
};

export default Tools;
