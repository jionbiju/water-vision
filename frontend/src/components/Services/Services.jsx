import React from 'react';
import './Services.css';

const serviceList = [
  {
    title: "Musical Fountains",
    desc: "Choreographed water displays perfectly timed to musical rhythms using proprietary automation software.",
    image: "https://images.unsplash.com/photo-1549877475-4c07ca26fe57?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Dancing Fountains",
    desc: "Fluid water movements creating beautiful continuous geometric patterns with precise multi-nozzle control.",
    image: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Multimedia Fountains",
    desc: "Spectacular sensory setups combining water, lasers, projection video curtains, and colourful lighting.",
    image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Floating Fountains",
    desc: "Heavy-duty floating platform setups engineered for natural lakes, reservoirs, and deep water bodies.",
    image: "https://images.unsplash.com/photo-1558236714-d1ae5030efc4?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Interactive Fountains",
    desc: "Engaging public fixtures responsive to motion sensors, step pads, or touchpads for community play.",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Dry Deck Fountains",
    desc: "Architectural floor-flush nozzles with underground drainage safe for pedestrian walkways and plazas.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Fountain Renovation",
    desc: "Complete overhaul, modernisation of manual valves, and conversion of aging pools into smart systems.",
    image: "https://images.unsplash.com/photo-1596249622995-2c8e053f3e09?q=80&w=600&auto=format&fit=crop"
  },
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
