import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Prem Kumar Akula</h3>
            <p className="footer-description">
              MERN Stack Developer passionate about creating amazing web experiences 
              and solving complex problems through innovative solutions.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/prem-kumar-akula-98a01829a" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/premkumar-akula" className="social-link">
                <i className="fab fa-github"></i>
              </a>

            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">App Development</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Data Analyst</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-info">
              <p>📧 akula.premkumar2611@gmail.com</p>
              <p>📱 +91 9701482437</p>
              <p>📍 Hyderabad, India</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Prem Kumar Akula. All rights reserved.</p>
          <p>Built with ❤️ using React.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;