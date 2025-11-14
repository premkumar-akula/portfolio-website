import React, { useState } from 'react';
import './Portfolio.css';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'Coffee Stories',
      category: 'web',
      image: project1,
      description: 'Developed a dynamic platform for exploring and sharing coffee recipes and stories, featuring recipe browsing, category-based filtering, user-generated content, and full CRUD functionality—all wrapped in a responsive, user-friendly interface.',
      technologies: ['HTML','CSS','Boostrap', 'JavaScript', 'Node.js', 'MongoDB', 'Express', ],
      link: 'https://github.com/premkumar-akula/Coffee-Stories',
      github: 'https://github.com/premkumar-akula/Coffee-Stories',
      featured: true
    },
    {
      id: 2,
      title: 'Library Management System',
      category: 'web',
      image: project2,
      description: 'A user-friendly Library Management System featuring user/admin authentication, book management, category filtering, borrowed-book tracking, and an integrated support-ticket system. Includes complete CRUD operations for admins and a clean, responsive interface for users to browse available books.',
      technologies: ['HTML','CSS','Boostrap', 'JavaScript', 'Python',"Flask"],
      link: 'https://library-management-system-fxus.onrender.com/',
      github: 'https://github.com/premkumar-akula/library_management_system',
      featured: true
    },
    {
      id: 3,
      title: 'Simon Says Game',
      category: 'web',
      image: project3,
      description: 'A fun and interactive memory game built with HTML, CSS, and JavaScript. Players watch a sequence of flashing colors and repeat it in the correct order as the pattern grows longer each round. Features smooth animations, responsive design, and engaging gameplay — perfect for testing your memory skills!',
      technologies: ['HTML', 'CSS3','Boostarp', 'JavaScript', ],
      link: 'https://github.com/premkumar-akula/Simon-Game',
      github: 'https://github.com/premkumar-akula/Simon-Game',
      featured: true
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        <p className="section-subtitle">A collection of my recent projects and creative work</p>
        
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <i className="fas fa-th-large" style={{ marginRight: '8px' }}></i>
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            <i className="fas fa-desktop" style={{ marginRight: '8px' }}></i>
            Web Applications
          </button>
          <button 
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            <i className="fas fa-mobile-alt" style={{ marginRight: '8px' }}></i>
            Mobile Apps
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="portfolio-item"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {project.featured && (
                <div className="featured-badge">
                  <i className="fas fa-star"></i>
                  Featured
                </div>
              )}
              
              <div className="portfolio-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/2c3e50/ffffff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-links">
                    <a 
                      href={project.link} 
                      className="portfolio-link" 
                      title="Live Demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a 
                      href={project.github} 
                      className="portfolio-link" 
                      title="Source Code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                
                <div className="portfolio-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <i className="fas fa-folder-open" style={{ fontSize: '3rem', marginBottom: '20px', color: '#ffd700' }}></i>
            <h3>No projects found</h3>
            <p>No projects match the selected filter. Try another category!</p>
          </div>
        )}
        
        <div className="portfolio-cta">
          <p>Ready to bring your next project to life?</p>
          <a 
            href="#contact" 
            className="btn btn-primary"
            onClick={scrollToContact}
          >
            <i className="fas fa-rocket" style={{ marginRight: '8px' }}></i>
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;