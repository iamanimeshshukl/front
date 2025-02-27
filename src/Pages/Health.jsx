import React from 'react';
import img1 from '../assets/istockphoto-1174426173-612x612.jpg';

const Health = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <img 
        src={img1} 
        alt="Health" 
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};

export default Health;