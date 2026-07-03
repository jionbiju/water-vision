import React from 'react';
import './Services.css';
import img1 from '../../assets/services/Musical_Fountains.png';
import img2 from '../../assets/services/Dancing Fountains.jpg';
import img6 from '../../assets/services/Dry Deck Fountains.png';
import img3 from '../../assets/services/Multimedia Fountains.jpeg';
import img4 from '../../assets/services/Floating Fountains.jpeg';
import img5 from '../../assets/services/Interactive Fountains.png';
const serviceList = [
  {
    title: "Musical Fountains",
    desc: "Choreographed water displays perfectly timed to musical rhythms using proprietary automation software.",
    image: img1
  },
  {
    title: "Dancing Fountains",
    desc: "Fluid water movements creating beautiful continuous geometric patterns with precise multi-nozzle control.",
    image: img2
  },
  {
    title: "Multimedia Fountains",
    desc: "Spectacular sensory setups combining water, lasers, projection video curtains, and colourful lighting.",
    image: img3
  },
  {
    title: "Floating Fountains",
    desc: "Heavy-duty floating platform setups engineered for natural lakes, reservoirs, and deep water bodies.",
    image: img4
  },
  {
    title: "Interactive Fountains",
    desc: "Engaging public fixtures responsive to motion sensors, step pads, or touchpads for community play.",
    image: img5
  },
  {
    title: "Dry Deck Fountains",
    desc: "Architectural floor-flush nozzles with underground drainage safe for pedestrian walkways and plazas.",
    image: img6
  }
  
];

const Services = () => (
  <section className="services-section" id="services">
    <div className="services-container">

      <div className="services-header">
        <span className="services-badge">What We Do</span>
        <h2 className="services-main-title">Products &amp; Services</h2>
        <p className="services-lead-text">
          From iconic municipal installations to customised private projects, we deliver
          complete engineering precision across every scale of water structure.
        </p>
      </div>

      <div className="services-grid">
        {serviceList.map((service, i) => (
          <div className="service-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="service-img-wrapper">
              <img src={service.image} alt={service.title} className="service-photo" loading="lazy" />
              <div className="service-gradient-overlay" />
              <div className="service-img-ripple">
                <span /><span /><span />
              </div>
            </div>
            <div className="service-content-block">
              <h3 className="service-item-title">{service.title}</h3>
              <p className="service-item-desc">{service.desc}</p>
              <a href="#contact" className="service-action-link">
                Inquire Scope
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="arrow-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Services;
