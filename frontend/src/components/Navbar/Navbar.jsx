import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-box">
          <div className="logo-img-wrapper">
            <img src={logo} alt="Water Vision Logo" className="logo-img" />
          </div>
          <div>
            <h2 className="brand-name">Water Vision</h2>
            <span className="brand-subtext">Fountains</span>
          </div>
        </div>

        <div className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link active" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#technology" className="nav-link" onClick={() => setMenuOpen(false)}>Technology</a></li>
            <li><a href="#gallery" className="nav-link" onClick={() => setMenuOpen(false)}>Gallery</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>

        <a href="#contact" className="nav-cta">Get a Quote</a>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(p => !p)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
