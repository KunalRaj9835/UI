
'use client';

import React from 'react';
import Image from 'next/image';
import './Hero.css';

const Hero = ({
  title = "Unified platform for systematic trading and learning",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  buttonText = "Join Waitlist",
  onButtonClick
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}) => {
  const handleButtonClick = () => {
    onButtonClick ? onButtonClick() : window.location.href = '/join-waitlist';
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
        <button 
          className="hero-button"
          onClick={handleButtonClick}
          type="button"
        >
          {buttonText}
        </button>
      </div>
      
      <div className="hero-image-container">
        <Image
          src="/hero.png"
          alt="Trading platform interface"
          width={800}
          height={480}
          priority
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;

