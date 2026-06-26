import React from 'react';
import './Technology.css';

// Import local placeholder images for the manufacturing assets
import pcbImg from '../../assets/controller-pcb.jpg';
import panelImg from '../../assets/control-panel.jpg';
import softwareImg from '../../assets/software-screen.jpg';
import ledImg from '../../assets/led-manufacturing.jpg';

const Technology = () => {
  const techItems = [
    {
      category: "Software",
      title: "Musical Fountain Software",
      desc: "Our proprietary choreography suite allows precise, frame-by-frame synchronization of multi-layered water jets to complex musical beats.",
      image: softwareImg,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
        </svg>
      )
    },
    {
      category: "Controllers",
      title: "Wi-Fi Enabled Controllers",
      desc: "In-house engineered automation hardware running custom firmware for seamless mobile app connection, show scheduling, and remote diagnostics.",
      image: pcbImg,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0115 0m-15 0a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z" />
        </svg>
      )
    },
    {
      category: "Panels",
      title: "Electrical Control Panels",
      desc: "Heavy-duty, weather-protected control panels assembled raw in our workshop, housing variable frequency drives (VFD) and secure logic setups.",
      image: panelImg,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      category: "Lighting",
      title: "RGB/RGBW LED Lights",
      desc: "Custom-manufactured high-lumen structural underwater light fixtures utilizing superior thermal engineering for vibrant nocturnal displays.",
      image: ledImg,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="tech-section" id="technology">
      <div className="tech-container">
        
        {/* Header Block Section */}
        <div className="tech-header">
          <span className="tech-badge">In-House Manufacturing</span>
          <h2 className="tech-main-heading">In-House Technology Development</h2>
          <p className="tech-lead-text">
            Unlike traditional assemblers, we construct our own hardware, electrical backbones, 
            and core software infrastructure. This complete vertical integration guarantees absolute 
            reliability and separates us from standard competitors.
          </p>
        </div>

        {/* Dynamic 4-Column Core Grid */}
        <div className="tech-grid">
          {techItems.map((item, index) => (
            <div className="tech-card" key={index}>
              
              {/* Media Asset Window */}
              <div className="tech-img-box">
                <img src={item.image} alt={item.title} className="tech-src-image" />
                <span className="tech-tag">{item.category}</span>
              </div>

              {/* Text Description Block */}
              <div className="tech-info-block">
                <div className="tech-title-row">
                  <div className="tech-icon-wrapper">{item.icon}</div>
                  <h3 className="tech-item-title">{item.title}</h3>
                </div>
                <p className="tech-item-desc">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technology;