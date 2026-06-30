import React from 'react';
import './WhyChooseUs.css';

const highlights = [
  {
    title: "In-House Software",
    desc: "Proprietary software tailored for custom musical and multimedia fountain choreography.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
  },
  {
    title: "Wi-Fi Smart Controllers",
    desc: "Next-gen wireless automation modules built for remote diagnostics and scheduling.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.5 18a.5.5 0 11-1 0 .5.5 0 011 0z" /></svg>
  },
  {
    title: "RGB/RGBW LED Manufacturing",
    desc: "Industrial-grade, high-lumen waterproof LED lighting engineered for underwater setups.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
  },
  {
    title: "Own Control Panels",
    desc: "Heavy-duty smart electrical control panels built entirely within our facilities.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6zM9.75 9.75h4.5m-4.5 4.5h4.5" /></svg>
  },
  {
    title: "Corrosion-Free Materials",
    desc: "SS304 & SS316 grade stainless steel for long-term underwater performance.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
  },
  {
    title: "Turnkey Execution",
    desc: "Complete conceptual layout, engineering, manufacturing, plumbing, and commissioning.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.83-5.83m-3.75 3.75a2.67 2.67 0 01-3.75-3.75L15 3l4.5 4.5M6.75 12A3.75 3.75 0 113 8.25a3.75 3.75 0 013.75 3.75z" /></svg>
  },
  {
    title: "Government Experience",
    desc: "Proven track record delivering prominent public parks and tourism landmark systems.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5h-15V21m4.5-12V7.5a1.5 1.5 0 013 0V9m3 0V7.5a1.5 1.5 0 013 0V9" /></svg>
  },
  {
    title: "Technical Support",
    desc: "Dedicated post-handover engineering team and robust annual maintenance contracts.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  },
];

const WhyChooseUs = () => (
  <section className="why-section" id="why-choose-us">
    <div className="why-container">

      <div className="why-header">
        <span className="why-subtitle">Engineering Excellence</span>
        <h2 className="why-title">Why Choose Water Vision Fountains</h2>
        <p className="why-desc-text">
          We merge water, light, music, and proprietary automation to build India's most
          reliable and visually stunning structural fountain installations.
        </p>
      </div>

      <div className="why-grid">
        {highlights.map((item, i) => (
          <div className="why-card" key={i} style={{ animationDelay: `${i * 0.07}s` }}>
            <div className="why-icon-box">{item.icon}</div>
            <h3 className="why-card-title">{item.title}</h3>
            <p className="why-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default WhyChooseUs;
