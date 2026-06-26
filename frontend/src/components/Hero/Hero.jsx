import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Visual lighting mask layers */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          ENGINEERING EXTRAORDINARY <br />
          WATER EXPERIENCES
        </h1>

        <p className="hero-subtitle">
          Your Turnkey Partner for Musical & Multimedia Fountains across India
        </p>

        <div className="hero-btn-group">
          <a href="#projects" className="btn btn-primary">
            View Major Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Request A Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;