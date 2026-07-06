import './Services.css';
import { serviceItems } from '../../assets/data.js';

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
        {serviceItems.map((service, i) => (
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
