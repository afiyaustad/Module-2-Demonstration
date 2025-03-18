import React from 'react';
import './HeroSection.css'; // Import the CSS file for styling

const HeroSection = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Your gateway to amazing experiences.</p>
        <a href="#" className="btn btn-primary btn-lg">Get Started</a>
      </div>
    </header>
  );
};

export default HeroSection;