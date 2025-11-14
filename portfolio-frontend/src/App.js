import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import backgroundImage from './assets/images/background.png'; // ✅ Import image

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomeSection />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// Home Section Component
const HomeSection = () => {
  return (
    <section id="home" className="section home-section">
      <div className="container">
        <div className="header-content">
          <div className="header-text">
            <div className="badge">
              <span>🚀 Available Full Stack Developer</span>
            </div>
            <p className="subtitle">FULL STACK DEVELOPER (PYTHON,MERN)</p>
            <h1 className="main-title">
              Hi, I'm <span className="highlight">Prem Kumar Akula</span>
            </h1>
            <p className="location">From Hyderabad, India</p>
            <p className="description">
              I craft digital experiences that are fast, beautiful, and user-friendly. 
              Specializing in modern web technologies to bring your ideas to life.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
                Hire Me
              </a>
              <a href="/resume.pdf" className="btn btn-secondary" download>
                <i className="fas fa-download"></i>
                Download CV
              </a>
            </div>
            
           
          </div>
          <div className="header-image">
            <div className="image-container">
              <img 
                src={backgroundImage} // ✅ Use imported image
                className="profile-image" 
                alt="Prem Kumar Akula" 
              />
              <div className="floating-elements">
                <div className="floating-element element-1">⚡</div>
                <div className="floating-element element-2">🚀</div>
                <div className="floating-element element-3">💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;