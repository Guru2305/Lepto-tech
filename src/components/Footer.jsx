import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Get Ready to<br />Grow Your Business</h2>
          <div className="footer-buttons">
            <a href="mailto:info@leptotech.com" className="footer-btn">
              info@leptotech.com
            </a>
            <a href="tel:+919384583647" className="footer-btn">
              +91 9384583647
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Website Development</Link></li>
              <li><Link to="/services">App Development</Link></li>
              <li><Link to="/services">Website Maintenance</Link></li>
              <li><Link to="/services">Graphic Design</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p><b>© 2025 Lepto Tech Developers. All Rights Reserved.</b></p>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
}
