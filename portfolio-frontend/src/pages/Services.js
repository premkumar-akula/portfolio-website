import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Creating responsive and modern websites using the latest technologies including React, HTML5, CSS3, and JavaScript. Focus on performance, accessibility, and user experience.',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'SEO Friendly'],
      delay: '0.1s'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'App Development',
      description: 'Designing and developing mobile-friendly applications with focus on user experience and performance. Cross-platform solutions for wider reach and better engagement.',
      features: ['Cross-Platform', 'User-Centric Design', 'Scalable Architecture', 'Fast Performance'],
      delay: '0.2s'
    },
    {
      icon: 'fas fa-palette',
      title: 'UI/UX Design',
      description: 'Creating intuitive user interfaces and experiences that are both beautiful and functional. User research, prototyping, and iterative design process.',
      features: ['User Research', 'Interactive Prototypes', 'Design Systems', 'User Testing'],
      delay: '0.3s'
    }
  ];

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">I provide comprehensive solutions to bring your digital ideas to life</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: service.delay }}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className="btn btn-outline"
                onClick={scrollToContact}
              >
                Get Started
                <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;