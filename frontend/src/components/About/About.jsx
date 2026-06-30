import React from 'react';
import './About.css';
import about from '../../assets/about.jpeg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="abt-container">

        <div className="abt-left">
          <span className="abt-subtitle">Established 2012</span>
          <h2 className="abt-title">
            About <span className="abt-title-accent">Water Vision</span>
          </h2>
          <div className="abt-divider" />

          <div className="abt-profile">
            <p className="abt-para highlight">
              Water Vision Fountains is a leading Indian company specialising in the design,
              manufacturing, installation, programming, and maintenance of Musical, Dancing,
              Interactive, Floating, and Multimedia Fountain Systems.
            </p>

            <p className="abt-para">
              Headquartered in Kerala, we have successfully executed prestigious fountain
              projects across multiple states in India. Through continuous innovation and
              in-house technology development, we have established ourselves as the trusted
              solution provider for government departments, tourism projects, and commercial
              developments.
            </p>

            <p className="abt-para">
              With over a decade of experience we offer complete turnkey solutions — from
              initial concept layout and hydraulic engineering through to manufacturing,
              commissioning, and after-sales maintenance support.
            </p>
          </div>

          <div className="abt-stats-row">
            <div className="abt-stat-chip">
              <span className="abt-stat-num">12+</span>
              <span className="abt-stat-lbl">Years Active</span>
            </div>
            <div className="abt-stat-chip">
              <span className="abt-stat-num">200+</span>
              <span className="abt-stat-lbl">Projects</span>
            </div>
            <div className="abt-stat-chip">
              <span className="abt-stat-num">15+</span>
              <span className="abt-stat-lbl">States</span>
            </div>
          </div>
        </div>

        <div className="abt-right">
          <div className="image-wrapper">
            <img src={about} alt="Water Vision Fountains" className="about-img" />
            <div className="img-float-badge">
              <span className="badge-number">100%</span>
              <span className="badge-text">Turnkey</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
