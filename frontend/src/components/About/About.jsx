import React from 'react';
import './About.css';
import about from '../../assets/about.jpeg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="abt-container">
        
        {/* Left Content Column */}
        <div className="abt-left">
          <span className="abt-subtitle">Established 2012</span>
          <h2 className="abt-title">About Us</h2>
          
          <div className="abt-profile">
            <p className="abt-para highlight">
              Water Vision Fountains is a leading Indian company specializing in the design, 
              manufacturing, installation, programming, and maintenance of Musical, Dancing, 
              Interactive, Floating, and Multimedia Fountain Systems.
            </p>
            
            <p className="abt-para">
              Headquartered in Kerala, we have successfully executed prestigious fountain 
              projects across multiple states in India. Through continuous innovation, engineering 
              excellence, and in-house technology development, the company has established itself 
              as a trusted solution provider for government departments, tourism projects, and 
              commercial developments.
            </p>
            
            <p className="abt-para">
              With more than a decade of experience in the industry, we offer complete turnkey 
              solutions—from initial concept layout and hydraulic engineering to manufacturing, 
              commissioning, and after-sales maintenance support.
            </p>
          </div>
        </div>
        
        {/* Right Image Column */}
        <div className="abt-right">
          <div className="image-wrapper">
            <img src={about} alt="Water Vision Fountains Showcase" className="about-img" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;