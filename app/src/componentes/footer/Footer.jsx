import React from "react";
import "./Footer.css"; // Asegúrate de crear un archivo CSS para estilos personalizados
import iconoInstagram from "./iconoInstagram.png";
import iconoFace from "./iconoFacebook.png";
import iconoX from "./iconoX.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-media">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconoInstagram} alt="iconoInstagram" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconoFace} alt="iconoFace" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconoX} alt="iconoX" />
          </a>
        </div>
        <div className="contact-info">
          <p>Contacto: contacto@comicstory.com</p>
          <p>Dirección: Calle Falsa 123, Ciudad, País</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
