import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="header-text">
            <p>MERN STACK Developer</p>
            <h1>Hi, I'm <span>Prem Kumar Akula </span><br />From Hyderabad</h1>
            <div className="cta-buttons">
              <a href="#contact" className="btn primary">Hire Me</a>
              <a href="/portfolio" className="btn secondary">View My Work</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="./images/background.png" alt="Background" className="bgimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;