import React from 'react';
import './Logo.css';
import Brain from './brain.png';
import Tilt from 'react-tilt';

const Logo = () => {
  return (
    <div className='logo-container'>
      <Tilt className="Tilt" options={{ max : 25 }}>
        <div className="Tilt-inner"><img alt='logo' src={Brain}/></div>
      </Tilt>
    </div>
  );
}

export default Logo;