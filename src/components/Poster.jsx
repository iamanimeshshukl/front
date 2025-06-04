import React from 'react';
import zenherHero from '../assets/x.png';

const Poster = () => {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <img src={zenherHero} alt="Zenher Hero" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }} />
    </div>
  );
};

export default Poster;
