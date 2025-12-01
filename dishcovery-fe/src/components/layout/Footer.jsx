// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <footer className="footer">
      {/* Left: Social icons */}
      <div className="footer-left">
        {/* replace with actual SVGs / icons later */}
        <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
          ✖
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          ◯
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
          ▶
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          in
        </a>
      </div>

      {/* Right: Footer nav */}
      <div className="footer-right">
        <Link to="/about" className="footer-link" style={{ textDecoration: "none" }}>About us</Link>
        <Link to="/contact" className="footer-link" style={{ textDecoration: "none" }}>Contact</Link>
        <Link to="/faq" className="footer-link" style={{ textDecoration: "none" }}>Help</Link>
      </div>
    </footer>
  );
};
