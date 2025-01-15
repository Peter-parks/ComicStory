import React from 'react';
import './Footer.css'; // Asegúrate de crear un archivo CSS para estilos personalizados

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-media">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">X</a>
            </div>
            <div className="contact-info">
                <p>Contacto: contacto@comicstory.com</p>
                <p>Dirección: Calle Falsa 123, Ciudad, País</p>
                <p>Teléfono: +123 456 7890</p>
            </div>
        </footer>
    );
};

export default Footer;