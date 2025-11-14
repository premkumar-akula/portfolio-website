import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabContents = {
    skills: (
      <div className="tab-box-content">
        <div className="skills-grid">
          <div className="skill-category">
            <h4>🚀 Full-Stack Development</h4>
            <div className="skills-list">
              <span className="skill-tag">MERN Stack</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">Tailwind</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">Fast API</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">Git/GitHub</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>📊 Data Analyst</h4>
            <div className="skills-list">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">Matplotlib</span>
              <span className="skill-tag">Seaborn</span>
              <span className="skill-tag">Power BI</span>
              <span className="skill-tag">Excel</span>
              <span className="skill-tag">Data Analysis</span>
              <span className="skill-tag">Data Visualization</span>
            </div>
          </div>
        </div>
      </div>
    ),
    experience: (
      <div className="tab-box-content">
        <div className="experience-timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>2025 - Present</h4>
              <p className="company">Quality Thought</p>
              <p className="role">Trainee - Full Stack Development</p>
              <ul>
                <li>Developing web applications using MERN stack</li>
                <li>Learning industry best practices</li>
                <li>Building responsive user interfaces</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>2023 - 2025</h4>
              <p className="company">My Projects</p>
              <p className="role">Full-Stack Developer</p>
              <ul>
                <li>Built responsive web applications</li>
                <li>Implemented RESTful APIs</li>
                <li>Deployed applications on cloud platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    education: (
      <div className="tab-box-content">
        <div className="education-cards">
          <div className="edu-card">
            <div className="edu-icon">🎓</div>
            <div className="edu-details">
              <h4>MCA - Master of Computer Applications</h4>
              <p className="institute">Aurora Post Graduate College</p>
              <p className="duration">2023-2025</p>
              <p className="grade">CGPA: 7.82/10.0</p>
            </div>
          </div>
          <div className="edu-card">
            <div className="edu-icon">📚</div>
            <div className="edu-details">
              <h4>BSc (MSCS)</h4>
              <p className="institute">Masters Degree & PG College</p>
              <p className="duration">2020-2023</p>
              <p className="grade">CGPA: 8.95/10.0</p>
            </div>
          </div>
          <div className="edu-card">
            <div className="edu-icon">🏫</div>
            <div className="edu-details">
              <h4>Intermediate (MPC)</h4>
              <p className="institute">Siddhartha Adarsha Junior College</p>
              <p className="duration">2018-2020</p>
              <p className="grade">CGPA: 8.82/10.0</p>
            </div>
          </div>
          <div className="edu-card">
            <div className="edu-icon">📖</div>
            <div className="edu-details">
              <h4>School Education</h4>
              <p className="institute">ZPHS School</p>
              <p className="duration">2017-2018</p>
              <p className="grade">CGPA: 9.5/10.0</p>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div id="about">
      <div className="container">
        <div className="about-header">
          <h1 className="main-title">About Me</h1>
          <p className="subtitle">Passionate Developer & Lifelong Learner</p>
        </div>
        
        <div className="about-content">
          {/* Left Column - Quotes Section */}
          <div className="about-left">
            <div className="quotes-section">
              <div className="quote-card">
                <div className="quote-icon">🎯</div>
                <h3>My Mission</h3>
                <p>"To craft thoughtful, efficient, and user-focused digital solutions that inspire connection, solve real problems, and make technology accessible."</p>
              </div>
              
              <div className="quote-card">
                <div className="quote-icon">💡</div>
                <h3>Guiding Quote</h3>
                <p>"Designing for clarity, coding for performance, learning for life."</p>
              </div>
              
              <div className="quote-card">
                <div className="quote-icon">🌟</div>
                <h3>My Philosophy</h3>
                <p>"Every line of code is an opportunity to create something meaningful and make a positive impact."</p>
              </div>
            </div>
          </div>

          {/* Right Column - About Content & Tabs */}
          <div className="about-right">
            <div className="intro-section">
              <div className="intro-text">
                <p>
                  Hi, I'm <strong>Prem Kumar</strong>, a passionate and detail-oriented Full Stack Developer and Data Analyst, with a completed Master of Computer Applications (MCA) degree and a strong drive for continuous learning in the tech space.
                </p>
                <p>
                  I specialize in Full Stack Development using Python 🐍 and the MERN ⚛️ stack, and have built several hands-on projects that span the entire development lifecycle—from intuitive frontends to robust backend systems and integrated databases.
                </p>
                <p>
                  In addition to development, I'm also deeply interested in Data Science and Analytics. I've completed training in Python for data analysis, Power BI 📈, and machine learning fundamentals, and I enjoy working with data to uncover insights and support smarter decision-making.
                </p>
              </div>
              
              <div className="goals-section">
                <h3>🎯 Current Goals</h3>
                <div className="goals-grid">
                  <div className="goal-item">
                    <span className="goal-icon">💻</span>
                    <span>Build real-world projects in both web development and data analytics</span>
                  </div>
                  <div className="goal-item">
                    <span className="goal-icon">🚀</span>
                    <span>Secure a role in software development or data analyst</span>
                  </div>
                  <div className="goal-item">
                    <span className="goal-icon">📈</span>
                    <span>Stay updated with the latest tech trends through continuous practice</span>
                  </div>
                  <div className="goal-item">
                    <span className="goal-icon">🌐</span>
                    <span>Collaborate with professionals and contribute to tech communities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabbed Sections */}
            <div className="tabs-container">
              <div className="tab-buttons">
                <button 
                  className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                  onClick={() => setActiveTab('skills')}
                >
                  <span className="tab-icon">🛠️</span>
                  Skills
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                  onClick={() => setActiveTab('experience')}
                >
                  <span className="tab-icon">💼</span>
                  Experience
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                  onClick={() => setActiveTab('education')}
                >
                  <span className="tab-icon">🎓</span>
                  Education
                </button>
              </div>
              
              <div className="tab-content-box">
                {tabContents[activeTab]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;