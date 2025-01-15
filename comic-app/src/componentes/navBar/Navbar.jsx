import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo1.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="logo" className="navbar-logo" />
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={toggleMenu}>
              INICIO
            </a>
          </li>
          <li>
            <a href="#matches" onClick={toggleMenu}>
              COMICS
            </a>
          </li>
          <li>
            <a href="#teams" onClick={toggleMenu}>
              PERSONAJES
            </a>
          </li>
          
          <li>
            <a href="#contact" onClick={toggleMenu}>
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
