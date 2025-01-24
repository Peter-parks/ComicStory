import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo3.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="https://icons8.com" className="navbar-logo" />
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/inicio" onClick={toggleMenu}>
              INICIO
            </Link>
          </li>
          <li>
            <Link to="/comics" onClick={toggleMenu}>
              COMICS
            </Link>
          </li>
          <li>
            <Link to="/personajes" onClick={toggleMenu}>
              PERSONAJES
            </Link>
          </li>

          <li>
            <Link to="/contacto" onClick={toggleMenu}>
              CONTACTO
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

