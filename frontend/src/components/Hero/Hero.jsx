import React from 'react';
import './Hero.css';

const bubbles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  size: Math.random() * 35 + 8,
  left: Math.random() * 100,
  delay: Math.random() * 6,
  duration: Math.random() * 8 + 6,
}));

const drops = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  height: Math.random() * 50 + 15,
  delay: Math.random() * 5,
  duration: Math.random() * 2 + 1.5,
  top: Math.random() * 70,
}));

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-bubbles">
        {bubbles.map(b => (
          <div
            key={b.id}
            className="bubble"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              bottom: 0,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-drops">
        {drops.map(d => (
          <div
            key={d.id}
            className="drop"
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              height: `${d.height}px`,
              animationDuration: `${d.duration}s`,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          India's Premier Fountain Engineers
        </div>

        <h1 className="hero-title">
          Engineering <span className="highlight-aqua">Extraordinary</span>
          <br />Water Experiences
        </h1>

        <p className="hero-subtitle">
          Your turnkey partner for Musical, Dancing &amp; Multimedia Fountains.
          In-house technology. Nationwide delivery. Landmark installations.
        </p>

        <div className="hero-btn-group">
          <a href="#services" className="btn btn-primary">Explore Services</a>
          <a href="#contact" className="btn btn-secondary">Request A Quote</a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">12+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">200+</span>
          <span className="stat-label">Projects Delivered</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">15+</span>
          <span className="stat-label">States Covered</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Turnkey Solutions</span>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span className="scroll-label">Scroll</span>
      </div>

      <svg
        className="hero-wave"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,40 1440,50 L1440,100 L0,100 Z" />
      </svg>
    </div>
  );
};

export default Hero;
