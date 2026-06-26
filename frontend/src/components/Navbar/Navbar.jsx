import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/logo.jpeg';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Brand Section */}
        <div className="logo-box">
          <img src={logo} alt="Water Vision Fountains Logo" className="logo-img" />
          <h2 className="brand-name">
            WATER VISION <br />
            <span className="brand-subtext">FOUNTAINS</span>
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home" className="nav-link active">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About Us</a></li>
            <li className="nav-item"><a href="#services" className="nav-link">Products & Services</a></li>
            <li className="nav-item"><a href="#technology" className="nav-link">Technology</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#gallery" className="nav-link">Gallery</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;